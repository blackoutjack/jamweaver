
package edu.wisc.cs.jam;

import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.lang3.StringUtils;

public class Clause {
	private static Pattern varToken;
	private static Pattern symbolToken;
	private static Pattern heapToken;
	private static Pattern scopeToken;
	private static Pattern resultToken;
	private static Pattern sentinelToken;

	public static final String PREFIX = "env_init(H0,L0),set_policy_idx";

	private int varID;
	private int symbolID;
	private int heapID;
	private int scopeID;
	private int resultID;
	private int sentinelID;

	private boolean symbolic;

	// Initialize static properties.
	static {
		varToken = Pattern.compile("%V\\d+");
		symbolToken = Pattern.compile("%gV\\d+");
		heapToken = Pattern.compile("%[HP]");
		scopeToken = Pattern.compile("%[LQ]");
		resultToken = Pattern.compile("%[RS]");
		sentinelToken = Pattern.compile("%T");
	}
		
	// The original text with format tokens.
	private String text;
  // The XSBInterface index number of this clause.
	private int id = -1;
	// A description to output during debugging.
  private String description;

	// The XSB-ready text with tokens replaced by actual values.
	// Call prepare() to generate this.
	private String query;
	private boolean concrete;
  private int policyPathIndex = -1;
	
	public Clause(String text) {
		this.text = text;
		concrete = false;
	}

	public Clause(List<Clause> clauses, boolean and) {
		this("");
		for (Clause c : clauses) {
			String nextText = c.getText();
			boolean hasOr = nextText.indexOf(";") > -1;

			// Encapsulate the previously accumulated text.
			if (!text.equals("")) {
				text = hasOr ? "(" + text + ")" : text;
				text += and ? "," : ";";
			}

			text += hasOr ? "(" + nextText + ")" : nextText;
		}
		concrete = false;
	}

	public Clause(List<Clause> clauses) {
		this(clauses, true);
		concrete = false;
	}

	public Clause(String[] text) {
		this("");
		for (String s : text) {
			if (!this.text.equals("")) {
				this.text += ",";
			}
			this.text += s;
		}
		concrete = false;
	}

  public void setPolicyPathIndex(int idx) {
    policyPathIndex = idx;
  }

  public void setQueryId(int val) {
    id = val;
  }

	public void setDescription(String val) {
		description = val;
	}

	public int getQueryId() {
    return id;
  }

  public String getDescription() {
    return description;
	}

	public void setConcrete(boolean val) {
		concrete = val;
	}

	public boolean isConcrete() {
		return concrete;
	}

	protected String substituteHeap(String text) {
		Matcher matcher = heapToken.matcher(text);
		while (matcher.find()) {
			String match = matcher.group();

			if (match.equals("%P")) heapID++;
			String tokenValue = "H" + heapID;

			text = matcher.replaceFirst(tokenValue);
			matcher.reset(text);
		}
		return text;
	}

	protected String substituteSentinel(String text) {
		Matcher matcher = sentinelToken.matcher(text);
		while (matcher.find()) {
			String match = matcher.group();

			String tokenValue = "" + sentinelID;
		  sentinelID++;

			text = matcher.replaceFirst(tokenValue);
			matcher.reset(text);
		}
		return text;
	}

	protected String substituteResult(String text) {
		Matcher matcher = resultToken.matcher(text);
		while (matcher.find()) {
			String match = matcher.group();

			if (match.equals("%R")) resultID++;
			String tokenValue = "R" + resultID;

			text = matcher.replaceFirst(tokenValue);
			matcher.reset(text);
		}
		return text;
	}

	protected String substituteScope(String text) {
		Matcher matcher = scopeToken.matcher(text);
		while (matcher.find()) {
			String match = matcher.group();

			if (match.equals("%Q")) scopeID++;
			String tokenValue = "L" + scopeID;

			text = matcher.replaceFirst(tokenValue);
			matcher.reset(text);
		}
		return text;
	}

	protected String substituteVar(String text) {
		Matcher matcher = varToken.matcher(text);
		while (matcher.find()) {
			String match = matcher.group();

			String tokenValue = "V" + varID;
			varID++;

      // Using StringUtils avoids clinging to substring references from
      // previous iterations, which causes a memory leak when using
      // Matcher.replaceFirst.
      text = StringUtils.replace(text, match, tokenValue);
      matcher = varToken.matcher(text);
		}

		return text;
	}

	protected String substituteSymbol(String text) {
		Matcher matcher = symbolToken.matcher(text);
		while (matcher.find()) {
			String match = matcher.group();

			String tokenValue = "v" + symbolID;
			symbolID++;

      // See comment in substituteVar.
      text = StringUtils.replace(text, match, tokenValue);
      matcher = symbolToken.matcher(text);
		}
		return text;
	}

	public void prepare() {
		varID = 0;
		symbolID = 0;
		heapID = 0;
		scopeID = 0;
		resultID = 0;
		sentinelID = 0;
		String tmp = substituteVar(text);
		tmp = substituteSymbol(tmp);
		tmp = substituteHeap(tmp);
		tmp = substituteScope(tmp);
		tmp = substituteResult(tmp);
		tmp = substituteSentinel(tmp);

		query = PREFIX + "(" + policyPathIndex + ")," + tmp;
	}

	// Return the prepared query text without loads.
	public String getQuery() {
		if (query == null) prepare();
		return query;
	}

	public String getText() {
		return text;
	}

  @Override
	public String toString() {
		return getText();
	}

  @Override
  public boolean equals(Object o) {
    if (o == null) return false;
    if (!(o instanceof Clause)) return false;
    Clause c = (Clause)o;
    // May be more efficient (but potentially inaccurate) to compare
    // text rather than query.
    return getText().equals(c.getText());
  }

  @Override
  public int hashCode() {
    return getText().hashCode();
  }
}
