function v0(image$$2, points) {
  var width$$12 = qrcode.width;
  var height$$11 = qrcode.height;
  var nudged = true;
  var offset$$14 = 0;
  var v442 = points.Length;
  var v318 = offset$$14 < v442;
  if(v318) {
    v318 = nudged
  }
  var v155 = v318;
  for(;v155;) {
    var v443 = Math.floor;
    v443 = v443.bind(Math);
    var v444 = points[offset$$14];
    var x$$51 = v443(v444);
    var v445 = Math.floor;
    v445 = v445.bind(Math);
    var v446 = offset$$14 + 1;
    var v447 = points[v446];
    var y$$34 = v445(v447);
    var v381 = x$$51 < -1;
    if(!v381) {
      var v433 = x$$51 > width$$12;
      if(!v433) {
        var v439 = y$$34 < -1;
        if(!v439) {
          v439 = y$$34 > height$$11
        }
        v433 = v439
      }
      v381 = v433
    }
    if(v381) {
      throw"Error.checkAndNudgePoints ";
    }
    nudged = false;
    var v448 = x$$51 == -1;
    if(v448) {
      points[offset$$14] = 0;
      nudged = true
    }else {
      var v449 = x$$51 == width$$12;
      if(v449) {
        var v450 = width$$12 - 1;
        points[offset$$14] = v450;
        nudged = true
      }
    }
    var v451 = y$$34 == -1;
    if(v451) {
      var v452 = offset$$14 + 1;
      points[v452] = 0;
      nudged = true
    }else {
      var v453 = y$$34 == height$$11;
      if(v453) {
        var v454 = offset$$14 + 1;
        var v455 = height$$11 - 1;
        points[v454] = v455;
        nudged = true
      }
    }
    offset$$14 += 2;
    var v456 = points.Length;
    var v319 = offset$$14 < v456;
    if(v319) {
      v319 = nudged
    }
    v155 = v319
  }
  nudged = true;
  var v457 = points.Length;
  offset$$14 = v457 - 2;
  var v320 = offset$$14 >= 0;
  if(v320) {
    v320 = nudged
  }
  var v156 = v320;
  for(;v156;) {
    var v458 = Math.floor;
    v458 = v458.bind(Math);
    var v459 = points[offset$$14];
    x$$51 = v458(v459);
    var v460 = Math.floor;
    v460 = v460.bind(Math);
    var v461 = offset$$14 + 1;
    var v462 = points[v461];
    y$$34 = v460(v462);
    var v382 = x$$51 < -1;
    if(!v382) {
      var v434 = x$$51 > width$$12;
      if(!v434) {
        var v440 = y$$34 < -1;
        if(!v440) {
          v440 = y$$34 > height$$11
        }
        v434 = v440
      }
      v382 = v434
    }
    if(v382) {
      throw"Error.checkAndNudgePoints ";
    }
    nudged = false;
    var v463 = x$$51 == -1;
    if(v463) {
      points[offset$$14] = 0;
      nudged = true
    }else {
      var v464 = x$$51 == width$$12;
      if(v464) {
        var v465 = width$$12 - 1;
        points[offset$$14] = v465;
        nudged = true
      }
    }
    var v466 = y$$34 == -1;
    if(v466) {
      var v467 = offset$$14 + 1;
      points[v467] = 0;
      nudged = true
    }else {
      var v468 = y$$34 == height$$11;
      if(v468) {
        var v469 = offset$$14 + 1;
        var v470 = height$$11 - 1;
        points[v469] = v470;
        nudged = true
      }
    }
    offset$$14 -= 2;
    var v321 = offset$$14 >= 0;
    if(v321) {
      v321 = nudged
    }
    v156 = v321
  }
}
function v1(image$$3, dimension, transform) {
  var bits = new BitMatrix(dimension);
  var v471 = dimension << 1;
  var points$$1 = new Array(v471);
  var y$$35 = 0;
  var v159 = y$$35 < dimension;
  for(;v159;) {
    var max = points$$1.length;
    var iValue = y$$35 + 0.5;
    var x$$52 = 0;
    var v157 = x$$52 < max;
    for(;v157;) {
      var v472 = x$$52 >> 1;
      var v473 = v472 + 0.5;
      points$$1[x$$52] = v473;
      var v474 = x$$52 + 1;
      points$$1[v474] = iValue;
      x$$52 += 2;
      v157 = x$$52 < max
    }
    var v475 = transform.transformPoints1;
    v475 = v475.bind(transform);
    v475(points$$1);
    var v476 = GridSampler.checkAndNudgePoints;
    v476 = v476.bind(GridSampler);
    v476(image$$3, points$$1);
    x$$52 = 0;
    var v158 = x$$52 < max;
    for(;v158;) {
      var v477 = Math.floor;
      v477 = v477.bind(Math);
      var v478 = points$$1[x$$52];
      var v479 = v477(v478);
      var v480 = v479 * 4;
      var v481 = Math.floor;
      v481 = v481.bind(Math);
      var v482 = x$$52 + 1;
      var v483 = points$$1[v482];
      var v484 = v481(v483);
      var v485 = qrcode.width;
      var v486 = v484 * v485;
      var v487 = v486 * 4;
      var xpoint = v480 + v487;
      var v488 = Math.floor;
      v488 = v488.bind(Math);
      var v489 = points$$1[x$$52];
      var v490 = v488(v489);
      var v491 = qrcode.width;
      var v492 = Math.floor;
      v492 = v492.bind(Math);
      var v493 = x$$52 + 1;
      var v494 = points$$1[v493];
      var v495 = v492(v494);
      var v496 = v491 * v495;
      var v497 = v490 + v496;
      var bit = image$$3[v497];
      var v298;
      if(bit) {
        v298 = 255
      }else {
        v298 = 0
      }
      var v498 = qrcode.imagedata;
      var v499 = v498.data;
      v499[xpoint] = v298;
      var v299;
      if(bit) {
        v299 = 255
      }else {
        v299 = 0
      }
      var v500 = qrcode.imagedata;
      var v501 = v500.data;
      var v502 = xpoint + 1;
      v501[v502] = v299;
      var v503 = qrcode.imagedata;
      var v504 = v503.data;
      var v505 = xpoint + 2;
      v504[v505] = 0;
      var v506 = qrcode.imagedata;
      var v507 = v506.data;
      var v508 = xpoint + 3;
      v507[v508] = 255;
      if(bit) {
        var v509 = bits.set_Renamed;
        v509 = v509.bind(bits);
        var v510 = x$$52 >> 1;
        v509(v510, y$$35)
      }
      x$$52 += 2;
      v158 = x$$52 < max
    }
    y$$35++;
    v159 = y$$35 < dimension
  }
  return bits
}
function v2(image$$4, dimension$$1, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
  var v511 = PerspectiveTransform.quadrilateralToQuadrilateral;
  v511 = v511.bind(PerspectiveTransform);
  var transform$$1 = v511(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY);
  var v512 = GridSampler.sampleGrid3;
  v512 = v512.bind(GridSampler);
  var v513 = v512(image$$4, dimension$$1, transform$$1);
  return v513
}
function ECB(count$$6, dataCodewords) {
  function v3() {
    var v514 = this.count;
    return v514
  }
  function v4() {
    var v516 = this.dataCodewords;
    return v516
  }
  this.count = count$$6;
  this.dataCodewords = dataCodewords;
  var v515 = this.__defineGetter__;
  v515 = v515.bind(this);
  v515("Count", v3);
  var v517 = this.__defineGetter__;
  v517 = v517.bind(this);
  v517("DataCodewords", v4)
}
function ECBlocks(ecCodewordsPerBlock, ecBlocks1, ecBlocks2) {
  function v5() {
    var v520 = this.ecCodewordsPerBlock;
    return v520
  }
  function v6() {
    var v522 = this.ecCodewordsPerBlock;
    var v523 = this.NumBlocks;
    var v524 = v522 * v523;
    return v524
  }
  function v7() {
    var total = 0;
    var i$$1 = 0;
    var v526 = this.ecBlocks;
    var v527 = v526.length;
    var v160 = i$$1 < v527;
    for(;v160;) {
      var v528 = this.ecBlocks;
      var v529 = v528[i$$1];
      var v530 = v529.length;
      total += v530;
      i$$1++;
      var v531 = this.ecBlocks;
      var v532 = v531.length;
      v160 = i$$1 < v532
    }
    return total
  }
  function v8() {
    var v534 = this.ecBlocks;
    return v534
  }
  this.ecCodewordsPerBlock = ecCodewordsPerBlock;
  if(ecBlocks2) {
    var v518 = new Array(ecBlocks1, ecBlocks2);
    this.ecBlocks = v518
  }else {
    var v519 = new Array(ecBlocks1);
    this.ecBlocks = v519
  }
  var v521 = this.__defineGetter__;
  v521 = v521.bind(this);
  v521("ECCodewordsPerBlock", v5);
  var v525 = this.__defineGetter__;
  v525 = v525.bind(this);
  v525("TotalECCodewords", v6);
  var v533 = this.__defineGetter__;
  v533 = v533.bind(this);
  v533("NumBlocks", v7);
  this.getECBlocks = v8
}
function Version(versionNumber, alignmentPatternCenters, ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4) {
  function v9() {
    var v541 = this.versionNumber;
    return v541
  }
  function v10() {
    var v543 = this.alignmentPatternCenters;
    return v543
  }
  function v11() {
    var v545 = this.totalCodewords;
    return v545
  }
  function v12() {
    var v547 = this.versionNumber;
    var v548 = 4 * v547;
    var v549 = 17 + v548;
    return v549
  }
  function v13() {
    var dimension$$2 = this.DimensionForVersion;
    var bitMatrix = new BitMatrix(dimension$$2);
    var v551 = bitMatrix.setRegion;
    v551 = v551.bind(bitMatrix);
    v551(0, 0, 9, 9);
    var v552 = bitMatrix.setRegion;
    v552 = v552.bind(bitMatrix);
    var v553 = dimension$$2 - 8;
    v552(v553, 0, 8, 9);
    var v554 = bitMatrix.setRegion;
    v554 = v554.bind(bitMatrix);
    var v555 = dimension$$2 - 8;
    v554(0, v555, 9, 8);
    var v556 = this.alignmentPatternCenters;
    var max$$1 = v556.length;
    var x$$53 = 0;
    var v163 = x$$53 < max$$1;
    for(;v163;) {
      var v557 = this.alignmentPatternCenters;
      var v558 = v557[x$$53];
      var i$$3 = v558 - 2;
      var y$$36 = 0;
      var v162 = y$$36 < max$$1;
      for(;v162;) {
        var v405 = x$$53 == 0;
        if(v405) {
          var v435 = y$$36 == 0;
          if(!v435) {
            var v559 = max$$1 - 1;
            v435 = y$$36 == v559
          }
          v405 = v435
        }
        var v383 = v405;
        if(!v383) {
          var v560 = max$$1 - 1;
          var v406 = x$$53 == v560;
          if(v406) {
            v406 = y$$36 == 0
          }
          v383 = v406
        }
        if(v383) {
          y$$36++;
          continue
        }
        var v561 = bitMatrix.setRegion;
        v561 = v561.bind(bitMatrix);
        var v562 = this.alignmentPatternCenters;
        var v563 = v562[y$$36];
        var v564 = v563 - 2;
        v561(v564, i$$3, 5, 5);
        y$$36++;
        v162 = y$$36 < max$$1
      }
      x$$53++;
      v163 = x$$53 < max$$1
    }
    var v565 = bitMatrix.setRegion;
    v565 = v565.bind(bitMatrix);
    var v566 = dimension$$2 - 17;
    v565(6, 9, 1, v566);
    var v567 = bitMatrix.setRegion;
    v567 = v567.bind(bitMatrix);
    var v568 = dimension$$2 - 17;
    v567(9, 6, v568, 1);
    var v569 = this.versionNumber;
    var v570 = v569 > 6;
    if(v570) {
      var v571 = bitMatrix.setRegion;
      v571 = v571.bind(bitMatrix);
      var v572 = dimension$$2 - 11;
      v571(v572, 0, 3, 6);
      var v573 = bitMatrix.setRegion;
      v573 = v573.bind(bitMatrix);
      var v574 = dimension$$2 - 11;
      v573(0, v574, 6, 3)
    }
    return bitMatrix
  }
  function v14(ecLevel) {
    var v575 = this.ecBlocks;
    var v576 = ecLevel.ordinal_Renamed_Field;
    transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
      var v577 = v575[v576]
    }
    return v577
  }
  this.versionNumber = versionNumber;
  this.alignmentPatternCenters = alignmentPatternCenters;
  var v535 = new Array(ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4);
  this.ecBlocks = v535;
  var total$$1 = 0;
  var ecCodewords = ecBlocks1$$1.ECCodewordsPerBlock;
  var ecbArray = ecBlocks1$$1.ecBlocks;
  var i$$2 = 0;
  var v536 = ecbArray.length;
  var v161 = i$$2 < v536;
  for(;v161;) {
    var ecBlock = ecbArray[i$$2];
    var v537 = ecBlock.Count;
    var v538 = ecBlock.DataCodewords;
    var v539 = v538 + ecCodewords;
    total$$1 += v537 * v539;
    i$$2++;
    var v540 = ecbArray.length;
    v161 = i$$2 < v540
  }
  this.totalCodewords = total$$1;
  var v542 = this.__defineGetter__;
  v542 = v542.bind(this);
  v542("VersionNumber", v9);
  var v544 = this.__defineGetter__;
  v544 = v544.bind(this);
  v544("AlignmentPatternCenters", v10);
  var v546 = this.__defineGetter__;
  v546 = v546.bind(this);
  v546("TotalCodewords", v11);
  var v550 = this.__defineGetter__;
  v550 = v550.bind(this);
  v550("DimensionForVersion", v12);
  this.buildFunctionPattern = v13;
  this.getECBlocksForLevel = v14
}
function v15(versionNumber$$1) {
  var v384 = versionNumber$$1 < 1;
  if(!v384) {
    v384 = versionNumber$$1 > 40
  }
  if(v384) {
    throw"ArgumentException";
  }
  var v580 = Version.VERSIONS;
  var v581 = versionNumber$$1 - 1;
  var v582 = v580[v581];
  return v582
}
function v16(dimension$$3) {
  var v583 = dimension$$3 % 4;
  var v584 = v583 != 1;
  if(v584) {
    throw"Error getProvisionalVersionForDimension";
  }
  var v585 = Version.getVersionForNumber;
  v585 = v585.bind(Version);
  var v586 = dimension$$3 - 17;
  var v587 = v586 >> 2;
  var v588 = v585(v587);
  return v588
}
function v17(versionBits) {
  var bestDifference = 4294967295;
  var bestVersion = 0;
  var i$$4 = 0;
  var v589 = Version.VERSION_DECODE_INFO;
  var v590 = v589.length;
  var v164 = i$$4 < v590;
  for(;v164;) {
    var v591 = Version.VERSION_DECODE_INFO;
    var targetVersion = v591[i$$4];
    var v592 = targetVersion == versionBits;
    if(v592) {
      var v593 = this.getVersionForNumber;
      v593 = v593.bind(this);
      var v594 = i$$4 + 7;
      var v595 = v593(v594);
      return v595
    }
    var v596 = FormatInformation.numBitsDiffering;
    v596 = v596.bind(FormatInformation);
    var bitsDifference = v596(versionBits, targetVersion);
    var v597 = bitsDifference < bestDifference;
    if(v597) {
      bestVersion = i$$4 + 7;
      bestDifference = bitsDifference
    }
    i$$4++;
    var v598 = Version.VERSION_DECODE_INFO;
    var v599 = v598.length;
    v164 = i$$4 < v599
  }
  var v600 = bestDifference <= 3;
  if(v600) {
    var v601 = this.getVersionForNumber;
    v601 = v601.bind(this);
    var v602 = v601(bestVersion);
    return v602
  }
  return null
}
function buildVersions() {
  var v603 = new Array;
  var v604 = new ECB(1, 19);
  var v605 = new ECBlocks(7, v604);
  var v606 = new ECB(1, 16);
  var v607 = new ECBlocks(10, v606);
  var v608 = new ECB(1, 13);
  var v609 = new ECBlocks(13, v608);
  var v610 = new ECB(1, 9);
  var v611 = new ECBlocks(17, v610);
  var v612 = new Version(1, v603, v605, v607, v609, v611);
  var v613 = new Array(6, 18);
  var v614 = new ECB(1, 34);
  var v615 = new ECBlocks(10, v614);
  var v616 = new ECB(1, 28);
  var v617 = new ECBlocks(16, v616);
  var v618 = new ECB(1, 22);
  var v619 = new ECBlocks(22, v618);
  var v620 = new ECB(1, 16);
  var v621 = new ECBlocks(28, v620);
  var v622 = new Version(2, v613, v615, v617, v619, v621);
  var v623 = new Array(6, 22);
  var v624 = new ECB(1, 55);
  var v625 = new ECBlocks(15, v624);
  var v626 = new ECB(1, 44);
  var v627 = new ECBlocks(26, v626);
  var v628 = new ECB(2, 17);
  var v629 = new ECBlocks(18, v628);
  var v630 = new ECB(2, 13);
  var v631 = new ECBlocks(22, v630);
  var v632 = new Version(3, v623, v625, v627, v629, v631);
  var v633 = new Array(6, 26);
  var v634 = new ECB(1, 80);
  var v635 = new ECBlocks(20, v634);
  var v636 = new ECB(2, 32);
  var v637 = new ECBlocks(18, v636);
  var v638 = new ECB(2, 24);
  var v639 = new ECBlocks(26, v638);
  var v640 = new ECB(4, 9);
  var v641 = new ECBlocks(16, v640);
  var v642 = new Version(4, v633, v635, v637, v639, v641);
  var v643 = new Array(6, 30);
  var v644 = new ECB(1, 108);
  var v645 = new ECBlocks(26, v644);
  var v646 = new ECB(2, 43);
  var v647 = new ECBlocks(24, v646);
  var v648 = new ECB(2, 15);
  var v649 = new ECB(2, 16);
  var v650 = new ECBlocks(18, v648, v649);
  var v651 = new ECB(2, 11);
  var v652 = new ECB(2, 12);
  var v653 = new ECBlocks(22, v651, v652);
  var v654 = new Version(5, v643, v645, v647, v650, v653);
  var v655 = new Array(6, 34);
  var v656 = new ECB(2, 68);
  var v657 = new ECBlocks(18, v656);
  var v658 = new ECB(4, 27);
  var v659 = new ECBlocks(16, v658);
  var v660 = new ECB(4, 19);
  var v661 = new ECBlocks(24, v660);
  var v662 = new ECB(4, 15);
  var v663 = new ECBlocks(28, v662);
  var v664 = new Version(6, v655, v657, v659, v661, v663);
  var v665 = new Array(6, 22, 38);
  var v666 = new ECB(2, 78);
  var v667 = new ECBlocks(20, v666);
  var v668 = new ECB(4, 31);
  var v669 = new ECBlocks(18, v668);
  var v670 = new ECB(2, 14);
  var v671 = new ECB(4, 15);
  var v672 = new ECBlocks(18, v670, v671);
  var v673 = new ECB(4, 13);
  var v674 = new ECB(1, 14);
  var v675 = new ECBlocks(26, v673, v674);
  var v676 = new Version(7, v665, v667, v669, v672, v675);
  var v677 = new Array(6, 24, 42);
  var v678 = new ECB(2, 97);
  var v679 = new ECBlocks(24, v678);
  var v680 = new ECB(2, 38);
  var v681 = new ECB(2, 39);
  var v682 = new ECBlocks(22, v680, v681);
  var v683 = new ECB(4, 18);
  var v684 = new ECB(2, 19);
  var v685 = new ECBlocks(22, v683, v684);
  var v686 = new ECB(4, 14);
  var v687 = new ECB(2, 15);
  var v688 = new ECBlocks(26, v686, v687);
  var v689 = new Version(8, v677, v679, v682, v685, v688);
  var v690 = new Array(6, 26, 46);
  var v691 = new ECB(2, 116);
  var v692 = new ECBlocks(30, v691);
  var v693 = new ECB(3, 36);
  var v694 = new ECB(2, 37);
  var v695 = new ECBlocks(22, v693, v694);
  var v696 = new ECB(4, 16);
  var v697 = new ECB(4, 17);
  var v698 = new ECBlocks(20, v696, v697);
  var v699 = new ECB(4, 12);
  var v700 = new ECB(4, 13);
  var v701 = new ECBlocks(24, v699, v700);
  var v702 = new Version(9, v690, v692, v695, v698, v701);
  var v703 = new Array(6, 28, 50);
  var v704 = new ECB(2, 68);
  var v705 = new ECB(2, 69);
  var v706 = new ECBlocks(18, v704, v705);
  var v707 = new ECB(4, 43);
  var v708 = new ECB(1, 44);
  var v709 = new ECBlocks(26, v707, v708);
  var v710 = new ECB(6, 19);
  var v711 = new ECB(2, 20);
  var v712 = new ECBlocks(24, v710, v711);
  var v713 = new ECB(6, 15);
  var v714 = new ECB(2, 16);
  var v715 = new ECBlocks(28, v713, v714);
  var v716 = new Version(10, v703, v706, v709, v712, v715);
  var v717 = new Array(6, 30, 54);
  var v718 = new ECB(4, 81);
  var v719 = new ECBlocks(20, v718);
  var v720 = new ECB(1, 50);
  var v721 = new ECB(4, 51);
  var v722 = new ECBlocks(30, v720, v721);
  var v723 = new ECB(4, 22);
  var v724 = new ECB(4, 23);
  var v725 = new ECBlocks(28, v723, v724);
  var v726 = new ECB(3, 12);
  var v727 = new ECB(8, 13);
  var v728 = new ECBlocks(24, v726, v727);
  var v729 = new Version(11, v717, v719, v722, v725, v728);
  var v730 = new Array(6, 32, 58);
  var v731 = new ECB(2, 92);
  var v732 = new ECB(2, 93);
  var v733 = new ECBlocks(24, v731, v732);
  var v734 = new ECB(6, 36);
  var v735 = new ECB(2, 37);
  var v736 = new ECBlocks(22, v734, v735);
  var v737 = new ECB(4, 20);
  var v738 = new ECB(6, 21);
  var v739 = new ECBlocks(26, v737, v738);
  var v740 = new ECB(7, 14);
  var v741 = new ECB(4, 15);
  var v742 = new ECBlocks(28, v740, v741);
  var v743 = new Version(12, v730, v733, v736, v739, v742);
  var v744 = new Array(6, 34, 62);
  var v745 = new ECB(4, 107);
  var v746 = new ECBlocks(26, v745);
  var v747 = new ECB(8, 37);
  var v748 = new ECB(1, 38);
  var v749 = new ECBlocks(22, v747, v748);
  var v750 = new ECB(8, 20);
  var v751 = new ECB(4, 21);
  var v752 = new ECBlocks(24, v750, v751);
  var v753 = new ECB(12, 11);
  var v754 = new ECB(4, 12);
  var v755 = new ECBlocks(22, v753, v754);
  var v756 = new Version(13, v744, v746, v749, v752, v755);
  var v757 = new Array(6, 26, 46, 66);
  var v758 = new ECB(3, 115);
  var v759 = new ECB(1, 116);
  var v760 = new ECBlocks(30, v758, v759);
  var v761 = new ECB(4, 40);
  var v762 = new ECB(5, 41);
  var v763 = new ECBlocks(24, v761, v762);
  var v764 = new ECB(11, 16);
  var v765 = new ECB(5, 17);
  var v766 = new ECBlocks(20, v764, v765);
  var v767 = new ECB(11, 12);
  var v768 = new ECB(5, 13);
  var v769 = new ECBlocks(24, v767, v768);
  var v770 = new Version(14, v757, v760, v763, v766, v769);
  var v771 = new Array(6, 26, 48, 70);
  var v772 = new ECB(5, 87);
  var v773 = new ECB(1, 88);
  var v774 = new ECBlocks(22, v772, v773);
  var v775 = new ECB(5, 41);
  var v776 = new ECB(5, 42);
  var v777 = new ECBlocks(24, v775, v776);
  var v778 = new ECB(5, 24);
  var v779 = new ECB(7, 25);
  var v780 = new ECBlocks(30, v778, v779);
  var v781 = new ECB(11, 12);
  var v782 = new ECB(7, 13);
  var v783 = new ECBlocks(24, v781, v782);
  var v784 = new Version(15, v771, v774, v777, v780, v783);
  var v785 = new Array(6, 26, 50, 74);
  var v786 = new ECB(5, 98);
  var v787 = new ECB(1, 99);
  var v788 = new ECBlocks(24, v786, v787);
  var v789 = new ECB(7, 45);
  var v790 = new ECB(3, 46);
  var v791 = new ECBlocks(28, v789, v790);
  var v792 = new ECB(15, 19);
  var v793 = new ECB(2, 20);
  var v794 = new ECBlocks(24, v792, v793);
  var v795 = new ECB(3, 15);
  var v796 = new ECB(13, 16);
  var v797 = new ECBlocks(30, v795, v796);
  var v798 = new Version(16, v785, v788, v791, v794, v797);
  var v799 = new Array(6, 30, 54, 78);
  var v800 = new ECB(1, 107);
  var v801 = new ECB(5, 108);
  var v802 = new ECBlocks(28, v800, v801);
  var v803 = new ECB(10, 46);
  var v804 = new ECB(1, 47);
  var v805 = new ECBlocks(28, v803, v804);
  var v806 = new ECB(1, 22);
  var v807 = new ECB(15, 23);
  var v808 = new ECBlocks(28, v806, v807);
  var v809 = new ECB(2, 14);
  var v810 = new ECB(17, 15);
  var v811 = new ECBlocks(28, v809, v810);
  var v812 = new Version(17, v799, v802, v805, v808, v811);
  var v813 = new Array(6, 30, 56, 82);
  var v814 = new ECB(5, 120);
  var v815 = new ECB(1, 121);
  var v816 = new ECBlocks(30, v814, v815);
  var v817 = new ECB(9, 43);
  var v818 = new ECB(4, 44);
  var v819 = new ECBlocks(26, v817, v818);
  var v820 = new ECB(17, 22);
  var v821 = new ECB(1, 23);
  var v822 = new ECBlocks(28, v820, v821);
  var v823 = new ECB(2, 14);
  var v824 = new ECB(19, 15);
  var v825 = new ECBlocks(28, v823, v824);
  var v826 = new Version(18, v813, v816, v819, v822, v825);
  var v827 = new Array(6, 30, 58, 86);
  var v828 = new ECB(3, 113);
  var v829 = new ECB(4, 114);
  var v830 = new ECBlocks(28, v828, v829);
  var v831 = new ECB(3, 44);
  var v832 = new ECB(11, 45);
  var v833 = new ECBlocks(26, v831, v832);
  var v834 = new ECB(17, 21);
  var v835 = new ECB(4, 22);
  var v836 = new ECBlocks(26, v834, v835);
  var v837 = new ECB(9, 13);
  var v838 = new ECB(16, 14);
  var v839 = new ECBlocks(26, v837, v838);
  var v840 = new Version(19, v827, v830, v833, v836, v839);
  var v841 = new Array(6, 34, 62, 90);
  var v842 = new ECB(3, 107);
  var v843 = new ECB(5, 108);
  var v844 = new ECBlocks(28, v842, v843);
  var v845 = new ECB(3, 41);
  var v846 = new ECB(13, 42);
  var v847 = new ECBlocks(26, v845, v846);
  var v848 = new ECB(15, 24);
  var v849 = new ECB(5, 25);
  var v850 = new ECBlocks(30, v848, v849);
  var v851 = new ECB(15, 15);
  var v852 = new ECB(10, 16);
  var v853 = new ECBlocks(28, v851, v852);
  var v854 = new Version(20, v841, v844, v847, v850, v853);
  var v855 = new Array(6, 28, 50, 72, 94);
  var v856 = new ECB(4, 116);
  var v857 = new ECB(4, 117);
  var v858 = new ECBlocks(28, v856, v857);
  var v859 = new ECB(17, 42);
  var v860 = new ECBlocks(26, v859);
  var v861 = new ECB(17, 22);
  var v862 = new ECB(6, 23);
  var v863 = new ECBlocks(28, v861, v862);
  var v864 = new ECB(19, 16);
  var v865 = new ECB(6, 17);
  var v866 = new ECBlocks(30, v864, v865);
  var v867 = new Version(21, v855, v858, v860, v863, v866);
  var v868 = new Array(6, 26, 50, 74, 98);
  var v869 = new ECB(2, 111);
  var v870 = new ECB(7, 112);
  var v871 = new ECBlocks(28, v869, v870);
  var v872 = new ECB(17, 46);
  var v873 = new ECBlocks(28, v872);
  var v874 = new ECB(7, 24);
  var v875 = new ECB(16, 25);
  var v876 = new ECBlocks(30, v874, v875);
  var v877 = new ECB(34, 13);
  var v878 = new ECBlocks(24, v877);
  var v879 = new Version(22, v868, v871, v873, v876, v878);
  var v880 = new Array(6, 30, 54, 74, 102);
  var v881 = new ECB(4, 121);
  var v882 = new ECB(5, 122);
  var v883 = new ECBlocks(30, v881, v882);
  var v884 = new ECB(4, 47);
  var v885 = new ECB(14, 48);
  var v886 = new ECBlocks(28, v884, v885);
  var v887 = new ECB(11, 24);
  var v888 = new ECB(14, 25);
  var v889 = new ECBlocks(30, v887, v888);
  var v890 = new ECB(16, 15);
  var v891 = new ECB(14, 16);
  var v892 = new ECBlocks(30, v890, v891);
  var v893 = new Version(23, v880, v883, v886, v889, v892);
  var v894 = new Array(6, 28, 54, 80, 106);
  var v895 = new ECB(6, 117);
  var v896 = new ECB(4, 118);
  var v897 = new ECBlocks(30, v895, v896);
  var v898 = new ECB(6, 45);
  var v899 = new ECB(14, 46);
  var v900 = new ECBlocks(28, v898, v899);
  var v901 = new ECB(11, 24);
  var v902 = new ECB(16, 25);
  var v903 = new ECBlocks(30, v901, v902);
  var v904 = new ECB(30, 16);
  var v905 = new ECB(2, 17);
  var v906 = new ECBlocks(30, v904, v905);
  var v907 = new Version(24, v894, v897, v900, v903, v906);
  var v908 = new Array(6, 32, 58, 84, 110);
  var v909 = new ECB(8, 106);
  var v910 = new ECB(4, 107);
  var v911 = new ECBlocks(26, v909, v910);
  var v912 = new ECB(8, 47);
  var v913 = new ECB(13, 48);
  var v914 = new ECBlocks(28, v912, v913);
  var v915 = new ECB(7, 24);
  var v916 = new ECB(22, 25);
  var v917 = new ECBlocks(30, v915, v916);
  var v918 = new ECB(22, 15);
  var v919 = new ECB(13, 16);
  var v920 = new ECBlocks(30, v918, v919);
  var v921 = new Version(25, v908, v911, v914, v917, v920);
  var v922 = new Array(6, 30, 58, 86, 114);
  var v923 = new ECB(10, 114);
  var v924 = new ECB(2, 115);
  var v925 = new ECBlocks(28, v923, v924);
  var v926 = new ECB(19, 46);
  var v927 = new ECB(4, 47);
  var v928 = new ECBlocks(28, v926, v927);
  var v929 = new ECB(28, 22);
  var v930 = new ECB(6, 23);
  var v931 = new ECBlocks(28, v929, v930);
  var v932 = new ECB(33, 16);
  var v933 = new ECB(4, 17);
  var v934 = new ECBlocks(30, v932, v933);
  var v935 = new Version(26, v922, v925, v928, v931, v934);
  var v936 = new Array(6, 34, 62, 90, 118);
  var v937 = new ECB(8, 122);
  var v938 = new ECB(4, 123);
  var v939 = new ECBlocks(30, v937, v938);
  var v940 = new ECB(22, 45);
  var v941 = new ECB(3, 46);
  var v942 = new ECBlocks(28, v940, v941);
  var v943 = new ECB(8, 23);
  var v944 = new ECB(26, 24);
  var v945 = new ECBlocks(30, v943, v944);
  var v946 = new ECB(12, 15);
  var v947 = new ECB(28, 16);
  var v948 = new ECBlocks(30, v946, v947);
  var v949 = new Version(27, v936, v939, v942, v945, v948);
  var v950 = new Array(6, 26, 50, 74, 98, 122);
  var v951 = new ECB(3, 117);
  var v952 = new ECB(10, 118);
  var v953 = new ECBlocks(30, v951, v952);
  var v954 = new ECB(3, 45);
  var v955 = new ECB(23, 46);
  var v956 = new ECBlocks(28, v954, v955);
  var v957 = new ECB(4, 24);
  var v958 = new ECB(31, 25);
  var v959 = new ECBlocks(30, v957, v958);
  var v960 = new ECB(11, 15);
  var v961 = new ECB(31, 16);
  var v962 = new ECBlocks(30, v960, v961);
  var v963 = new Version(28, v950, v953, v956, v959, v962);
  var v964 = new Array(6, 30, 54, 78, 102, 126);
  var v965 = new ECB(7, 116);
  var v966 = new ECB(7, 117);
  var v967 = new ECBlocks(30, v965, v966);
  var v968 = new ECB(21, 45);
  var v969 = new ECB(7, 46);
  var v970 = new ECBlocks(28, v968, v969);
  var v971 = new ECB(1, 23);
  var v972 = new ECB(37, 24);
  var v973 = new ECBlocks(30, v971, v972);
  var v974 = new ECB(19, 15);
  var v975 = new ECB(26, 16);
  var v976 = new ECBlocks(30, v974, v975);
  var v977 = new Version(29, v964, v967, v970, v973, v976);
  var v978 = new Array(6, 26, 52, 78, 104, 130);
  var v979 = new ECB(5, 115);
  var v980 = new ECB(10, 116);
  var v981 = new ECBlocks(30, v979, v980);
  var v982 = new ECB(19, 47);
  var v983 = new ECB(10, 48);
  var v984 = new ECBlocks(28, v982, v983);
  var v985 = new ECB(15, 24);
  var v986 = new ECB(25, 25);
  var v987 = new ECBlocks(30, v985, v986);
  var v988 = new ECB(23, 15);
  var v989 = new ECB(25, 16);
  var v990 = new ECBlocks(30, v988, v989);
  var v991 = new Version(30, v978, v981, v984, v987, v990);
  var v992 = new Array(6, 30, 56, 82, 108, 134);
  var v993 = new ECB(13, 115);
  var v994 = new ECB(3, 116);
  var v995 = new ECBlocks(30, v993, v994);
  var v996 = new ECB(2, 46);
  var v997 = new ECB(29, 47);
  var v998 = new ECBlocks(28, v996, v997);
  var v999 = new ECB(42, 24);
  var v1000 = new ECB(1, 25);
  var v1001 = new ECBlocks(30, v999, v1000);
  var v1002 = new ECB(23, 15);
  var v1003 = new ECB(28, 16);
  var v1004 = new ECBlocks(30, v1002, v1003);
  var v1005 = new Version(31, v992, v995, v998, v1001, v1004);
  var v1006 = new Array(6, 34, 60, 86, 112, 138);
  var v1007 = new ECB(17, 115);
  var v1008 = new ECBlocks(30, v1007);
  var v1009 = new ECB(10, 46);
  var v1010 = new ECB(23, 47);
  var v1011 = new ECBlocks(28, v1009, v1010);
  var v1012 = new ECB(10, 24);
  var v1013 = new ECB(35, 25);
  var v1014 = new ECBlocks(30, v1012, v1013);
  var v1015 = new ECB(19, 15);
  var v1016 = new ECB(35, 16);
  var v1017 = new ECBlocks(30, v1015, v1016);
  var v1018 = new Version(32, v1006, v1008, v1011, v1014, v1017);
  var v1019 = new Array(6, 30, 58, 86, 114, 142);
  var v1020 = new ECB(17, 115);
  var v1021 = new ECB(1, 116);
  var v1022 = new ECBlocks(30, v1020, v1021);
  var v1023 = new ECB(14, 46);
  var v1024 = new ECB(21, 47);
  var v1025 = new ECBlocks(28, v1023, v1024);
  var v1026 = new ECB(29, 24);
  var v1027 = new ECB(19, 25);
  var v1028 = new ECBlocks(30, v1026, v1027);
  var v1029 = new ECB(11, 15);
  var v1030 = new ECB(46, 16);
  var v1031 = new ECBlocks(30, v1029, v1030);
  var v1032 = new Version(33, v1019, v1022, v1025, v1028, v1031);
  var v1033 = new Array(6, 34, 62, 90, 118, 146);
  var v1034 = new ECB(13, 115);
  var v1035 = new ECB(6, 116);
  var v1036 = new ECBlocks(30, v1034, v1035);
  var v1037 = new ECB(14, 46);
  var v1038 = new ECB(23, 47);
  var v1039 = new ECBlocks(28, v1037, v1038);
  var v1040 = new ECB(44, 24);
  var v1041 = new ECB(7, 25);
  var v1042 = new ECBlocks(30, v1040, v1041);
  var v1043 = new ECB(59, 16);
  var v1044 = new ECB(1, 17);
  var v1045 = new ECBlocks(30, v1043, v1044);
  var v1046 = new Version(34, v1033, v1036, v1039, v1042, v1045);
  var v1047 = new Array(6, 30, 54, 78, 102, 126, 150);
  var v1048 = new ECB(12, 121);
  var v1049 = new ECB(7, 122);
  var v1050 = new ECBlocks(30, v1048, v1049);
  var v1051 = new ECB(12, 47);
  var v1052 = new ECB(26, 48);
  var v1053 = new ECBlocks(28, v1051, v1052);
  var v1054 = new ECB(39, 24);
  var v1055 = new ECB(14, 25);
  var v1056 = new ECBlocks(30, v1054, v1055);
  var v1057 = new ECB(22, 15);
  var v1058 = new ECB(41, 16);
  var v1059 = new ECBlocks(30, v1057, v1058);
  var v1060 = new Version(35, v1047, v1050, v1053, v1056, v1059);
  var v1061 = new Array(6, 24, 50, 76, 102, 128, 154);
  var v1062 = new ECB(6, 121);
  var v1063 = new ECB(14, 122);
  var v1064 = new ECBlocks(30, v1062, v1063);
  var v1065 = new ECB(6, 47);
  var v1066 = new ECB(34, 48);
  var v1067 = new ECBlocks(28, v1065, v1066);
  var v1068 = new ECB(46, 24);
  var v1069 = new ECB(10, 25);
  var v1070 = new ECBlocks(30, v1068, v1069);
  var v1071 = new ECB(2, 15);
  var v1072 = new ECB(64, 16);
  var v1073 = new ECBlocks(30, v1071, v1072);
  var v1074 = new Version(36, v1061, v1064, v1067, v1070, v1073);
  var v1075 = new Array(6, 28, 54, 80, 106, 132, 158);
  var v1076 = new ECB(17, 122);
  var v1077 = new ECB(4, 123);
  var v1078 = new ECBlocks(30, v1076, v1077);
  var v1079 = new ECB(29, 46);
  var v1080 = new ECB(14, 47);
  var v1081 = new ECBlocks(28, v1079, v1080);
  var v1082 = new ECB(49, 24);
  var v1083 = new ECB(10, 25);
  var v1084 = new ECBlocks(30, v1082, v1083);
  var v1085 = new ECB(24, 15);
  var v1086 = new ECB(46, 16);
  var v1087 = new ECBlocks(30, v1085, v1086);
  var v1088 = new Version(37, v1075, v1078, v1081, v1084, v1087);
  var v1089 = new Array(6, 32, 58, 84, 110, 136, 162);
  var v1090 = new ECB(4, 122);
  var v1091 = new ECB(18, 123);
  var v1092 = new ECBlocks(30, v1090, v1091);
  var v1093 = new ECB(13, 46);
  var v1094 = new ECB(32, 47);
  var v1095 = new ECBlocks(28, v1093, v1094);
  var v1096 = new ECB(48, 24);
  var v1097 = new ECB(14, 25);
  var v1098 = new ECBlocks(30, v1096, v1097);
  var v1099 = new ECB(42, 15);
  var v1100 = new ECB(32, 16);
  var v1101 = new ECBlocks(30, v1099, v1100);
  var v1102 = new Version(38, v1089, v1092, v1095, v1098, v1101);
  var v1103 = new Array(6, 26, 54, 82, 110, 138, 166);
  var v1104 = new ECB(20, 117);
  var v1105 = new ECB(4, 118);
  var v1106 = new ECBlocks(30, v1104, v1105);
  var v1107 = new ECB(40, 47);
  var v1108 = new ECB(7, 48);
  var v1109 = new ECBlocks(28, v1107, v1108);
  var v1110 = new ECB(43, 24);
  var v1111 = new ECB(22, 25);
  var v1112 = new ECBlocks(30, v1110, v1111);
  var v1113 = new ECB(10, 15);
  var v1114 = new ECB(67, 16);
  var v1115 = new ECBlocks(30, v1113, v1114);
  var v1116 = new Version(39, v1103, v1106, v1109, v1112, v1115);
  var v1117 = new Array(6, 30, 58, 86, 114, 142, 170);
  var v1118 = new ECB(19, 118);
  var v1119 = new ECB(6, 119);
  var v1120 = new ECBlocks(30, v1118, v1119);
  var v1121 = new ECB(18, 47);
  var v1122 = new ECB(31, 48);
  var v1123 = new ECBlocks(28, v1121, v1122);
  var v1124 = new ECB(34, 24);
  var v1125 = new ECB(34, 25);
  var v1126 = new ECBlocks(30, v1124, v1125);
  var v1127 = new ECB(20, 15);
  var v1128 = new ECB(61, 16);
  var v1129 = new ECBlocks(30, v1127, v1128);
  var v1130 = new Version(40, v1117, v1120, v1123, v1126, v1129);
  var v1131 = new Array(v612, v622, v632, v642, v654, v664, v676, v689, v702, v716, v729, v743, v756, v770, v784, v798, v812, v826, v840, v854, v867, v879, v893, v907, v921, v935, v949, v963, v977, v991, v1005, v1018, v1032, v1046, v1060, v1074, v1088, v1102, v1116, v1130);
  return v1131
}
function PerspectiveTransform(a11, a21, a31, a12, a22, a32, a13$$1, a23$$1, a33) {
  function v18(points$$2) {
    var max$$2 = points$$2.length;
    var a11$$1 = this.a11;
    var a12$$1 = this.a12;
    var a13$$2 = this.a13;
    var a21$$1 = this.a21;
    var a22$$1 = this.a22;
    var a23$$2 = this.a23;
    var a31$$1 = this.a31;
    var a32$$1 = this.a32;
    var a33$$1 = this.a33;
    var i$$5 = 0;
    var v165 = i$$5 < max$$2;
    for(;v165;) {
      var x$$54 = points$$2[i$$5];
      var v1132 = i$$5 + 1;
      var y$$37 = points$$2[v1132];
      var v1133 = a13$$2 * x$$54;
      var v1134 = a23$$2 * y$$37;
      var v1135 = v1133 + v1134;
      var denominator$$1 = v1135 + a33$$1;
      var v1136 = a11$$1 * x$$54;
      var v1137 = a21$$1 * y$$37;
      var v1138 = v1136 + v1137;
      var v1139 = v1138 + a31$$1;
      var v1140 = v1139 / denominator$$1;
      points$$2[i$$5] = v1140;
      var v1141 = i$$5 + 1;
      var v1142 = a12$$1 * x$$54;
      var v1143 = a22$$1 * y$$37;
      var v1144 = v1142 + v1143;
      var v1145 = v1144 + a32$$1;
      var v1146 = v1145 / denominator$$1;
      points$$2[v1141] = v1146;
      i$$5 += 2;
      v165 = i$$5 < max$$2
    }
  }
  function v19(xValues, yValues) {
    var n$$1 = xValues.length;
    var i$$6 = 0;
    var v166 = i$$6 < n$$1;
    for(;v166;) {
      var x$$55 = xValues[i$$6];
      var y$$38 = yValues[i$$6];
      var v1147 = this.a13;
      var v1148 = v1147 * x$$55;
      var v1149 = this.a23;
      var v1150 = v1149 * y$$38;
      var v1151 = v1148 + v1150;
      var v1152 = this.a33;
      var denominator$$2 = v1151 + v1152;
      var v1153 = this.a11;
      var v1154 = v1153 * x$$55;
      var v1155 = this.a21;
      var v1156 = v1155 * y$$38;
      var v1157 = v1154 + v1156;
      var v1158 = this.a31;
      var v1159 = v1157 + v1158;
      var v1160 = v1159 / denominator$$2;
      xValues[i$$6] = v1160;
      var v1161 = this.a12;
      var v1162 = v1161 * x$$55;
      var v1163 = this.a22;
      var v1164 = v1163 * y$$38;
      var v1165 = v1162 + v1164;
      var v1166 = this.a32;
      var v1167 = v1165 + v1166;
      var v1168 = v1167 / denominator$$2;
      yValues[i$$6] = v1168;
      i$$6++;
      v166 = i$$6 < n$$1
    }
  }
  function v20() {
    var v1169 = this.a22;
    var v1170 = this.a33;
    var v1171 = v1169 * v1170;
    var v1172 = this.a23;
    var v1173 = this.a32;
    var v1174 = v1172 * v1173;
    var v1175 = v1171 - v1174;
    var v1176 = this.a23;
    var v1177 = this.a31;
    var v1178 = v1176 * v1177;
    var v1179 = this.a21;
    var v1180 = this.a33;
    var v1181 = v1179 * v1180;
    var v1182 = v1178 - v1181;
    var v1183 = this.a21;
    var v1184 = this.a32;
    var v1185 = v1183 * v1184;
    var v1186 = this.a22;
    var v1187 = this.a31;
    var v1188 = v1186 * v1187;
    var v1189 = v1185 - v1188;
    var v1190 = this.a13;
    var v1191 = this.a32;
    var v1192 = v1190 * v1191;
    var v1193 = this.a12;
    var v1194 = this.a33;
    var v1195 = v1193 * v1194;
    var v1196 = v1192 - v1195;
    var v1197 = this.a11;
    var v1198 = this.a33;
    var v1199 = v1197 * v1198;
    var v1200 = this.a13;
    var v1201 = this.a31;
    var v1202 = v1200 * v1201;
    var v1203 = v1199 - v1202;
    var v1204 = this.a12;
    var v1205 = this.a31;
    var v1206 = v1204 * v1205;
    var v1207 = this.a11;
    var v1208 = this.a32;
    var v1209 = v1207 * v1208;
    var v1210 = v1206 - v1209;
    var v1211 = this.a12;
    var v1212 = this.a23;
    var v1213 = v1211 * v1212;
    var v1214 = this.a13;
    var v1215 = this.a22;
    var v1216 = v1214 * v1215;
    var v1217 = v1213 - v1216;
    var v1218 = this.a13;
    var v1219 = this.a21;
    var v1220 = v1218 * v1219;
    var v1221 = this.a11;
    var v1222 = this.a23;
    var v1223 = v1221 * v1222;
    var v1224 = v1220 - v1223;
    var v1225 = this.a11;
    var v1226 = this.a22;
    var v1227 = v1225 * v1226;
    var v1228 = this.a12;
    var v1229 = this.a21;
    var v1230 = v1228 * v1229;
    var v1231 = v1227 - v1230;
    var v1232 = new PerspectiveTransform(v1175, v1182, v1189, v1196, v1203, v1210, v1217, v1224, v1231);
    return v1232
  }
  function v21(other$$4) {
    var v1233 = this.a11;
    var v1234 = other$$4.a11;
    var v1235 = v1233 * v1234;
    var v1236 = this.a21;
    var v1237 = other$$4.a12;
    var v1238 = v1236 * v1237;
    var v1239 = v1235 + v1238;
    var v1240 = this.a31;
    var v1241 = other$$4.a13;
    var v1242 = v1240 * v1241;
    var v1243 = v1239 + v1242;
    var v1244 = this.a11;
    var v1245 = other$$4.a21;
    var v1246 = v1244 * v1245;
    var v1247 = this.a21;
    var v1248 = other$$4.a22;
    var v1249 = v1247 * v1248;
    var v1250 = v1246 + v1249;
    var v1251 = this.a31;
    var v1252 = other$$4.a23;
    var v1253 = v1251 * v1252;
    var v1254 = v1250 + v1253;
    var v1255 = this.a11;
    var v1256 = other$$4.a31;
    var v1257 = v1255 * v1256;
    var v1258 = this.a21;
    var v1259 = other$$4.a32;
    var v1260 = v1258 * v1259;
    var v1261 = v1257 + v1260;
    var v1262 = this.a31;
    var v1263 = other$$4.a33;
    var v1264 = v1262 * v1263;
    var v1265 = v1261 + v1264;
    var v1266 = this.a12;
    var v1267 = other$$4.a11;
    var v1268 = v1266 * v1267;
    var v1269 = this.a22;
    var v1270 = other$$4.a12;
    var v1271 = v1269 * v1270;
    var v1272 = v1268 + v1271;
    var v1273 = this.a32;
    var v1274 = other$$4.a13;
    var v1275 = v1273 * v1274;
    var v1276 = v1272 + v1275;
    var v1277 = this.a12;
    var v1278 = other$$4.a21;
    var v1279 = v1277 * v1278;
    var v1280 = this.a22;
    var v1281 = other$$4.a22;
    var v1282 = v1280 * v1281;
    var v1283 = v1279 + v1282;
    var v1284 = this.a32;
    var v1285 = other$$4.a23;
    var v1286 = v1284 * v1285;
    var v1287 = v1283 + v1286;
    var v1288 = this.a12;
    var v1289 = other$$4.a31;
    var v1290 = v1288 * v1289;
    var v1291 = this.a22;
    var v1292 = other$$4.a32;
    var v1293 = v1291 * v1292;
    var v1294 = v1290 + v1293;
    var v1295 = this.a32;
    var v1296 = other$$4.a33;
    var v1297 = v1295 * v1296;
    var v1298 = v1294 + v1297;
    var v1299 = this.a13;
    var v1300 = other$$4.a11;
    var v1301 = v1299 * v1300;
    var v1302 = this.a23;
    var v1303 = other$$4.a12;
    var v1304 = v1302 * v1303;
    var v1305 = v1301 + v1304;
    var v1306 = this.a33;
    var v1307 = other$$4.a13;
    var v1308 = v1306 * v1307;
    var v1309 = v1305 + v1308;
    var v1310 = this.a13;
    var v1311 = other$$4.a21;
    var v1312 = v1310 * v1311;
    var v1313 = this.a23;
    var v1314 = other$$4.a22;
    var v1315 = v1313 * v1314;
    var v1316 = v1312 + v1315;
    var v1317 = this.a33;
    var v1318 = other$$4.a23;
    var v1319 = v1317 * v1318;
    var v1320 = v1316 + v1319;
    var v1321 = this.a13;
    var v1322 = other$$4.a31;
    var v1323 = v1321 * v1322;
    var v1324 = this.a23;
    var v1325 = other$$4.a32;
    var v1326 = v1324 * v1325;
    var v1327 = v1323 + v1326;
    var v1328 = this.a33;
    var v1329 = other$$4.a33;
    var v1330 = v1328 * v1329;
    var v1331 = v1327 + v1330;
    var v1332 = new PerspectiveTransform(v1243, v1254, v1265, v1276, v1287, v1298, v1309, v1320, v1331);
    return v1332
  }
  this.a11 = a11;
  this.a12 = a12;
  this.a13 = a13$$1;
  this.a21 = a21;
  this.a22 = a22;
  this.a23 = a23$$1;
  this.a31 = a31;
  this.a32 = a32;
  this.a33 = a33;
  this.transformPoints1 = v18;
  this.transformPoints2 = v19;
  this.buildAdjoint = v20;
  this.times = v21
}
function v22(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
  var v1333 = this.quadrilateralToSquare;
  v1333 = v1333.bind(this);
  var qToS = v1333(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3);
  var v1334 = this.squareToQuadrilateral;
  v1334 = v1334.bind(this);
  var sToQ = v1334(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
  var v1335 = sToQ.times;
  v1335 = v1335.bind(sToQ);
  var v1336 = v1335(qToS);
  return v1336
}
function v23(x0$$3, y0$$3, x1$$4, y1$$4, x2$$2, y2$$2, x3$$1, y3$$1) {
  dy2 = y3$$1 - y2$$2;
  var v1337 = y0$$3 - y1$$4;
  var v1338 = v1337 + y2$$2;
  dy3 = v1338 - y3$$1;
  var v322 = dy2 == 0;
  if(v322) {
    v322 = dy3 == 0
  }
  if(v322) {
    var v1339 = x1$$4 - x0$$3;
    var v1340 = x2$$2 - x1$$4;
    var v1341 = y1$$4 - y0$$3;
    var v1342 = y2$$2 - y1$$4;
    var v1343 = new PerspectiveTransform(v1339, v1340, x0$$3, v1341, v1342, y0$$3, 0, 0, 1);
    return v1343
  }else {
    dx1 = x1$$4 - x2$$2;
    dx2 = x3$$1 - x2$$2;
    var v1344 = x0$$3 - x1$$4;
    var v1345 = v1344 + x2$$2;
    dx3 = v1345 - x3$$1;
    dy1 = y1$$4 - y2$$2;
    var v1346 = dx1 * dy2;
    var v1347 = dx2 * dy1;
    denominator = v1346 - v1347;
    var v1348 = dx3 * dy2;
    var v1349 = dx2 * dy3;
    var v1350 = v1348 - v1349;
    a13 = v1350 / denominator;
    var v1351 = dx1 * dy3;
    var v1352 = dx3 * dy1;
    var v1353 = v1351 - v1352;
    a23 = v1353 / denominator;
    var v1354 = x1$$4 - x0$$3;
    var v1355 = a13 * x1$$4;
    var v1356 = v1354 + v1355;
    var v1357 = x3$$1 - x0$$3;
    var v1358 = a23 * x3$$1;
    var v1359 = v1357 + v1358;
    var v1360 = y1$$4 - y0$$3;
    var v1361 = a13 * y1$$4;
    var v1362 = v1360 + v1361;
    var v1363 = y3$$1 - y0$$3;
    var v1364 = a23 * y3$$1;
    var v1365 = v1363 + v1364;
    var v1366 = new PerspectiveTransform(v1356, v1359, x0$$3, v1362, v1365, y0$$3, a13, a23, 1);
    return v1366
  }
}
function v24(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2) {
  var v1367 = this.squareToQuadrilateral;
  v1367 = v1367.bind(this);
  var v1368 = v1367(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2);
  var v1369 = v1368.buildAdjoint;
  v1369 = v1369.bind(v1368);
  var v1370 = v1369();
  return v1370
}
function DetectorResult(bits$$1, points$$3) {
  this.bits = bits$$1;
  this.points = points$$3
}
function Detector(image$$5) {
  function v25(fromX, fromY, toX, toY) {
    var v1371 = Math.abs;
    v1371 = v1371.bind(Math);
    var v1372 = toY - fromY;
    var v1373 = v1371(v1372);
    var v1374 = Math.abs;
    v1374 = v1374.bind(Math);
    var v1375 = toX - fromX;
    var v1376 = v1374(v1375);
    var steep = v1373 > v1376;
    if(steep) {
      var temp = fromX;
      fromX = fromY;
      fromY = temp;
      temp = toX;
      toX = toY;
      toY = temp
    }
    var v1377 = Math.abs;
    v1377 = v1377.bind(Math);
    var v1378 = toX - fromX;
    var dx$$4 = v1377(v1378);
    var v1379 = Math.abs;
    v1379 = v1379.bind(Math);
    var v1380 = toY - fromY;
    var dy$$4 = v1379(v1380);
    var error$$3 = -dx$$4 >> 1;
    var v300;
    var v1381 = fromY < toY;
    if(v1381) {
      v300 = 1
    }else {
      v300 = -1
    }
    var ystep = v300;
    var v301;
    var v1382 = fromX < toX;
    if(v1382) {
      v301 = 1
    }else {
      v301 = -1
    }
    var xstep = v301;
    var state = 0;
    var x$$56 = fromX;
    var y$$39 = fromY;
    var v167 = x$$56 != toX;
    for(;v167;) {
      var v302;
      if(steep) {
        v302 = y$$39
      }else {
        v302 = x$$56
      }
      var realX = v302;
      var v303;
      if(steep) {
        v303 = x$$56
      }else {
        v303 = y$$39
      }
      var realY = v303;
      var v1383 = state == 1;
      if(v1383) {
        var v1384 = this.image;
        var v1385 = qrcode.width;
        var v1386 = realY * v1385;
        var v1387 = realX + v1386;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v1388 = v1384[v1387]
        }
        if(v1388) {
          state++
        }
      }else {
        var v1389 = this.image;
        var v1390 = qrcode.width;
        var v1391 = realY * v1390;
        var v1392 = realX + v1391;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          if(!v1389[v1392]) {
            state++
          }
        }
      }
      var v1393 = state == 3;
      if(v1393) {
        var diffX = x$$56 - fromX;
        var diffY = y$$39 - fromY;
        var v1394 = Math.sqrt;
        v1394 = v1394.bind(Math);
        var v1395 = diffX * diffX;
        var v1396 = diffY * diffY;
        var v1397 = v1395 + v1396;
        var v1398 = v1394(v1397);
        return v1398
      }
      error$$3 += dy$$4;
      var v1399 = error$$3 > 0;
      if(v1399) {
        var v1400 = y$$39 == toY;
        if(v1400) {
          break
        }
        y$$39 += ystep;
        error$$3 -= dx$$4
      }
      x$$56 += xstep;
      v167 = x$$56 != toX
    }
    var diffX2 = toX - fromX;
    var diffY2 = toY - fromY;
    var v1401 = Math.sqrt;
    v1401 = v1401.bind(Math);
    var v1402 = diffX2 * diffX2;
    var v1403 = diffY2 * diffY2;
    var v1404 = v1402 + v1403;
    var v1405 = v1401(v1404);
    return v1405
  }
  function v26(fromX$$1, fromY$$1, toX$$1, toY$$1) {
    var v1406 = this.sizeOfBlackWhiteBlackRun;
    v1406 = v1406.bind(this);
    var result = v1406(fromX$$1, fromY$$1, toX$$1, toY$$1);
    var scale$$2 = 1;
    var v1407 = toX$$1 - fromX$$1;
    var otherToX = fromX$$1 - v1407;
    var v1408 = otherToX < 0;
    if(v1408) {
      var v1409 = fromX$$1 - otherToX;
      scale$$2 = fromX$$1 / v1409;
      otherToX = 0
    }else {
      var v1410 = qrcode.width;
      var v1411 = otherToX >= v1410;
      if(v1411) {
        var v1412 = qrcode.width;
        var v1413 = v1412 - 1;
        var v1414 = v1413 - fromX$$1;
        var v1415 = otherToX - fromX$$1;
        scale$$2 = v1414 / v1415;
        var v1416 = qrcode.width;
        otherToX = v1416 - 1
      }
    }
    var v1417 = Math.floor;
    v1417 = v1417.bind(Math);
    var v1418 = toY$$1 - fromY$$1;
    var v1419 = v1418 * scale$$2;
    var v1420 = fromY$$1 - v1419;
    var otherToY = v1417(v1420);
    scale$$2 = 1;
    var v1421 = otherToY < 0;
    if(v1421) {
      var v1422 = fromY$$1 - otherToY;
      scale$$2 = fromY$$1 / v1422;
      otherToY = 0
    }else {
      var v1423 = qrcode.height;
      var v1424 = otherToY >= v1423;
      if(v1424) {
        var v1425 = qrcode.height;
        var v1426 = v1425 - 1;
        var v1427 = v1426 - fromY$$1;
        var v1428 = otherToY - fromY$$1;
        scale$$2 = v1427 / v1428;
        var v1429 = qrcode.height;
        otherToY = v1429 - 1
      }
    }
    var v1430 = Math.floor;
    v1430 = v1430.bind(Math);
    var v1431 = otherToX - fromX$$1;
    var v1432 = v1431 * scale$$2;
    var v1433 = fromX$$1 + v1432;
    otherToX = v1430(v1433);
    var v1434 = this.sizeOfBlackWhiteBlackRun;
    v1434 = v1434.bind(this);
    result += v1434(fromX$$1, fromY$$1, otherToX, otherToY);
    var v1435 = result - 1;
    return v1435
  }
  function v27(pattern$$1, otherPattern) {
    var v1436 = this.sizeOfBlackWhiteBlackRunBothWays;
    v1436 = v1436.bind(this);
    var v1437 = Math.floor;
    v1437 = v1437.bind(Math);
    var v1438 = pattern$$1.X;
    var v1439 = v1437(v1438);
    var v1440 = Math.floor;
    v1440 = v1440.bind(Math);
    var v1441 = pattern$$1.Y;
    var v1442 = v1440(v1441);
    var v1443 = Math.floor;
    v1443 = v1443.bind(Math);
    var v1444 = otherPattern.X;
    var v1445 = v1443(v1444);
    var v1446 = Math.floor;
    v1446 = v1446.bind(Math);
    var v1447 = otherPattern.Y;
    var v1448 = v1446(v1447);
    var moduleSizeEst1 = v1436(v1439, v1442, v1445, v1448);
    var v1449 = this.sizeOfBlackWhiteBlackRunBothWays;
    v1449 = v1449.bind(this);
    var v1450 = Math.floor;
    v1450 = v1450.bind(Math);
    var v1451 = otherPattern.X;
    var v1452 = v1450(v1451);
    var v1453 = Math.floor;
    v1453 = v1453.bind(Math);
    var v1454 = otherPattern.Y;
    var v1455 = v1453(v1454);
    var v1456 = Math.floor;
    v1456 = v1456.bind(Math);
    var v1457 = pattern$$1.X;
    var v1458 = v1456(v1457);
    var v1459 = Math.floor;
    v1459 = v1459.bind(Math);
    var v1460 = pattern$$1.Y;
    var v1461 = v1459(v1460);
    var moduleSizeEst2 = v1449(v1452, v1455, v1458, v1461);
    var v1462 = isNaN(moduleSizeEst1);
    if(v1462) {
      var v1463 = moduleSizeEst2 / 7;
      return v1463
    }
    var v1464 = isNaN(moduleSizeEst2);
    if(v1464) {
      var v1465 = moduleSizeEst1 / 7;
      return v1465
    }
    var v1466 = moduleSizeEst1 + moduleSizeEst2;
    var v1467 = v1466 / 14;
    return v1467
  }
  function v28(topLeft, topRight, bottomLeft) {
    var v1468 = this.calculateModuleSizeOneWay;
    v1468 = v1468.bind(this);
    var v1469 = v1468(topLeft, topRight);
    var v1470 = this.calculateModuleSizeOneWay;
    v1470 = v1470.bind(this);
    var v1471 = v1470(topLeft, bottomLeft);
    var v1472 = v1469 + v1471;
    var v1473 = v1472 / 2;
    return v1473
  }
  function v29(pattern1, pattern2) {
    var v1474 = pattern1.X;
    var v1475 = pattern2.X;
    xDiff = v1474 - v1475;
    var v1476 = pattern1.Y;
    var v1477 = pattern2.Y;
    yDiff = v1476 - v1477;
    var v1478 = Math.sqrt;
    v1478 = v1478.bind(Math);
    var v1479 = xDiff * xDiff;
    var v1480 = yDiff * yDiff;
    var v1481 = v1479 + v1480;
    var v1482 = v1478(v1481);
    return v1482
  }
  function v30(topLeft$$1, topRight$$1, bottomLeft$$1, moduleSize) {
    var v1483 = Math.round;
    v1483 = v1483.bind(Math);
    var v1484 = this.distance;
    v1484 = v1484.bind(this);
    var v1485 = v1484(topLeft$$1, topRight$$1);
    var v1486 = v1485 / moduleSize;
    var tltrCentersDimension = v1483(v1486);
    var v1487 = Math.round;
    v1487 = v1487.bind(Math);
    var v1488 = this.distance;
    v1488 = v1488.bind(this);
    var v1489 = v1488(topLeft$$1, bottomLeft$$1);
    var v1490 = v1489 / moduleSize;
    var tlblCentersDimension = v1487(v1490);
    var v1491 = tltrCentersDimension + tlblCentersDimension;
    var v1492 = v1491 >> 1;
    var dimension$$4 = v1492 + 7;
    var v1493 = dimension$$4 & 3;
    switch(v1493) {
      case 0:
        dimension$$4++;
        break;
      case 2:
        dimension$$4--;
        break;
      case 3:
        throw"Error";
    }
    return dimension$$4
  }
  function v31(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
    var v1494 = Math.floor;
    v1494 = v1494.bind(Math);
    var v1495 = allowanceFactor * overallEstModuleSize;
    var allowance = v1494(v1495);
    var v1496 = Math.max;
    v1496 = v1496.bind(Math);
    var v1497 = estAlignmentX - allowance;
    var alignmentAreaLeftX = v1496(0, v1497);
    var v1498 = Math.min;
    v1498 = v1498.bind(Math);
    var v1499 = qrcode.width;
    var v1500 = v1499 - 1;
    var v1501 = estAlignmentX + allowance;
    var alignmentAreaRightX = v1498(v1500, v1501);
    var v1502 = alignmentAreaRightX - alignmentAreaLeftX;
    var v1503 = overallEstModuleSize * 3;
    var v1504 = v1502 < v1503;
    if(v1504) {
      throw"Error";
    }
    var v1505 = Math.max;
    v1505 = v1505.bind(Math);
    var v1506 = estAlignmentY - allowance;
    var alignmentAreaTopY = v1505(0, v1506);
    var v1507 = Math.min;
    v1507 = v1507.bind(Math);
    var v1508 = qrcode.height;
    var v1509 = v1508 - 1;
    var v1510 = estAlignmentY + allowance;
    var alignmentAreaBottomY = v1507(v1509, v1510);
    var v1511 = this.image;
    var v1512 = alignmentAreaRightX - alignmentAreaLeftX;
    var v1513 = alignmentAreaBottomY - alignmentAreaTopY;
    var v1514 = this.resultPointCallback;
    var alignmentFinder = new AlignmentPatternFinder(v1511, alignmentAreaLeftX, alignmentAreaTopY, v1512, v1513, overallEstModuleSize, v1514);
    var v1515 = alignmentFinder.find;
    v1515 = v1515.bind(alignmentFinder);
    var v1516 = v1515();
    return v1516
  }
  function v32(topLeft$$2, topRight$$2, bottomLeft$$2, alignmentPattern, dimension$$5) {
    var dimMinusThree = dimension$$5 - 3.5;
    var bottomRightX;
    var bottomRightY;
    var sourceBottomRightX;
    var sourceBottomRightY;
    var v1517 = alignmentPattern != null;
    if(v1517) {
      var v1518 = alignmentPattern.X;
      bottomRightX = v1518;
      var v1519 = alignmentPattern.Y;
      bottomRightY = v1519;
      sourceBottomRightY = dimMinusThree - 3;
      sourceBottomRightX = sourceBottomRightY
    }else {
      var v1520 = topRight$$2.X;
      var v1521 = topLeft$$2.X;
      var v1522 = v1520 - v1521;
      var v1523 = bottomLeft$$2.X;
      bottomRightX = v1522 + v1523;
      var v1524 = topRight$$2.Y;
      var v1525 = topLeft$$2.Y;
      var v1526 = v1524 - v1525;
      var v1527 = bottomLeft$$2.Y;
      bottomRightY = v1526 + v1527;
      sourceBottomRightY = dimMinusThree;
      sourceBottomRightX = sourceBottomRightY
    }
    var v1528 = PerspectiveTransform.quadrilateralToQuadrilateral;
    v1528 = v1528.bind(PerspectiveTransform);
    var v1529 = topLeft$$2.X;
    var v1530 = topLeft$$2.Y;
    var v1531 = topRight$$2.X;
    var v1532 = topRight$$2.Y;
    var v1533 = bottomLeft$$2.X;
    var v1534 = bottomLeft$$2.Y;
    var transform$$2 = v1528(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, v1529, v1530, v1531, v1532, bottomRightX, bottomRightY, v1533, v1534);
    return transform$$2
  }
  function v33(image$$6, transform$$3, dimension$$6) {
    var sampler = GridSampler;
    var v1535 = sampler.sampleGrid3;
    v1535 = v1535.bind(sampler);
    var v1536 = v1535(image$$6, dimension$$6, transform$$3);
    return v1536
  }
  function v34(info) {
    var topLeft$$3 = info.TopLeft;
    var topRight$$3 = info.TopRight;
    var bottomLeft$$3 = info.BottomLeft;
    var v1537 = this.calculateModuleSize;
    v1537 = v1537.bind(this);
    var moduleSize$$1 = v1537(topLeft$$3, topRight$$3, bottomLeft$$3);
    var v1538 = moduleSize$$1 < 1;
    if(v1538) {
      throw"Error";
    }
    var v1539 = this.computeDimension;
    v1539 = v1539.bind(this);
    var dimension$$7 = v1539(topLeft$$3, topRight$$3, bottomLeft$$3, moduleSize$$1);
    var v1540 = Version.getProvisionalVersionForDimension;
    v1540 = v1540.bind(Version);
    var provisionalVersion = v1540(dimension$$7);
    var v1541 = provisionalVersion.DimensionForVersion;
    var modulesBetweenFPCenters = v1541 - 7;
    var alignmentPattern$$1 = null;
    var v1542 = provisionalVersion.AlignmentPatternCenters;
    var v1543 = v1542.length;
    var v1544 = v1543 > 0;
    if(v1544) {
      var v1545 = topRight$$3.X;
      var v1546 = topLeft$$3.X;
      var v1547 = v1545 - v1546;
      var v1548 = bottomLeft$$3.X;
      var bottomRightX$$1 = v1547 + v1548;
      var v1549 = topRight$$3.Y;
      var v1550 = topLeft$$3.Y;
      var v1551 = v1549 - v1550;
      var v1552 = bottomLeft$$3.Y;
      var bottomRightY$$1 = v1551 + v1552;
      var v1553 = 3 / modulesBetweenFPCenters;
      var correctionToTopLeft = 1 - v1553;
      var v1554 = Math.floor;
      v1554 = v1554.bind(Math);
      var v1555 = topLeft$$3.X;
      var v1556 = topLeft$$3.X;
      var v1557 = bottomRightX$$1 - v1556;
      var v1558 = correctionToTopLeft * v1557;
      var v1559 = v1555 + v1558;
      var estAlignmentX$$1 = v1554(v1559);
      var v1560 = Math.floor;
      v1560 = v1560.bind(Math);
      var v1561 = topLeft$$3.Y;
      var v1562 = topLeft$$3.Y;
      var v1563 = bottomRightY$$1 - v1562;
      var v1564 = correctionToTopLeft * v1563;
      var v1565 = v1561 + v1564;
      var estAlignmentY$$1 = v1560(v1565);
      var i$$7 = 4;
      var v168 = i$$7 <= 16;
      for(;v168;) {
        var v1566 = this.findAlignmentInRegion;
        v1566 = v1566.bind(this);
        alignmentPattern$$1 = v1566(moduleSize$$1, estAlignmentX$$1, estAlignmentY$$1, i$$7);
        break;
        v168 = i$$7 <= 16
      }
    }
    var v1567 = this.createTransform;
    v1567 = v1567.bind(this);
    var transform$$4 = v1567(topLeft$$3, topRight$$3, bottomLeft$$3, alignmentPattern$$1, dimension$$7);
    var v1568 = this.sampleGrid;
    v1568 = v1568.bind(this);
    var v1569 = this.image;
    var bits$$2 = v1568(v1569, transform$$4, dimension$$7);
    var points$$4;
    var v1570 = alignmentPattern$$1 == null;
    if(v1570) {
      points$$4 = new Array(bottomLeft$$3, topLeft$$3, topRight$$3)
    }else {
      points$$4 = new Array(bottomLeft$$3, topLeft$$3, topRight$$3, alignmentPattern$$1)
    }
    var v1571 = new DetectorResult(bits$$2, points$$4);
    return v1571
  }
  function v35() {
    var v1572 = new FinderPatternFinder;
    var v1573 = v1572.findFinderPattern;
    v1573 = v1573.bind(v1572);
    var v1574 = this.image;
    var info$$1 = v1573(v1574);
    var v1575 = this.processFinderPatternInfo;
    v1575 = v1575.bind(this);
    var v1576 = v1575(info$$1);
    return v1576
  }
  this.image = image$$5;
  this.resultPointCallback = null;
  this.sizeOfBlackWhiteBlackRun = v25;
  this.sizeOfBlackWhiteBlackRunBothWays = v26;
  this.calculateModuleSizeOneWay = v27;
  this.calculateModuleSize = v28;
  this.distance = v29;
  this.computeDimension = v30;
  this.findAlignmentInRegion = v31;
  this.createTransform = v32;
  this.sampleGrid = v33;
  this.processFinderPatternInfo = v34;
  this.detect = v35
}
function FormatInformation(formatInfo) {
  function v36() {
    var v1614 = this.errorCorrectionLevel;
    return v1614
  }
  function v37() {
    var v1616 = this.dataMask;
    return v1616
  }
  function v38() {
    var v1618 = this.errorCorrectionLevel;
    var v1619 = v1618.ordinal_Renamed_Field;
    var v1620 = v1619 << 3;
    var v1621 = v1620 | dataMask;
    return v1621
  }
  function v39(o) {
    var other$$5 = o;
    var v1622 = this.errorCorrectionLevel;
    var v1623 = other$$5.errorCorrectionLevel;
    var v323 = v1622 == v1623;
    if(v323) {
      var v1624 = this.dataMask;
      var v1625 = other$$5.dataMask;
      v323 = v1624 == v1625
    }
    return v323
  }
  var v1609 = ErrorCorrectionLevel.forBits;
  v1609 = v1609.bind(ErrorCorrectionLevel);
  var v1610 = formatInfo >> 3;
  var v1611 = v1610 & 3;
  var v1612 = v1609(v1611);
  this.errorCorrectionLevel = v1612;
  var v1613 = formatInfo & 7;
  this.dataMask = v1613;
  var v1615 = this.__defineGetter__;
  v1615 = v1615.bind(this);
  v1615("ErrorCorrectionLevel", v36);
  var v1617 = this.__defineGetter__;
  v1617 = v1617.bind(this);
  v1617("DataMask", v37);
  this.GetHashCode = v38;
  this.Equals = v39
}
function v40(a, b$$1) {
  a ^= b$$1;
  var v1626 = a & 15;
  var v1627 = BITS_SET_IN_HALF_BYTE[v1626];
  var v1628 = URShift(a, 4);
  var v1629 = v1628 & 15;
  var v1630 = BITS_SET_IN_HALF_BYTE[v1629];
  var v1631 = v1627 + v1630;
  var v1632 = URShift(a, 8);
  var v1633 = v1632 & 15;
  var v1634 = BITS_SET_IN_HALF_BYTE[v1633];
  var v1635 = v1631 + v1634;
  var v1636 = URShift(a, 12);
  var v1637 = v1636 & 15;
  var v1638 = BITS_SET_IN_HALF_BYTE[v1637];
  var v1639 = v1635 + v1638;
  var v1640 = URShift(a, 16);
  var v1641 = v1640 & 15;
  var v1642 = BITS_SET_IN_HALF_BYTE[v1641];
  var v1643 = v1639 + v1642;
  var v1644 = URShift(a, 20);
  var v1645 = v1644 & 15;
  var v1646 = BITS_SET_IN_HALF_BYTE[v1645];
  var v1647 = v1643 + v1646;
  var v1648 = URShift(a, 24);
  var v1649 = v1648 & 15;
  var v1650 = BITS_SET_IN_HALF_BYTE[v1649];
  var v1651 = v1647 + v1650;
  var v1652 = URShift(a, 28);
  var v1653 = v1652 & 15;
  var v1654 = BITS_SET_IN_HALF_BYTE[v1653];
  var v1655 = v1651 + v1654;
  return v1655
}
function v41(maskedFormatInfo) {
  var v1656 = FormatInformation.doDecodeFormatInformation;
  v1656 = v1656.bind(FormatInformation);
  var formatInfo$$1 = v1656(maskedFormatInfo);
  var v1657 = formatInfo$$1 != null;
  if(v1657) {
    return formatInfo$$1
  }
  var v1658 = FormatInformation.doDecodeFormatInformation;
  v1658 = v1658.bind(FormatInformation);
  var v1659 = maskedFormatInfo ^ FORMAT_INFO_MASK_QR;
  var v1660 = v1658(v1659);
  return v1660
}
function v42(maskedFormatInfo$$1) {
  var bestDifference$$1 = 4294967295;
  var bestFormatInfo = 0;
  var i$$8 = 0;
  var v1661 = FORMAT_INFO_DECODE_LOOKUP.length;
  var v169 = i$$8 < v1661;
  for(;v169;) {
    var decodeInfo = FORMAT_INFO_DECODE_LOOKUP[i$$8];
    var targetInfo = decodeInfo[0];
    var v1662 = targetInfo == maskedFormatInfo$$1;
    if(v1662) {
      var v1663 = decodeInfo[1];
      var v1664 = new FormatInformation(v1663);
      return v1664
    }
    var v1665 = this.numBitsDiffering;
    v1665 = v1665.bind(this);
    var bitsDifference$$1 = v1665(maskedFormatInfo$$1, targetInfo);
    var v1666 = bitsDifference$$1 < bestDifference$$1;
    if(v1666) {
      var v1667 = decodeInfo[1];
      bestFormatInfo = v1667;
      bestDifference$$1 = bitsDifference$$1
    }
    i$$8++;
    var v1668 = FORMAT_INFO_DECODE_LOOKUP.length;
    v169 = i$$8 < v1668
  }
  var v1669 = bestDifference$$1 <= 3;
  if(v1669) {
    var v1670 = new FormatInformation(bestFormatInfo);
    return v1670
  }
  return null
}
function ErrorCorrectionLevel(ordinal, bits$$3, name$$55) {
  function v43() {
    var v1671 = this.bits;
    return v1671
  }
  function v44() {
    var v1673 = this.name;
    return v1673
  }
  function v45() {
    var v1675 = this.ordinal_Renamed_Field;
    return v1675
  }
  this.ordinal_Renamed_Field = ordinal;
  this.bits = bits$$3;
  this.name = name$$55;
  var v1672 = this.__defineGetter__;
  v1672 = v1672.bind(this);
  v1672("Bits", v43);
  var v1674 = this.__defineGetter__;
  v1674 = v1674.bind(this);
  v1674("Name", v44);
  this.ordinal = v45
}
function v46(bits$$4) {
  var v385 = bits$$4 < 0;
  if(!v385) {
    var v1676 = FOR_BITS.Length;
    v385 = bits$$4 >= v1676
  }
  if(v385) {
    throw"ArgumentException";
  }
  transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
    var v1677 = FOR_BITS[bits$$4]
  }
  return v1677
}
function BitMatrix(width$$13, height$$12) {
  function v47() {
    var v1687 = this.width;
    return v1687
  }
  function v48() {
    var v1689 = this.height;
    return v1689
  }
  function v49() {
    var v1691 = this.width;
    var v1692 = this.height;
    var v1693 = v1691 != v1692;
    if(v1693) {
      throw"Can't call getDimension() on a non-square matrix";
    }
    var v1694 = this.width;
    return v1694
  }
  function v50(x$$57, y$$40) {
    var v1696 = this.rowSize;
    var v1697 = y$$40 * v1696;
    var v1698 = x$$57 >> 5;
    var offset$$15 = v1697 + v1698;
    var v1699 = this.bits;
    var v1700 = v1699[offset$$15];
    var v1701 = x$$57 & 31;
    var v1702 = URShift(v1700, v1701);
    var v1703 = v1702 & 1;
    var v1704 = v1703 != 0;
    return v1704
  }
  function v51(x$$58, y$$41) {
    var v1705 = this.rowSize;
    var v1706 = y$$41 * v1705;
    var v1707 = x$$58 >> 5;
    var offset$$16 = v1706 + v1707;
    var v1708 = this.bits;
    var v1709 = x$$58 & 31;
    var v1710 = 1 << v1709;
    v1708[offset$$16] |= v1710
  }
  function v52(x$$59, y$$42) {
    var v1711 = this.rowSize;
    var v1712 = y$$42 * v1711;
    var v1713 = x$$59 >> 5;
    var offset$$17 = v1712 + v1713;
    var v1714 = this.bits;
    var v1715 = x$$59 & 31;
    var v1716 = 1 << v1715;
    v1714[offset$$17] ^= v1716
  }
  function v53() {
    var v1717 = this.bits;
    var max$$3 = v1717.length;
    var i$$10 = 0;
    var v171 = i$$10 < max$$3;
    for(;v171;) {
      var v1718 = this.bits;
      v1718[i$$10] = 0;
      i$$10++;
      v171 = i$$10 < max$$3
    }
  }
  function v54(left$$3, top$$2, width$$14, height$$13) {
    var v387 = top$$2 < 0;
    if(!v387) {
      v387 = left$$3 < 0
    }
    if(v387) {
      throw"Left and top must be nonnegative";
    }
    var v388 = height$$13 < 1;
    if(!v388) {
      v388 = width$$14 < 1
    }
    if(v388) {
      throw"Height and width must be at least 1";
    }
    var right$$3 = left$$3 + width$$14;
    var bottom$$1 = top$$2 + height$$13;
    var v1719 = this.height;
    var v389 = bottom$$1 > v1719;
    if(!v389) {
      var v1720 = this.width;
      v389 = right$$3 > v1720
    }
    if(v389) {
      throw"The region must fit inside the matrix";
    }
    var y$$43 = top$$2;
    var v173 = y$$43 < bottom$$1;
    for(;v173;) {
      var v1721 = this.rowSize;
      var offset$$18 = y$$43 * v1721;
      var x$$60 = left$$3;
      var v172 = x$$60 < right$$3;
      for(;v172;) {
        var v1722 = this.bits;
        var v1723 = x$$60 >> 5;
        var v1724 = offset$$18 + v1723;
        var v1725 = x$$60 & 31;
        var v1726 = 1 << v1725;
        v1722[v1724] |= v1726;
        x$$60++;
        v172 = x$$60 < right$$3
      }
      y$$43++;
      v173 = y$$43 < bottom$$1
    }
  }
  if(!height$$12) {
    height$$12 = width$$13
  }
  var v386 = width$$13 < 1;
  if(!v386) {
    v386 = height$$12 < 1
  }
  if(v386) {
    throw"Both dimensions must be greater than 0";
  }
  this.width = width$$13;
  this.height = height$$12;
  var rowSize = width$$13 >> 5;
  var v1678 = width$$13 & 31;
  var v1679 = v1678 != 0;
  if(v1679) {
    rowSize++
  }
  this.rowSize = rowSize;
  var v1680 = rowSize * height$$12;
  var v1681 = new Array(v1680);
  this.bits = v1681;
  var i$$9 = 0;
  var v1682 = this.bits;
  var v1683 = v1682.length;
  var v170 = i$$9 < v1683;
  for(;v170;) {
    var v1684 = this.bits;
    v1684[i$$9] = 0;
    i$$9++;
    var v1685 = this.bits;
    var v1686 = v1685.length;
    v170 = i$$9 < v1686
  }
  var v1688 = this.__defineGetter__;
  v1688 = v1688.bind(this);
  v1688("Width", v47);
  var v1690 = this.__defineGetter__;
  v1690 = v1690.bind(this);
  v1690("Height", v48);
  var v1695 = this.__defineGetter__;
  v1695 = v1695.bind(this);
  v1695("Dimension", v49);
  this.get_Renamed = v50;
  this.set_Renamed = v51;
  this.flip = v52;
  this.clear = v53;
  this.setRegion = v54
}
function DataBlock(numDataCodewords, codewords) {
  function v55() {
    var v1727 = this.numDataCodewords;
    return v1727
  }
  function v56() {
    var v1729 = this.codewords;
    return v1729
  }
  this.numDataCodewords = numDataCodewords;
  this.codewords = codewords;
  var v1728 = this.__defineGetter__;
  v1728 = v1728.bind(this);
  v1728("NumDataCodewords", v55);
  var v1730 = this.__defineGetter__;
  v1730 = v1730.bind(this);
  v1730("Codewords", v56)
}
function v57(rawCodewords, version$$7, ecLevel$$1) {
  var v1731 = rawCodewords.length;
  var v1732 = version$$7.TotalCodewords;
  var v1733 = v1731 != v1732;
  if(v1733) {
    throw"ArgumentException";
  }
  var v1734 = version$$7.getECBlocksForLevel;
  v1734 = v1734.bind(version$$7);
  var ecBlocks = v1734(ecLevel$$1);
  var totalBlocks = 0;
  var ecBlockArray = ecBlocks.ecBlocks;
  var i$$11 = 0;
  var v1735 = ecBlockArray.length;
  var v174 = i$$11 < v1735;
  for(;v174;) {
    var v1736 = ecBlockArray[i$$11];
    var v1737 = v1736.Count;
    totalBlocks += v1737;
    i$$11++;
    var v1738 = ecBlockArray.length;
    v174 = i$$11 < v1738
  }
  var result$$1 = new Array(totalBlocks);
  var numResultBlocks = 0;
  var j = 0;
  var v1739 = ecBlockArray.length;
  var v176 = j < v1739;
  for(;v176;) {
    var ecBlock$$1 = ecBlockArray[j];
    i$$11 = 0;
    var v1740 = ecBlock$$1.Count;
    var v175 = i$$11 < v1740;
    for(;v175;) {
      var numDataCodewords$$1 = ecBlock$$1.DataCodewords;
      var v1741 = ecBlocks.ECCodewordsPerBlock;
      var numBlockCodewords = v1741 + numDataCodewords$$1;
      var v1742 = new Array(numBlockCodewords);
      var v1743 = new DataBlock(numDataCodewords$$1, v1742);
      result$$1[numResultBlocks] = v1743;
      numResultBlocks++;
      i$$11++;
      var v1744 = ecBlock$$1.Count;
      v175 = i$$11 < v1744
    }
    j++;
    var v1745 = ecBlockArray.length;
    v176 = j < v1745
  }
  var v1746 = result$$1[0];
  var v1747 = v1746.codewords;
  var shorterBlocksTotalCodewords = v1747.length;
  var v1748 = result$$1.length;
  var longerBlocksStartAt = v1748 - 1;
  var v177 = longerBlocksStartAt >= 0;
  for(;v177;) {
    var v1749 = result$$1[longerBlocksStartAt];
    var v1750 = v1749.codewords;
    var numCodewords = v1750.length;
    var v1751 = numCodewords == shorterBlocksTotalCodewords;
    if(v1751) {
      break
    }
    longerBlocksStartAt--;
    v177 = longerBlocksStartAt >= 0
  }
  longerBlocksStartAt++;
  var v1752 = ecBlocks.ECCodewordsPerBlock;
  var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - v1752;
  var rawCodewordsOffset = 0;
  i$$11 = 0;
  var v179 = i$$11 < shorterBlocksNumDataCodewords;
  for(;v179;) {
    j = 0;
    var v178 = j < numResultBlocks;
    for(;v178;) {
      var v1753 = result$$1[j];
      var v1754 = v1753.codewords;
      var v1755 = rawCodewords[rawCodewordsOffset];
      v1754[i$$11] = v1755;
      rawCodewordsOffset++;
      j++;
      v178 = j < numResultBlocks
    }
    i$$11++;
    v179 = i$$11 < shorterBlocksNumDataCodewords
  }
  j = longerBlocksStartAt;
  var v180 = j < numResultBlocks;
  for(;v180;) {
    var v1756 = result$$1[j];
    var v1757 = v1756.codewords;
    var v1758 = rawCodewords[rawCodewordsOffset];
    v1757[shorterBlocksNumDataCodewords] = v1758;
    rawCodewordsOffset++;
    j++;
    v180 = j < numResultBlocks
  }
  var v1759 = result$$1[0];
  var v1760 = v1759.codewords;
  var max$$4 = v1760.length;
  i$$11 = shorterBlocksNumDataCodewords;
  var v182 = i$$11 < max$$4;
  for(;v182;) {
    j = 0;
    var v181 = j < numResultBlocks;
    for(;v181;) {
      var v304;
      var v1761 = j < longerBlocksStartAt;
      if(v1761) {
        v304 = i$$11
      }else {
        v304 = i$$11 + 1
      }
      var iOffset = v304;
      var v1762 = result$$1[j];
      var v1763 = v1762.codewords;
      var v1764 = rawCodewords[rawCodewordsOffset];
      v1763[iOffset] = v1764;
      rawCodewordsOffset++;
      j++;
      v181 = j < numResultBlocks
    }
    i$$11++;
    v182 = i$$11 < max$$4
  }
  return result$$1
}
function BitMatrixParser(bitMatrix$$1) {
  function v58(i$$12, j$$1, versionBits$$1) {
    var v305;
    var v1766 = this.bitMatrix;
    var v1767 = v1766.get_Renamed;
    v1767 = v1767.bind(v1766);
    var v1768 = v1767(i$$12, j$$1);
    if(v1768) {
      var v1769 = versionBits$$1 << 1;
      v305 = v1769 | 1
    }else {
      v305 = versionBits$$1 << 1
    }
    return v305
  }
  function v59() {
    var v1770 = this.parsedFormatInfo;
    var v1771 = v1770 != null;
    if(v1771) {
      var v1772 = this.parsedFormatInfo;
      return v1772
    }
    var formatInfoBits = 0;
    var i$$13 = 0;
    var v183 = i$$13 < 6;
    for(;v183;) {
      var v1773 = this.copyBit;
      v1773 = v1773.bind(this);
      formatInfoBits = v1773(i$$13, 8, formatInfoBits);
      i$$13++;
      v183 = i$$13 < 6
    }
    var v1774 = this.copyBit;
    v1774 = v1774.bind(this);
    formatInfoBits = v1774(7, 8, formatInfoBits);
    var v1775 = this.copyBit;
    v1775 = v1775.bind(this);
    formatInfoBits = v1775(8, 8, formatInfoBits);
    var v1776 = this.copyBit;
    v1776 = v1776.bind(this);
    formatInfoBits = v1776(8, 7, formatInfoBits);
    var j$$2 = 5;
    var v184 = j$$2 >= 0;
    for(;v184;) {
      var v1777 = this.copyBit;
      v1777 = v1777.bind(this);
      formatInfoBits = v1777(8, j$$2, formatInfoBits);
      j$$2--;
      v184 = j$$2 >= 0
    }
    var v1778 = FormatInformation.decodeFormatInformation;
    v1778 = v1778.bind(FormatInformation);
    var v1779 = v1778(formatInfoBits);
    this.parsedFormatInfo = v1779;
    var v1780 = this.parsedFormatInfo;
    var v1781 = v1780 != null;
    if(v1781) {
      var v1782 = this.parsedFormatInfo;
      return v1782
    }
    var v1783 = this.bitMatrix;
    var dimension$$9 = v1783.Dimension;
    formatInfoBits = 0;
    var iMin = dimension$$9 - 8;
    i$$13 = dimension$$9 - 1;
    var v185 = i$$13 >= iMin;
    for(;v185;) {
      var v1784 = this.copyBit;
      v1784 = v1784.bind(this);
      formatInfoBits = v1784(i$$13, 8, formatInfoBits);
      i$$13--;
      v185 = i$$13 >= iMin
    }
    j$$2 = dimension$$9 - 7;
    var v186 = j$$2 < dimension$$9;
    for(;v186;) {
      var v1785 = this.copyBit;
      v1785 = v1785.bind(this);
      formatInfoBits = v1785(8, j$$2, formatInfoBits);
      j$$2++;
      v186 = j$$2 < dimension$$9
    }
    var v1786 = FormatInformation.decodeFormatInformation;
    v1786 = v1786.bind(FormatInformation);
    var v1787 = v1786(formatInfoBits);
    this.parsedFormatInfo = v1787;
    var v1788 = this.parsedFormatInfo;
    var v1789 = v1788 != null;
    if(v1789) {
      var v1790 = this.parsedFormatInfo;
      return v1790
    }
    throw"Error readFormatInformation";
  }
  function v60() {
    var v1791 = this.parsedVersion;
    var v1792 = v1791 != null;
    if(v1792) {
      var v1793 = this.parsedVersion;
      return v1793
    }
    var v1794 = this.bitMatrix;
    var dimension$$10 = v1794.Dimension;
    var v1795 = dimension$$10 - 17;
    var provisionalVersion$$1 = v1795 >> 2;
    var v1796 = provisionalVersion$$1 <= 6;
    if(v1796) {
      var v1797 = Version.getVersionForNumber;
      v1797 = v1797.bind(Version);
      var v1798 = v1797(provisionalVersion$$1);
      return v1798
    }
    var versionBits$$2 = 0;
    var ijMin = dimension$$10 - 11;
    var j$$3 = 5;
    var v188 = j$$3 >= 0;
    for(;v188;) {
      var i$$14 = dimension$$10 - 9;
      var v187 = i$$14 >= ijMin;
      for(;v187;) {
        var v1799 = this.copyBit;
        v1799 = v1799.bind(this);
        versionBits$$2 = v1799(i$$14, j$$3, versionBits$$2);
        i$$14--;
        v187 = i$$14 >= ijMin
      }
      j$$3--;
      v188 = j$$3 >= 0
    }
    var v1800 = Version.decodeVersionInformation;
    v1800 = v1800.bind(Version);
    var v1801 = v1800(versionBits$$2);
    this.parsedVersion = v1801;
    var v1802 = this.parsedVersion;
    var v324 = v1802 != null;
    if(v324) {
      var v1803 = this.parsedVersion;
      var v1804 = v1803.DimensionForVersion;
      v324 = v1804 == dimension$$10
    }
    if(v324) {
      var v1805 = this.parsedVersion;
      return v1805
    }
    versionBits$$2 = 0;
    i$$14 = 5;
    var v190 = i$$14 >= 0;
    for(;v190;) {
      j$$3 = dimension$$10 - 9;
      var v189 = j$$3 >= ijMin;
      for(;v189;) {
        var v1806 = this.copyBit;
        v1806 = v1806.bind(this);
        versionBits$$2 = v1806(i$$14, j$$3, versionBits$$2);
        j$$3--;
        v189 = j$$3 >= ijMin
      }
      i$$14--;
      v190 = i$$14 >= 0
    }
    var v1807 = Version.decodeVersionInformation;
    v1807 = v1807.bind(Version);
    var v1808 = v1807(versionBits$$2);
    this.parsedVersion = v1808;
    var v1809 = this.parsedVersion;
    var v325 = v1809 != null;
    if(v325) {
      var v1810 = this.parsedVersion;
      var v1811 = v1810.DimensionForVersion;
      v325 = v1811 == dimension$$10
    }
    if(v325) {
      var v1812 = this.parsedVersion;
      return v1812
    }
    throw"Error readVersion";
  }
  function v61() {
    var v1813 = this.readFormatInformation;
    v1813 = v1813.bind(this);
    var formatInfo$$2 = v1813();
    var v1814 = this.readVersion;
    v1814 = v1814.bind(this);
    var version$$8 = v1814();
    var v1815 = DataMask.forReference;
    v1815 = v1815.bind(DataMask);
    var v1816 = formatInfo$$2.DataMask;
    var dataMask$$1 = v1815(v1816);
    var v1817 = this.bitMatrix;
    var dimension$$11 = v1817.Dimension;
    var v1818 = dataMask$$1.unmaskBitMatrix;
    v1818 = v1818.bind(dataMask$$1);
    var v1819 = this.bitMatrix;
    v1818(v1819, dimension$$11);
    var v1820 = version$$8.buildFunctionPattern;
    v1820 = v1820.bind(version$$8);
    var functionPattern = v1820();
    var readingUp = true;
    var v1821 = version$$8.TotalCodewords;
    var result$$2 = new Array(v1821);
    var resultOffset = 0;
    var currentByte = 0;
    var bitsRead = 0;
    var j$$4 = dimension$$11 - 1;
    var v193 = j$$4 > 0;
    for(;v193;) {
      var v1822 = j$$4 == 6;
      if(v1822) {
        j$$4--
      }
      var count$$7 = 0;
      var v192 = count$$7 < dimension$$11;
      for(;v192;) {
        var v306;
        if(readingUp) {
          var v1823 = dimension$$11 - 1;
          v306 = v1823 - count$$7
        }else {
          v306 = count$$7
        }
        var i$$15 = v306;
        var col = 0;
        var v191 = col < 2;
        for(;v191;) {
          var v1824 = functionPattern.get_Renamed;
          v1824 = v1824.bind(functionPattern);
          var v1825 = j$$4 - col;
          if(!v1824(v1825, i$$15)) {
            bitsRead++;
            currentByte <<= 1;
            var v1826 = this.bitMatrix;
            var v1827 = v1826.get_Renamed;
            v1827 = v1827.bind(v1826);
            var v1828 = j$$4 - col;
            var v1829 = v1827(v1828, i$$15);
            if(v1829) {
              currentByte |= 1
            }
            var v1830 = bitsRead == 8;
            if(v1830) {
              result$$2[resultOffset] = currentByte;
              resultOffset++;
              bitsRead = 0;
              currentByte = 0
            }
          }
          col++;
          v191 = col < 2
        }
        count$$7++;
        v192 = count$$7 < dimension$$11
      }
      readingUp ^= true;
      j$$4 -= 2;
      v193 = j$$4 > 0
    }
    var v1831 = version$$8.TotalCodewords;
    var v1832 = resultOffset != v1831;
    if(v1832) {
      throw"Error readCodewords";
    }
    return result$$2
  }
  var dimension$$8 = bitMatrix$$1.Dimension;
  var v390 = dimension$$8 < 21;
  if(!v390) {
    var v1765 = dimension$$8 & 3;
    v390 = v1765 != 1
  }
  if(v390) {
    throw"Error BitMatrixParser";
  }
  this.bitMatrix = bitMatrix$$1;
  this.parsedVersion = null;
  this.parsedFormatInfo = null;
  this.copyBit = v58;
  this.readFormatInformation = v59;
  this.readVersion = v60;
  this.readCodewords = v61
}
function v62(reference) {
  var v391 = reference < 0;
  if(!v391) {
    v391 = reference > 7
  }
  if(v391) {
    throw"System.ArgumentException";
  }
  var v1833 = DataMask.DATA_MASKS;
  transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
    var v1834 = v1833[reference]
  }
  return v1834
}
function DataMask000() {
  function v63(bits$$5, dimension$$12) {
    var i$$16 = 0;
    var v195 = i$$16 < dimension$$12;
    for(;v195;) {
      var j$$5 = 0;
      var v194 = j$$5 < dimension$$12;
      for(;v194;) {
        var v1835 = this.isMasked;
        v1835 = v1835.bind(this);
        var v1836 = v1835(i$$16, j$$5);
        if(v1836) {
          var v1837 = bits$$5.flip;
          v1837 = v1837.bind(bits$$5);
          v1837(j$$5, i$$16)
        }
        j$$5++;
        v194 = j$$5 < dimension$$12
      }
      i$$16++;
      v195 = i$$16 < dimension$$12
    }
  }
  function v64(i$$17, j$$6) {
    var v1838 = i$$17 + j$$6;
    var v1839 = v1838 & 1;
    var v1840 = v1839 == 0;
    return v1840
  }
  this.unmaskBitMatrix = v63;
  this.isMasked = v64
}
function DataMask001() {
  function v65(bits$$6, dimension$$13) {
    var i$$18 = 0;
    var v197 = i$$18 < dimension$$13;
    for(;v197;) {
      var j$$7 = 0;
      var v196 = j$$7 < dimension$$13;
      for(;v196;) {
        var v1841 = this.isMasked;
        v1841 = v1841.bind(this);
        var v1842 = v1841(i$$18, j$$7);
        if(v1842) {
          var v1843 = bits$$6.flip;
          v1843 = v1843.bind(bits$$6);
          v1843(j$$7, i$$18)
        }
        j$$7++;
        v196 = j$$7 < dimension$$13
      }
      i$$18++;
      v197 = i$$18 < dimension$$13
    }
  }
  function v66(i$$19, j$$8) {
    var v1844 = i$$19 & 1;
    var v1845 = v1844 == 0;
    return v1845
  }
  this.unmaskBitMatrix = v65;
  this.isMasked = v66
}
function DataMask010() {
  function v67(bits$$7, dimension$$14) {
    var i$$20 = 0;
    var v199 = i$$20 < dimension$$14;
    for(;v199;) {
      var j$$9 = 0;
      var v198 = j$$9 < dimension$$14;
      for(;v198;) {
        var v1846 = this.isMasked;
        v1846 = v1846.bind(this);
        var v1847 = v1846(i$$20, j$$9);
        if(v1847) {
          var v1848 = bits$$7.flip;
          v1848 = v1848.bind(bits$$7);
          v1848(j$$9, i$$20)
        }
        j$$9++;
        v198 = j$$9 < dimension$$14
      }
      i$$20++;
      v199 = i$$20 < dimension$$14
    }
  }
  function v68(i$$21, j$$10) {
    var v1849 = j$$10 % 3;
    var v1850 = v1849 == 0;
    return v1850
  }
  this.unmaskBitMatrix = v67;
  this.isMasked = v68
}
function DataMask011() {
  function v69(bits$$8, dimension$$15) {
    var i$$22 = 0;
    var v201 = i$$22 < dimension$$15;
    for(;v201;) {
      var j$$11 = 0;
      var v200 = j$$11 < dimension$$15;
      for(;v200;) {
        var v1851 = this.isMasked;
        v1851 = v1851.bind(this);
        var v1852 = v1851(i$$22, j$$11);
        if(v1852) {
          var v1853 = bits$$8.flip;
          v1853 = v1853.bind(bits$$8);
          v1853(j$$11, i$$22)
        }
        j$$11++;
        v200 = j$$11 < dimension$$15
      }
      i$$22++;
      v201 = i$$22 < dimension$$15
    }
  }
  function v70(i$$23, j$$12) {
    var v1854 = i$$23 + j$$12;
    var v1855 = v1854 % 3;
    var v1856 = v1855 == 0;
    return v1856
  }
  this.unmaskBitMatrix = v69;
  this.isMasked = v70
}
function DataMask100() {
  function v71(bits$$9, dimension$$16) {
    var i$$24 = 0;
    var v203 = i$$24 < dimension$$16;
    for(;v203;) {
      var j$$13 = 0;
      var v202 = j$$13 < dimension$$16;
      for(;v202;) {
        var v1857 = this.isMasked;
        v1857 = v1857.bind(this);
        var v1858 = v1857(i$$24, j$$13);
        if(v1858) {
          var v1859 = bits$$9.flip;
          v1859 = v1859.bind(bits$$9);
          v1859(j$$13, i$$24)
        }
        j$$13++;
        v202 = j$$13 < dimension$$16
      }
      i$$24++;
      v203 = i$$24 < dimension$$16
    }
  }
  function v72(i$$25, j$$14) {
    var v1860 = URShift(i$$25, 1);
    var v1861 = j$$14 / 3;
    var v1862 = v1860 + v1861;
    var v1863 = v1862 & 1;
    var v1864 = v1863 == 0;
    return v1864
  }
  this.unmaskBitMatrix = v71;
  this.isMasked = v72
}
function DataMask101() {
  function v73(bits$$10, dimension$$17) {
    var i$$26 = 0;
    var v205 = i$$26 < dimension$$17;
    for(;v205;) {
      var j$$15 = 0;
      var v204 = j$$15 < dimension$$17;
      for(;v204;) {
        var v1865 = this.isMasked;
        v1865 = v1865.bind(this);
        var v1866 = v1865(i$$26, j$$15);
        if(v1866) {
          var v1867 = bits$$10.flip;
          v1867 = v1867.bind(bits$$10);
          v1867(j$$15, i$$26)
        }
        j$$15++;
        v204 = j$$15 < dimension$$17
      }
      i$$26++;
      v205 = i$$26 < dimension$$17
    }
  }
  function v74(i$$27, j$$16) {
    var temp$$1 = i$$27 * j$$16;
    var v1868 = temp$$1 & 1;
    var v1869 = temp$$1 % 3;
    var v1870 = v1868 + v1869;
    var v1871 = v1870 == 0;
    return v1871
  }
  this.unmaskBitMatrix = v73;
  this.isMasked = v74
}
function DataMask110() {
  function v75(bits$$11, dimension$$18) {
    var i$$28 = 0;
    var v207 = i$$28 < dimension$$18;
    for(;v207;) {
      var j$$17 = 0;
      var v206 = j$$17 < dimension$$18;
      for(;v206;) {
        var v1872 = this.isMasked;
        v1872 = v1872.bind(this);
        var v1873 = v1872(i$$28, j$$17);
        if(v1873) {
          var v1874 = bits$$11.flip;
          v1874 = v1874.bind(bits$$11);
          v1874(j$$17, i$$28)
        }
        j$$17++;
        v206 = j$$17 < dimension$$18
      }
      i$$28++;
      v207 = i$$28 < dimension$$18
    }
  }
  function v76(i$$29, j$$18) {
    var temp$$2 = i$$29 * j$$18;
    var v1875 = temp$$2 & 1;
    var v1876 = temp$$2 % 3;
    var v1877 = v1875 + v1876;
    var v1878 = v1877 & 1;
    var v1879 = v1878 == 0;
    return v1879
  }
  this.unmaskBitMatrix = v75;
  this.isMasked = v76
}
function DataMask111() {
  function v77(bits$$12, dimension$$19) {
    var i$$30 = 0;
    var v209 = i$$30 < dimension$$19;
    for(;v209;) {
      var j$$19 = 0;
      var v208 = j$$19 < dimension$$19;
      for(;v208;) {
        var v1880 = this.isMasked;
        v1880 = v1880.bind(this);
        var v1881 = v1880(i$$30, j$$19);
        if(v1881) {
          var v1882 = bits$$12.flip;
          v1882 = v1882.bind(bits$$12);
          v1882(j$$19, i$$30)
        }
        j$$19++;
        v208 = j$$19 < dimension$$19
      }
      i$$30++;
      v209 = i$$30 < dimension$$19
    }
  }
  function v78(i$$31, j$$20) {
    var v1883 = i$$31 + j$$20;
    var v1884 = v1883 & 1;
    var v1885 = i$$31 * j$$20;
    var v1886 = v1885 % 3;
    var v1887 = v1884 + v1886;
    var v1888 = v1887 & 1;
    var v1889 = v1888 == 0;
    return v1889
  }
  this.unmaskBitMatrix = v77;
  this.isMasked = v78
}
function ReedSolomonDecoder(field) {
  function v79(received, twoS) {
    var v1899 = this.field;
    var poly = new GF256Poly(v1899, received);
    var syndromeCoefficients = new Array(twoS);
    var i$$32 = 0;
    var v1900 = syndromeCoefficients.length;
    var v210 = i$$32 < v1900;
    for(;v210;) {
      syndromeCoefficients[i$$32] = 0;
      i$$32++;
      var v1901 = syndromeCoefficients.length;
      v210 = i$$32 < v1901
    }
    var dataMatrix = false;
    var noError = true;
    i$$32 = 0;
    var v211 = i$$32 < twoS;
    for(;v211;) {
      var v307;
      if(dataMatrix) {
        v307 = i$$32 + 1
      }else {
        v307 = i$$32
      }
      var v1902 = poly.evaluateAt;
      v1902 = v1902.bind(poly);
      var v1903 = this.field;
      var v1904 = v1903.exp;
      v1904 = v1904.bind(v1903);
      var v1905 = v1904(v307);
      var eval$$1 = v1902(v1905);
      var v1906 = syndromeCoefficients.length;
      var v1907 = v1906 - 1;
      var v1908 = v1907 - i$$32;
      syndromeCoefficients[v1908] = eval$$1;
      var v1909 = eval$$1 != 0;
      if(v1909) {
        noError = false
      }
      i$$32++;
      v211 = i$$32 < twoS
    }
    if(noError) {
      return
    }
    var v1910 = this.field;
    var syndrome = new GF256Poly(v1910, syndromeCoefficients);
    var v1911 = this.runEuclideanAlgorithm;
    v1911 = v1911.bind(this);
    var v1912 = this.field;
    var v1913 = v1912.buildMonomial;
    v1913 = v1913.bind(v1912);
    var v1914 = v1913(twoS, 1);
    var sigmaOmega = v1911(v1914, syndrome, twoS);
    var sigma = sigmaOmega[0];
    var omega = sigmaOmega[1];
    var v1915 = this.findErrorLocations;
    v1915 = v1915.bind(this);
    var errorLocations = v1915(sigma);
    var v1916 = this.findErrorMagnitudes;
    v1916 = v1916.bind(this);
    var errorMagnitudes = v1916(omega, errorLocations, dataMatrix);
    i$$32 = 0;
    var v1917 = errorLocations.length;
    var v212 = i$$32 < v1917;
    for(;v212;) {
      var v1918 = received.length;
      var v1919 = v1918 - 1;
      var v1920 = this.field;
      var v1921 = v1920.log;
      v1921 = v1921.bind(v1920);
      var v1922 = errorLocations[i$$32];
      var v1923 = v1921(v1922);
      var position = v1919 - v1923;
      var v1924 = position < 0;
      if(v1924) {
        throw"ReedSolomonException Bad error location";
      }
      var v1925 = GF256.addOrSubtract;
      v1925 = v1925.bind(GF256);
      var v1926 = received[position];
      var v1927 = errorMagnitudes[i$$32];
      var v1928 = v1925(v1926, v1927);
      received[position] = v1928;
      i$$32++;
      var v1929 = errorLocations.length;
      v212 = i$$32 < v1929
    }
  }
  function v80(a$$1, b$$2, R) {
    var v1930 = a$$1.Degree;
    var v1931 = b$$2.Degree;
    var v1932 = v1930 < v1931;
    if(v1932) {
      var temp$$3 = a$$1;
      a$$1 = b$$2;
      b$$2 = temp$$3
    }
    var rLast = a$$1;
    var r$$1 = b$$2;
    var v1933 = this.field;
    var sLast = v1933.One;
    var v1934 = this.field;
    var s$$2 = v1934.Zero;
    var v1935 = this.field;
    var tLast = v1935.Zero;
    var v1936 = this.field;
    var t = v1936.One;
    var v1937 = r$$1.Degree;
    var v1938 = Math.floor;
    v1938 = v1938.bind(Math);
    var v1939 = R / 2;
    var v1940 = v1938(v1939);
    var v214 = v1937 >= v1940;
    for(;v214;) {
      var rLastLast = rLast;
      var sLastLast = sLast;
      var tLastLast = tLast;
      rLast = r$$1;
      sLast = s$$2;
      tLast = t;
      var v1941 = rLast.Zero;
      if(v1941) {
        throw"r_{i-1} was zero";
      }
      r$$1 = rLastLast;
      var v1942 = this.field;
      var q = v1942.Zero;
      var v1943 = rLast.getCoefficient;
      v1943 = v1943.bind(rLast);
      var v1944 = rLast.Degree;
      var denominatorLeadingTerm = v1943(v1944);
      var v1945 = this.field;
      var v1946 = v1945.inverse;
      v1946 = v1946.bind(v1945);
      var dltInverse = v1946(denominatorLeadingTerm);
      var v1947 = r$$1.Degree;
      var v1948 = rLast.Degree;
      var v326 = v1947 >= v1948;
      if(v326) {
        v326 = !r$$1.Zero
      }
      var v213 = v326;
      for(;v213;) {
        var v1949 = r$$1.Degree;
        var v1950 = rLast.Degree;
        var degreeDiff = v1949 - v1950;
        var v1951 = this.field;
        var v1952 = v1951.multiply;
        v1952 = v1952.bind(v1951);
        var v1953 = r$$1.getCoefficient;
        v1953 = v1953.bind(r$$1);
        var v1954 = r$$1.Degree;
        var v1955 = v1953(v1954);
        var scale$$3 = v1952(v1955, dltInverse);
        var v1956 = q.addOrSubtract;
        v1956 = v1956.bind(q);
        var v1957 = this.field;
        var v1958 = v1957.buildMonomial;
        v1958 = v1958.bind(v1957);
        var v1959 = v1958(degreeDiff, scale$$3);
        q = v1956(v1959);
        var v1960 = r$$1.addOrSubtract;
        v1960 = v1960.bind(r$$1);
        var v1961 = rLast.multiplyByMonomial;
        v1961 = v1961.bind(rLast);
        var v1962 = v1961(degreeDiff, scale$$3);
        r$$1 = v1960(v1962);
        var v1963 = r$$1.Degree;
        var v1964 = rLast.Degree;
        var v327 = v1963 >= v1964;
        if(v327) {
          v327 = !r$$1.Zero
        }
        v213 = v327
      }
      var v1965 = q.multiply1;
      v1965 = v1965.bind(q);
      var v1966 = v1965(sLast);
      var v1967 = v1966.addOrSubtract;
      v1967 = v1967.bind(v1966);
      s$$2 = v1967(sLastLast);
      var v1968 = q.multiply1;
      v1968 = v1968.bind(q);
      var v1969 = v1968(tLast);
      var v1970 = v1969.addOrSubtract;
      v1970 = v1970.bind(v1969);
      t = v1970(tLastLast);
      var v1971 = r$$1.Degree;
      var v1972 = Math.floor;
      v1972 = v1972.bind(Math);
      var v1973 = R / 2;
      var v1974 = v1972(v1973);
      v214 = v1971 >= v1974
    }
    var v1975 = t.getCoefficient;
    v1975 = v1975.bind(t);
    var sigmaTildeAtZero = v1975(0);
    var v1976 = sigmaTildeAtZero == 0;
    if(v1976) {
      throw"ReedSolomonException sigmaTilde(0) was zero";
    }
    var v1977 = this.field;
    var v1978 = v1977.inverse;
    v1978 = v1978.bind(v1977);
    var inverse = v1978(sigmaTildeAtZero);
    var v1979 = t.multiply2;
    v1979 = v1979.bind(t);
    var sigma$$1 = v1979(inverse);
    var v1980 = r$$1.multiply2;
    v1980 = v1980.bind(r$$1);
    var omega$$1 = v1980(inverse);
    var v1981 = new Array(sigma$$1, omega$$1);
    return v1981
  }
  function v81(errorLocator) {
    var numErrors = errorLocator.Degree;
    var v1982 = numErrors == 1;
    if(v1982) {
      var v1983 = errorLocator.getCoefficient;
      v1983 = v1983.bind(errorLocator);
      var v1984 = v1983(1);
      var v1985 = new Array(v1984);
      return v1985
    }
    var result$$3 = new Array(numErrors);
    var e$$12 = 0;
    var i$$33 = 1;
    var v328 = i$$33 < 256;
    if(v328) {
      v328 = e$$12 < numErrors
    }
    var v215 = v328;
    for(;v215;) {
      var v1986 = errorLocator.evaluateAt;
      v1986 = v1986.bind(errorLocator);
      var v1987 = v1986(i$$33);
      var v1988 = v1987 == 0;
      if(v1988) {
        var v1989 = this.field;
        var v1990 = v1989.inverse;
        v1990 = v1990.bind(v1989);
        var v1991 = v1990(i$$33);
        result$$3[e$$12] = v1991;
        e$$12++
      }
      i$$33++;
      var v329 = i$$33 < 256;
      if(v329) {
        v329 = e$$12 < numErrors
      }
      v215 = v329
    }
    var v1992 = e$$12 != numErrors;
    if(v1992) {
      throw"Error locator degree does not match number of roots";
    }
    return result$$3
  }
  function v82(errorEvaluator, errorLocations$$1, dataMatrix$$1) {
    var s$$3 = errorLocations$$1.length;
    var result$$4 = new Array(s$$3);
    var i$$34 = 0;
    var v217 = i$$34 < s$$3;
    for(;v217;) {
      var v1993 = this.field;
      var v1994 = v1993.inverse;
      v1994 = v1994.bind(v1993);
      var v1995 = errorLocations$$1[i$$34];
      var xiInverse = v1994(v1995);
      var denominator$$3 = 1;
      var j$$21 = 0;
      var v216 = j$$21 < s$$3;
      for(;v216;) {
        var v1996 = i$$34 != j$$21;
        if(v1996) {
          var v1997 = this.field;
          var v1998 = v1997.multiply;
          v1998 = v1998.bind(v1997);
          var v1999 = GF256.addOrSubtract;
          v1999 = v1999.bind(GF256);
          var v2000 = this.field;
          var v2001 = v2000.multiply;
          v2001 = v2001.bind(v2000);
          var v2002 = errorLocations$$1[j$$21];
          var v2003 = v2001(v2002, xiInverse);
          var v2004 = v1999(1, v2003);
          denominator$$3 = v1998(denominator$$3, v2004)
        }
        j$$21++;
        v216 = j$$21 < s$$3
      }
      var v2005 = this.field;
      var v2006 = v2005.multiply;
      v2006 = v2006.bind(v2005);
      var v2007 = errorEvaluator.evaluateAt;
      v2007 = v2007.bind(errorEvaluator);
      var v2008 = v2007(xiInverse);
      var v2009 = this.field;
      var v2010 = v2009.inverse;
      v2010 = v2010.bind(v2009);
      var v2011 = v2010(denominator$$3);
      var v2012 = v2006(v2008, v2011);
      result$$4[i$$34] = v2012;
      if(dataMatrix$$1) {
        var v2013 = this.field;
        var v2014 = v2013.multiply;
        v2014 = v2014.bind(v2013);
        var v2015 = result$$4[i$$34];
        var v2016 = v2014(v2015, xiInverse);
        result$$4[i$$34] = v2016
      }
      i$$34++;
      v217 = i$$34 < s$$3
    }
    return result$$4
  }
  this.field = field;
  this.decode = v79;
  this.runEuclideanAlgorithm = v80;
  this.findErrorLocations = v81;
  this.findErrorMagnitudes = v82
}
function GF256Poly(field$$1, coefficients) {
  function v83() {
    var v2038 = this.coefficients;
    var v2039 = v2038[0];
    var v2040 = v2039 == 0;
    return v2040
  }
  function v84() {
    var v2042 = this.coefficients;
    var v2043 = v2042.length;
    var v2044 = v2043 - 1;
    return v2044
  }
  function v85() {
    var v2046 = this.coefficients;
    return v2046
  }
  function v86(degree) {
    var v2048 = this.coefficients;
    var v2049 = this.coefficients;
    var v2050 = v2049.length;
    var v2051 = v2050 - 1;
    var v2052 = v2051 - degree;
    var v2053 = v2048[v2052];
    return v2053
  }
  function v87(a$$2) {
    var v2054 = a$$2 == 0;
    if(v2054) {
      var v2055 = this.getCoefficient;
      v2055 = v2055.bind(this);
      var v2056 = v2055(0);
      return v2056
    }
    var v2057 = this.coefficients;
    var size$$11 = v2057.length;
    var v2058 = a$$2 == 1;
    if(v2058) {
      var result$$5 = 0;
      var i$$36 = 0;
      var v221 = i$$36 < size$$11;
      for(;v221;) {
        var v2059 = GF256.addOrSubtract;
        v2059 = v2059.bind(GF256);
        var v2060 = this.coefficients;
        var v2061 = v2060[i$$36];
        result$$5 = v2059(result$$5, v2061);
        i$$36++;
        v221 = i$$36 < size$$11
      }
      return result$$5
    }
    var v2062 = this.coefficients;
    var result2 = v2062[0];
    i$$36 = 1;
    var v222 = i$$36 < size$$11;
    for(;v222;) {
      var v2063 = GF256.addOrSubtract;
      v2063 = v2063.bind(GF256);
      var v2064 = this.field;
      var v2065 = v2064.multiply;
      v2065 = v2065.bind(v2064);
      var v2066 = v2065(a$$2, result2);
      var v2067 = this.coefficients;
      var v2068 = v2067[i$$36];
      result2 = v2063(v2066, v2068);
      i$$36++;
      v222 = i$$36 < size$$11
    }
    return result2
  }
  function v88(other$$6) {
    var v2069 = this.field;
    var v2070 = other$$6.field;
    var v2071 = v2069 != v2070;
    if(v2071) {
      throw"GF256Polys do not have same GF256 field";
    }
    var v2072 = this.Zero;
    if(v2072) {
      return other$$6
    }
    var v2073 = other$$6.Zero;
    if(v2073) {
      return this
    }
    var smallerCoefficients = this.coefficients;
    var largerCoefficients = other$$6.coefficients;
    var v2074 = smallerCoefficients.length;
    var v2075 = largerCoefficients.length;
    var v2076 = v2074 > v2075;
    if(v2076) {
      var temp$$4 = smallerCoefficients;
      smallerCoefficients = largerCoefficients;
      largerCoefficients = temp$$4
    }
    var v2077 = largerCoefficients.length;
    var sumDiff = new Array(v2077);
    var v2078 = largerCoefficients.length;
    var v2079 = smallerCoefficients.length;
    var lengthDiff = v2078 - v2079;
    var ci$$1 = 0;
    var v223 = ci$$1 < lengthDiff;
    for(;v223;) {
      var v2080 = largerCoefficients[ci$$1];
      sumDiff[ci$$1] = v2080;
      ci$$1++;
      v223 = ci$$1 < lengthDiff
    }
    var i$$37 = lengthDiff;
    var v2081 = largerCoefficients.length;
    var v224 = i$$37 < v2081;
    for(;v224;) {
      var v2082 = GF256.addOrSubtract;
      v2082 = v2082.bind(GF256);
      var v2083 = i$$37 - lengthDiff;
      var v2084 = smallerCoefficients[v2083];
      var v2085 = largerCoefficients[i$$37];
      var v2086 = v2082(v2084, v2085);
      sumDiff[i$$37] = v2086;
      i$$37++;
      var v2087 = largerCoefficients.length;
      v224 = i$$37 < v2087
    }
    var v2088 = new GF256Poly(field$$1, sumDiff);
    return v2088
  }
  function v89(other$$7) {
    var v2089 = this.field;
    var v2090 = other$$7.field;
    var v2091 = v2089 != v2090;
    if(v2091) {
      throw"GF256Polys do not have same GF256 field";
    }
    var v393 = this.Zero;
    if(!v393) {
      var v2092 = other$$7.Zero;
      v393 = v2092
    }
    if(v393) {
      var v2093 = this.field;
      var v2094 = v2093.Zero;
      return v2094
    }
    var aCoefficients = this.coefficients;
    var aLength = aCoefficients.length;
    var bCoefficients = other$$7.coefficients;
    var bLength = bCoefficients.length;
    var v2095 = aLength + bLength;
    var v2096 = v2095 - 1;
    var product = new Array(v2096);
    var i$$38 = 0;
    var v226 = i$$38 < aLength;
    for(;v226;) {
      var aCoeff = aCoefficients[i$$38];
      var j$$22 = 0;
      var v225 = j$$22 < bLength;
      for(;v225;) {
        var v2097 = i$$38 + j$$22;
        var v2098 = GF256.addOrSubtract;
        v2098 = v2098.bind(GF256);
        var v2099 = i$$38 + j$$22;
        var v2100 = product[v2099];
        var v2101 = this.field;
        var v2102 = v2101.multiply;
        v2102 = v2102.bind(v2101);
        var v2103 = bCoefficients[j$$22];
        var v2104 = v2102(aCoeff, v2103);
        var v2105 = v2098(v2100, v2104);
        product[v2097] = v2105;
        j$$22++;
        v225 = j$$22 < bLength
      }
      i$$38++;
      v226 = i$$38 < aLength
    }
    var v2106 = this.field;
    var v2107 = new GF256Poly(v2106, product);
    return v2107
  }
  function v90(scalar) {
    var v2108 = scalar == 0;
    if(v2108) {
      var v2109 = this.field;
      var v2110 = v2109.Zero;
      return v2110
    }
    var v2111 = scalar == 1;
    if(v2111) {
      return this
    }
    var v2112 = this.coefficients;
    var size$$12 = v2112.length;
    var product$$1 = new Array(size$$12);
    var i$$39 = 0;
    var v227 = i$$39 < size$$12;
    for(;v227;) {
      var v2113 = this.field;
      var v2114 = v2113.multiply;
      v2114 = v2114.bind(v2113);
      var v2115 = this.coefficients;
      var v2116 = v2115[i$$39];
      var v2117 = v2114(v2116, scalar);
      product$$1[i$$39] = v2117;
      i$$39++;
      v227 = i$$39 < size$$12
    }
    var v2118 = this.field;
    var v2119 = new GF256Poly(v2118, product$$1);
    return v2119
  }
  function v91(degree$$1, coefficient) {
    var v2120 = degree$$1 < 0;
    if(v2120) {
      throw"System.ArgumentException";
    }
    var v2121 = coefficient == 0;
    if(v2121) {
      var v2122 = this.field;
      var v2123 = v2122.Zero;
      return v2123
    }
    var v2124 = this.coefficients;
    var size$$13 = v2124.length;
    var v2125 = size$$13 + degree$$1;
    var product$$2 = new Array(v2125);
    var i$$40 = 0;
    var v2126 = product$$2.length;
    var v228 = i$$40 < v2126;
    for(;v228;) {
      product$$2[i$$40] = 0;
      i$$40++;
      var v2127 = product$$2.length;
      v228 = i$$40 < v2127
    }
    i$$40 = 0;
    var v229 = i$$40 < size$$13;
    for(;v229;) {
      var v2128 = this.field;
      var v2129 = v2128.multiply;
      v2129 = v2129.bind(v2128);
      var v2130 = this.coefficients;
      var v2131 = v2130[i$$40];
      var v2132 = v2129(v2131, coefficient);
      product$$2[i$$40] = v2132;
      i$$40++;
      v229 = i$$40 < size$$13
    }
    var v2133 = this.field;
    var v2134 = new GF256Poly(v2133, product$$2);
    return v2134
  }
  function v92(other$$8) {
    var v2135 = this.field;
    var v2136 = other$$8.field;
    var v2137 = v2135 != v2136;
    if(v2137) {
      throw"GF256Polys do not have same GF256 field";
    }
    var v2138 = other$$8.Zero;
    if(v2138) {
      throw"Divide by 0";
    }
    var v2139 = this.field;
    var quotient = v2139.Zero;
    var remainder = this;
    var v2140 = other$$8.getCoefficient;
    v2140 = v2140.bind(other$$8);
    var v2141 = other$$8.Degree;
    var denominatorLeadingTerm$$1 = v2140(v2141);
    var v2142 = this.field;
    var v2143 = v2142.inverse;
    v2143 = v2143.bind(v2142);
    var inverseDenominatorLeadingTerm = v2143(denominatorLeadingTerm$$1);
    var v2144 = remainder.Degree;
    var v2145 = other$$8.Degree;
    var v333 = v2144 >= v2145;
    if(v333) {
      v333 = !remainder.Zero
    }
    var v230 = v333;
    for(;v230;) {
      var v2146 = remainder.Degree;
      var v2147 = other$$8.Degree;
      var degreeDifference = v2146 - v2147;
      var v2148 = this.field;
      var v2149 = v2148.multiply;
      v2149 = v2149.bind(v2148);
      var v2150 = remainder.getCoefficient;
      v2150 = v2150.bind(remainder);
      var v2151 = remainder.Degree;
      var v2152 = v2150(v2151);
      var scale$$4 = v2149(v2152, inverseDenominatorLeadingTerm);
      var v2153 = other$$8.multiplyByMonomial;
      v2153 = v2153.bind(other$$8);
      var term = v2153(degreeDifference, scale$$4);
      var v2154 = this.field;
      var v2155 = v2154.buildMonomial;
      v2155 = v2155.bind(v2154);
      var iterationQuotient = v2155(degreeDifference, scale$$4);
      var v2156 = quotient.addOrSubtract;
      v2156 = v2156.bind(quotient);
      quotient = v2156(iterationQuotient);
      var v2157 = remainder.addOrSubtract;
      v2157 = v2157.bind(remainder);
      remainder = v2157(term);
      var v2158 = remainder.Degree;
      var v2159 = other$$8.Degree;
      var v334 = v2158 >= v2159;
      if(v334) {
        v334 = !remainder.Zero
      }
      v230 = v334
    }
    var v2160 = new Array(quotient, remainder);
    return v2160
  }
  var v392 = coefficients == null;
  if(!v392) {
    var v2017 = coefficients.length;
    v392 = v2017 == 0
  }
  if(v392) {
    throw"System.ArgumentException";
  }
  this.field = field$$1;
  var coefficientsLength = coefficients.length;
  var v330 = coefficientsLength > 1;
  if(v330) {
    var v2018 = coefficients[0];
    v330 = v2018 == 0
  }
  if(v330) {
    var firstNonZero = 1;
    var v331 = firstNonZero < coefficientsLength;
    if(v331) {
      var v2019 = coefficients[firstNonZero];
      v331 = v2019 == 0
    }
    var v218 = v331;
    for(;v218;) {
      firstNonZero++;
      var v332 = firstNonZero < coefficientsLength;
      if(v332) {
        var v2020 = coefficients[firstNonZero];
        v332 = v2020 == 0
      }
      v218 = v332
    }
    var v2021 = firstNonZero == coefficientsLength;
    if(v2021) {
      var v2022 = field$$1.Zero;
      var v2023 = v2022.coefficients;
      this.coefficients = v2023
    }else {
      var v2024 = coefficientsLength - firstNonZero;
      var v2025 = new Array(v2024);
      this.coefficients = v2025;
      var i$$35 = 0;
      var v2026 = this.coefficients;
      var v2027 = v2026.length;
      var v219 = i$$35 < v2027;
      for(;v219;) {
        var v2028 = this.coefficients;
        v2028[i$$35] = 0;
        i$$35++;
        var v2029 = this.coefficients;
        var v2030 = v2029.length;
        v219 = i$$35 < v2030
      }
      var ci = 0;
      var v2031 = this.coefficients;
      var v2032 = v2031.length;
      var v220 = ci < v2032;
      for(;v220;) {
        var v2033 = this.coefficients;
        var v2034 = firstNonZero + ci;
        var v2035 = coefficients[v2034];
        v2033[ci] = v2035;
        ci++;
        var v2036 = this.coefficients;
        var v2037 = v2036.length;
        v220 = ci < v2037
      }
    }
  }else {
    this.coefficients = coefficients
  }
  var v2041 = this.__defineGetter__;
  v2041 = v2041.bind(this);
  v2041("Zero", v83);
  var v2045 = this.__defineGetter__;
  v2045 = v2045.bind(this);
  v2045("Degree", v84);
  var v2047 = this.__defineGetter__;
  v2047 = v2047.bind(this);
  v2047("Coefficients", v85);
  this.getCoefficient = v86;
  this.evaluateAt = v87;
  this.addOrSubtract = v88;
  this.multiply1 = v89;
  this.multiply2 = v90;
  this.multiplyByMonomial = v91;
  this.divide = v92
}
function GF256(primitive) {
  function v93() {
    var v2172 = this.zero;
    return v2172
  }
  function v94() {
    var v2174 = this.one;
    return v2174
  }
  function v95(degree$$2, coefficient$$1) {
    var v2176 = degree$$2 < 0;
    if(v2176) {
      throw"System.ArgumentException";
    }
    var v2177 = coefficient$$1 == 0;
    if(v2177) {
      return zero
    }
    var v2178 = degree$$2 + 1;
    var coefficients$$1 = new Array(v2178);
    var i$$42 = 0;
    var v2179 = coefficients$$1.length;
    var v233 = i$$42 < v2179;
    for(;v233;) {
      coefficients$$1[i$$42] = 0;
      i$$42++;
      var v2180 = coefficients$$1.length;
      v233 = i$$42 < v2180
    }
    coefficients$$1[0] = coefficient$$1;
    var v2181 = new GF256Poly(this, coefficients$$1);
    return v2181
  }
  function v96(a$$3) {
    var v2182 = this.expTable;
    transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
      var v2183 = v2182[a$$3]
    }
    return v2183
  }
  function v97(a$$4) {
    var v2184 = a$$4 == 0;
    if(v2184) {
      throw"System.ArgumentException";
    }
    var v2185 = this.logTable;
    transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
      var v2186 = v2185[a$$4]
    }
    return v2186
  }
  function v98(a$$5) {
    var v2187 = a$$5 == 0;
    if(v2187) {
      throw"System.ArithmeticException";
    }
    var v2188 = this.expTable;
    var v2189 = this.logTable;
    transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
      var v2190 = v2189[a$$5]
    }
    var v2191 = 255 - v2190;
    var v2192 = v2188[v2191];
    return v2192
  }
  function v99(a$$6, b$$3) {
    var v394 = a$$6 == 0;
    if(!v394) {
      v394 = b$$3 == 0
    }
    if(v394) {
      return 0
    }
    var v2193 = a$$6 == 1;
    if(v2193) {
      return b$$3
    }
    var v2194 = b$$3 == 1;
    if(v2194) {
      return a$$6
    }
    var v2195 = this.expTable;
    var v2196 = this.logTable;
    transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
      var v2197 = v2196[a$$6]
    }
    var v2198 = this.logTable;
    transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
      var v2199 = v2198[b$$3]
    }
    var v2200 = v2197 + v2199;
    var v2201 = v2200 % 255;
    var v2202 = v2195[v2201];
    return v2202
  }
  var v2161 = new Array(256);
  this.expTable = v2161;
  var v2162 = new Array(256);
  this.logTable = v2162;
  var x$$61 = 1;
  var i$$41 = 0;
  var v231 = i$$41 < 256;
  for(;v231;) {
    var v2163 = this.expTable;
    v2163[i$$41] = x$$61;
    x$$61 <<= 1;
    var v2164 = x$$61 >= 256;
    if(v2164) {
      x$$61 ^= primitive
    }
    i$$41++;
    v231 = i$$41 < 256
  }
  i$$41 = 0;
  var v232 = i$$41 < 255;
  for(;v232;) {
    var v2165 = this.logTable;
    var v2166 = this.expTable;
    var v2167 = v2166[i$$41];
    transaction(JAMScript.handlers.processD5B00A442B24978EA2B9B278832836ACDF8F70A557AF08FAEB9EFD897FFB0A554AD34FD5EC1EFB534834199F0411442EA3537F0AC966267195E47F046957B6BEDA796CB77969597989DF14DB4A2D6C8E77A85A8B292CC81CB59684C0D05694F032BDF02C297012771C6B9300636F6D050240D34D9C6E9FC7) {
      v2165[v2167] = i$$41
    }
    i$$41++;
    v232 = i$$41 < 255
  }
  var at0 = new Array(1);
  at0[0] = 0;
  var v2168 = new Array(at0);
  var v2169 = new GF256Poly(this, v2168);
  this.zero = v2169;
  var at1 = new Array(1);
  at1[0] = 1;
  var v2170 = new Array(at1);
  var v2171 = new GF256Poly(this, v2170);
  this.one = v2171;
  var v2173 = this.__defineGetter__;
  v2173 = v2173.bind(this);
  v2173("Zero", v93);
  var v2175 = this.__defineGetter__;
  v2175 = v2175.bind(this);
  v2175("One", v94);
  this.buildMonomial = v95;
  this.exp = v96;
  this.log = v97;
  this.inverse = v98;
  this.multiply = v99
}
function v100(a$$7, b$$4) {
  var v2205 = a$$7 ^ b$$4;
  return v2205
}
function v101(codewordBytes, numDataCodewords$$2) {
  var numCodewords$$1 = codewordBytes.length;
  var codewordsInts = new Array(numCodewords$$1);
  var i$$43 = 0;
  var v234 = i$$43 < numCodewords$$1;
  for(;v234;) {
    var v2208 = codewordBytes[i$$43];
    var v2209 = v2208 & 255;
    codewordsInts[i$$43] = v2209;
    i$$43++;
    v234 = i$$43 < numCodewords$$1
  }
  var v2210 = codewordBytes.length;
  var numECCodewords = v2210 - numDataCodewords$$2;
  var v2211 = Decoder.rsDecoder;
  var v2212 = v2211.decode;
  v2212 = v2212.bind(v2211);
  v2212(codewordsInts, numECCodewords);
  i$$43 = 0;
  var v235 = i$$43 < numDataCodewords$$2;
  for(;v235;) {
    var v2213 = codewordsInts[i$$43];
    codewordBytes[i$$43] = v2213;
    i$$43++;
    v235 = i$$43 < numDataCodewords$$2
  }
}
function v102(bits$$13) {
  var parser = new BitMatrixParser(bits$$13);
  var v2214 = parser.readVersion;
  v2214 = v2214.bind(parser);
  var version$$9 = v2214();
  var v2215 = parser.readFormatInformation;
  v2215 = v2215.bind(parser);
  var v2216 = v2215();
  var ecLevel$$2 = v2216.ErrorCorrectionLevel;
  var v2217 = parser.readCodewords;
  v2217 = v2217.bind(parser);
  var codewords$$1 = v2217();
  var v2218 = DataBlock.getDataBlocks;
  v2218 = v2218.bind(DataBlock);
  var dataBlocks = v2218(codewords$$1, version$$9, ecLevel$$2);
  var totalBytes = 0;
  var i$$44 = 0;
  var v2219 = dataBlocks.Length;
  var v236 = i$$44 < v2219;
  for(;v236;) {
    var v2220 = dataBlocks[i$$44];
    var v2221 = v2220.NumDataCodewords;
    totalBytes += v2221;
    i$$44++;
    var v2222 = dataBlocks.Length;
    v236 = i$$44 < v2222
  }
  var resultBytes = new Array(totalBytes);
  var resultOffset$$1 = 0;
  var j$$23 = 0;
  var v2223 = dataBlocks.length;
  var v238 = j$$23 < v2223;
  for(;v238;) {
    var dataBlock = dataBlocks[j$$23];
    var codewordBytes$$1 = dataBlock.Codewords;
    var numDataCodewords$$3 = dataBlock.NumDataCodewords;
    var v2224 = Decoder.correctErrors;
    v2224 = v2224.bind(Decoder);
    v2224(codewordBytes$$1, numDataCodewords$$3);
    i$$44 = 0;
    var v237 = i$$44 < numDataCodewords$$3;
    for(;v237;) {
      var v2225 = codewordBytes$$1[i$$44];
      resultBytes[resultOffset$$1] = v2225;
      resultOffset$$1++;
      i$$44++;
      v237 = i$$44 < numDataCodewords$$3
    }
    j$$23++;
    var v2226 = dataBlocks.length;
    v238 = j$$23 < v2226
  }
  var v2227 = version$$9.VersionNumber;
  var v2228 = ecLevel$$2.Bits;
  var reader = new QRCodeDataBlockReader(resultBytes, v2227, v2228);
  return reader
}
function v104(src$$1) {
  function v103() {
    var v2233 = document.createElement;
    v2233 = v2233.bind(document);
    var canvas_qr$$1 = v2233("canvas");
    var v2234 = canvas_qr$$1.getContext;
    v2234 = v2234.bind(canvas_qr$$1);
    var context$$1 = v2234("2d");
    var v2235 = document.getElementById;
    v2235 = v2235.bind(document);
    var canvas_out = v2235("out-canvas");
    var v2236 = canvas_out != null;
    if(v2236) {
      var v2237 = canvas_out.getContext;
      v2237 = v2237.bind(canvas_out);
      var outctx = v2237("2d");
      var v2238 = outctx.clearRect;
      v2238 = v2238.bind(outctx);
      v2238(0, 0, 320, 240);
      var v2239 = outctx.drawImage;
      v2239 = v2239.bind(outctx);
      v2239(image$$7, 0, 0, 320, 240)
    }
    var v2240 = image$$7.width;
    canvas_qr$$1.width = v2240;
    var v2241 = image$$7.height;
    canvas_qr$$1.height = v2241;
    var v2242 = context$$1.drawImage;
    v2242 = v2242.bind(context$$1);
    v2242(image$$7, 0, 0);
    var v2243 = image$$7.width;
    qrcode.width = v2243;
    var v2244 = image$$7.height;
    qrcode.height = v2244;
    var v2245 = context$$1.getImageData;
    v2245 = v2245.bind(context$$1);
    var v2246 = image$$7.width;
    var v2247 = image$$7.height;
    var v2248 = v2245(0, 0, v2246, v2247);
    qrcode.imagedata = v2248;
    var v2249 = qrcode.process;
    v2249 = v2249.bind(qrcode);
    var v2250 = v2249(context$$1);
    qrcode.result = v2250;
    var v2251 = qrcode.callback;
    var v2252 = v2251 != null;
    if(v2252) {
      var v2253 = qrcode.callback;
      v2253 = v2253.bind(qrcode);
      var v2254 = qrcode.result;
      v2253(v2254)
    }
  }
  var v2255 = arguments.length;
  var v2256 = v2255 == 0;
  if(v2256) {
    var v2257 = document.getElementById;
    v2257 = v2257.bind(document);
    var canvas_qr = v2257("qr-canvas");
    var v2258 = canvas_qr.getContext;
    v2258 = v2258.bind(canvas_qr);
    var context = v2258("2d");
    var v2259 = canvas_qr.width;
    qrcode.width = v2259;
    var v2260 = canvas_qr.height;
    qrcode.height = v2260;
    var v2261 = context.getImageData;
    v2261 = v2261.bind(context);
    var v2262 = qrcode.width;
    var v2263 = qrcode.height;
    var v2264 = v2261(0, 0, v2262, v2263);
    qrcode.imagedata = v2264;
    var v2265 = qrcode.process;
    v2265 = v2265.bind(qrcode);
    var v2266 = v2265(context);
    qrcode.result = v2266;
    var v2267 = qrcode.callback;
    var v2268 = v2267 != null;
    if(v2268) {
      var v2269 = qrcode.callback;
      v2269 = v2269.bind(qrcode);
      var v2270 = qrcode.result;
      v2269(v2270)
    }
    var v2271 = qrcode.result;
    return v2271
  }else {
    var image$$7 = new Image;
    image$$7.onload = v103;
    transaction(JAMScript.handlers.processD5B00A442B24978EA2B9B278832836ACDF8F70A5) {
      image$$7.src = src$$1
    }
  }
}
function v105(s$$4) {
  var v2272 = escape(s$$4);
  var v2273 = decodeURIComponent(v2272);
  return v2273
}
function v106(ctx) {
  var v2274 = new Date;
  var v2275 = v2274.getTime;
  v2275 = v2275.bind(v2274);
  var start$$5 = v2275();
  var v2276 = qrcode.grayScaleToBitmap;
  v2276 = v2276.bind(qrcode);
  var v2277 = qrcode.grayscale;
  v2277 = v2277.bind(qrcode);
  var v2278 = v2277();
  var image$$8 = v2276(v2278);
  var v2279 = qrcode.debug;
  if(v2279) {
    var y$$44 = 0;
    var v2280 = qrcode.height;
    var v240 = y$$44 < v2280;
    for(;v240;) {
      var x$$62 = 0;
      var v2281 = qrcode.width;
      var v239 = x$$62 < v2281;
      for(;v239;) {
        var v2282 = x$$62 * 4;
        var v2283 = qrcode.width;
        var v2284 = y$$44 * v2283;
        var v2285 = v2284 * 4;
        var point$$1 = v2282 + v2285;
        var v308;
        var v2286 = qrcode.width;
        var v2287 = y$$44 * v2286;
        var v2288 = x$$62 + v2287;
        var v2289 = image$$8[v2288];
        if(v2289) {
          v308 = 0
        }else {
          v308 = 0
        }
        var v2290 = qrcode.imagedata;
        var v2291 = v2290.data;
        v2291[point$$1] = v308;
        var v309;
        var v2292 = qrcode.width;
        var v2293 = y$$44 * v2292;
        var v2294 = x$$62 + v2293;
        var v2295 = image$$8[v2294];
        if(v2295) {
          v309 = 0
        }else {
          v309 = 0
        }
        var v2296 = qrcode.imagedata;
        var v2297 = v2296.data;
        var v2298 = point$$1 + 1;
        v2297[v2298] = v309;
        var v310;
        var v2299 = qrcode.width;
        var v2300 = y$$44 * v2299;
        var v2301 = x$$62 + v2300;
        var v2302 = image$$8[v2301];
        if(v2302) {
          v310 = 255
        }else {
          v310 = 0
        }
        var v2303 = qrcode.imagedata;
        var v2304 = v2303.data;
        var v2305 = point$$1 + 2;
        v2304[v2305] = v310;
        x$$62++;
        var v2306 = qrcode.width;
        v239 = x$$62 < v2306
      }
      y$$44++;
      var v2307 = qrcode.height;
      v240 = y$$44 < v2307
    }
    var v2308 = ctx.putImageData;
    v2308 = v2308.bind(ctx);
    var v2309 = qrcode.imagedata;
    v2308(v2309, 0, 0)
  }
  var detector = new Detector(image$$8);
  var v2310 = detector.detect;
  v2310 = v2310.bind(detector);
  var qRCodeMatrix = v2310();
  var v2311 = qrcode.debug;
  if(v2311) {
    var v2312 = ctx.putImageData;
    v2312 = v2312.bind(ctx);
    var v2313 = qrcode.imagedata;
    v2312(v2313, 0, 0)
  }
  var v2314 = Decoder.decode;
  v2314 = v2314.bind(Decoder);
  var v2315 = qRCodeMatrix.bits;
  var reader$$1 = v2314(v2315);
  var data$$22 = reader$$1.DataByte;
  var str$$7 = "";
  var i$$45 = 0;
  var v2316 = data$$22.length;
  var v242 = i$$45 < v2316;
  for(;v242;) {
    var j$$24 = 0;
    var v2317 = data$$22[i$$45];
    var v2318 = v2317.length;
    var v241 = j$$24 < v2318;
    for(;v241;) {
      var v2319 = String.fromCharCode;
      v2319 = v2319.bind(String);
      var v2320 = data$$22[i$$45];
      var v2321 = v2320[j$$24];
      str$$7 += v2319(v2321);
      j$$24++;
      var v2322 = data$$22[i$$45];
      var v2323 = v2322.length;
      v241 = j$$24 < v2323
    }
    i$$45++;
    var v2324 = data$$22.length;
    v242 = i$$45 < v2324
  }
  var v2325 = new Date;
  var v2326 = v2325.getTime;
  v2326 = v2326.bind(v2325);
  var end$$2 = v2326();
  var time = end$$2 - start$$5;
  var v2327 = console.log;
  v2327 = v2327.bind(console);
  v2327(time);
  var v2328 = qrcode.decode_utf8;
  v2328 = v2328.bind(qrcode);
  var v2329 = v2328(str$$7);
  return v2329
}
function v107(x$$63, y$$45) {
  var v2330 = qrcode.width;
  var v2331 = v2330 < x$$63;
  if(v2331) {
    throw"point error";
  }
  var v2332 = qrcode.height;
  var v2333 = v2332 < y$$45;
  if(v2333) {
    throw"point error";
  }
  var v2334 = x$$63 * 4;
  var v2335 = qrcode.width;
  var v2336 = y$$45 * v2335;
  var v2337 = v2336 * 4;
  point = v2334 + v2337;
  var v2338 = qrcode.imagedata;
  var v2339 = v2338.data;
  transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
    var v2340 = v2339[point]
  }
  var v2341 = v2340 * 33;
  var v2342 = qrcode.imagedata;
  var v2343 = v2342.data;
  var v2344 = point + 1;
  var v2345 = v2343[v2344];
  var v2346 = v2345 * 34;
  var v2347 = v2341 + v2346;
  var v2348 = qrcode.imagedata;
  var v2349 = v2348.data;
  var v2350 = point + 2;
  var v2351 = v2349[v2350];
  var v2352 = v2351 * 33;
  var v2353 = v2347 + v2352;
  p = v2353 / 100;
  return p
}
function v108(th) {
  var v2354 = qrcode.width;
  var v2355 = qrcode.height;
  var v2356 = v2354 * v2355;
  var ret = new Array(v2356);
  var y$$46 = 0;
  var v2357 = qrcode.height;
  var v244 = y$$46 < v2357;
  for(;v244;) {
    var x$$64 = 0;
    var v2358 = qrcode.width;
    var v243 = x$$64 < v2358;
    for(;v243;) {
      var v2359 = qrcode.getPixel;
      v2359 = v2359.bind(qrcode);
      var gray = v2359(x$$64, y$$46);
      var v311;
      var v2360 = gray <= th;
      if(v2360) {
        v311 = true
      }else {
        v311 = false
      }
      var v2361 = qrcode.width;
      var v2362 = y$$46 * v2361;
      var v2363 = x$$64 + v2362;
      ret[v2363] = v311;
      x$$64++;
      var v2364 = qrcode.width;
      v243 = x$$64 < v2364
    }
    y$$46++;
    var v2365 = qrcode.height;
    v244 = y$$46 < v2365
  }
  return ret
}
function v109(image$$9) {
  var numSqrtArea = 4;
  var v2366 = Math.floor;
  v2366 = v2366.bind(Math);
  var v2367 = qrcode.width;
  var v2368 = v2367 / numSqrtArea;
  var areaWidth = v2366(v2368);
  var v2369 = Math.floor;
  v2369 = v2369.bind(Math);
  var v2370 = qrcode.height;
  var v2371 = v2370 / numSqrtArea;
  var areaHeight = v2369(v2371);
  var minmax = new Array(numSqrtArea);
  var i$$46 = 0;
  var v246 = i$$46 < numSqrtArea;
  for(;v246;) {
    var v2372 = new Array(numSqrtArea);
    minmax[i$$46] = v2372;
    var i2 = 0;
    var v245 = i2 < numSqrtArea;
    for(;v245;) {
      var v2373 = minmax[i$$46];
      var v2374 = new Array(0, 0);
      v2373[i2] = v2374;
      i2++;
      v245 = i2 < numSqrtArea
    }
    i$$46++;
    v246 = i$$46 < numSqrtArea
  }
  var ay = 0;
  var v250 = ay < numSqrtArea;
  for(;v250;) {
    var ax = 0;
    var v249 = ax < numSqrtArea;
    for(;v249;) {
      var v2375 = minmax[ax];
      var v2376 = v2375[ay];
      v2376[0] = 255;
      var dy$$5 = 0;
      var v248 = dy$$5 < areaHeight;
      for(;v248;) {
        var dx$$5 = 0;
        var v247 = dx$$5 < areaWidth;
        for(;v247;) {
          var v2377 = areaWidth * ax;
          var v2378 = v2377 + dx$$5;
          var v2379 = areaHeight * ay;
          var v2380 = v2379 + dy$$5;
          var v2381 = qrcode.width;
          var v2382 = v2380 * v2381;
          var v2383 = v2378 + v2382;
          var target$$39 = image$$9[v2383];
          var v2384 = minmax[ax];
          var v2385 = v2384[ay];
          var v2386 = v2385[0];
          var v2387 = target$$39 < v2386;
          if(v2387) {
            var v2388 = minmax[ax];
            var v2389 = v2388[ay];
            v2389[0] = target$$39
          }
          var v2390 = minmax[ax];
          var v2391 = v2390[ay];
          var v2392 = v2391[1];
          var v2393 = target$$39 > v2392;
          if(v2393) {
            var v2394 = minmax[ax];
            var v2395 = v2394[ay];
            v2395[1] = target$$39
          }
          dx$$5++;
          v247 = dx$$5 < areaWidth
        }
        dy$$5++;
        v248 = dy$$5 < areaHeight
      }
      ax++;
      v249 = ax < numSqrtArea
    }
    ay++;
    v250 = ay < numSqrtArea
  }
  var middle = new Array(numSqrtArea);
  var i3 = 0;
  var v251 = i3 < numSqrtArea;
  for(;v251;) {
    var v2396 = new Array(numSqrtArea);
    middle[i3] = v2396;
    i3++;
    v251 = i3 < numSqrtArea
  }
  ay = 0;
  var v253 = ay < numSqrtArea;
  for(;v253;) {
    ax = 0;
    var v252 = ax < numSqrtArea;
    for(;v252;) {
      var v2397 = middle[ax];
      var v2398 = Math.floor;
      v2398 = v2398.bind(Math);
      var v2399 = minmax[ax];
      var v2400 = v2399[ay];
      var v2401 = v2400[0];
      var v2402 = minmax[ax];
      var v2403 = v2402[ay];
      var v2404 = v2403[1];
      var v2405 = v2401 + v2404;
      var v2406 = v2405 / 2;
      var v2407 = v2398(v2406);
      v2397[ay] = v2407;
      ax++;
      v252 = ax < numSqrtArea
    }
    ay++;
    v253 = ay < numSqrtArea
  }
  return middle
}
function v110(grayScale) {
  var v2408 = qrcode.getMiddleBrightnessPerArea;
  v2408 = v2408.bind(qrcode);
  var middle$$1 = v2408(grayScale);
  var sqrtNumArea = middle$$1.length;
  var v2409 = Math.floor;
  v2409 = v2409.bind(Math);
  var v2410 = qrcode.width;
  var v2411 = v2410 / sqrtNumArea;
  var areaWidth$$1 = v2409(v2411);
  var v2412 = Math.floor;
  v2412 = v2412.bind(Math);
  var v2413 = qrcode.height;
  var v2414 = v2413 / sqrtNumArea;
  var areaHeight$$1 = v2412(v2414);
  var v2415 = qrcode.height;
  var v2416 = qrcode.width;
  var v2417 = v2415 * v2416;
  var bitmap = new Array(v2417);
  var ay$$1 = 0;
  var v257 = ay$$1 < sqrtNumArea;
  for(;v257;) {
    var ax$$1 = 0;
    var v256 = ax$$1 < sqrtNumArea;
    for(;v256;) {
      var dy$$6 = 0;
      var v255 = dy$$6 < areaHeight$$1;
      for(;v255;) {
        var dx$$6 = 0;
        var v254 = dx$$6 < areaWidth$$1;
        for(;v254;) {
          var v312;
          var v2418 = areaWidth$$1 * ax$$1;
          var v2419 = v2418 + dx$$6;
          var v2420 = areaHeight$$1 * ay$$1;
          var v2421 = v2420 + dy$$6;
          var v2422 = qrcode.width;
          var v2423 = v2421 * v2422;
          var v2424 = v2419 + v2423;
          var v2425 = grayScale[v2424];
          var v2426 = middle$$1[ax$$1];
          var v2427 = v2426[ay$$1];
          var v2428 = v2425 < v2427;
          if(v2428) {
            v312 = true
          }else {
            v312 = false
          }
          var v2429 = areaWidth$$1 * ax$$1;
          var v2430 = v2429 + dx$$6;
          var v2431 = areaHeight$$1 * ay$$1;
          var v2432 = v2431 + dy$$6;
          var v2433 = qrcode.width;
          var v2434 = v2432 * v2433;
          var v2435 = v2430 + v2434;
          bitmap[v2435] = v312;
          dx$$6++;
          v254 = dx$$6 < areaWidth$$1
        }
        dy$$6++;
        v255 = dy$$6 < areaHeight$$1
      }
      ax$$1++;
      v256 = ax$$1 < sqrtNumArea
    }
    ay$$1++;
    v257 = ay$$1 < sqrtNumArea
  }
  return bitmap
}
function v111() {
  var v2436 = qrcode.width;
  var v2437 = qrcode.height;
  var v2438 = v2436 * v2437;
  var ret$$1 = new Array(v2438);
  var y$$47 = 0;
  var v2439 = qrcode.height;
  var v259 = y$$47 < v2439;
  for(;v259;) {
    var x$$65 = 0;
    var v2440 = qrcode.width;
    var v258 = x$$65 < v2440;
    for(;v258;) {
      var v2441 = qrcode.getPixel;
      v2441 = v2441.bind(qrcode);
      var gray$$1 = v2441(x$$65, y$$47);
      var v2442 = qrcode.width;
      var v2443 = y$$47 * v2442;
      var v2444 = x$$65 + v2443;
      ret$$1[v2444] = gray$$1;
      x$$65++;
      var v2445 = qrcode.width;
      v258 = x$$65 < v2445
    }
    y$$47++;
    var v2446 = qrcode.height;
    v259 = y$$47 < v2446
  }
  return ret$$1
}
function URShift(number, bits$$14) {
  var v2447 = number >= 0;
  if(v2447) {
    var v2448 = number >> bits$$14;
    return v2448
  }else {
    var v2449 = number >> bits$$14;
    var v2450 = 2 << ~bits$$14;
    var v2451 = v2449 + v2450;
    return v2451
  }
}
function v112(from, to) {
  var v436 = to;
  if(!v436) {
    v436 = from
  }
  var v395 = v436 + 1;
  if(!v395) {
    var v2452 = this.length;
    v395 = v2452
  }
  var v2453 = this.slice;
  v2453 = v2453.bind(this);
  var rest = v2453(v395);
  var v313;
  var v2454 = from < 0;
  if(v2454) {
    var v2455 = this.length;
    v313 = v2455 + from
  }else {
    v313 = from
  }
  this.length = v313;
  var v2456 = this.push;
  var v2457 = v2456.apply;
  v2457 = v2457.bind(v2456);
  var v2458 = v2457(this, rest);
  return v2458
}
function v113(patterns) {
  function distance(pattern1$$1, pattern2$$1) {
    var v2460 = pattern1$$1.X;
    var v2461 = pattern2$$1.X;
    xDiff = v2460 - v2461;
    var v2462 = pattern1$$1.Y;
    var v2463 = pattern2$$1.Y;
    yDiff = v2462 - v2463;
    var v2464 = Math.sqrt;
    v2464 = v2464.bind(Math);
    var v2465 = xDiff * xDiff;
    var v2466 = yDiff * yDiff;
    var v2467 = v2465 + v2466;
    var v2468 = v2464(v2467);
    return v2468
  }
  function crossProductZ(pointA$$1, pointB$$1, pointC$$1) {
    var bX = pointB$$1.x;
    var bY = pointB$$1.y;
    var v2469 = pointC$$1.x;
    var v2470 = v2469 - bX;
    var v2471 = pointA$$1.y;
    var v2472 = v2471 - bY;
    var v2473 = v2470 * v2472;
    var v2474 = pointC$$1.y;
    var v2475 = v2474 - bY;
    var v2476 = pointA$$1.x;
    var v2477 = v2476 - bX;
    var v2478 = v2475 * v2477;
    var v2479 = v2473 - v2478;
    return v2479
  }
  var v2480 = patterns[0];
  var v2481 = patterns[1];
  var zeroOneDistance = distance(v2480, v2481);
  var v2482 = patterns[1];
  var v2483 = patterns[2];
  var oneTwoDistance = distance(v2482, v2483);
  var v2484 = patterns[0];
  var v2485 = patterns[2];
  var zeroTwoDistance = distance(v2484, v2485);
  var pointA;
  var pointB;
  var pointC;
  var v335 = oneTwoDistance >= zeroOneDistance;
  if(v335) {
    v335 = oneTwoDistance >= zeroTwoDistance
  }
  if(v335) {
    var v2486 = patterns[0];
    pointB = v2486;
    var v2487 = patterns[1];
    pointA = v2487;
    var v2488 = patterns[2];
    pointC = v2488
  }else {
    var v336 = zeroTwoDistance >= oneTwoDistance;
    if(v336) {
      v336 = zeroTwoDistance >= zeroOneDistance
    }
    if(v336) {
      var v2489 = patterns[1];
      pointB = v2489;
      var v2490 = patterns[0];
      pointA = v2490;
      var v2491 = patterns[2];
      pointC = v2491
    }else {
      var v2492 = patterns[2];
      pointB = v2492;
      var v2493 = patterns[0];
      pointA = v2493;
      var v2494 = patterns[1];
      pointC = v2494
    }
  }
  var v2495 = crossProductZ(pointA, pointB, pointC);
  var v2496 = v2495 < 0;
  if(v2496) {
    var temp$$5 = pointA;
    pointA = pointC;
    pointC = temp$$5
  }
  patterns[0] = pointA;
  patterns[1] = pointB;
  patterns[2] = pointC
}
function FinderPattern(posX, posY, estimatedModuleSize) {
  function v114() {
    var v2497 = this.estimatedModuleSize;
    return v2497
  }
  function v115() {
    var v2499 = this.count;
    return v2499
  }
  function v116() {
    var v2501 = this.x;
    return v2501
  }
  function v117() {
    var v2503 = this.y;
    return v2503
  }
  function v118() {
    this.count++
  }
  function v119(moduleSize$$2, i$$47, j$$25) {
    var v2505 = Math.abs;
    v2505 = v2505.bind(Math);
    var v2506 = this.y;
    var v2507 = i$$47 - v2506;
    var v2508 = v2505(v2507);
    var v337 = v2508 <= moduleSize$$2;
    if(v337) {
      var v2509 = Math.abs;
      v2509 = v2509.bind(Math);
      var v2510 = this.x;
      var v2511 = j$$25 - v2510;
      var v2512 = v2509(v2511);
      v337 = v2512 <= moduleSize$$2
    }
    if(v337) {
      var v2513 = Math.abs;
      v2513 = v2513.bind(Math);
      var v2514 = this.estimatedModuleSize;
      var v2515 = moduleSize$$2 - v2514;
      var moduleSizeDiff = v2513(v2515);
      var v396 = moduleSizeDiff <= 1;
      if(!v396) {
        var v2516 = this.estimatedModuleSize;
        var v2517 = moduleSizeDiff / v2516;
        v396 = v2517 <= 1
      }
      return v396
    }
    return false
  }
  this.x = posX;
  this.y = posY;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize;
  var v2498 = this.__defineGetter__;
  v2498 = v2498.bind(this);
  v2498("EstimatedModuleSize", v114);
  var v2500 = this.__defineGetter__;
  v2500 = v2500.bind(this);
  v2500("Count", v115);
  var v2502 = this.__defineGetter__;
  v2502 = v2502.bind(this);
  v2502("X", v116);
  var v2504 = this.__defineGetter__;
  v2504 = v2504.bind(this);
  v2504("Y", v117);
  this.incrementCount = v118;
  this.aboutEquals = v119
}
function FinderPatternInfo(patternCenters) {
  function v120() {
    var v2521 = this.bottomLeft;
    return v2521
  }
  function v121() {
    var v2523 = this.topLeft;
    return v2523
  }
  function v122() {
    var v2525 = this.topRight;
    return v2525
  }
  var v2518 = patternCenters[0];
  this.bottomLeft = v2518;
  var v2519 = patternCenters[1];
  this.topLeft = v2519;
  var v2520 = patternCenters[2];
  this.topRight = v2520;
  var v2522 = this.__defineGetter__;
  v2522 = v2522.bind(this);
  v2522("BottomLeft", v120);
  var v2524 = this.__defineGetter__;
  v2524 = v2524.bind(this);
  v2524("TopLeft", v121);
  var v2526 = this.__defineGetter__;
  v2526 = v2526.bind(this);
  v2526("TopRight", v122)
}
function FinderPatternFinder() {
  function v123() {
    var v2529 = this.crossCheckStateCount;
    v2529[0] = 0;
    var v2530 = this.crossCheckStateCount;
    v2530[1] = 0;
    var v2531 = this.crossCheckStateCount;
    v2531[2] = 0;
    var v2532 = this.crossCheckStateCount;
    v2532[3] = 0;
    var v2533 = this.crossCheckStateCount;
    v2533[4] = 0;
    var v2534 = this.crossCheckStateCount;
    return v2534
  }
  function v124(stateCount) {
    var totalModuleSize = 0;
    var i$$48 = 0;
    var v260 = i$$48 < 5;
    for(;v260;) {
      var count$$8 = stateCount[i$$48];
      var v2536 = count$$8 == 0;
      if(v2536) {
        return false
      }
      totalModuleSize += count$$8;
      i$$48++;
      v260 = i$$48 < 5
    }
    var v2537 = totalModuleSize < 7;
    if(v2537) {
      return false
    }
    var v2538 = Math.floor;
    v2538 = v2538.bind(Math);
    var v2539 = totalModuleSize << INTEGER_MATH_SHIFT;
    var v2540 = v2539 / 7;
    var moduleSize$$3 = v2538(v2540);
    var v2541 = Math.floor;
    v2541 = v2541.bind(Math);
    var v2542 = moduleSize$$3 / 2;
    var maxVariance = v2541(v2542);
    var v2543 = Math.abs;
    v2543 = v2543.bind(Math);
    var v2544 = stateCount[0];
    var v2545 = v2544 << INTEGER_MATH_SHIFT;
    var v2546 = moduleSize$$3 - v2545;
    var v2547 = v2543(v2546);
    var v338 = v2547 < maxVariance;
    if(v338) {
      var v2548 = Math.abs;
      v2548 = v2548.bind(Math);
      var v2549 = stateCount[1];
      var v2550 = v2549 << INTEGER_MATH_SHIFT;
      var v2551 = moduleSize$$3 - v2550;
      var v2552 = v2548(v2551);
      var v407 = v2552 < maxVariance;
      if(v407) {
        var v2553 = Math.abs;
        v2553 = v2553.bind(Math);
        var v2554 = 3 * moduleSize$$3;
        var v2555 = stateCount[2];
        var v2556 = v2555 << INTEGER_MATH_SHIFT;
        var v2557 = v2554 - v2556;
        var v2558 = v2553(v2557);
        var v2559 = 3 * maxVariance;
        var v437 = v2558 < v2559;
        if(v437) {
          var v2560 = Math.abs;
          v2560 = v2560.bind(Math);
          var v2561 = stateCount[3];
          var v2562 = v2561 << INTEGER_MATH_SHIFT;
          var v2563 = moduleSize$$3 - v2562;
          var v2564 = v2560(v2563);
          var v441 = v2564 < maxVariance;
          if(v441) {
            var v2565 = Math.abs;
            v2565 = v2565.bind(Math);
            var v2566 = stateCount[4];
            var v2567 = v2566 << INTEGER_MATH_SHIFT;
            var v2568 = moduleSize$$3 - v2567;
            var v2569 = v2565(v2568);
            v441 = v2569 < maxVariance
          }
          v437 = v441
        }
        v407 = v437
      }
      v338 = v407
    }
    return v338
  }
  function v125(stateCount$$1, end$$3) {
    var v2570 = stateCount$$1[4];
    var v2571 = end$$3 - v2570;
    var v2572 = stateCount$$1[3];
    var v2573 = v2571 - v2572;
    var v2574 = stateCount$$1[2];
    var v2575 = v2574 / 2;
    var v2576 = v2573 - v2575;
    return v2576
  }
  function v126(startI, centerJ, maxCount, originalStateCountTotal) {
    var image$$10 = this.image;
    var maxI = qrcode.height;
    var stateCount$$2 = this.CrossCheckStateCount;
    var i$$49 = startI;
    var v339 = i$$49 >= 0;
    if(v339) {
      var v2577 = qrcode.width;
      var v2578 = i$$49 * v2577;
      var v2579 = centerJ + v2578;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v2580 = image$$10[v2579]
      }
      v339 = v2580
    }
    var v261 = v339;
    for(;v261;) {
      stateCount$$2[2]++;
      i$$49--;
      var v340 = i$$49 >= 0;
      if(v340) {
        var v2581 = qrcode.width;
        var v2582 = i$$49 * v2581;
        var v2583 = centerJ + v2582;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v2584 = image$$10[v2583]
        }
        v340 = v2584
      }
      v261 = v340
    }
    var v2585 = i$$49 < 0;
    if(v2585) {
      return NaN
    }
    var v341 = i$$49 >= 0;
    if(v341) {
      var v2586 = qrcode.width;
      var v2587 = i$$49 * v2586;
      var v2588 = centerJ + v2587;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v408 = !image$$10[v2588]
      }
      if(v408) {
        var v2589 = stateCount$$2[1];
        v408 = v2589 <= maxCount
      }
      v341 = v408
    }
    var v262 = v341;
    for(;v262;) {
      stateCount$$2[1]++;
      i$$49--;
      var v342 = i$$49 >= 0;
      if(v342) {
        var v2590 = qrcode.width;
        var v2591 = i$$49 * v2590;
        var v2592 = centerJ + v2591;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v409 = !image$$10[v2592]
        }
        if(v409) {
          var v2593 = stateCount$$2[1];
          v409 = v2593 <= maxCount
        }
        v342 = v409
      }
      v262 = v342
    }
    var v397 = i$$49 < 0;
    if(!v397) {
      var v2594 = stateCount$$2[1];
      v397 = v2594 > maxCount
    }
    if(v397) {
      return NaN
    }
    var v343 = i$$49 >= 0;
    if(v343) {
      var v2595 = qrcode.width;
      var v2596 = i$$49 * v2595;
      var v2597 = centerJ + v2596;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v410 = image$$10[v2597]
      }
      if(v410) {
        var v2598 = stateCount$$2[0];
        v410 = v2598 <= maxCount
      }
      v343 = v410
    }
    var v263 = v343;
    for(;v263;) {
      stateCount$$2[0]++;
      i$$49--;
      var v344 = i$$49 >= 0;
      if(v344) {
        var v2599 = qrcode.width;
        var v2600 = i$$49 * v2599;
        var v2601 = centerJ + v2600;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v411 = image$$10[v2601]
        }
        if(v411) {
          var v2602 = stateCount$$2[0];
          v411 = v2602 <= maxCount
        }
        v344 = v411
      }
      v263 = v344
    }
    var v2603 = stateCount$$2[0];
    var v2604 = v2603 > maxCount;
    if(v2604) {
      return NaN
    }
    i$$49 = startI + 1;
    var v345 = i$$49 < maxI;
    if(v345) {
      var v2605 = qrcode.width;
      var v2606 = i$$49 * v2605;
      var v2607 = centerJ + v2606;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v2608 = image$$10[v2607]
      }
      v345 = v2608
    }
    var v264 = v345;
    for(;v264;) {
      stateCount$$2[2]++;
      i$$49++;
      var v346 = i$$49 < maxI;
      if(v346) {
        var v2609 = qrcode.width;
        var v2610 = i$$49 * v2609;
        var v2611 = centerJ + v2610;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v2612 = image$$10[v2611]
        }
        v346 = v2612
      }
      v264 = v346
    }
    var v2613 = i$$49 == maxI;
    if(v2613) {
      return NaN
    }
    var v347 = i$$49 < maxI;
    if(v347) {
      var v2614 = qrcode.width;
      var v2615 = i$$49 * v2614;
      var v2616 = centerJ + v2615;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v412 = !image$$10[v2616]
      }
      if(v412) {
        var v2617 = stateCount$$2[3];
        v412 = v2617 < maxCount
      }
      v347 = v412
    }
    var v265 = v347;
    for(;v265;) {
      stateCount$$2[3]++;
      i$$49++;
      var v348 = i$$49 < maxI;
      if(v348) {
        var v2618 = qrcode.width;
        var v2619 = i$$49 * v2618;
        var v2620 = centerJ + v2619;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v413 = !image$$10[v2620]
        }
        if(v413) {
          var v2621 = stateCount$$2[3];
          v413 = v2621 < maxCount
        }
        v348 = v413
      }
      v265 = v348
    }
    var v398 = i$$49 == maxI;
    if(!v398) {
      var v2622 = stateCount$$2[3];
      v398 = v2622 >= maxCount
    }
    if(v398) {
      return NaN
    }
    var v349 = i$$49 < maxI;
    if(v349) {
      var v2623 = qrcode.width;
      var v2624 = i$$49 * v2623;
      var v2625 = centerJ + v2624;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v414 = image$$10[v2625]
      }
      if(v414) {
        var v2626 = stateCount$$2[4];
        v414 = v2626 < maxCount
      }
      v349 = v414
    }
    var v266 = v349;
    for(;v266;) {
      stateCount$$2[4]++;
      i$$49++;
      var v350 = i$$49 < maxI;
      if(v350) {
        var v2627 = qrcode.width;
        var v2628 = i$$49 * v2627;
        var v2629 = centerJ + v2628;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v415 = image$$10[v2629]
        }
        if(v415) {
          var v2630 = stateCount$$2[4];
          v415 = v2630 < maxCount
        }
        v350 = v415
      }
      v266 = v350
    }
    var v2631 = stateCount$$2[4];
    var v2632 = v2631 >= maxCount;
    if(v2632) {
      return NaN
    }
    var v2633 = stateCount$$2[0];
    var v2634 = stateCount$$2[1];
    var v2635 = v2633 + v2634;
    var v2636 = stateCount$$2[2];
    var v2637 = v2635 + v2636;
    var v2638 = stateCount$$2[3];
    var v2639 = v2637 + v2638;
    var v2640 = stateCount$$2[4];
    var stateCountTotal = v2639 + v2640;
    var v2641 = Math.abs;
    v2641 = v2641.bind(Math);
    var v2642 = stateCountTotal - originalStateCountTotal;
    var v2643 = v2641(v2642);
    var v2644 = 5 * v2643;
    var v2645 = 2 * originalStateCountTotal;
    var v2646 = v2644 >= v2645;
    if(v2646) {
      return NaN
    }
    var v314;
    var v2647 = this.foundPatternCross;
    v2647 = v2647.bind(this);
    var v2648 = v2647(stateCount$$2);
    if(v2648) {
      var v2649 = this.centerFromEnd;
      v2649 = v2649.bind(this);
      v314 = v2649(stateCount$$2, i$$49)
    }else {
      v314 = NaN
    }
    return v314
  }
  function v127(startJ, centerI, maxCount$$1, originalStateCountTotal$$1) {
    var image$$11 = this.image;
    var maxJ = qrcode.width;
    var stateCount$$3 = this.CrossCheckStateCount;
    var j$$26 = startJ;
    var v351 = j$$26 >= 0;
    if(v351) {
      var v2650 = qrcode.width;
      var v2651 = centerI * v2650;
      var v2652 = j$$26 + v2651;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v2653 = image$$11[v2652]
      }
      v351 = v2653
    }
    var v267 = v351;
    for(;v267;) {
      stateCount$$3[2]++;
      j$$26--;
      var v352 = j$$26 >= 0;
      if(v352) {
        var v2654 = qrcode.width;
        var v2655 = centerI * v2654;
        var v2656 = j$$26 + v2655;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v2657 = image$$11[v2656]
        }
        v352 = v2657
      }
      v267 = v352
    }
    var v2658 = j$$26 < 0;
    if(v2658) {
      return NaN
    }
    var v353 = j$$26 >= 0;
    if(v353) {
      var v2659 = qrcode.width;
      var v2660 = centerI * v2659;
      var v2661 = j$$26 + v2660;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v416 = !image$$11[v2661]
      }
      if(v416) {
        var v2662 = stateCount$$3[1];
        v416 = v2662 <= maxCount$$1
      }
      v353 = v416
    }
    var v268 = v353;
    for(;v268;) {
      stateCount$$3[1]++;
      j$$26--;
      var v354 = j$$26 >= 0;
      if(v354) {
        var v2663 = qrcode.width;
        var v2664 = centerI * v2663;
        var v2665 = j$$26 + v2664;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v417 = !image$$11[v2665]
        }
        if(v417) {
          var v2666 = stateCount$$3[1];
          v417 = v2666 <= maxCount$$1
        }
        v354 = v417
      }
      v268 = v354
    }
    var v399 = j$$26 < 0;
    if(!v399) {
      var v2667 = stateCount$$3[1];
      v399 = v2667 > maxCount$$1
    }
    if(v399) {
      return NaN
    }
    var v355 = j$$26 >= 0;
    if(v355) {
      var v2668 = qrcode.width;
      var v2669 = centerI * v2668;
      var v2670 = j$$26 + v2669;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v418 = image$$11[v2670]
      }
      if(v418) {
        var v2671 = stateCount$$3[0];
        v418 = v2671 <= maxCount$$1
      }
      v355 = v418
    }
    var v269 = v355;
    for(;v269;) {
      stateCount$$3[0]++;
      j$$26--;
      var v356 = j$$26 >= 0;
      if(v356) {
        var v2672 = qrcode.width;
        var v2673 = centerI * v2672;
        var v2674 = j$$26 + v2673;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v419 = image$$11[v2674]
        }
        if(v419) {
          var v2675 = stateCount$$3[0];
          v419 = v2675 <= maxCount$$1
        }
        v356 = v419
      }
      v269 = v356
    }
    var v2676 = stateCount$$3[0];
    var v2677 = v2676 > maxCount$$1;
    if(v2677) {
      return NaN
    }
    j$$26 = startJ + 1;
    var v357 = j$$26 < maxJ;
    if(v357) {
      var v2678 = qrcode.width;
      var v2679 = centerI * v2678;
      var v2680 = j$$26 + v2679;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v2681 = image$$11[v2680]
      }
      v357 = v2681
    }
    var v270 = v357;
    for(;v270;) {
      stateCount$$3[2]++;
      j$$26++;
      var v358 = j$$26 < maxJ;
      if(v358) {
        var v2682 = qrcode.width;
        var v2683 = centerI * v2682;
        var v2684 = j$$26 + v2683;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v2685 = image$$11[v2684]
        }
        v358 = v2685
      }
      v270 = v358
    }
    var v2686 = j$$26 == maxJ;
    if(v2686) {
      return NaN
    }
    var v359 = j$$26 < maxJ;
    if(v359) {
      var v2687 = qrcode.width;
      var v2688 = centerI * v2687;
      var v2689 = j$$26 + v2688;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v420 = !image$$11[v2689]
      }
      if(v420) {
        var v2690 = stateCount$$3[3];
        v420 = v2690 < maxCount$$1
      }
      v359 = v420
    }
    var v271 = v359;
    for(;v271;) {
      stateCount$$3[3]++;
      j$$26++;
      var v360 = j$$26 < maxJ;
      if(v360) {
        var v2691 = qrcode.width;
        var v2692 = centerI * v2691;
        var v2693 = j$$26 + v2692;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v421 = !image$$11[v2693]
        }
        if(v421) {
          var v2694 = stateCount$$3[3];
          v421 = v2694 < maxCount$$1
        }
        v360 = v421
      }
      v271 = v360
    }
    var v400 = j$$26 == maxJ;
    if(!v400) {
      var v2695 = stateCount$$3[3];
      v400 = v2695 >= maxCount$$1
    }
    if(v400) {
      return NaN
    }
    var v361 = j$$26 < maxJ;
    if(v361) {
      var v2696 = qrcode.width;
      var v2697 = centerI * v2696;
      var v2698 = j$$26 + v2697;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v422 = image$$11[v2698]
      }
      if(v422) {
        var v2699 = stateCount$$3[4];
        v422 = v2699 < maxCount$$1
      }
      v361 = v422
    }
    var v272 = v361;
    for(;v272;) {
      stateCount$$3[4]++;
      j$$26++;
      var v362 = j$$26 < maxJ;
      if(v362) {
        var v2700 = qrcode.width;
        var v2701 = centerI * v2700;
        var v2702 = j$$26 + v2701;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v423 = image$$11[v2702]
        }
        if(v423) {
          var v2703 = stateCount$$3[4];
          v423 = v2703 < maxCount$$1
        }
        v362 = v423
      }
      v272 = v362
    }
    var v2704 = stateCount$$3[4];
    var v2705 = v2704 >= maxCount$$1;
    if(v2705) {
      return NaN
    }
    var v2706 = stateCount$$3[0];
    var v2707 = stateCount$$3[1];
    var v2708 = v2706 + v2707;
    var v2709 = stateCount$$3[2];
    var v2710 = v2708 + v2709;
    var v2711 = stateCount$$3[3];
    var v2712 = v2710 + v2711;
    var v2713 = stateCount$$3[4];
    var stateCountTotal$$1 = v2712 + v2713;
    var v2714 = Math.abs;
    v2714 = v2714.bind(Math);
    var v2715 = stateCountTotal$$1 - originalStateCountTotal$$1;
    var v2716 = v2714(v2715);
    var v2717 = 5 * v2716;
    var v2718 = v2717 >= originalStateCountTotal$$1;
    if(v2718) {
      return NaN
    }
    var v315;
    var v2719 = this.foundPatternCross;
    v2719 = v2719.bind(this);
    var v2720 = v2719(stateCount$$3);
    if(v2720) {
      var v2721 = this.centerFromEnd;
      v2721 = v2721.bind(this);
      v315 = v2721(stateCount$$3, j$$26)
    }else {
      v315 = NaN
    }
    return v315
  }
  function v128(stateCount$$4, i$$50, j$$27) {
    var v2722 = stateCount$$4[0];
    var v2723 = stateCount$$4[1];
    var v2724 = v2722 + v2723;
    var v2725 = stateCount$$4[2];
    var v2726 = v2724 + v2725;
    var v2727 = stateCount$$4[3];
    var v2728 = v2726 + v2727;
    var v2729 = stateCount$$4[4];
    var stateCountTotal$$2 = v2728 + v2729;
    var v2730 = this.centerFromEnd;
    v2730 = v2730.bind(this);
    var centerJ$$1 = v2730(stateCount$$4, j$$27);
    var v2731 = this.crossCheckVertical;
    v2731 = v2731.bind(this);
    var v2732 = Math.floor;
    v2732 = v2732.bind(Math);
    var v2733 = v2732(centerJ$$1);
    var v2734 = stateCount$$4[2];
    var centerI$$1 = v2731(i$$50, v2733, v2734, stateCountTotal$$2);
    if(!isNaN(centerI$$1)) {
      var v2735 = this.crossCheckHorizontal;
      v2735 = v2735.bind(this);
      var v2736 = Math.floor;
      v2736 = v2736.bind(Math);
      var v2737 = v2736(centerJ$$1);
      var v2738 = Math.floor;
      v2738 = v2738.bind(Math);
      var v2739 = v2738(centerI$$1);
      var v2740 = stateCount$$4[2];
      centerJ$$1 = v2735(v2737, v2739, v2740, stateCountTotal$$2);
      if(!isNaN(centerJ$$1)) {
        var estimatedModuleSize$$1 = stateCountTotal$$2 / 7;
        var found = false;
        var v2741 = this.possibleCenters;
        var max$$5 = v2741.length;
        var index$$44 = 0;
        var v273 = index$$44 < max$$5;
        for(;v273;) {
          var v2742 = this.possibleCenters;
          var center = v2742[index$$44];
          var v2743 = center.aboutEquals;
          v2743 = v2743.bind(center);
          var v2744 = v2743(estimatedModuleSize$$1, centerI$$1, centerJ$$1);
          if(v2744) {
            var v2745 = center.incrementCount;
            v2745 = v2745.bind(center);
            v2745();
            found = true;
            break
          }
          index$$44++;
          v273 = index$$44 < max$$5
        }
        if(!found) {
          var point$$2 = new FinderPattern(centerJ$$1, centerI$$1, estimatedModuleSize$$1);
          var v2746 = this.possibleCenters;
          var v2747 = v2746.push;
          v2747 = v2747.bind(v2746);
          v2747(point$$2);
          var v2748 = this.resultPointCallback;
          var v2749 = v2748 != null;
          if(v2749) {
            var v2750 = this.resultPointCallback;
            var v2751 = v2750.foundPossibleResultPoint;
            v2751 = v2751.bind(v2750);
            v2751(point$$2)
          }
        }
        return true
      }
    }
    return false
  }
  function v130() {
    function v129(a$$8, b$$5) {
      var v2775 = a$$8.count;
      var v2776 = b$$5.count;
      var v2777 = v2775 > v2776;
      if(v2777) {
        return-1
      }
      var v2778 = a$$8.count;
      var v2779 = b$$5.count;
      var v2780 = v2778 < v2779;
      if(v2780) {
        return 1
      }
      return 0
    }
    var v2752 = this.possibleCenters;
    var startSize = v2752.length;
    var v2753 = startSize < 3;
    if(v2753) {
      throw"Couldn't find enough finder patterns";
    }
    var v2754 = startSize > 3;
    if(v2754) {
      var totalModuleSize$$1 = 0;
      var i$$51 = 0;
      var v274 = i$$51 < startSize;
      for(;v274;) {
        var v2755 = this.possibleCenters;
        var v2756 = v2755[i$$51];
        var v2757 = v2756.EstimatedModuleSize;
        totalModuleSize$$1 += v2757;
        i$$51++;
        v274 = i$$51 < startSize
      }
      var average = totalModuleSize$$1 / startSize;
      i$$51 = 0;
      var v2758 = this.possibleCenters;
      var v2759 = v2758.length;
      var v363 = i$$51 < v2759;
      if(v363) {
        var v2760 = this.possibleCenters;
        var v2761 = v2760.length;
        v363 = v2761 > 3
      }
      var v275 = v363;
      for(;v275;) {
        var v2762 = this.possibleCenters;
        var pattern$$2 = v2762[i$$51];
        var v2763 = Math.abs;
        v2763 = v2763.bind(Math);
        var v2764 = pattern$$2.EstimatedModuleSize;
        var v2765 = v2764 - average;
        var v2766 = v2763(v2765);
        var v2767 = 0.2 * average;
        var v2768 = v2766 > v2767;
        if(v2768) {
          var v2769 = this.possibleCenters;
          var v2770 = v2769.remove;
          v2770 = v2770.bind(v2769);
          v2770(i$$51);
          i$$51--
        }
        i$$51++;
        var v2771 = this.possibleCenters;
        var v2772 = v2771.length;
        var v364 = i$$51 < v2772;
        if(v364) {
          var v2773 = this.possibleCenters;
          var v2774 = v2773.length;
          v364 = v2774 > 3
        }
        v275 = v364
      }
    }
    var v2781 = this.possibleCenters;
    var v2782 = v2781.length;
    var v2783 = v2782 > 3;
    if(v2783) {
      var v2784 = this.possibleCenters;
      var v2785 = v2784.sort;
      v2785 = v2785.bind(v2784);
      v2785(v129)
    }
    var v2786 = this.possibleCenters;
    var v2787 = v2786[0];
    var v2788 = this.possibleCenters;
    var v2789 = v2788[1];
    var v2790 = this.possibleCenters;
    var v2791 = v2790[2];
    var v2792 = new Array(v2787, v2789, v2791);
    return v2792
  }
  function v131() {
    var v2793 = this.possibleCenters;
    var max$$6 = v2793.length;
    var v2794 = max$$6 <= 1;
    if(v2794) {
      return 0
    }
    var firstConfirmedCenter = null;
    var i$$52 = 0;
    var v276 = i$$52 < max$$6;
    for(;v276;) {
      var v2795 = this.possibleCenters;
      var center$$1 = v2795[i$$52];
      var v2796 = center$$1.Count;
      var v2797 = v2796 >= CENTER_QUORUM;
      if(v2797) {
        var v2798 = firstConfirmedCenter == null;
        if(v2798) {
          firstConfirmedCenter = center$$1
        }else {
          this.hasSkipped = true;
          var v2799 = Math.floor;
          v2799 = v2799.bind(Math);
          var v2800 = Math.abs;
          v2800 = v2800.bind(Math);
          var v2801 = firstConfirmedCenter.X;
          var v2802 = center$$1.X;
          var v2803 = v2801 - v2802;
          var v2804 = v2800(v2803);
          var v2805 = Math.abs;
          v2805 = v2805.bind(Math);
          var v2806 = firstConfirmedCenter.Y;
          var v2807 = center$$1.Y;
          var v2808 = v2806 - v2807;
          var v2809 = v2805(v2808);
          var v2810 = v2804 - v2809;
          var v2811 = v2810 / 2;
          var v2812 = v2799(v2811);
          return v2812
        }
      }
      i$$52++;
      v276 = i$$52 < max$$6
    }
    return 0
  }
  function v132() {
    var confirmedCount = 0;
    var totalModuleSize$$2 = 0;
    var v2813 = this.possibleCenters;
    var max$$7 = v2813.length;
    var i$$53 = 0;
    var v277 = i$$53 < max$$7;
    for(;v277;) {
      var v2814 = this.possibleCenters;
      var pattern$$3 = v2814[i$$53];
      var v2815 = pattern$$3.Count;
      var v2816 = v2815 >= CENTER_QUORUM;
      if(v2816) {
        confirmedCount++;
        var v2817 = pattern$$3.EstimatedModuleSize;
        totalModuleSize$$2 += v2817
      }
      i$$53++;
      v277 = i$$53 < max$$7
    }
    var v2818 = confirmedCount < 3;
    if(v2818) {
      return false
    }
    var average$$1 = totalModuleSize$$2 / max$$7;
    var totalDeviation = 0;
    i$$53 = 0;
    var v278 = i$$53 < max$$7;
    for(;v278;) {
      var v2819 = this.possibleCenters;
      var v2820 = v2819[i$$53];
      pattern$$3 = v2820;
      var v2821 = Math.abs;
      v2821 = v2821.bind(Math);
      var v2822 = pattern$$3.EstimatedModuleSize;
      var v2823 = v2822 - average$$1;
      totalDeviation += v2821(v2823);
      i$$53++;
      v278 = i$$53 < max$$7
    }
    var v2824 = 0.05 * totalModuleSize$$2;
    var v2825 = totalDeviation <= v2824;
    return v2825
  }
  function v133(image$$12) {
    var tryHarder = false;
    this.image = image$$12;
    var maxI$$1 = qrcode.height;
    var maxJ$$1 = qrcode.width;
    var v2826 = Math.floor;
    v2826 = v2826.bind(Math);
    var v2827 = 3 * maxI$$1;
    var v2828 = 4 * MAX_MODULES;
    var v2829 = v2827 / v2828;
    var iSkip = v2826(v2829);
    var v401 = iSkip < MIN_SKIP;
    if(!v401) {
      v401 = tryHarder
    }
    if(v401) {
      iSkip = MIN_SKIP
    }
    var done = false;
    var stateCount$$5 = new Array(5);
    var i$$54 = iSkip - 1;
    var v365 = i$$54 < maxI$$1;
    if(v365) {
      v365 = !done
    }
    var v280 = v365;
    for(;v280;) {
      stateCount$$5[0] = 0;
      stateCount$$5[1] = 0;
      stateCount$$5[2] = 0;
      stateCount$$5[3] = 0;
      stateCount$$5[4] = 0;
      var currentState = 0;
      var j$$28 = 0;
      var v279 = j$$28 < maxJ$$1;
      for(;v279;) {
        var v2830 = qrcode.width;
        var v2831 = i$$54 * v2830;
        var v2832 = j$$28 + v2831;
        var v2833 = image$$12[v2832];
        if(v2833) {
          var v2834 = currentState & 1;
          var v2835 = v2834 == 1;
          if(v2835) {
            currentState++
          }
          stateCount$$5[currentState]++
        }else {
          var v2836 = currentState & 1;
          var v2837 = v2836 == 0;
          if(v2837) {
            var v2838 = currentState == 4;
            if(v2838) {
              var v2839 = this.foundPatternCross;
              v2839 = v2839.bind(this);
              var v2840 = v2839(stateCount$$5);
              if(v2840) {
                var v2841 = this.handlePossibleCenter;
                v2841 = v2841.bind(this);
                var confirmed = v2841(stateCount$$5, i$$54, j$$28);
                if(confirmed) {
                  iSkip = 2;
                  var v2842 = this.hasSkipped;
                  if(v2842) {
                    var v2843 = this.haveMultiplyConfirmedCenters;
                    v2843 = v2843.bind(this);
                    done = v2843()
                  }else {
                    var v2844 = this.findRowSkip;
                    v2844 = v2844.bind(this);
                    var rowSkip = v2844();
                    var v2845 = stateCount$$5[2];
                    var v2846 = rowSkip > v2845;
                    if(v2846) {
                      var v2847 = stateCount$$5[2];
                      var v2848 = rowSkip - v2847;
                      i$$54 += v2848 - iSkip;
                      j$$28 = maxJ$$1 - 1
                    }
                  }
                }else {
                  do {
                    j$$28++
                  }while(j$$28 < maxJ$$1 && !image$$12[j$$28 + i$$54 * qrcode.width]);
                  j$$28--
                }
                currentState = 0;
                stateCount$$5[0] = 0;
                stateCount$$5[1] = 0;
                stateCount$$5[2] = 0;
                stateCount$$5[3] = 0;
                stateCount$$5[4] = 0
              }else {
                var v2849 = stateCount$$5[2];
                stateCount$$5[0] = v2849;
                var v2850 = stateCount$$5[3];
                stateCount$$5[1] = v2850;
                var v2851 = stateCount$$5[4];
                stateCount$$5[2] = v2851;
                stateCount$$5[3] = 1;
                stateCount$$5[4] = 0;
                currentState = 3
              }
            }else {
              ++currentState;
              stateCount$$5[currentState]++
            }
          }else {
            stateCount$$5[currentState]++
          }
        }
        j$$28++;
        v279 = j$$28 < maxJ$$1
      }
      var v2852 = this.foundPatternCross;
      v2852 = v2852.bind(this);
      var v2853 = v2852(stateCount$$5);
      if(v2853) {
        var v2854 = this.handlePossibleCenter;
        v2854 = v2854.bind(this);
        confirmed = v2854(stateCount$$5, i$$54, maxJ$$1);
        if(confirmed) {
          var v2855 = stateCount$$5[0];
          iSkip = v2855;
          var v2856 = this.hasSkipped;
          if(v2856) {
            done = haveMultiplyConfirmedCenters()
          }
        }
      }
      i$$54 += iSkip;
      var v366 = i$$54 < maxI$$1;
      if(v366) {
        v366 = !done
      }
      v280 = v366
    }
    var v2857 = this.selectBestPatterns;
    v2857 = v2857.bind(this);
    var patternInfo = v2857();
    var v2858 = qrcode.orderBestPatterns;
    v2858 = v2858.bind(qrcode);
    v2858(patternInfo);
    var v2859 = new FinderPatternInfo(patternInfo);
    return v2859
  }
  this.image = null;
  var v2527 = [];
  this.possibleCenters = v2527;
  this.hasSkipped = false;
  var v2528 = new Array(0, 0, 0, 0, 0);
  this.crossCheckStateCount = v2528;
  this.resultPointCallback = null;
  var v2535 = this.__defineGetter__;
  v2535 = v2535.bind(this);
  v2535("CrossCheckStateCount", v123);
  this.foundPatternCross = v124;
  this.centerFromEnd = v125;
  this.crossCheckVertical = v126;
  this.crossCheckHorizontal = v127;
  this.handlePossibleCenter = v128;
  this.selectBestPatterns = v130;
  this.findRowSkip = v131;
  this.haveMultiplyConfirmedCenters = v132;
  this.findFinderPattern = v133
}
function AlignmentPattern(posX$$1, posY$$1, estimatedModuleSize$$2) {
  function v134() {
    var v2860 = this.estimatedModuleSize;
    return v2860
  }
  function v135() {
    var v2862 = this.count;
    return v2862
  }
  function v136() {
    var v2864 = Math.floor;
    v2864 = v2864.bind(Math);
    var v2865 = this.x;
    var v2866 = v2864(v2865);
    return v2866
  }
  function v137() {
    var v2868 = Math.floor;
    v2868 = v2868.bind(Math);
    var v2869 = this.y;
    var v2870 = v2868(v2869);
    return v2870
  }
  function v138() {
    this.count++
  }
  function v139(moduleSize$$4, i$$55, j$$29) {
    var v2872 = Math.abs;
    v2872 = v2872.bind(Math);
    var v2873 = this.y;
    var v2874 = i$$55 - v2873;
    var v2875 = v2872(v2874);
    var v367 = v2875 <= moduleSize$$4;
    if(v367) {
      var v2876 = Math.abs;
      v2876 = v2876.bind(Math);
      var v2877 = this.x;
      var v2878 = j$$29 - v2877;
      var v2879 = v2876(v2878);
      v367 = v2879 <= moduleSize$$4
    }
    if(v367) {
      var v2880 = Math.abs;
      v2880 = v2880.bind(Math);
      var v2881 = this.estimatedModuleSize;
      var v2882 = moduleSize$$4 - v2881;
      var moduleSizeDiff$$1 = v2880(v2882);
      var v402 = moduleSizeDiff$$1 <= 1;
      if(!v402) {
        var v2883 = this.estimatedModuleSize;
        var v2884 = moduleSizeDiff$$1 / v2883;
        v402 = v2884 <= 1
      }
      return v402
    }
    return false
  }
  this.x = posX$$1;
  this.y = posY$$1;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize$$2;
  var v2861 = this.__defineGetter__;
  v2861 = v2861.bind(this);
  v2861("EstimatedModuleSize", v134);
  var v2863 = this.__defineGetter__;
  v2863 = v2863.bind(this);
  v2863("Count", v135);
  var v2867 = this.__defineGetter__;
  v2867 = v2867.bind(this);
  v2867("X", v136);
  var v2871 = this.__defineGetter__;
  v2871 = v2871.bind(this);
  v2871("Y", v137);
  this.incrementCount = v138;
  this.aboutEquals = v139
}
function AlignmentPatternFinder(image$$13, startX, startY, width$$15, height$$14, moduleSize$$5, resultPointCallback) {
  function v140(stateCount$$6, end$$4) {
    var v2887 = stateCount$$6[2];
    var v2888 = end$$4 - v2887;
    var v2889 = stateCount$$6[1];
    var v2890 = v2889 / 2;
    var v2891 = v2888 - v2890;
    return v2891
  }
  function v141(stateCount$$7) {
    var moduleSize$$6 = this.moduleSize;
    var maxVariance$$1 = moduleSize$$6 / 2;
    var i$$56 = 0;
    var v281 = i$$56 < 3;
    for(;v281;) {
      var v2892 = Math.abs;
      v2892 = v2892.bind(Math);
      var v2893 = stateCount$$7[i$$56];
      var v2894 = moduleSize$$6 - v2893;
      var v2895 = v2892(v2894);
      var v2896 = v2895 >= maxVariance$$1;
      if(v2896) {
        return false
      }
      i$$56++;
      v281 = i$$56 < 3
    }
    return true
  }
  function v142(startI$$1, centerJ$$2, maxCount$$2, originalStateCountTotal$$2) {
    var image$$14 = this.image;
    var maxI$$2 = qrcode.height;
    var stateCount$$8 = this.crossCheckStateCount;
    stateCount$$8[0] = 0;
    stateCount$$8[1] = 0;
    stateCount$$8[2] = 0;
    var i$$57 = startI$$1;
    var v368 = i$$57 >= 0;
    if(v368) {
      var v2897 = qrcode.width;
      var v2898 = i$$57 * v2897;
      var v2899 = centerJ$$2 + v2898;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v424 = image$$14[v2899]
      }
      if(v424) {
        var v2900 = stateCount$$8[1];
        v424 = v2900 <= maxCount$$2
      }
      v368 = v424
    }
    var v282 = v368;
    for(;v282;) {
      stateCount$$8[1]++;
      i$$57--;
      var v369 = i$$57 >= 0;
      if(v369) {
        var v2901 = qrcode.width;
        var v2902 = i$$57 * v2901;
        var v2903 = centerJ$$2 + v2902;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v425 = image$$14[v2903]
        }
        if(v425) {
          var v2904 = stateCount$$8[1];
          v425 = v2904 <= maxCount$$2
        }
        v369 = v425
      }
      v282 = v369
    }
    var v403 = i$$57 < 0;
    if(!v403) {
      var v2905 = stateCount$$8[1];
      v403 = v2905 > maxCount$$2
    }
    if(v403) {
      return NaN
    }
    var v370 = i$$57 >= 0;
    if(v370) {
      var v2906 = qrcode.width;
      var v2907 = i$$57 * v2906;
      var v2908 = centerJ$$2 + v2907;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v426 = !image$$14[v2908]
      }
      if(v426) {
        var v2909 = stateCount$$8[0];
        v426 = v2909 <= maxCount$$2
      }
      v370 = v426
    }
    var v283 = v370;
    for(;v283;) {
      stateCount$$8[0]++;
      i$$57--;
      var v371 = i$$57 >= 0;
      if(v371) {
        var v2910 = qrcode.width;
        var v2911 = i$$57 * v2910;
        var v2912 = centerJ$$2 + v2911;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v427 = !image$$14[v2912]
        }
        if(v427) {
          var v2913 = stateCount$$8[0];
          v427 = v2913 <= maxCount$$2
        }
        v371 = v427
      }
      v283 = v371
    }
    var v2914 = stateCount$$8[0];
    var v2915 = v2914 > maxCount$$2;
    if(v2915) {
      return NaN
    }
    i$$57 = startI$$1 + 1;
    var v372 = i$$57 < maxI$$2;
    if(v372) {
      var v2916 = qrcode.width;
      var v2917 = i$$57 * v2916;
      var v2918 = centerJ$$2 + v2917;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v428 = image$$14[v2918]
      }
      if(v428) {
        var v2919 = stateCount$$8[1];
        v428 = v2919 <= maxCount$$2
      }
      v372 = v428
    }
    var v284 = v372;
    for(;v284;) {
      stateCount$$8[1]++;
      i$$57++;
      var v373 = i$$57 < maxI$$2;
      if(v373) {
        var v2920 = qrcode.width;
        var v2921 = i$$57 * v2920;
        var v2922 = centerJ$$2 + v2921;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v429 = image$$14[v2922]
        }
        if(v429) {
          var v2923 = stateCount$$8[1];
          v429 = v2923 <= maxCount$$2
        }
        v373 = v429
      }
      v284 = v373
    }
    var v404 = i$$57 == maxI$$2;
    if(!v404) {
      var v2924 = stateCount$$8[1];
      v404 = v2924 > maxCount$$2
    }
    if(v404) {
      return NaN
    }
    var v374 = i$$57 < maxI$$2;
    if(v374) {
      var v2925 = qrcode.width;
      var v2926 = i$$57 * v2925;
      var v2927 = centerJ$$2 + v2926;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v430 = !image$$14[v2927]
      }
      if(v430) {
        var v2928 = stateCount$$8[2];
        v430 = v2928 <= maxCount$$2
      }
      v374 = v430
    }
    var v285 = v374;
    for(;v285;) {
      stateCount$$8[2]++;
      i$$57++;
      var v375 = i$$57 < maxI$$2;
      if(v375) {
        var v2929 = qrcode.width;
        var v2930 = i$$57 * v2929;
        var v2931 = centerJ$$2 + v2930;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v431 = !image$$14[v2931]
        }
        if(v431) {
          var v2932 = stateCount$$8[2];
          v431 = v2932 <= maxCount$$2
        }
        v375 = v431
      }
      v285 = v375
    }
    var v2933 = stateCount$$8[2];
    var v2934 = v2933 > maxCount$$2;
    if(v2934) {
      return NaN
    }
    var v2935 = stateCount$$8[0];
    var v2936 = stateCount$$8[1];
    var v2937 = v2935 + v2936;
    var v2938 = stateCount$$8[2];
    var stateCountTotal$$3 = v2937 + v2938;
    var v2939 = Math.abs;
    v2939 = v2939.bind(Math);
    var v2940 = stateCountTotal$$3 - originalStateCountTotal$$2;
    var v2941 = v2939(v2940);
    var v2942 = 5 * v2941;
    var v2943 = 2 * originalStateCountTotal$$2;
    var v2944 = v2942 >= v2943;
    if(v2944) {
      return NaN
    }
    var v316;
    var v2945 = this.foundPatternCross;
    v2945 = v2945.bind(this);
    var v2946 = v2945(stateCount$$8);
    if(v2946) {
      var v2947 = this.centerFromEnd;
      v2947 = v2947.bind(this);
      v316 = v2947(stateCount$$8, i$$57)
    }else {
      v316 = NaN
    }
    return v316
  }
  function v143(stateCount$$9, i$$58, j$$30) {
    var v2948 = stateCount$$9[0];
    var v2949 = stateCount$$9[1];
    var v2950 = v2948 + v2949;
    var v2951 = stateCount$$9[2];
    var stateCountTotal$$4 = v2950 + v2951;
    var v2952 = this.centerFromEnd;
    v2952 = v2952.bind(this);
    var centerJ$$3 = v2952(stateCount$$9, j$$30);
    var v2953 = this.crossCheckVertical;
    v2953 = v2953.bind(this);
    var v2954 = Math.floor;
    v2954 = v2954.bind(Math);
    var v2955 = v2954(centerJ$$3);
    var v2956 = stateCount$$9[1];
    var v2957 = 2 * v2956;
    var centerI$$2 = v2953(i$$58, v2955, v2957, stateCountTotal$$4);
    if(!isNaN(centerI$$2)) {
      var v2958 = stateCount$$9[0];
      var v2959 = stateCount$$9[1];
      var v2960 = v2958 + v2959;
      var v2961 = stateCount$$9[2];
      var v2962 = v2960 + v2961;
      var estimatedModuleSize$$3 = v2962 / 3;
      var v2963 = this.possibleCenters;
      var max$$8 = v2963.length;
      var index$$45 = 0;
      var v286 = index$$45 < max$$8;
      for(;v286;) {
        var v2964 = this.possibleCenters;
        var center$$2 = v2964[index$$45];
        var v2965 = center$$2.aboutEquals;
        v2965 = v2965.bind(center$$2);
        var v2966 = v2965(estimatedModuleSize$$3, centerI$$2, centerJ$$3);
        if(v2966) {
          var v2967 = new AlignmentPattern(centerJ$$3, centerI$$2, estimatedModuleSize$$3);
          return v2967
        }
        index$$45++;
        v286 = index$$45 < max$$8
      }
      var point$$3 = new AlignmentPattern(centerJ$$3, centerI$$2, estimatedModuleSize$$3);
      var v2968 = this.possibleCenters;
      var v2969 = v2968.push;
      v2969 = v2969.bind(v2968);
      v2969(point$$3);
      var v2970 = this.resultPointCallback;
      var v2971 = v2970 != null;
      if(v2971) {
        var v2972 = this.resultPointCallback;
        var v2973 = v2972.foundPossibleResultPoint;
        v2973 = v2973.bind(v2972);
        v2973(point$$3)
      }
    }
    return null
  }
  function v144() {
    var startX$$1 = this.startX;
    var height$$15 = this.height;
    var maxJ$$2 = startX$$1 + width$$15;
    var v2974 = height$$15 >> 1;
    var middleI = startY + v2974;
    var stateCount$$10 = new Array(0, 0, 0);
    var iGen = 0;
    var v289 = iGen < height$$15;
    for(;v289;) {
      var v317;
      var v2975 = iGen & 1;
      var v2976 = v2975 == 0;
      if(v2976) {
        var v2977 = iGen + 1;
        v317 = v2977 >> 1
      }else {
        var v2978 = iGen + 1;
        v317 = -(v2978 >> 1)
      }
      var i$$59 = middleI + v317;
      stateCount$$10[0] = 0;
      stateCount$$10[1] = 0;
      stateCount$$10[2] = 0;
      var j$$31 = startX$$1;
      var v376 = j$$31 < maxJ$$2;
      if(v376) {
        var v2979 = qrcode.width;
        var v2980 = v2979 * i$$59;
        var v2981 = j$$31 + v2980;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          v376 = !image$$13[v2981]
        }
      }
      var v287 = v376;
      for(;v287;) {
        j$$31++;
        var v377 = j$$31 < maxJ$$2;
        if(v377) {
          var v2982 = qrcode.width;
          var v2983 = v2982 * i$$59;
          var v2984 = j$$31 + v2983;
          transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
            v377 = !image$$13[v2984]
          }
        }
        v287 = v377
      }
      var currentState$$1 = 0;
      var v288 = j$$31 < maxJ$$2;
      for(;v288;) {
        var v2985 = qrcode.width;
        var v2986 = i$$59 * v2985;
        var v2987 = j$$31 + v2986;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v2988 = image$$13[v2987]
        }
        if(v2988) {
          var v2989 = currentState$$1 == 1;
          if(v2989) {
            stateCount$$10[currentState$$1]++
          }else {
            var v2990 = currentState$$1 == 2;
            if(v2990) {
              var v2991 = this.foundPatternCross;
              v2991 = v2991.bind(this);
              var v2992 = v2991(stateCount$$10);
              if(v2992) {
                var v2993 = this.handlePossibleCenter;
                v2993 = v2993.bind(this);
                var confirmed$$1 = v2993(stateCount$$10, i$$59, j$$31);
                var v2994 = confirmed$$1 != null;
                if(v2994) {
                  return confirmed$$1
                }
              }
              var v2995 = stateCount$$10[2];
              stateCount$$10[0] = v2995;
              stateCount$$10[1] = 1;
              stateCount$$10[2] = 0;
              currentState$$1 = 1
            }else {
              ++currentState$$1;
              stateCount$$10[currentState$$1]++
            }
          }
        }else {
          var v2996 = currentState$$1 == 1;
          if(v2996) {
            currentState$$1++
          }
          stateCount$$10[currentState$$1]++
        }
        j$$31++;
        v288 = j$$31 < maxJ$$2
      }
      var v2997 = this.foundPatternCross;
      v2997 = v2997.bind(this);
      var v2998 = v2997(stateCount$$10);
      if(v2998) {
        var v2999 = this.handlePossibleCenter;
        v2999 = v2999.bind(this);
        confirmed$$1 = v2999(stateCount$$10, i$$59, maxJ$$2);
        var v3000 = confirmed$$1 != null;
        if(v3000) {
          return confirmed$$1
        }
      }
      iGen++;
      v289 = iGen < height$$15
    }
    var v3001 = this.possibleCenters;
    var v3002 = v3001.length;
    if(!(v3002 == 0)) {
      var v3003 = this.possibleCenters;
      var v3004 = v3003[0];
      return v3004
    }
    throw"Couldn't find enough alignment patterns";
  }
  this.image = image$$13;
  var v2885 = new Array;
  this.possibleCenters = v2885;
  this.startX = startX;
  this.startY = startY;
  this.width = width$$15;
  this.height = height$$14;
  this.moduleSize = moduleSize$$5;
  var v2886 = new Array(0, 0, 0);
  this.crossCheckStateCount = v2886;
  this.resultPointCallback = resultPointCallback;
  this.centerFromEnd = v140;
  this.foundPatternCross = v141;
  this.crossCheckVertical = v142;
  this.handlePossibleCenter = v143;
  this.find = v144
}
function QRCodeDataBlockReader(blocks, version$$10, numErrorCorrectionCode) {
  function v145(numBits) {
    var bits$$15 = 0;
    var v3006 = this.bitPointer;
    var v3007 = v3006 + 1;
    var v3008 = numBits < v3007;
    if(v3008) {
      var mask$$5 = 0;
      var i$$60 = 0;
      var v290 = i$$60 < numBits;
      for(;v290;) {
        mask$$5 += 1 << i$$60;
        i$$60++;
        v290 = i$$60 < numBits
      }
      var v3009 = this.bitPointer;
      var v3010 = v3009 - numBits;
      mask$$5 <<= v3010 + 1;
      var v3011 = this.blocks;
      var v3012 = this.blockPointer;
      transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
        var v3013 = v3011[v3012]
      }
      var v3014 = v3013 & mask$$5;
      var v3015 = this.bitPointer;
      var v3016 = v3015 - numBits;
      var v3017 = v3016 + 1;
      bits$$15 = v3014 >> v3017;
      this.bitPointer -= numBits;
      return bits$$15
    }else {
      var v3018 = this.bitPointer;
      var v3019 = v3018 + 1;
      var v3020 = v3019 + 8;
      var v3021 = numBits < v3020;
      if(v3021) {
        var mask1 = 0;
        i$$60 = 0;
        var v3022 = this.bitPointer;
        var v3023 = v3022 + 1;
        var v291 = i$$60 < v3023;
        for(;v291;) {
          mask1 += 1 << i$$60;
          i$$60++;
          var v3024 = this.bitPointer;
          var v3025 = v3024 + 1;
          v291 = i$$60 < v3025
        }
        var v3026 = this.blocks;
        var v3027 = this.blockPointer;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v3028 = v3026[v3027]
        }
        var v3029 = v3028 & mask1;
        var v3030 = this.bitPointer;
        var v3031 = v3030 + 1;
        var v3032 = numBits - v3031;
        bits$$15 = v3029 << v3032;
        this.blockPointer++;
        var v3033 = this.blocks;
        var v3034 = this.blockPointer;
        transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
          var v3035 = v3033[v3034]
        }
        var v3036 = this.bitPointer;
        var v3037 = v3036 + 1;
        var v3038 = numBits - v3037;
        var v3039 = 8 - v3038;
        bits$$15 += v3035 >> v3039;
        var v3040 = this.bitPointer;
        var v3041 = numBits % 8;
        var v3042 = v3040 - v3041;
        this.bitPointer = v3042;
        var v3043 = this.bitPointer;
        var v3044 = v3043 < 0;
        if(v3044) {
          var v3045 = this.bitPointer;
          var v3046 = 8 + v3045;
          this.bitPointer = v3046
        }
        return bits$$15
      }else {
        var v3047 = this.bitPointer;
        var v3048 = v3047 + 1;
        var v3049 = v3048 + 16;
        var v3050 = numBits < v3049;
        if(v3050) {
          mask1 = 0;
          var mask3 = 0;
          i$$60 = 0;
          var v3051 = this.bitPointer;
          var v3052 = v3051 + 1;
          var v292 = i$$60 < v3052;
          for(;v292;) {
            mask1 += 1 << i$$60;
            i$$60++;
            var v3053 = this.bitPointer;
            var v3054 = v3053 + 1;
            v292 = i$$60 < v3054
          }
          var v3055 = this.blocks;
          var v3056 = this.blockPointer;
          transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
            var v3057 = v3055[v3056]
          }
          var v3058 = v3057 & mask1;
          var v3059 = this.bitPointer;
          var v3060 = v3059 + 1;
          var v3061 = numBits - v3060;
          var bitsFirstBlock = v3058 << v3061;
          this.blockPointer++;
          var v3062 = this.blocks;
          var v3063 = this.blockPointer;
          transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
            var v3064 = v3062[v3063]
          }
          var v3065 = this.bitPointer;
          var v3066 = v3065 + 1;
          var v3067 = v3066 + 8;
          var v3068 = numBits - v3067;
          var bitsSecondBlock = v3064 << v3068;
          this.blockPointer++;
          i$$60 = 0;
          var v3069 = this.bitPointer;
          var v3070 = v3069 + 1;
          var v3071 = v3070 + 8;
          var v3072 = numBits - v3071;
          var v293 = i$$60 < v3072;
          for(;v293;) {
            mask3 += 1 << i$$60;
            i$$60++;
            var v3073 = this.bitPointer;
            var v3074 = v3073 + 1;
            var v3075 = v3074 + 8;
            var v3076 = numBits - v3075;
            v293 = i$$60 < v3076
          }
          var v3077 = this.bitPointer;
          var v3078 = v3077 + 1;
          var v3079 = v3078 + 8;
          var v3080 = numBits - v3079;
          mask3 <<= 8 - v3080;
          var v3081 = this.blocks;
          var v3082 = this.blockPointer;
          transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
            var v3083 = v3081[v3082]
          }
          var v3084 = v3083 & mask3;
          var v3085 = this.bitPointer;
          var v3086 = v3085 + 1;
          var v3087 = v3086 + 8;
          var v3088 = numBits - v3087;
          var v3089 = 8 - v3088;
          var bitsThirdBlock = v3084 >> v3089;
          var v3090 = bitsFirstBlock + bitsSecondBlock;
          bits$$15 = v3090 + bitsThirdBlock;
          var v3091 = this.bitPointer;
          var v3092 = numBits - 8;
          var v3093 = v3092 % 8;
          var v3094 = v3091 - v3093;
          this.bitPointer = v3094;
          var v3095 = this.bitPointer;
          var v3096 = v3095 < 0;
          if(v3096) {
            var v3097 = this.bitPointer;
            var v3098 = 8 + v3097;
            this.bitPointer = v3098
          }
          return bits$$15
        }else {
          return 0
        }
      }
    }
  }
  function v146() {
    var v3099 = this.blockPointer;
    var v3100 = this.blocks;
    var v3101 = v3100.length;
    var v3102 = this.numErrorCorrectionCode;
    var v3103 = v3101 - v3102;
    var v3104 = v3103 - 2;
    var v3105 = v3099 > v3104;
    if(v3105) {
      return 0
    }else {
      var v3106 = this.getNextBits;
      v3106 = v3106.bind(this);
      var v3107 = v3106(4);
      return v3107
    }
  }
  function v147(modeIndicator) {
    var index$$46 = 0;
    for(;true;) {
      var v3108 = modeIndicator >> index$$46;
      var v3109 = v3108 == 1;
      if(v3109) {
        break
      }
      index$$46++
    }
    var v3110 = this.getNextBits;
    v3110 = v3110.bind(this);
    var v3111 = qrcode.sizeOfDataLengthInfo;
    var v3112 = this.dataLengthMode;
    transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
      var v3113 = v3111[v3112]
    }
    var v3114 = v3113[index$$46];
    var v3115 = v3110(v3114);
    return v3115
  }
  function v148(dataLength$$1) {
    var length$$12 = dataLength$$1;
    var intData = 0;
    var strData = "";
    var tableRomanAndFigure = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":");
    do {
      var v3116 = length$$12 > 1;
      if(v3116) {
        var v3117 = this.getNextBits;
        v3117 = v3117.bind(this);
        intData = v3117(11);
        var v3118 = Math.floor;
        v3118 = v3118.bind(Math);
        var v3119 = intData / 45;
        var firstLetter = v3118(v3119);
        var secondLetter = intData % 45;
        var v3120 = tableRomanAndFigure[firstLetter];
        strData += v3120;
        var v3121 = tableRomanAndFigure[secondLetter];
        strData += v3121;
        length$$12 -= 2
      }else {
        var v3122 = length$$12 == 1;
        if(v3122) {
          var v3123 = this.getNextBits;
          v3123 = v3123.bind(this);
          intData = v3123(6);
          transaction(JAMScript.handlers.process819F7492AE0E81ACF61CE5B55B606B3BA61E9F35DA202074813EECE9D099DF5C1454994BE87D44DC944239C7DAF51D67A06E3E7A590987538429532CDFB2490A2AE51CE68B42F660A2DE6BEDC816216B1B553DB9BACC9C73AB6F114562F8CD75A7C9140FE594A7A1FBD5A5742E74C9B238BEE6D388ECEEB52BF7C70D6BA149FCCABAE5AB3E64C9F8B125202528FF798C378B0B87844706288E6F8B5F6B001171) {
            var v3124 = tableRomanAndFigure[intData]
          }
          strData += v3124;
          length$$12 -= 1
        }
      }
    }while(length$$12 > 0);
    return strData
  }
  function v149(dataLength$$2) {
    var length$$13 = dataLength$$2;
    var intData$$1 = 0;
    var strData$$1 = "";
    do {
      var v3125 = length$$13 >= 3;
      if(v3125) {
        var v3126 = this.getNextBits;
        v3126 = v3126.bind(this);
        intData$$1 = v3126(10);
        var v3127 = intData$$1 < 100;
        if(v3127) {
          strData$$1 += "0"
        }
        var v3128 = intData$$1 < 10;
        if(v3128) {
          strData$$1 += "0"
        }
        length$$13 -= 3
      }else {
        var v3129 = length$$13 == 2;
        if(v3129) {
          var v3130 = this.getNextBits;
          v3130 = v3130.bind(this);
          intData$$1 = v3130(7);
          var v3131 = intData$$1 < 10;
          if(v3131) {
            strData$$1 += "0"
          }
          length$$13 -= 2
        }else {
          var v3132 = length$$13 == 1;
          if(v3132) {
            var v3133 = this.getNextBits;
            v3133 = v3133.bind(this);
            intData$$1 = v3133(4);
            length$$13 -= 1
          }
        }
      }
      strData$$1 += intData$$1
    }while(length$$13 > 0);
    return strData$$1
  }
  function v150(dataLength$$3) {
    var length$$14 = dataLength$$3;
    var intData$$2 = 0;
    var output = new Array;
    do {
      var v3134 = this.getNextBits;
      v3134 = v3134.bind(this);
      intData$$2 = v3134(8);
      var v3135 = output.push;
      v3135 = v3135.bind(output);
      v3135(intData$$2);
      length$$14--
    }while(length$$14 > 0);
    return output
  }
  function v151(dataLength$$4) {
    var length$$15 = dataLength$$4;
    var intData$$3 = 0;
    var unicodeString = "";
    do {
      intData$$3 = getNextBits(13);
      var lowerByte = intData$$3 % 192;
      var higherByte = intData$$3 / 192;
      var v3136 = higherByte << 8;
      var tempWord = v3136 + lowerByte;
      var shiftjisWord = 0;
      var v3137 = tempWord + 33088;
      var v3138 = v3137 <= 40956;
      if(v3138) {
        shiftjisWord = tempWord + 33088
      }else {
        shiftjisWord = tempWord + 49472
      }
      var v3139 = String.fromCharCode;
      v3139 = v3139.bind(String);
      unicodeString += v3139(shiftjisWord);
      length$$15--
    }while(length$$15 > 0);
    return unicodeString
  }
  function v152() {
    var output$$1 = new Array;
    var MODE_NUMBER = 1;
    var MODE_ROMAN_AND_NUMBER = 2;
    var MODE_8BIT_BYTE = 4;
    var MODE_KANJI = 8;
    do {
      var v3140 = this.NextMode;
      v3140 = v3140.bind(this);
      var mode$$8 = v3140();
      var v3141 = mode$$8 == 0;
      if(v3141) {
        var v3142 = output$$1.length;
        var v3143 = v3142 > 0;
        if(v3143) {
          break
        }else {
          throw"Empty data block";
        }
      }
      var v380 = mode$$8 != MODE_NUMBER;
      if(v380) {
        var v432 = mode$$8 != MODE_ROMAN_AND_NUMBER;
        if(v432) {
          var v438 = mode$$8 != MODE_8BIT_BYTE;
          if(v438) {
            v438 = mode$$8 != MODE_KANJI
          }
          v432 = v438
        }
        v380 = v432
      }
      var v3144 = "Invalid mode: " + mode$$8;
      var v3145 = v3144 + " in (block:";
      var v3146 = this.blockPointer;
      var v3147 = v3145 + v3146;
      var v3148 = v3147 + " bit:";
      var v3149 = this.bitPointer;
      var v3150 = v3148 + v3149;
      if(v380) {
        throw v3150 + ")";
      }
      var v3151 = this.getDataLength;
      v3151 = v3151.bind(this);
      dataLength = v3151(mode$$8);
      var v3152 = dataLength < 1;
      if(v3152) {
        throw"Invalid data length: " + dataLength;
      }
      switch(mode$$8) {
        case MODE_NUMBER:
          var v3153 = this.getFigureString;
          v3153 = v3153.bind(this);
          var temp_str = v3153(dataLength);
          var v3154 = temp_str.length;
          var ta = new Array(v3154);
          var j$$32 = 0;
          var v3155 = temp_str.length;
          var v294 = j$$32 < v3155;
          for(;v294;) {
            var v3156 = temp_str.charCodeAt;
            v3156 = v3156.bind(temp_str);
            var v3157 = v3156(j$$32);
            ta[j$$32] = v3157;
            j$$32++;
            var v3158 = temp_str.length;
            v294 = j$$32 < v3158
          }
          var v3159 = output$$1.push;
          v3159 = v3159.bind(output$$1);
          v3159(ta);
          break;
        case MODE_ROMAN_AND_NUMBER:
          var v3160 = this.getRomanAndFigureString;
          v3160 = v3160.bind(this);
          temp_str = v3160(dataLength);
          var v3161 = temp_str.length;
          ta = new Array(v3161);
          j$$32 = 0;
          var v3162 = temp_str.length;
          var v295 = j$$32 < v3162;
          for(;v295;) {
            var v3163 = temp_str.charCodeAt;
            v3163 = v3163.bind(temp_str);
            var v3164 = v3163(j$$32);
            ta[j$$32] = v3164;
            j$$32++;
            var v3165 = temp_str.length;
            v295 = j$$32 < v3165
          }
          var v3166 = output$$1.push;
          v3166 = v3166.bind(output$$1);
          v3166(ta);
          break;
        case MODE_8BIT_BYTE:
          var v3167 = this.get8bitByteArray;
          v3167 = v3167.bind(this);
          var temp_sbyteArray3 = v3167(dataLength);
          var v3168 = output$$1.push;
          v3168 = v3168.bind(output$$1);
          v3168(temp_sbyteArray3);
          break;
        case MODE_KANJI:
          var v3169 = this.getKanjiString;
          v3169 = v3169.bind(this);
          temp_str = v3169(dataLength);
          var v3170 = output$$1.push;
          v3170 = v3170.bind(output$$1);
          v3170(temp_str)
      }
    }while(true);
    return output$$1
  }
  this.blockPointer = 0;
  this.bitPointer = 7;
  this.dataLength = 0;
  this.blocks = blocks;
  this.numErrorCorrectionCode = numErrorCorrectionCode;
  var v3005 = version$$10 <= 9;
  if(v3005) {
    this.dataLengthMode = 0
  }else {
    var v378 = version$$10 >= 10;
    if(v378) {
      v378 = version$$10 <= 26
    }
    if(v378) {
      this.dataLengthMode = 1
    }else {
      var v379 = version$$10 >= 27;
      if(v379) {
        v379 = version$$10 <= 40
      }
      if(v379) {
        this.dataLengthMode = 2
      }
    }
  }
  this.getNextBits = v145;
  this.NextMode = v146;
  this.getDataLength = v147;
  this.getRomanAndFigureString = v148;
  this.getFigureString = v149;
  this.get8bitByteArray = v150;
  this.getKanjiString = v151;
  var v3171 = this.__defineGetter__;
  v3171 = v3171.bind(this);
  v3171("DataByte", v152)
}
function dragenter(e$$13) {
  var v3172 = e$$13.stopPropagation;
  v3172 = v3172.bind(e$$13);
  v3172();
  var v3173 = e$$13.preventDefault;
  v3173 = v3173.bind(e$$13);
  v3173()
}
function dragover(e$$14) {
  var v3174 = e$$14.stopPropagation;
  v3174 = v3174.bind(e$$14);
  v3174();
  var v3175 = e$$14.preventDefault;
  v3175 = v3175.bind(e$$14);
  v3175()
}
function drop(e$$15) {
  var v3176 = e$$15.stopPropagation;
  v3176 = v3176.bind(e$$15);
  v3176();
  var v3177 = e$$15.preventDefault;
  v3177 = v3177.bind(e$$15);
  v3177();
  var dt = e$$15.dataTransfer;
  var files = dt.files;
  handleFiles(files)
}
function handleFiles(f) {
  function v154(theFile) {
    function v153(e$$16) {
      var v3178 = qrcode.decode;
      v3178 = v3178.bind(qrcode);
      var v3179 = e$$16.target;
      var v3180 = v3179.result;
      v3178(v3180)
    }
    return v153
  }
  var o$$1 = [];
  var i$$61 = 0;
  var v3181 = f.length;
  var v296 = i$$61 < v3181;
  for(;v296;) {
    var reader$$2 = new FileReader;
    var v3182 = f[i$$61];
    var v3183 = v154(v3182);
    reader$$2.onload = v3183;
    var v3184 = reader$$2.readAsDataURL;
    v3184 = v3184.bind(reader$$2);
    var v3185 = f[i$$61];
    v3184(v3185);
    i$$61++;
    var v3186 = f.length;
    v296 = i$$61 < v3186
  }
}
function read(a$$9) {
  alert(a$$9)
}
function load() {
  initCanvas(640, 480);
  qrcode.callback = read;
  var v3187 = qrcode.decode;
  v3187 = v3187.bind(qrcode);
  v3187("plaintext-test.png")
}
function initCanvas(ww, hh) {
  var v3188 = document.getElementById;
  v3188 = v3188.bind(document);
  gCanvas = v3188("qr-canvas");
  var v3189 = gCanvas.addEventListener;
  v3189 = v3189.bind(gCanvas);
  v3189("dragenter", dragenter, false);
  var v3190 = gCanvas.addEventListener;
  v3190 = v3190.bind(gCanvas);
  v3190("dragover", dragover, false);
  var v3191 = gCanvas.addEventListener;
  v3191 = v3191.bind(gCanvas);
  v3191("drop", drop, false);
  var w$$5 = ww;
  var h$$4 = hh;
  var v3192 = gCanvas.style;
  var v3193 = w$$5 + "px";
  v3192.width = v3193;
  var v3194 = gCanvas.style;
  var v3195 = h$$4 + "px";
  v3194.height = v3195;
  gCanvas.width = w$$5;
  gCanvas.height = h$$4;
  var v3196 = gCanvas.getContext;
  v3196 = v3196.bind(gCanvas);
  gCtx = v3196("2d");
  var v3197 = gCtx.clearRect;
  v3197 = v3197.bind(gCtx);
  v3197(0, 0, w$$5, h$$4);
  var v3198 = gCtx.getImageData;
  v3198 = v3198.bind(gCtx);
  imageData = v3198(0, 0, 320, 240)
}
function passLine(stringPixels) {
  var v3199 = stringPixels.split;
  v3199 = v3199.bind(stringPixels);
  var coll = v3199("-");
  var i$$62 = 0;
  var v297 = i$$62 < 320;
  for(;v297;) {
    var v3200 = coll[i$$62];
    var intVal = parseInt(v3200);
    var v3201 = intVal >> 16;
    r = v3201 & 255;
    var v3202 = intVal >> 8;
    g = v3202 & 255;
    b = intVal & 255;
    var v3203 = imageData.data;
    var v3204 = c + 0;
    transaction(JAMScript.handlers.processD5B00A442B24978EA2B9B278832836ACDF8F70A557AF08FAEB9EFD897FFB0A554AD34FD5EC1EFB534834199F0411442EA3537F0AC966267195E47F046957B6BEDA796CB77969597989DF14DB4A2D6C8E77A85A8B292CC81CB59684C0D05694F032BDF02C297012771C6B9300636F6D050240D34D9C6E9FC7) {
      v3203[v3204] = r
    }
    var v3205 = imageData.data;
    var v3206 = c + 1;
    transaction(JAMScript.handlers.processD5B00A442B24978EA2B9B278832836ACDF8F70A557AF08FAEB9EFD897FFB0A554AD34FD5EC1EFB534834199F0411442EA3537F0AC966267195E47F046957B6BEDA796CB77969597989DF14DB4A2D6C8E77A85A8B292CC81CB59684C0D05694F032BDF02C297012771C6B9300636F6D050240D34D9C6E9FC7) {
      v3205[v3206] = g
    }
    var v3207 = imageData.data;
    var v3208 = c + 2;
    transaction(JAMScript.handlers.processD5B00A442B24978EA2B9B278832836ACDF8F70A557AF08FAEB9EFD897FFB0A554AD34FD5EC1EFB534834199F0411442EA3537F0AC966267195E47F046957B6BEDA796CB77969597989DF14DB4A2D6C8E77A85A8B292CC81CB59684C0D05694F032BDF02C297012771C6B9300636F6D050240D34D9C6E9FC7) {
      v3207[v3208] = b
    }
    var v3209 = imageData.data;
    var v3210 = c + 3;
    transaction(JAMScript.handlers.processD5B00A442B24978EA2B9B278832836ACDF8F70A557AF08FAEB9EFD897FFB0A554AD34FD5EC1EFB534834199F0411442EA3537F0AC966267195E47F046957B6BEDA796CB77969597989DF14DB4A2D6C8E77A85A8B292CC81CB59684C0D05694F032BDF02C297012771C6B9300636F6D050240D34D9C6E9FC7) {
      v3209[v3210] = 255
    }
    c += 4;
    i$$62++;
    v297 = i$$62 < 320
  }
  var v3211 = 320 * 240;
  var v3212 = v3211 * 4;
  var v3213 = c >= v3212;
  if(v3213) {
    c = 0;
    var v3214 = gCtx.putImageData;
    v3214 = v3214.bind(gCtx);
    v3214(imageData, 0, 0)
  }
}
function captureToCanvas() {
  var v3215 = document.getElementById;
  v3215 = v3215.bind(document);
  flash = v3215("embedflash");
  var v3216 = flash.ccCapture;
  v3216 = v3216.bind(flash);
  v3216();
  var v3217 = qrcode.decode;
  v3217 = v3217.bind(qrcode);
  v3217()
}
GridSampler = {};
GridSampler.checkAndNudgePoints = v0;
GridSampler.sampleGrid3 = v1;
GridSampler.sampleGridx = v2;
var v578 = new Array(31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017);
Version.VERSION_DECODE_INFO = v578;
var v579 = buildVersions();
Version.VERSIONS = v579;
Version.getVersionForNumber = v15;
Version.getProvisionalVersionForDimension = v16;
Version.decodeVersionInformation = v17;
PerspectiveTransform.quadrilateralToQuadrilateral = v22;
PerspectiveTransform.squareToQuadrilateral = v23;
PerspectiveTransform.quadrilateralToSquare = v24;
var FORMAT_INFO_MASK_QR = 21522;
var v1577 = new Array(21522, 0);
var v1578 = new Array(20773, 1);
var v1579 = new Array(24188, 2);
var v1580 = new Array(23371, 3);
var v1581 = new Array(17913, 4);
var v1582 = new Array(16590, 5);
var v1583 = new Array(20375, 6);
var v1584 = new Array(19104, 7);
var v1585 = new Array(30660, 8);
var v1586 = new Array(29427, 9);
var v1587 = new Array(32170, 10);
var v1588 = new Array(30877, 11);
var v1589 = new Array(26159, 12);
var v1590 = new Array(25368, 13);
var v1591 = new Array(27713, 14);
var v1592 = new Array(26998, 15);
var v1593 = new Array(5769, 16);
var v1594 = new Array(5054, 17);
var v1595 = new Array(7399, 18);
var v1596 = new Array(6608, 19);
var v1597 = new Array(1890, 20);
var v1598 = new Array(597, 21);
var v1599 = new Array(3340, 22);
var v1600 = new Array(2107, 23);
var v1601 = new Array(13663, 24);
var v1602 = new Array(12392, 25);
var v1603 = new Array(16177, 26);
var v1604 = new Array(14854, 27);
var v1605 = new Array(9396, 28);
var v1606 = new Array(8579, 29);
var v1607 = new Array(11994, 30);
var v1608 = new Array(11245, 31);
var FORMAT_INFO_DECODE_LOOKUP = new Array(v1577, v1578, v1579, v1580, v1581, v1582, v1583, v1584, v1585, v1586, v1587, v1588, v1589, v1590, v1591, v1592, v1593, v1594, v1595, v1596, v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1607, v1608);
var BITS_SET_IN_HALF_BYTE = new Array(0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4);
FormatInformation.numBitsDiffering = v40;
FormatInformation.decodeFormatInformation = v41;
FormatInformation.doDecodeFormatInformation = v42;
ErrorCorrectionLevel.forBits = v46;
var L = new ErrorCorrectionLevel(0, 1, "L");
var M = new ErrorCorrectionLevel(1, 0, "M");
var Q = new ErrorCorrectionLevel(2, 3, "Q");
var H = new ErrorCorrectionLevel(3, 2, "H");
var FOR_BITS = new Array(M, L, H, Q);
DataBlock.getDataBlocks = v57;
DataMask = {};
DataMask.forReference = v62;
var v1890 = new DataMask000;
var v1891 = new DataMask001;
var v1892 = new DataMask010;
var v1893 = new DataMask011;
var v1894 = new DataMask100;
var v1895 = new DataMask101;
var v1896 = new DataMask110;
var v1897 = new DataMask111;
var v1898 = new Array(v1890, v1891, v1892, v1893, v1894, v1895, v1896, v1897);
DataMask.DATA_MASKS = v1898;
var v2203 = new GF256(285);
GF256.QR_CODE_FIELD = v2203;
var v2204 = new GF256(301);
GF256.DATA_MATRIX_FIELD = v2204;
GF256.addOrSubtract = v100;
Decoder = {};
var v2206 = GF256.QR_CODE_FIELD;
var v2207 = new ReedSolomonDecoder(v2206);
Decoder.rsDecoder = v2207;
Decoder.correctErrors = v101;
Decoder.decode = v102;
qrcode = {};
qrcode.imagedata = null;
qrcode.width = 0;
qrcode.height = 0;
qrcode.qrCodeSymbol = null;
qrcode.debug = false;
var v2229 = [10, 9, 8, 8];
var v2230 = [12, 11, 16, 10];
var v2231 = [14, 13, 16, 12];
var v2232 = [v2229, v2230, v2231];
qrcode.sizeOfDataLengthInfo = v2232;
qrcode.callback = null;
qrcode.decode = v104;
qrcode.decode_utf8 = v105;
qrcode.process = v106;
qrcode.getPixel = v107;
qrcode.binarize = v108;
qrcode.getMiddleBrightnessPerArea = v109;
qrcode.grayScaleToBitmap = v110;
qrcode.grayscale = v111;
var v2459 = Array.prototype;
v2459.remove = v112;
var MIN_SKIP = 3;
var MAX_MODULES = 57;
var INTEGER_MATH_SHIFT = 8;
var CENTER_QUORUM = 2;
qrcode.orderBestPatterns = v113;
var gCtx = null;
var gCanvas = null;
var imageData = null;
var ii = 0;
var jj = 0;
var c = 0;
var v3218 = document.getElementById;
v3218 = v3218.bind(document);
var v3219 = v3218("capture");
v3219.onclick = captureToCanvas;
load();
