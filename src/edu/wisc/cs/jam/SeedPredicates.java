package edu.wisc.cs.jam;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.Arrays;

import java.io.IOException;

// The collections of predicates fed to the analysis via a seed file.
// The predicates can be globally applicable or just aimed towards a
// particular policy path.
public class SeedPredicates {

  // The file in which the predicates are defined.
  private String seedFilePath;

  private List<List<Predicate>> globalSeedPredicates;
  private Map<Policy.Edge,List<List<Predicate>>> policySeedPredicates;

  // This should be called once, after the policies files have been
  // loaded.
  public SeedPredicates(String filePath, JAM jam) {
    seedFilePath = filePath;

    globalSeedPredicates = new ArrayList<List<Predicate>>();
    policySeedPredicates = new HashMap<Policy.Edge,List<List<Predicate>>>();

    init(jam.getPolicy(), jam.getSemantics(), jam.getSourceManager());
  }

  protected void init(Policy p, Semantics sem, SourceManager sm) {
    if (seedFilePath == null) return;

    List<String> lines = null;
    try {
      lines = FileUtil.getLinesFromFile(seedFilePath);
    } catch (IOException ex) {
      System.err.println("Unable to read predicate seed file at " + JAM.Opts.seedFile + ": " + ex.getMessage());
      return;
    }
      
    List<Policy.Edge> seedPolicyEdges = null;
    boolean reset = true;
    for (String line : lines) {
      line = line.trim();
      if (FileUtil.isComment(line)) continue;

      // If the line has the form of a policy edge specification,
      // collect the edge in an association group. If this is the second
      // or more of consecutive edge specs, then the edge will be added
      // to the current group; otherwise a new group will be created.
      try {
        // This will throw an exception if the line is not in the
        // correct format for an edge specification.
        Policy.Edge pe = p.parseEdge(line); 

        if (reset) {
          seedPolicyEdges = new ArrayList<Policy.Edge>();
          reset = false;
        }

        seedPolicyEdges.add(pe);

        List<List<Predicate>> preds = policySeedPredicates.get(pe);
        if (preds == null) {
          preds = new ArrayList<List<Predicate>>();
          policySeedPredicates.put(pe, preds);
        }
      } catch (IllegalArgumentException ex) {

        // Note that the next edge specification will be the first one
        // in a new group. Until then, all predicates will be added to
        // the current group.
        reset = true;

        // Create the collection to store the predicate(s) and add it
        // to the appropriate place.
        List<Predicate> cube = new ArrayList<Predicate>();
        if (seedPolicyEdges == null) {
          // Globally-applicable predicates are placed at the top of the
          // seed file, before any edge specifications.
          globalSeedPredicates.add(cube);
        } else {
          for (Policy.Edge pe : seedPolicyEdges) {
            policySeedPredicates.get(pe).add(cube);
          }
        }

        // Add each predicate on this ;-delimited line to the set.
        List<String> predstrs = Arrays.asList(line.split(";"));
        for (String predstr : predstrs) {
          Predicate pred = sem.getConditionPredicate(predstr);
          sem.addToNamesOfInterest(pred);
          cube.add(pred);
        }
      }
    }
  }

  // Return the individual cubes for this policy path as specified in
  // the seed file.
  public List<List<Predicate>> getSeedPredicateCubes(PolicyPath pp) {
    List<List<Predicate>> ret = new ArrayList<List<Predicate>>();

    // Load all global seed predicate cubes.
    for (List<Predicate> globalCube : globalSeedPredicates) {
      // Copy the cube to prevent external mutations.
      ret.add(new ArrayList<Predicate>(globalCube));
    }

    // Don't add the same cube twice.
    List<List<Predicate>> seen = new ArrayList<List<Predicate>>();
    
    // Get the predicate cubes that are specific to this policy path.
    for (Policy.Edge pe : pp.getPolicyEdges()) {
      List<List<Predicate>> polSeeds = policySeedPredicates.get(pe);
      if (polSeeds != null) {
        for (List<Predicate> polCube : polSeeds) {
          // Note that we've added this cube already.
          if (seen.contains(polCube)) continue;
          seen.add(polCube);

          // Copy the cube to prevent external mutations.
          ret.add(new ArrayList<Predicate>(polCube));
        }
      }
    }
    
    return ret;
  }

  // Returns the predicates applicable to the given policy path as one
  // big cube.
  public List<Predicate> getSeedPredicates(PolicyPath pp) {
    List<Predicate> ret = new ArrayList<Predicate>();

    // Load all global seed predicates.
    for (List<Predicate> globalCube : globalSeedPredicates) {
      ret.addAll(globalCube);
    }
    // Get the predicates specifically seeded for this policy path.
    for (Policy.Edge pe : pp.getPolicyEdges()) {
      List<List<Predicate>> polSeeds = policySeedPredicates.get(pe);
      if (polSeeds != null) {
        for (List<Predicate> polCube : polSeeds) {
          ret.addAll(polCube);
        }
      }
    }

    return ret;
  }
  
  public boolean hasSeedsForPath(PolicyPath pp) {
    for (List<Predicate> globalCube : globalSeedPredicates) {
      if (globalCube.size() > 0) return true;
    }
    for (Policy.Edge pe : pp.getPolicyEdges()) {
      List<List<Predicate>> polSeeds = policySeedPredicates.get(pe);
      if (polSeeds != null) {
        for (List<Predicate> polCube : polSeeds) {
          if (polCube.size() > 0) return true;
        }
      }
    }
    return false;
  }
}
