// PhylogenyExplorer.js

//this is got statistics, popup window, select, expand / collapsed , rotate, setRoot
var labelType, useGradients, nativeTextSupport, animate;

(function () {
    var ua = navigator.userAgent,
        iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
        typeOfCanvas = typeof HTMLCanvasElement,
        nativeCanvasSupport = (typeOfCanvas === 'object' || typeOfCanvas === 'function'),
        textSupport = nativeCanvasSupport && (typeof
            document.createElement('canvas').getContext('2d').fillText === 'function');
    //I'm setting this based on the fact that ExCanvas provides text support for IE
    //and that as of today iPhone/iPad current text support is lame
    labelType = (!nativeCanvasSupport || (textSupport && !iStuff)) ? 'Native' : 'HTML';
    nativeTextSupport = labelType === 'Native';
    useGradients = nativeCanvasSupport;
    animate = !(iStuff || !nativeCanvasSupport);
}());
var Log = {
    elem: false,
    write: function (text) {
        if (!this.elem) {
            this.elem = document.getElementById('log');
        }
        this.elem.innerHTML = text;
        //     this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
};
var Nav = {
    elem: false,
    load: function (opt) {
        function $E(tag, props) {
            var elem = document.createElement(tag);
            for (var p in props) {
                if (typeof props[p] == "object") {
                    $jit.util.extend(elem[p], props[p]);
                } else {
                    elem[p] = props[p];
                }
            }
            return elem;
        }
        opt.codeBase =  '';
        var popupHTML = '<div id="popup-close" style="position:relative; width:100%; background-color:lightblue"><a href="#" onclick="this.parentNode.parentNode.style.display=\'none\';" onmouseover="this.style.cursor=\'pointer\';" class="ui-dialog-titlebar-close ui-corner-all" role="button"><span class="ui-icon ui-icon-closethick">close</span></a></div><div id="popup-text"></div>';
        var navHTML = '<div style="position:relative"><div id="panup" style="position: absolute; left: 13px; top: 4px; width: 18px; height: 18px; cursor: pointer;"><img id="north" src="' + opt.codeBase + 'resources/north-mini.png" /></div><div id="panleft" style="position: absolute; left: 4px; top: 22px; width: 18px; height: 18px; cursor: pointer;"><img id="west" src="' + opt.codeBase + 'resources/west-mini.png" /></div><div id="panright" style="position: absolute; left: 22px; top: 22px; width: 18px; height: 18px; cursor: pointer;"><img id="east" src="' + opt.codeBase + 'resources/east-mini.png" /></div><div id="pandown" style="position: absolute; left: 13px; top: 40px; width: 18px; height: 18px; cursor: pointer;"><img id="south" src="' + opt.codeBase + 'resources/south-mini.png" /></div><div id="zoomout" style="position: absolute; left: 13px; top: 99px; width: 18px; height: 18px; cursor: pointer;"><img id="zoomOUT" src="' + opt.codeBase + 'resources/zoom-minus-mini.png" /></div><div id="zoomworld" style="position: absolute; left: 13px; top: 81px; width: 18px; height: 18px; cursor: pointer;"><img id="world" style="position: relative; width: 18px; height: 18px;" src="' + opt.codeBase + 'resources/zoom-world-mini.png"></div><div id="zoomin" style="position: absolute; left: 13px; top: 63px; width: 18px; height: 18px; cursor: pointer;"><img id="zoomIN" src="'
            + opt.codeBase
            + 'resources/zoom-plus-mini.png" /></div><div style="position:absolute;left:-50px;top:123px;width:130px"> Status: <span id="log"></span></div></div>';

        var jitcontainer, rightJitContainer, centerJitContainer,
            id = typeof (opt.injectInto) == 'string' ? opt.injectInto : opt.injectInto.id,
            infovis, parent, popup, navigation, menu, border;

        //  this function is losing its meaning by adding this. just for now.
        //     var popupContainer = document.getElementById('center-jitcontainer');
        //     var popup = $jit.id('popup');
        //     popup.style.display = 'none';
        border = opt.width * 100 / 90;
        jitcontainer = $E('div', {
            'id': 'jitcontainer',
            'className': 'clearfix roundedCorner',
            'style': {
                'position': 'relative',
                'width': border + 'px',
                'height': ((opt.height + 55 + border / 20)) + 'px'
            }
        });

        rightJitContainer = $E('div', {
            'id': 'right-jitcontainer',
            'className': 'phylojivepadding',
            'style': {
                display: 'none'
            }
        });
        centerJitContainer = $E('div', {
            'id': 'center-jitcontainer',
            'className': 'phylojivepadding'
        });
        infovis = jQuery('#' + id)[0];

        parent = infovis.parentNode;
        parent.replaceChild(jitcontainer, infovis);
        //       parent.appendChild ( jitcontainer );
        centerJitContainer.appendChild(infovis);
        jitcontainer.appendChild(centerJitContainer);
        jitcontainer.appendChild(rightJitContainer);

        popup = $E('div', {
            'id': 'popup',
            'className': '',
            'style': {
                'color': 'black',
                'display': 'none',
                'border': '1px solid green',
                'background-color': '#B5D397',
                'position': 'absolute',
                'left': '50px',
                'top': '90px',
                //'width': '250px',
                //'height': '170px',
                'overflow': 'auto',
                'text-align': 'left'
            }
        });
        jQuery(popup).html(popupHTML);
        centerJitContainer.appendChild(popup);
        jQuery(popup).resizable({
            maxHeight: 450,
            maxWidth: 350,
            minHeight: 250,
            minWidth: 170
        });
        jQuery(popup).draggable({
            handle: '#popup-close',
            containment: '#' + opt.injectInto
        });

        navigation = $E('div', {
            'id': 'navigationPanel',
            'style': {
                'left': (opt.width - 50) + 'px'
            }
        });
        jQuery(navigation).html(navHTML);
        jitcontainer.appendChild(navigation);

        menu = $E('div', {
            'id': 'jitmenubutton',
            'className': 'menubutton'
        });
        jQuery(menu).click(function () {
            toggleScreen(this);
        });
        jitcontainer.appendChild(menu);

    }
};
var settingsPage, updateCharacter, onSetCharacter, onClickAlign, onSetRoot,
    onLateralise, isLateralise, onAnimate, onRender, onBranchLength,
    onBranchMultiply, onGetCharacter, st, toggleScreen;

updateCharacter = function (character) {
    if (!character) {
        return;
    }
    var options = '',
        unselected = '',
        i, name, selectedfirst = st.config.selectedCharacters [ 0 ] || false ,
        first = st.config.selectedCharacters [ 0 ] || false ,
	second = st.config.selectedCharacters [ 1 ] || false ,
	third = st.config.selectedCharacters [ 2 ] || false,
	select1 = '', select2='', select3 ='';
    for (i = 0; i < character.length; i += 1) {
	var opt1 = '', opt2 = '', opt3 = '';
	if ( first !== false && first === character [ i ] ) {
	opt1 = 'selected="selected"'
	}
	if ( second !== false && second === character [ i ] ) {
	opt2 = 'selected="selected"'
	}
	if ( third !== false && third === character [ i ] ) {
	opt3 = 'selected="selected"'
        }
        name = character[i].replace(/_/g, ' ');
	select1 += '<option '+ opt1 +' value="' + character [ i ] + '" >' + name + '</option>';
	select2 += '<option '+ opt2 +' value="' + character [ i ] + '" >' + name + '</option>';
	select3 += '<option '+ opt3 +' value="' + character [ i ] + '" >' + name + '</option>';
    }
    if ( select2 ) {
      select2 = '<option value=""> Please select </option>'+ select2;
    }
    if ( select3 ) {
      select3 = '<option value=""> Please select </option>'+ select3;
    }
    jQuery('#firstCharacter').html(select1);
    jQuery('#secondCharacter').html(select2);
    jQuery('#thirdCharacter').html(select3);
};
settingsPage = function () {
    var rightContainer = $jit.id('right-jitcontainer');
    rightContainer.innerHTML
        += '<div id="tabs"><ul><li><a href="#tabAction">Action</a></li><li><a href="#tabCharacter">Character</a></li><li><a href="#tabLegend">Legend</a></li><li><a href="#tabSearch">Search</a></li><li><a href="#tabInput">Input</a></li></ul>  <div id="tabCharacter"><h4>Select Character</h4><p><label>Select: </label><br/><label id="characterSelection">First Characters: <select id="firstCharacter" onChange="onSetCharacter ( )"> </select><br/>Second Chracter: <select id ="secondCharacter" onChange="onSetCharacter ( )"></select><br/>Third Chracter: <select id ="thirdCharacter" onChange="onSetCharacter ( )"></select></label></p></div><div id ="tabAction"><h4>Actions</h4><p><table><tr><td>Node Actions</td></tr><tr><td>Select</td><td><input id="selectClade" name="options" type="radio" checked /><tr><td>Expand / Collapse</td><td><div id="expandDiv"><input id = "expand" name="options" type="radio" /></div></td></tr><tr><td>Rotate</td><td><div id="rotateDiv"><input id = "rotate" name="options" type="radio" /></div></td></tr><tr><td>Set Root</td><td><input id = "setRoot" name="options" type = "radio" onclick = "onSetRoot ( this );"/></td></tr><!--<tr><td>Get Characters</td><td><input id = "character" name="options" type = "radio" onclick = "onGetCharacter ( this );"/></td></tr>--></table><br/><table><tr><td>Tree Actions</td></tr><tr><td>Align Names</td><td><div id="settings"><input id="alignName" type="checkbox"  onclick="onClickAlign ( this )"/></div></td></tr><tr><td>Ladderize</td><td><input id = "lateralise"  checked type = "checkbox" onclick = "onLateralise ( this );"/></td></tr><tr><td>Animate</td><td><input id="animate" type="checkbox" checked onClick = "onAnimate( this )"/></td></tr><tr><td>Branch Length</td><td><input id="branchLength" type="checkbox" checked onClick = "onBranchLength( this )"/></td></tr><tr><td>Length Multiplier</td><td><label><input id="branchMultiplier" name="multiply" type="radio" onClick = "onBranchMultiply( 0.1 )"/>x0.1</label> <label><input name="multiply" id="branchMultiplier" type="radio" onClick = "onBranchMultiply( 1 )"/>x1</label> <label><input id="branchMultiplier" name="multiply" type="radio" checked onClick = "onBranchMultiply( 5 )"/>x5</label></td></tr><!--<tr><td>Selected Nodes</td><td><div id="selected"></div></td></tr>--></table></p></div><div id="tabLegend"><h4>Legend</h4><p><table id ="legend"><tbody id = "legendBody"><tr><th>Legend:</th><td></td></tr></tbody></table></p></div><div id="tabSearch"><h4>Search</h4><p><table><tr><td>Search:</td><td><input id="searchString" type="text" size="15" /></td><tr><td></td><td><input class ="foswikiButton" type="submit" id="next" value="next"/><input type="submit" id="previous" class ="foswikiButton" value="previous"/></td></tr></table></p></div><div id="tabInput"><h4>Input Tree</h4><p><table><tr><td>Input Tree:</td><td><textarea id="newickTree" size="15"></textarea></td></tr><tr><td></td><td><input id="renderTree" type="submit" value="Render" onclick="onRender ( this )"/></td></tr></table></p></div></div>';
    jQuery('#tabs').tabs();
};
var phylojive =  ( function () {
  var tree, character;
  return {
    drawTree: function ( newickTree ) {
      if ( typeof newickTree === 'undefined' ) {
        alert ('tree is not defined.');
        return;
      }
      var json, legendElem;
      Smits.NewickParse(newickTree);
      this.tree = Smits.getRoot().json();
      st.loadJSON(this.tree);
      st.compute();
      st.config.initCharacter = false;
      legendElem = $jit.id('legend');
      if (st.character) {
        html = st.colorCharacter() || '';
        jQuery('#legendBody').html( html );
        legendElem.style.display = 'inline';
        updateCharacter ( st.characterList );
      } else {
        legendElem.style.display = 'none';
      }
      st.onClick(st.root);
      st.fitScreen();
    },
    drawCharacter: function () {
    }
  }
})();
function smitsNode2JSON (node) {
    var childJSON = [];
    var leaves = 0;
    for (var i = 0; i < node.children.length; i++) {
        var j = smitsNode2JSON(node.children[i])
        childJSON.push(j);
        leaves += j.data.leaf;
        leaves += j.data.leaves;
    }
    var that = node;
    var sampleid = '';
    if (childJSON.length !== 0) {
        return {
            "id": node.id,
            "name": node.name,
            "data": {
                'leaves': leaves,
                'leaf': 0,
                'len': node.len,
                '$type': 'circle',
                '$dim': 5,
                '$color': '#fff'
            },
            "children": childJSON
        };
    } else {
        node.name = node.name.replace(/_/g, ' ');
        var sampleArray = node.name.split(' ');
        if (sampleArray.length > 1) {
            sampleid = sampleArray[1];
        }
        var name = sampleArray[0];
        var nodeJSON = {
            "id": node.id,
            "name": node.name,
            "data": {
                'leaves': 0,
                'leaf': 1,
                'len': node.len,
                '$height': 20,
                '$type': 'none',
                'sampleid': sampleid,
                'name': name
            },
            "children": childJSON
        };
        return nodeJSON;
    }
}
function phylogenyExplorer_init(initial) {
    var config = {
        //id of viz container element
        injectInto: 'infovis',
        width: 800,
        height:600,
        offsetX: 0,
        align: 'left',
        alignName: false,
        lateralise: true,
        branchLength: true,
        branchMultiplier: 1,
        duration: 1000,
        fps: 10,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 20,
        levelsToShow: Number.MAX_VALUE,
        constrained: false,
        firstCharacter: 'Raceme_length_median',
        //enable panning
        Navigation: {
            enable: true,
            panning: 'avoid nodes',
            zooming: 50
        },
        Tips: {
            enable: true,
            onShow: function (div, node) {
                var url = '',
                    key, i, char, html = '',
                    name = '',
                    index;
                if (node.data.leaf) {
                    name = "<h3>" + node.name + "</h3>";
                    url = '<img class="tipImage" src="http://biocache.ala.org.au/ws/density/map?q='
                        + node.name.split(/\s+/).join('+') + '"/>';
                }
                //         div.innerHTML = node.name;
                // display all characters
                var result = [];
                for (index in st.config.selectedCharacters) {
                    //           if ( node.data.character.hasOwnProperty ( key ) ) {
                    key = st.config.selectedCharacters[index];
                    char = node.data.character[key];
                    html = '<strong>' + key + '</strong>: ';
                    if (typeof char === 'undefined' || char.length === 0 || typeof char[0] === 'undefined') {
                        html += '&mdash;';
                    } else if (typeof char[0] !== 'number') {
                        html += char.join(',');
                    } else {
                        html += char[0].toFixed(4);
                    }
                    result.push(html);
                    //           }
                }
                div.innerHTML = name + result.join('<br/>') + url;
            }
        },
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            height: 40,
            width: 20,
            type: 'circle',
            dim: 5,
            color: '#aaa',
            overridable: true,
            align: 'left'
        },
        Canvas: {
            background: {
                color: '#EEF2F7'
            }
        },
        Edge: {
            type: 'line',
            color: '#000',
            overridable: true,
            lineWidth: 2
        },
        Events: {
            enable: true,
            type: 'Native',
            //Change cursor style when hovering a node  
            onMouseEnter: function (node, event, e) {
                st.canvas.getElement().style.cursor = 'pointer';
                //         popup.style.display = 'inline';
                //         popup.style.top = event.pos.y+ 20 +'px';
                //         popup.style.left = event.pos.x+20 +'px';
                //         var html = '',i ; 
                //         if ( node.data.leaf ) {
                //           html = node.name ;
                //         } else {
                //           for ( i = 0 ; i < node.data.colorCharacter.length ; i += 1 ) {
                //             html += node.data.colorCharacter [ i ] + "<br/>";
                //           }
                //         }
                //         popupText.innerHTML = html;
                // call tips from here
                st.tips.config.onShow(st.tips.tip, node);
                st.tips.setTooltipPosition($jit.util.event.getPos(e));
            },
            onMouseLeave: function () {
                st.canvas.getElement().style.cursor = '';
                //         popup.style.display = 'none';
                st.tips.hide(true);
            },
            onClick: function (node, eventInfo, e) {
                var leafs;
                if (node) {
                    selectedClade = [];

                    var expand = $jit.id('expand');
                    var pos = st.labels.getLabel(node.id);
                    var setRoot = $jit.id('setRoot');
                    var rotate = $jit.id('rotate');
                    var select = $jit.id('selectClade');
                    var loc = parseInt(pos.style.left.replace(/px/, ''), 10) + 100;
                    var locy = parseInt(pos.style.top.replace(/px/, ''), 10) + 40;

                    // re-root the tree.
                    if (setRoot.checked) {
                        var id = node.id;
                        st.setRoot(id, 'animate');
                        st.root = id;
                    }

                    // rotate node
                    if (rotate.checked) {
                        st.computePositions(st.graph.getNode(st.root), 'start');
                        if (typeof node.data.rotate === "undefined") {
                            node.data.rotate = false;
                        }
                        node.data.rotate = !node.data.rotate;
                        st.computePositions(st.graph.getNode(st.root), 'end');
                        st.fx.animate({
                            modes: ['linear', 'node-property:alpha'],
                            onComplete: function () {}
                        });
                    }

                    // action for 
                    if (expand.checked) {
                        st.setCollapsed(node);
                        var level = st.nodesExpCol(node);
                        if (level) {
                            st.zoomIndex = level;
                        }
                        st.computePositions(st.graph.getNode(st.root), '');
                        st.plot();
                    }

                    // select clade and display it on the popup window
                    if (select.checked) {
                        st.clickedNode = node;
                        node.eachSubgraph(function (elem) {
                            if (elem.data.leaf) {
                                if (leafs) {
                                    leafs += "<li>" + elem.name + "</li>";
                                } else {
                                    leafs = "<li>" + elem.name + "</li>";
                                }
                                selectedClade.push(elem);
                            }
                        });

                        popup.style.display = 'inline';
                        popup.style.top = locy + 'px';
                        popup.style.left = loc + 'px';
                        popupText.innerHTML = st.config.presentClade(selectedClade);
                        st.config.onPresentClade();
                        st.plot();
                    }
                }
            }
        },
        presentClade: function (clade) {
          var tmpl = st.config.tmpl,
            nodeList = [],
            node, html, split;
            for (var i = 0; ((i < clade.length) & (i < 30)); i++) {
              node = {}
              node.name = clade [ i ].name;
              nodeList.push ( node ) ;
            }
          if ( tmpl ) {
            tmpl = _.template ( tmpl );
            html = tmpl ( {nodeList: nodeList});
          } else {
            
          }
          return html;

        }, //presentClade 

        onPresentClade:function ( ) {
                $('a.thumbImage1').colorbox({iframe:true,width:'80%',height:'80%'});
          }, // onPresentClade
        tmpl : '<ul><% _.each(nodeList , function( value ) { %> <li> <%= value.name %> </li> <% }); %> </ul>',
        Tips:{
          enable:true,
          onShow:function( div, node){
          var url ='',   key, i , char,
          html ='',name ='', maptitle='', index;
          if (!!node.name) {         
              url = '<img class="tipImage" src="http://biocache.ala.org.au/ws/density/map?q='+ node.name.replace(' ','+')+'"/>';
              maptitle = '<br/>ALA <strong>reported</strong> occurences';
              name = "<i>"+node.name + "</i>";
                }
          else { name = " unnamed clade ";
                }
          name = name + "<strong> click</strong> for ";
          if ( node.data.leaf ) { // end taxon
            name = name + "for linked data"; 	  
          } else { //clade 		    
            //clade 		    
            name = "Part of " + name; 
              if (node.length < 30) {
                      name = name + "clade members"; }
                else {
                      name = name + "30 clade members"; }            
              } 
          name = "<h3>"+ name + "</h3>";
          // display all characters
          var result = [] ;
          for ( index in st.config.selectedCharacters ) {
              key = st.config.selectedCharacters [ index ];
              char = node.data.character [ key ];
              html = '<strong>' + key + '</strong>: ';
              if ( typeof char === 'undefined' || char.length === 0 || typeof char[0] === 'undefined' ){
                html += '&mdash;';
              } else if ( typeof char[0] !== 'number') {
                html += char.join ( ',<br/>....' );
              } else {
                html += char[0].toFixed ( 4 );
              }
              result.push ( html );
          }
          div.innerHTML = name + result.join ( '<br/>' ) + maptitle + url ;
            }
        },
        onBeforeCompute: function (node) {
            Log.write("loading " + node.name);
        },

        onAfterCompute: function (msg) {
            if (msg) {
                Log.write(msg);
            } else {
                Log.write("done");
            }
        },
        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.
        onCreateLabel: function (label, node) {
            var char, list = st.config.selectedCharacters /*st.characterList*/
            ,
                charTypeMapping = st.charTypeMapping,
                i, values, div, colorCoding = st.colorCoding,
                firstColor, index, temp, shape;
            label.id = node.id;
            label.innerHTML = node.name;
            label.onclick = function () {
                var setRoot = $jit.id('setRoot');
                if (!setRoot.checked) {
                    st.controller.Events.onClick(node);
                }
            };
            //set label styles
            var style = label.style;
            style.width = 'auto';
            style.height = 17 + 'px';
            style.cursor = 'pointer';
            style.color = '#333';
            style.fontSize = '0.8em';
            style.textAlign = 'left';
            style.paddingTop = '3px';
            style.display = 'inline';

            style.color = node.data.$color;
            //         if (node.data.color) 
            var boxes = '';
            var first = st.config.firstCharacter;
            var shapes = ['box', 'star', 'triangle'],
                index = 0;

            boxes = '';

            for (i = 0; i < list.length; i += 1) {
                //           for ( char in node.data.character ) 
                char = list[i];
                values = node.data.character[char];
                if (values && values.length > 0 && typeof values[0] !== 'undefined') {
                    if (charTypeMapping[char] === st.config.typeEnum.quali) {
                        temp = colorCoding[char];
                        value = values[0];
                        if (values.length > 1) {
                            value = 'multiple';
                        }
                        shape = '<div class="' + temp[value].shape
                            + '" style="float:left;background-color:'
                            + temp[value].color + ';" title="' + char + ' : '
                            + values.join(' , ') + '"></div>';
                        if (i === 0) {
                            firstColor = temp[value].color;
                        }
                    } else if (charTypeMapping[char] === st.config.typeEnum.quant) {
                        temp = st.colorCodingQuali[char];
                        value = values[0];
                        index = st.findIndex(value, st.range[char]);
                        shape = '<div class="' + temp[index].shape
                            + '" style="float:left;background-color:'
                            + temp[index].color + ';" title="' + char + ' : '
                            + temp[index].name + '"></div>';

                        if (i === 0) {
                            //                   firstColor = temp [ index ].color;
                            firstColor = st.config.quantColor[st.config.quantColor.length - 1];
                        }
                    }
                } else {
                    shape = '<div class="empty" style="float:left;background-color:;" title="empty"></div>';
                }
                if (first !== char) {
                    boxes += shape;
                } else {
                    boxes = shape + boxes;
                }
            }
            //       if (node.data.leaf) {
            //           label.innerHTML = boxes + '&nbsp;&nbsp;<div style="display:inline;color:' + firstColor  + '">' + node.name + '</div>';
            // //         }
            // make names for nodes.      
            if (label) {
                if (!node.data.leaf) {
                    label.innerHTML = boxes
                        + '&nbsp;&nbsp;<div style="display:inline;color:'
                        + firstColor + '">' + node.data.leaves + ' Taxa</div>';
                } else {
                    label.innerHTML = boxes
                        + '&nbsp;&nbsp;<div style="display:inline;color:'
                        + firstColor + '">' + node.name + '</div>';
                }
            }

        },

        //This method is called right before plotting
        //a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.
        onBeforePlotNode: function (node) {
            //add some color to the nodes in the path between the
            //root node and the selected node.
            //       if (!node.data.leaf) {
            var result = true,
                char;
            if (!node.data.leaf) {
                for (var key in st.config.selectedCharacters) {
                    if ( node.data.characterConsistency.hasOwnProperty ( key ) ) {
                      char = st.config.selectedCharacters[key];
                      result = result && node.data.characterConsistency[char];
                    }
                }
            }
            if (!result && node.data.$type !== 'triangle') {
                node.data.$type = 'square';
            }
            if (node.data.$type === 'circle') {
                if (node.data.rotate) {
                    node.data.$color = 'purple';
                } else {
                    node.data.$color = 'red';
                }
            } else if (node.data.$type === 'square') {
                node.data.$dim = 10;
                node.data.$color = "red";
            }
            /*      }else {
      }*/
            if (node.data.$type === 'triangle') {
                node.data.$dim = 15;
                node.data.$color = '#EE9AA2';
            } else if (node.data.$type !== 'square') {
                delete node.data.$dim;
            }
            // color for root node.
            if (st.root === node.id) {
                node.data.$color = 'lightblue';
            }
        },
        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
        onBeforePlotLine: function (adj) {},
        onClick: function (node, eventInfo, e) {
            if (node) {
                var elem = document.getElementById('selected');
                if (node.leaf) {
                    elem.innerHTML = node.name;
                } else {
                    elem.innerHTML = '';
                    node.subGraph(function (n) {
                        if (n.data.leaf) {
                            elem.innerHTML += n.name + "<br/>";
                        }
                    });
                }
            }
        },
        onPlaceLabel: function (dom, node) {
            var alignName = $jit.id('alignName')
            if (node.selected) {
                dom.style.display = 'none';
            }
            //             remove labels of non-leaf nodes
            if (!node.data.leaf) {
                dom.style.display = 'none';
                //         dom.innerHTML = node.data.leaves + ' Taxa';
            }
            //    // show label for the last visible node in the clade
            dom.style.display = node.data.display || 'block';
            if (alignName.checked) {
                jQuery('#' + dom.id + ' .quant').addClass('quantAlign');
            } else {
                jQuery('#' + dom.id + ' .quant').removeClass('quantAlign');
            }
        }
    };
    var height = config.height,
        width = config.width || 800;
    $jit.util.extend(config, initial);
    Nav.load(config);
    var html, rightContainer = $jit.id('right-jitcontainer'),
        popup = $jit.id('popup'),
        popupText = $jit.id('popup-text');
    settingsPage();

    //init data
    var dataObject, json = '';

    if (config.tree) {
        dataObject = new Smits.PhyloCanvas.NewickParse(config.tree);
    }
    if (typeof(dataObject)==='object') {
        json = smitsNode2JSON(dataObject.getRoot());
    }

    var selectedClade;
    var zoomIN = $jit.id('zoomIN'),
        zoomOUT = $jit.id('zoomOUT'),
        world = $jit.id('world');
    //end
    //init Spacetree
    //Create a new ST instance
    st = new $jit.Phylo(config);
    isLateralise = function () {
        return st.config.lateralise;
    };
    //load json data
    st.loadJSON(json);
    //compute node positions and layout
    st.compute();
    
    //color line depending on character info
    st.character = config.character || {};
    
    // recursive algorithm to do propogate the line color
    //append to legend table
    var legendElem = $jit.id('legend');
    if (st.character) {
      html = st.colorCharacter() || '';
      jQuery('#legendBody').html(html);
      legendElem.style.display = 'inline';
      updateCharacter(st.characterList);
    } else {
      legendElem.style.display = 'none';
    }
    var north = $jit.id('north'),
        east = $jit.id('east'),
        west = $jit.id('west'),
        south = $jit.id('south');

    function clickHandler() {
        var pos = {};
        switch (this.id) {
        case 'north':
            pos = {
                x: 0,
                y: 10
            };
            break;
        case 'west':
            pos = {
                x: -10,
                y: 0
            };
            break;
        case 'east':
            pos = {
                x: 10,
                y: 0
            };
            break;
        case 'south':
            pos = {
                x: 0,
                y: -10
            };
            break;
        }
        var canvas = st.canvas;
        canvas.translate(pos.x, pos.y);
    }
    north.onmousedown = south.onmousedown = east.onmousedown = west.onmousedown = clickHandler;

    function zoomHandler() {
        var scroll;
        switch (this.id) {
        case 'zoomIN':
            scroll = +1;
            break;
        case 'zoomOUT':
            scroll = -1;
            break;
        }
        st.zoom(scroll);
    }
    zoomIN.onclick = zoomOUT.onclick = zoomHandler;
    world.onclick = function () {
        st.fitScreen();
    };
    var result = [];
    var pos, prevSearch;
    var searchBtn = $jit.id('searchString');

    function nextStep(pos, step, length) {
        // logic so that search starts from the first instance 
        if (typeof pos === 'undefined') {
            return step > 0 ? 0 : length - 1;
        }
        var i = (pos + step) % length;
        return i < 0 ? length + i : i;
    }

    var search = function (step) {
            var searchString = searchBtn.value;
            // if search has been done, clear the selected label
            var len;
            var root = st.graph.getNode(st.root);
            if (result.length > 0) {
                len = result.length;
                pos = nextStep(pos, step, len);
                var prevElem = st.labels.getLabel(result[nextStep(pos, -1 * step, len)].id);
                prevElem.style.backgroundColor = '';
            }
            if (searchString && prevSearch !== searchString) {
                result = [];
                prevSearch = searchString;
                root.eachSubgraph(function (node) {
                    var name = node.name,
                        pattern = new RegExp(searchString, 'i');
                    if (name.match(pattern)) {
                        result.push(node);
                    }
                });
                pos = nextStep(undefined, step, len);
            } else if (searchString === '') {
                result = [];
            }
            if (result.length > 0) {
                var shownNode = result[pos];
                if (!shownNode.exist) {
                    root.collapsed = true;
                    st.nodesExpCol(root);
                    st.computePositions(root, '');
                    st.plot();
                }
                // transalate to top
                var canvas = st.canvas,
                    oy = canvas.translateOffsetY,
                    xTranslate = 0,
                    yTranslate = -oy;
                st.canvas.translate(xTranslate, yTranslate);

                var element = st.labels.getLabel(result[pos].id);
                element.style.backgroundColor = 'yellow';
                jQuery(element).click();
            }
        };

    // add event handlers to listen to enter key on search field
    function keyHandler(e) {
        var ENTER = 13;
        var shift = e.shiftKey;
        if (shift && e.keyCode === ENTER) {
            search(-1);
            if (e.preventDefault) {
                e.preventDefault();
            }
            return false;
        } else if (e.keyCode === ENTER) {
            search(1);
            if (e.preventDefault) {
                e.preventDefault();
            }
            return false;
        }
    }

    if (searchBtn.addEventListener) {
        searchBtn.addEventListener('keydown', keyHandler, false);
    } else if (searchBtn.attachEvent) {
        searchBtn.attachEvent('onkeydown', keyHandler);
    }


    var next = $jit.id('next'),
        previous = $jit.id('previous');
    next.onclick = function () {
        search(1);
    };
    previous.onclick = function () {
        search(-1);
    };

    //     var popup = $jit.id('popup');
    //     var popupText = $jit.id('popup-text');
    /* function onclickAlign 
       This function will align the names in a vertical line.
    */
    onClickAlign = function (alignName) {
        if (alignName.checked) {
            st.config.alignName = true;
            jQuery('.quant').addClass('quantAlign');
        } else {
            st.config.alignName = false;
            jQuery('.quant').removeClass('quantAlign');
        }
        st.plot();
    };
    onSetRoot = function (setRoot) {
        if (setRoot.value === 'checked') {
            var id = st.clickedNode.id;
            st.setRoot(id, 'animate');
        }
    };
    onLateralise = function (lat) {
        if (lat.checked) {
            st.config.lateralise = true;
        } else {
            st.config.lateralise = false;
        }
        st.computePositions(st.graph.getNode(st.root), '');
        st.plot();
    };
    var animateDuration;
    onAnimate = function (animate) {
        if (!animateDuration) {
            animateDuration = st.config.duration;
        }
        if (animate.checked) {
            st.config.duration = animateDuration;
        } else {
            st.config.duration = 0;
        }
    };
    onRender = function (render) {
        var newickTree = $jit.id('newickTree').value;
        if (newickTree) {
            var dataObject = new Smits.PhyloCanvas.NewickParse(newickTree),
                rootObject, json = '';

            if (typeof(dataObject)==='object') {
                rootObject = dataObject.getRoot(),
                json = smitsNode2JSON( rootObject );
                st.loadJSON(json);
            }
            st.compute();
            st.config.initCharacter = false;
            var legendElem = $jit.id('legend');
            if (st.character) {
                html = st.colorCharacter() || '';
                jQuery('#legendBody').html(html);
                legendElem.style.display = 'inline';
                updateCharacter(st.characterList);
            } else {
                legendElem.style.display = 'none';
            }
            st.onClick(st.root);
            st.fitScreen();
        }
    };
    onGetCharacter = function (char) {

    };
    onBranchLength = function (checkbox) {
        st.config.branchLength = checkbox.checked;
        st.computePositions(st.graph.getNode(st.root), '');
        st.plot();
    };
    onBranchMultiply = function (value) {
        st.config.branchMultiplier = value;
        st.computePositions(st.graph.getNode(st.root), '');
        st.plot();
    };
    toggleScreen = function (elem) {
        var style = jQuery('#right-jitcontainer')[0].style;
        style.display = (style.display === 'none' ? '' : 'none');
        if (style.display) {
            jQuery(elem).removeClass('on');
        } else {
            jQuery(elem).addClass('on');
        }
    };
    onSetCharacter = function () {
        populateCharacters();
        //     TODO: disable phylo and loading gif
        //     TODO: parsimony characters and redraw
        redraw();
        //     TODO: enable phylo.
    };

    function populateCharacters() {
        var first, second, third, value = [];
        first = jQuery('#firstCharacter').val();
        second = jQuery('#secondCharacter').val();
        third = jQuery('#thirdCharacter').val();
        first && value.push(first);
        second && value.push(second);
        third && value.push(third);
        st.config.firstCharacter = first || '';
        st.config.selectedCharacters = value;
        first = typeof ( first ) === 'undefined' ? '':first;
        second = typeof ( second ) === 'undefined' ? '':second;
        third = typeof ( third ) === 'undefined' ? '':third;
        app.navigate ( 'character/'+first+'/'+second+'/'+third );
    }

    function redraw() {
        var legendElem = $jit.id('legend'),
            i, node, label;
        //     st.loadJSON (json);
        //     st.compute ();
        if (st.character) {
            html = st.colorCharacter() || '';
            jQuery('#legendBody').html(html);
            legendElem.style.display = 'inline';
        } else {
            legendElem.style.display = 'none';
        }

        for (i in st.graph.nodes) {
            if (st.graph.nodes.hasOwnProperty(i)) {
                node = st.graph.nodes[i];
                //         if( node.data.leaf ) {
                label = jQuery('#' + node.id)[0];
                label && st.config.onCreateLabel(label, node);
                //         }
            }
        }

        //optional: make a translation of the tree
        //emulate a click on the root node.
        st.onClick(st.root);
        st.fitScreen();
    }
    var AppRouter = Backbone.Router.extend({
      
      routes: {
        ""                      : "start",
        "character/*char"     : "characterSelection"
      },
      
      start: function() {
        
        //optional: make a translation of the tree
        //emulate a click on the root node.
        st.onClick(st.root);
        st.fitScreen();
      },
      
      characterSelection: function( char ) {
        var chars = char.split ( '/');
        var index = [ 'firstCharacter' , 'secondCharacter' , 'thirdCharacter' ];
        for ( var i = 0 ; i  < chars.length ; i ++ ) {
          var ch = unescape ( chars [ i ] );
          var select = jQuery ( '#'+index[i] )[0];
          for ( var j = 0 ; j < select.options.length; j ++ ) {
            if ( select.options[j].value === ch ) {
              select.selectedIndex = j;
              break;
            }
          }
        }
        onSetCharacter ();
      }
      
    });
    
    var app = new AppRouter();
    Backbone.history.start();
};


// jit.js

/*
Copyright (c) 2012 Sencha Inc. - Author: Nicolas Garcia Belmonte (http://philogb.github.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

 */
 (function () { 

/*
  File: Core.js

 */

/*
 Object: $jit
 
 Defines the namespace for all library Classes and Objects. 
 This variable is the *only* global variable defined in the Toolkit. 
 There are also other interesting properties attached to this variable described below.
 */
this.$jit = function(w) {
  w = w || window;
  for(var k in $jit) {
    if($jit[k].$extend) {
      w[k] = $jit[k];
    }
  }
};

$jit.version = '2.0.1';
/*
  Object: $jit.id
  
  Works just like *document.getElementById*
  
  Example:
  (start code js)
  var element = $jit.id('elementId');
  (end code)

*/

/*
 Object: $jit.util
 
 Contains utility functions.
 
 Some of the utility functions and the Class system were based in the MooTools Framework 
 <http://mootools.net>. Copyright (c) 2006-2010 Valerio Proietti, <http://mad4milk.net/>. 
 MIT license <http://mootools.net/license.txt>.
 
 These methods are generally also implemented in DOM manipulation frameworks like JQuery, MooTools and Prototype.
 I'd suggest you to use the functions from those libraries instead of using these, since their functions 
 are widely used and tested in many different platforms/browsers. Use these functions only if you have to.
 
 */
var $ = function(d) {
  return document.getElementById(d);
};

$.empty = function() {
};

/*
  Method: extend
  
  Augment an object by appending another object's properties.
  
  Parameters:
  
  original - (object) The object to be extended.
  extended - (object) An object which properties are going to be appended to the original object.
  
  Example:
  (start code js)
  $jit.util.extend({ 'a': 1, 'b': 2 }, { 'b': 3, 'c': 4 }); //{ 'a':1, 'b': 3, 'c': 4 }
  (end code)
*/
$.extend = function(original, extended) {
  for ( var key in (extended || {}))
    original[key] = extended[key];
  return original;
};

$.lambda = function(value) {
  return (typeof value == 'function') ? value : function() {
    return value;
  };
};

$.time = Date.now || function() {
  return +new Date;
};

/*
  Method: splat
  
  Returns an array wrapping *obj* if *obj* is not an array. Returns *obj* otherwise.
  
  Parameters:
  
  obj - (mixed) The object to be wrapped in an array.
  
  Example:
  (start code js)
  $jit.util.splat(3);   //[3]
  $jit.util.splat([3]); //[3]
  (end code)
*/
$.splat = function(obj) {
  var type = $.type(obj);
  return type ? ((type != 'array') ? [ obj ] : obj) : [];
};

$.type = function(elem) {
  var type = $.type.s.call(elem).match(/^\[object\s(.*)\]$/)[1].toLowerCase();
  if(type != 'object') return type;
  if(elem && elem.$$family) return elem.$$family;
  return (elem && elem.nodeName && elem.nodeType == 1)? 'element' : type;
};
$.type.s = Object.prototype.toString;

/*
  Method: each
  
  Iterates through an iterable applying *f*.
  
  Parameters:
  
  iterable - (array) The original array.
  fn - (function) The function to apply to the array elements.
  
  Example:
  (start code js)
  $jit.util.each([3, 4, 5], function(n) { alert('number ' + n); });
  (end code)
*/
$.each = function(iterable, fn) {
  var type = $.type(iterable);
  if (type == 'object') {
    for ( var key in iterable)
      fn(iterable[key], key);
  } else {
    for ( var i = 0, l = iterable.length; i < l; i++)
      fn(iterable[i], i);
  }
};

$.indexOf = function(array, item) {
  if(Array.indexOf) return array.indexOf(item);
  for(var i=0,l=array.length; i<l; i++) {
    if(array[i] === item) return i;
  }
  return -1;
};

/*
  Method: map
  
  Maps or collects an array by applying *f*.
  
  Parameters:
  
  array - (array) The original array.
  f - (function) The function to apply to the array elements.
  
  Example:
  (start code js)
  $jit.util.map([3, 4, 5], function(n) { return n*n; }); //[9, 16, 25]
  (end code)
*/
$.map = function(array, f) {
  var ans = [];
  $.each(array, function(elem, i) {
    ans.push(f(elem, i));
  });
  return ans;
};

/*
  Method: reduce
  
  Iteratively applies the binary function *f* storing the result in an accumulator.
  
  Parameters:
  
  array - (array) The original array.
  f - (function) The function to apply to the array elements.
  opt - (optional|mixed) The starting value for the acumulator.
  
  Example:
  (start code js)
  $jit.util.reduce([3, 4, 5], function(x, y) { return x + y; }, 0); //12
  (end code)
*/
$.reduce = function(array, f, opt) {
  var l = array.length;
  if(l==0) return opt;
  var acum = arguments.length == 3? opt : array[--l];
  while(l--) {
    acum = f(acum, array[l]);
  }
  return acum;
};

/*
  Method: merge
  
  Merges n-objects and their sub-objects creating a new, fresh object.
  
  Parameters:
  
  An arbitrary number of objects.
  
  Example:
  (start code js)
  $jit.util.merge({ 'a': 1, 'b': 2 }, { 'b': 3, 'c': 4 }); //{ 'a':1, 'b': 3, 'c': 4 }
  (end code)
*/
$.merge = function() {
  var mix = {};
  for ( var i = 0, l = arguments.length; i < l; i++) {
    var object = arguments[i];
    if ($.type(object) != 'object')
      continue;
    for ( var key in object) {
      var op = object[key], mp = mix[key];
      mix[key] = (mp && $.type(op) == 'object' && $.type(mp) == 'object') ? $
          .merge(mp, op) : $.unlink(op);
    }
  }
  return mix;
};

$.unlink = function(object) {
  var unlinked;
  switch ($.type(object)) {
  case 'object':
    unlinked = {};
    for ( var p in object)
      unlinked[p] = $.unlink(object[p]);
    break;
  case 'array':
    unlinked = [];
    for ( var i = 0, l = object.length; i < l; i++)
      unlinked[i] = $.unlink(object[i]);
    break;
  default:
    return object;
  }
  return unlinked;
};

$.zip = function() {
  if(arguments.length === 0) return [];
  for(var j=0, ans=[], l=arguments.length, ml=arguments[0].length; j<ml; j++) {
    for(var i=0, row=[]; i<l; i++) {
      row.push(arguments[i][j]);
    }
    ans.push(row);
  }
  return ans;
};

/*
  Method: rgbToHex
  
  Converts an RGB array into a Hex string.
  
  Parameters:
  
  srcArray - (array) An array with R, G and B values
  
  Example:
  (start code js)
  $jit.util.rgbToHex([255, 255, 255]); //'#ffffff'
  (end code)
*/
$.rgbToHex = function(srcArray, array) {
  if (srcArray.length < 3)
    return null;
  if (srcArray.length == 4 && srcArray[3] == 0 && !array)
    return 'transparent';
  var hex = [];
  for ( var i = 0; i < 3; i++) {
    var bit = (srcArray[i] - 0).toString(16);
    hex.push(bit.length == 1 ? '0' + bit : bit);
  }
  return array ? hex : '#' + hex.join('');
};

/*
  Method: hexToRgb
  
  Converts an Hex color string into an RGB array.
  
  Parameters:
  
  hex - (string) A color hex string.
  
  Example:
  (start code js)
  $jit.util.hexToRgb('#fff'); //[255, 255, 255]
  (end code)
*/
$.hexToRgb = function(hex) {
  if (hex.length != 7) {
    hex = hex.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
    hex.shift();
    if (hex.length != 3)
      return null;
    var rgb = [];
    for ( var i = 0; i < 3; i++) {
      var value = hex[i];
      if (value.length == 1)
        value += value;
      rgb.push(parseInt(value, 16));
    }
    return rgb;
  } else {
    hex = parseInt(hex.slice(1), 16);
    return [ hex >> 16, hex >> 8 & 0xff, hex & 0xff ];
  }
};

$.destroy = function(elem) {
  $.clean(elem);
  if (elem.parentNode)
    elem.parentNode.removeChild(elem);
  if (elem.clearAttributes)
    elem.clearAttributes();
};

$.clean = function(elem) {
  for (var ch = elem.childNodes, i = 0, l = ch.length; i < l; i++) {
    $.destroy(ch[i]);
  }
};

/*
  Method: addEvent
  
  Cross-browser add event listener.
  
  Parameters:
  
  obj - (obj) The Element to attach the listener to.
  type - (string) The listener type. For example 'click', or 'mousemove'.
  fn - (function) The callback function to be used when the event is fired.
  
  Example:
  (start code js)
  $jit.util.addEvent(elem, 'click', function(){ alert('hello'); });
  (end code)
*/
$.addEvent = function(obj, type, fn) {
  if (obj.addEventListener)
    obj.addEventListener(type, fn, false);
  else
    obj.attachEvent('on' + type, fn);
};

$.addEvents = function(obj, typeObj) {
  for(var type in typeObj) {
    $.addEvent(obj, type, typeObj[type]);
  }
};

$.hasClass = function(obj, klass) {
  return (' ' + obj.className + ' ').indexOf(' ' + klass + ' ') > -1;
};

$.addClass = function(obj, klass) {
  if (!$.hasClass(obj, klass))
    obj.className = (obj.className + " " + klass);
};

$.removeClass = function(obj, klass) {
  obj.className = obj.className.replace(new RegExp(
      '(^|\\s)' + klass + '(?:\\s|$)'), '$1');
};

$.getPos = function(elem) {
  var offset = getOffsets(elem);
  var scroll = getScrolls(elem);
  return {
    x: offset.x - scroll.x,
    y: offset.y - scroll.y
  };

  function getOffsets(elem) {
    var position = {
      x: 0,
      y: 0
    };
    while (elem && !isBody(elem)) {
      position.x += elem.offsetLeft;
      position.y += elem.offsetTop;
      elem = elem.offsetParent;
    }
    return position;
  }

  function getScrolls(elem) {
    var position = {
      x: 0,
      y: 0
    };
    while (elem && !isBody(elem)) {
      position.x += elem.scrollLeft;
      position.y += elem.scrollTop;
      elem = elem.parentNode;
    }
    return position;
  }

  function isBody(element) {
    return (/^(?:body|html)$/i).test(element.tagName);
  }
};

$.event = {
  get: function(e, win) {
    win = win || window;
    return e || win.event;
  },
  getWheel: function(e) {
    return e.wheelDelta? e.wheelDelta / 120 : -(e.detail || 0) / 3;
  },
  isRightClick: function(e) {
    return (e.which == 3 || e.button == 2);
  },
  getPos: function(e, win) {
    // get mouse position
    win = win || window;
    e = e || win.event;
    var doc = win.document;
    doc = doc.documentElement || doc.body;
    //TODO(nico): make touch event handling better
    if(e.touches && e.touches.length) {
      e = e.touches[0];
    }
    var page = {
      x: e.pageX || (e.clientX + doc.scrollLeft),
      y: e.pageY || (e.clientY + doc.scrollTop)
    };
    return page;
  },
  stop: function(e) {
    if (e.stopPropagation) e.stopPropagation();
    e.cancelBubble = true;
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  }
};

$jit.util = $jit.id = $;

var Class = function(properties) {
  properties = properties || {};
  var klass = function() {
    for ( var key in this) {
      if (typeof this[key] != 'function')
        this[key] = $.unlink(this[key]);
    }
    this.constructor = klass;
    if (Class.prototyping)
      return this;
    var instance = this.initialize ? this.initialize.apply(this, arguments)
        : this;
    //typize
    this.$$family = 'class';
    return instance;
  };

  for ( var mutator in Class.Mutators) {
    if (!properties[mutator])
      continue;
    properties = Class.Mutators[mutator](properties, properties[mutator]);
    delete properties[mutator];
  }

  $.extend(klass, this);
  klass.constructor = Class;
  klass.prototype = properties;
  return klass;
};

Class.Mutators = {

  Implements: function(self, klasses) {
    $.each($.splat(klasses), function(klass) {
      Class.prototyping = klass;
      var instance = (typeof klass == 'function') ? new klass : klass;
      for ( var prop in instance) {
        if (!(prop in self)) {
          self[prop] = instance[prop];
        }
      }
      delete Class.prototyping;
    });
    return self;
  }

};

$.extend(Class, {

  inherit: function(object, properties) {
    for ( var key in properties) {
      var override = properties[key];
      var previous = object[key];
      var type = $.type(override);
      if (previous && type == 'function') {
        if (override != previous) {
          Class.override(object, key, override);
        }
      } else if (type == 'object') {
        object[key] = $.merge(previous, override);
      } else {
        object[key] = override;
      }
    }
    return object;
  },

  override: function(object, name, method) {
    var parent = Class.prototyping;
    if (parent && object[name] != parent[name])
      parent = null;
    var override = function() {
      var previous = this.parent;
      this.parent = parent ? parent[name] : object[name];
      var value = method.apply(this, arguments);
      this.parent = previous;
      return value;
    };
    object[name] = override;
  }

});

Class.prototype.implement = function() {
  var proto = this.prototype;
  $.each(Array.prototype.slice.call(arguments || []), function(properties) {
    Class.inherit(proto, properties);
  });
  return this;
};

$jit.Class = Class;

/*
  Object: $jit.json
  
  Provides JSON utility functions.
  
  Most of these functions are JSON-tree traversal and manipulation functions.
*/
$jit.json = {
  /*
     Method: prune
  
     Clears all tree nodes having depth greater than maxLevel.
  
     Parameters:
  
        tree - (object) A JSON tree object. For more information please see <Loader.loadJSON>.
        maxLevel - (number) An integer specifying the maximum level allowed for this tree. All nodes having depth greater than max level will be deleted.

  */
  prune: function(tree, maxLevel) {
    this.each(tree, function(elem, i) {
      if (i == maxLevel && elem.children) {
        delete elem.children;
        elem.children = [];
      }
    });
  },
  /*
     Method: getParent
  
     Returns the parent node of the node having _id_ as id.
  
     Parameters:
  
        tree - (object) A JSON tree object. See also <Loader.loadJSON>.
        id - (string) The _id_ of the child node whose parent will be returned.

    Returns:

        A tree JSON node if any, or false otherwise.
  
  */
  getParent: function(tree, id) {
    if (tree.id == id)
      return false;
    var ch = tree.children;
    if (ch && ch.length > 0) {
      for ( var i = 0; i < ch.length; i++) {
        if (ch[i].id == id)
          return tree;
        else {
          var ans = this.getParent(ch[i], id);
          if (ans)
            return ans;
        }
      }
    }
    return false;
  },
  /*
     Method: getSubtree
  
     Returns the subtree that matches the given id.
  
     Parameters:
  
        tree - (object) A JSON tree object. See also <Loader.loadJSON>.
        id - (string) A node *unique* identifier.
  
     Returns:
  
        A subtree having a root node matching the given id. Returns null if no subtree matching the id is found.

  */
  getSubtree: function(tree, id) {
    if (tree.id == id)
      return tree;
    for ( var i = 0, ch = tree.children; ch && i < ch.length; i++) {
      var t = this.getSubtree(ch[i], id);
      if (t != null)
        return t;
    }
    return null;
  },
  /*
     Method: eachLevel
  
      Iterates on tree nodes with relative depth less or equal than a specified level.
  
     Parameters:
  
        tree - (object) A JSON tree or subtree. See also <Loader.loadJSON>.
        initLevel - (number) An integer specifying the initial relative level. Usually zero.
        toLevel - (number) An integer specifying a top level. This method will iterate only through nodes with depth less than or equal this number.
        action - (function) A function that receives a node and an integer specifying the actual level of the node.
          
    Example:
   (start code js)
     $jit.json.eachLevel(tree, 0, 3, function(node, depth) {
        alert(node.name + ' ' + depth);
     });
   (end code)
  */
  eachLevel: function(tree, initLevel, toLevel, action) {
    if (initLevel <= toLevel) {
      action(tree, initLevel);
      if(!tree.children) return;
      for ( var i = 0, ch = tree.children; i < ch.length; i++) {
        this.eachLevel(ch[i], initLevel + 1, toLevel, action);
      }
    }
  },
  /*
     Method: each
  
      A JSON tree iterator.
  
     Parameters:
  
        tree - (object) A JSON tree or subtree. See also <Loader.loadJSON>.
        action - (function) A function that receives a node.

    Example:
    (start code js)
      $jit.json.each(tree, function(node) {
        alert(node.name);
      });
    (end code)
          
  */
  each: function(tree, action) {
    this.eachLevel(tree, 0, Number.MAX_VALUE, action);
  }
};


/*
     An object containing multiple type of transformations. 
*/

$jit.Trans = {
  $extend: true,
  
  linear: function(p){
    return p;
  }
};

var Trans = $jit.Trans;

(function(){

  var makeTrans = function(transition, params){
    params = $.splat(params);
    return $.extend(transition, {
      easeIn: function(pos){
        return transition(pos, params);
      },
      easeOut: function(pos){
        return 1 - transition(1 - pos, params);
      },
      easeInOut: function(pos){
        return (pos <= 0.5)? transition(2 * pos, params) / 2 : (2 - transition(
            2 * (1 - pos), params)) / 2;
      }
    });
  };

  var transitions = {

    Pow: function(p, x){
      return Math.pow(p, x[0] || 6);
    },

    Expo: function(p){
      return Math.pow(2, 8 * (p - 1));
    },

    Circ: function(p){
      return 1 - Math.sin(Math.acos(p));
    },

    Sine: function(p){
      return 1 - Math.sin((1 - p) * Math.PI / 2);
    },

    Back: function(p, x){
      x = x[0] || 1.618;
      return Math.pow(p, 2) * ((x + 1) * p - x);
    },

    Bounce: function(p){
      var value;
      for ( var a = 0, b = 1; 1; a += b, b /= 2) {
        if (p >= (7 - 4 * a) / 11) {
          value = b * b - Math.pow((11 - 6 * a - 11 * p) / 4, 2);
          break;
        }
      }
      return value;
    },

    Elastic: function(p, x){
      return Math.pow(2, 10 * --p)
          * Math.cos(20 * p * Math.PI * (x[0] || 1) / 3);
    }

  };

  $.each(transitions, function(val, key){
    Trans[key] = makeTrans(val);
  });

  $.each( [
      'Quad', 'Cubic', 'Quart', 'Quint'
  ], function(elem, i){
    Trans[elem] = makeTrans(function(p){
      return Math.pow(p, [
        i + 2
      ]);
    });
  });

})();

/*
   A Class that can perform animations for generic objects.

   If you are looking for animation transitions please take a look at the <Trans> object.

   Used by:

   <Graph.Plot>
   
   Based on:
   
   The Animation class is based in the MooTools Framework <http://mootools.net>. Copyright (c) 2006-2009 Valerio Proietti, <http://mad4milk.net/>. MIT license <http://mootools.net/license.txt>.

*/

var Animation = new Class( {

  initialize: function(options){
    this.setOptions(options);
  },

  setOptions: function(options){
    var opt = {
      duration: 2500,
      fps: 40,
      transition: Trans.Quart.easeInOut,
      compute: $.empty,
      complete: $.empty,
      link: 'ignore'
    };
    this.opt = $.merge(opt, options || {});
    return this;
  },

  step: function(){
    var time = $.time(), opt = this.opt;
    if (time < this.time + opt.duration) {
      var delta = opt.transition((time - this.time) / opt.duration);
      opt.compute(delta);
    } else {
      this.timer = clearInterval(this.timer);
      opt.compute(1);
      opt.complete();
    }
  },

  start: function(){
    if (!this.check())
      return this;
    this.time = 0;
    this.startTimer();
    return this;
  },

  startTimer: function(){
    var that = this, fps = this.opt.fps;
    if (this.timer)
      return false;
    this.time = $.time() - this.time;
    this.timer = setInterval((function(){
      that.step();
    }), Math.round(1000 / fps));
    return true;
  },

  pause: function(){
    this.stopTimer();
    return this;
  },

  resume: function(){
    this.startTimer();
    return this;
  },

  stopTimer: function(){
    if (!this.timer)
      return false;
    this.time = $.time() - this.time;
    this.timer = clearInterval(this.timer);
    return true;
  },

  check: function(){
    if (!this.timer)
      return true;
    if (this.opt.link == 'cancel') {
      this.stopTimer();
      return true;
    }
    return false;
  }
});


var Options = function() {
  var args = arguments;
  for(var i=0, l=args.length, ans={}; i<l; i++) {
    var opt = Options[args[i]];
    if(opt.$extend) {
      $.extend(ans, opt);
    } else {
      ans[args[i]] = opt;  
    }
  }
  return ans;
};

/*
 * File: Options.Canvas.js
 *
*/

/*
  Object: Options.Canvas
  
  These are Canvas general options, like where to append it in the DOM, its dimensions, background, 
  and other more advanced options.
  
  Syntax:
  
  (start code js)

  Options.Canvas = {
    injectInto: 'id',
    type: '2D', //'3D'
    width: false,
    height: false,
    useCanvas: false,
    withLabels: true,
    background: false
  };  
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    injectInto: 'someContainerId',
    width: 500,
    height: 700
  });
  (end code)
  
  Parameters:
  
  injectInto - *required* (string|element) The id of the DOM container for the visualization. It can also be an Element provided that it has an id.
  type - (string) Context type. Default's 2D but can be 3D for webGL enabled browsers.
  width - (number) Default's to the *container's offsetWidth*. The width of the canvas.
  height - (number) Default's to the *container's offsetHeight*. The height of the canvas.
  useCanvas - (boolean|object) Default's *false*. You can pass another <Canvas> instance to be used by the visualization.
  withLabels - (boolean) Default's *true*. Whether to use a label container for the visualization.
  background - (boolean|object) Default's *false*. An object containing information about the rendering of a background canvas.
*/

Options.Canvas = {
    $extend: true,
    
    injectInto: 'id',
    type: '2D',
    width: false,
    height: false,
    useCanvas: false,
    withLabels: true,
    background: false,
    
    Scene: {
      Lighting: {
        enable: false,
        ambient: [1, 1, 1],
        directional: {
          direction: { x: -100, y: -100, z: -100 },
          color: [0.5, 0.3, 0.1]
        }
      }
    }
};

/*
 * File: Options.Tree.js
 *
*/

/*
  Object: Options.Tree
  
  Options related to (strict) Tree layout algorithms. These options are used by the <ST> visualization.
  
  Syntax:
  
  (start code js)
  Options.Tree = {
    orientation: "left",
    subtreeOffset: 8,
    siblingOffset: 5,
    indent:10,
    multitree: false,
    align:"center"
  };
  (end code)
  
  Example:
  
  (start code js)
  var st = new $jit.ST({
    orientation: 'left',
    subtreeOffset: 1,
    siblingOFfset: 5,
    multitree: true
  });
  (end code)

  Parameters:
    
  subtreeOffset - (number) Default's 8. Separation offset between subtrees.
  siblingOffset - (number) Default's 5. Separation offset between siblings.
  orientation - (string) Default's 'left'. Tree orientation layout. Possible values are 'left', 'top', 'right', 'bottom'.
  align - (string) Default's *center*. Whether the tree alignment is 'left', 'center' or 'right'.
  indent - (number) Default's 10. Used when *align* is left or right and shows an indentation between parent and children.
  multitree - (boolean) Default's *false*. Used with the node $orn data property for creating multitrees.
     
*/
Options.Tree = {
    $extend: true,
    
    orientation: "left",
    subtreeOffset: 8,
    siblingOffset: 5,
    indent:10,
    multitree: false,
    align:"center"
};


/*
 * File: Options.Tree.js
 *
*/

/*
  Object: Options.Tree
  
  Options related to (strict) Tree layout algorithms. These options are used by the <ST> visualization.
  
  Syntax:
  
  (start code js)
  Options.Tree = {
    orientation: "left",
    subtreeOffset: 8,
    siblingOffset: 5,
    indent:10,
    multitree: false,
    align:"center"
  };
  (end code)
  
  Example:
  
  (start code js)
  var st = new $jit.ST({
    orientation: 'left',
    subtreeOffset: 1,
    siblingOFfset: 5,
    multitree: true
  });
  (end code)

  Parameters:
    
  subtreeOffset - (number) Default's 8. Separation offset between subtrees.
  siblingOffset - (number) Default's 5. Separation offset between siblings.
  orientation - (string) Default's 'left'. Tree orientation layout. Possible values are 'left', 'top', 'right', 'bottom'.
  align - (string) Default's *center*. Whether the tree alignment is 'left', 'center' or 'right'.
  indent - (number) Default's 10. Used when *align* is left or right and shows an indentation between parent and children.
  multitree - (boolean) Default's *false*. Used with the node $orn data property for creating multitrees.
  branchMultiplier: number of times to multiply the branch length. Used to space out the tree in horizontal direction.
  initCharacter: a flag to check if the leaves are assigned their character values
  shapes - css class names to distinguish different characters
     
*/
Options.PhyloJive = {
    $extend: true,
    
    alignName:false,
    lateralise:false,
    collapsedXOffset: 25,
		branchLength: true,
		levelDistance: 40,
		branchMultiplier: 1,
    initCharacter: false,
    firstCharacter: false,
    presentClade: $.empty,
    onPresentClade:$.empty,
    rangeCount: 10,
    shapes: ['box','star','square'],
    color: ['BlueViolet', 'Brown', 'CadetBlue', 'Coral', 'CornflowerBlue', 'Crimson', 'DarkCyan', 'DarkGoldenrod', 'DarkGreen', 'DarkKhaki', 'DarkOlive Green', 'DarkOrange', 'DarkRed', 'DarkSalmon', 'DarkSlateBlue', 'DarkSlateGray', 'DarkViolet', 'DeepPink', 'DimGray', 'DodgerBlue'],
    typeEnum: {quant:0,quali:1},
    quantColor: ['#00FFFF','#00DDFF','#00BBFF','#0099FF','#0088FF','#0077FF','#0055FF','#0044FF','#0022FF','#0000FF'],
    quantShape: 'quant',
    selectedCharacters: []
};


/*
 * File: Options.Node.js
 *
*/

/*
  Object: Options.Node

  Provides Node rendering options for Tree and Graph based visualizations.

  Syntax:
    
  (start code js)
  Options.Node = {
    overridable: false,
    type: 'circle',
    color: '#ccb',
    alpha: 1,
    dim: 3,
    height: 20,
    width: 90,
    autoHeight: false,
    autoWidth: false,
    lineWidth: 1,
    transform: true,
    align: "center",
    angularWidth:1,
    span:1,
    CanvasStyles: {}
  };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    Node: {
      overridable: true,
      width: 30,
      autoHeight: true,
      type: 'rectangle'
    }
  });
  (end code)
  
  Parameters:

  overridable - (boolean) Default's *false*. Determine whether or not general node properties can be overridden by a particular <Graph.Node>.
  type - (string) Default's *circle*. Node's shape. Node built-in types include 'circle', 'rectangle', 'square', 'ellipse', 'triangle', 'star'. The default Node type might vary in each visualization. You can also implement (non built-in) custom Node types into your visualizations.
  color - (string) Default's *#ccb*. Node color.
  alpha - (number) Default's *1*. The Node's alpha value. *1* is for full opacity.
  dim - (number) Default's *3*. An extra parameter used by 'circle', 'square', 'triangle' and 'star' node types. Depending on each shape, this parameter can set the radius of a circle, half the length of the side of a square, half the base and half the height of a triangle or the length of a side of a star (concave decagon).
  height - (number) Default's *20*. Used by 'rectangle' and 'ellipse' node types. The height of the node shape.
  width - (number) Default's *90*. Used by 'rectangle' and 'ellipse' node types. The width of the node shape.
  autoHeight - (boolean) Default's *false*. Whether to set an auto height for the node depending on the content of the Node's label.
  autoWidth - (boolean) Default's *false*. Whether to set an auto width for the node depending on the content of the Node's label.
  lineWidth - (number) Default's *1*. Used only by some Node shapes. The line width of the strokes of a node.
  transform - (boolean) Default's *true*. Only used by the <Hypertree> visualization. Whether to scale the nodes according to the moebius transformation.
  align - (string) Default's *center*. Possible values are 'center', 'left' or 'right'. Used only by the <ST> visualization, these parameters are used for aligning nodes when some of they dimensions vary.
  angularWidth - (number) Default's *1*. Used in radial layouts (like <RGraph> or <Sunburst> visualizations). The amount of relative 'space' set for a node.
  span - (number) Default's *1*. Used in radial layouts (like <RGraph> or <Sunburst> visualizations). The angle span amount set for a node.
  CanvasStyles - (object) Default's an empty object (i.e. {}). Attach any other canvas specific property that you'd set to the canvas context before plotting a Node.

*/
Options.Node = {
  $extend: false,
  
  overridable: false,
  type: 'circle',
  color: '#ccb',
  alpha: 1,
  dim: 3,
  height: 20,
  width: 90,
  autoHeight: false,
  autoWidth: false,
  lineWidth: 1,
  transform: true,
  align: "center",
  angularWidth:1,
  span:1,
  //Raw canvas styles to be
  //applied to the context instance
  //before plotting a node
  CanvasStyles: {}
};


/*
 * File: Options.Edge.js
 *
*/

/*
  Object: Options.Edge

  Provides Edge rendering options for Tree and Graph based visualizations.

  Syntax:
    
  (start code js)
  Options.Edge = {
    overridable: false,
    type: 'line',
    color: '#ccb',
    lineWidth: 1,
    dim:15,
    alpha: 1,
    CanvasStyles: {}
  };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    Edge: {
      overridable: true,
      type: 'line',
      color: '#fff',
      CanvasStyles: {
        shadowColor: '#ccc',
        shadowBlur: 10
      }
    }
  });
  (end code)
  
  Parameters:
    
   overridable - (boolean) Default's *false*. Determine whether or not general edges properties can be overridden by a particular <Graph.Adjacence>.
   type - (string) Default's 'line'. Edge styles include 'line', 'hyperline', 'arrow'. The default Edge type might vary in each visualization. You can also implement custom Edge types.
   color - (string) Default's '#ccb'. Edge color.
   lineWidth - (number) Default's *1*. Line/Edge width.
   alpha - (number) Default's *1*. The Edge's alpha value. *1* is for full opacity.
   dim - (number) Default's *15*. An extra parameter used by other complex shapes such as quadratic, bezier or arrow, to determine the shape's diameter.
   epsilon - (number) Default's *7*. Only used when using *enableForEdges* in <Options.Events>. This dimension is used to create an area for the line where the contains method for the edge returns *true*.
   CanvasStyles - (object) Default's an empty object (i.e. {}). Attach any other canvas specific property that you'd set to the canvas context before plotting an Edge.

  See also:
   
   If you want to know more about how to customize Node/Edge data per element, in the JSON or programmatically, take a look at this article.
*/
Options.Edge = {
  $extend: false,
  
  overridable: false,
  type: 'line',
  color: '#ccb',
  lineWidth: 1,
  dim:15,
  alpha: 1,
  epsilon: 7,

  //Raw canvas styles to be
  //applied to the context instance
  //before plotting an edge
  CanvasStyles: {}
};


/*
 * File: Options.Fx.js
 *
*/

/*
  Object: Options.Fx

  Provides animation options like duration of the animations, frames per second and animation transitions.  

  Syntax:
  
  (start code js)
    Options.Fx = {
      fps:40,
      duration: 2500,
      transition: $jit.Trans.Quart.easeInOut,
      clearCanvas: true
    };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    duration: 1000,
    fps: 35,
    transition: $jit.Trans.linear
  });
  (end code)
  
  Parameters:
  
  clearCanvas - (boolean) Default's *true*. Whether to clear the frame/canvas when the viz is plotted or animated.
  duration - (number) Default's *2500*. Duration of the animation in milliseconds.
  fps - (number) Default's *40*. Frames per second.
  transition - (object) Default's *$jit.Trans.Quart.easeInOut*. The transition used for the animations. See below for a more detailed explanation.
  
  Object: $jit.Trans
  
  This object is used for specifying different animation transitions in all visualizations.

  There are many different type of animation transitions.

  linear:

  Displays a linear transition

  >Trans.linear
  
  (see Linear.png)

  Quad:

  Displays a Quadratic transition.

  >Trans.Quad.easeIn
  >Trans.Quad.easeOut
  >Trans.Quad.easeInOut
  
 (see Quad.png)

 Cubic:

 Displays a Cubic transition.

 >Trans.Cubic.easeIn
 >Trans.Cubic.easeOut
 >Trans.Cubic.easeInOut

 (see Cubic.png)

 Quart:

 Displays a Quartetic transition.

 >Trans.Quart.easeIn
 >Trans.Quart.easeOut
 >Trans.Quart.easeInOut

 (see Quart.png)

 Quint:

 Displays a Quintic transition.

 >Trans.Quint.easeIn
 >Trans.Quint.easeOut
 >Trans.Quint.easeInOut

 (see Quint.png)

 Expo:

 Displays an Exponential transition.

 >Trans.Expo.easeIn
 >Trans.Expo.easeOut
 >Trans.Expo.easeInOut

 (see Expo.png)

 Circ:

 Displays a Circular transition.

 >Trans.Circ.easeIn
 >Trans.Circ.easeOut
 >Trans.Circ.easeInOut

 (see Circ.png)

 Sine:

 Displays a Sineousidal transition.

 >Trans.Sine.easeIn
 >Trans.Sine.easeOut
 >Trans.Sine.easeInOut

 (see Sine.png)

 Back:

 >Trans.Back.easeIn
 >Trans.Back.easeOut
 >Trans.Back.easeInOut

 (see Back.png)

 Bounce:

 Bouncy transition.

 >Trans.Bounce.easeIn
 >Trans.Bounce.easeOut
 >Trans.Bounce.easeInOut

 (see Bounce.png)

 Elastic:

 Elastic curve.

 >Trans.Elastic.easeIn
 >Trans.Elastic.easeOut
 >Trans.Elastic.easeInOut

 (see Elastic.png)
 
 Based on:
     
 Easing and Transition animation methods are based in the MooTools Framework <http://mootools.net>. Copyright (c) 2006-2010 Valerio Proietti, <http://mad4milk.net/>. MIT license <http://mootools.net/license.txt>.


*/
Options.Fx = {
  $extend: true,
  
  fps:40,
  duration: 2500,
  transition: $jit.Trans.Quart.easeInOut,
  clearCanvas: true
};

/*
 * File: Options.Label.js
 *
*/
/*
  Object: Options.Label

  Provides styling for Labels such as font size, family, etc. Also sets Node labels as HTML, SVG or Native canvas elements.  

  Syntax:
  
  (start code js)
    Options.Label = {
      overridable: false,
      type: 'HTML', //'SVG', 'Native'
      style: ' ',
      size: 10,
      family: 'sans-serif',
      textAlign: 'center',
      textBaseline: 'alphabetic',
      color: '#fff'
    };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    Label: {
      type: 'Native',
      size: 11,
      color: '#ccc'
    }
  });
  (end code)
  
  Parameters:
    
  overridable - (boolean) Default's *false*. Determine whether or not general label properties can be overridden by a particular <Graph.Node>.
  type - (string) Default's *HTML*. The type for the labels. Can be 'HTML', 'SVG' or 'Native' canvas labels.
  style - (string) Default's *empty string*. Can be 'italic' or 'bold'. This parameter is only taken into account when using 'Native' canvas labels. For DOM based labels the className *node* is added to the DOM element for styling via CSS. You can also use <Options.Controller> methods to style individual labels.
  size - (number) Default's *10*. The font's size. This parameter is only taken into account when using 'Native' canvas labels. For DOM based labels the className *node* is added to the DOM element for styling via CSS. You can also use <Options.Controller> methods to style individual labels.
  family - (string) Default's *sans-serif*. The font's family. This parameter is only taken into account when using 'Native' canvas labels. For DOM based labels the className *node* is added to the DOM element for styling via CSS. You can also use <Options.Controller> methods to style individual labels.
  color - (string) Default's *#fff*. The font's color. This parameter is only taken into account when using 'Native' canvas labels. For DOM based labels the className *node* is added to the DOM element for styling via CSS. You can also use <Options.Controller> methods to style individual labels.
*/
Options.Label = {
  $extend: false,
  
  overridable: false,
  type: 'HTML', //'SVG', 'Native'
  style: ' ',
  size: 10,
  family: 'sans-serif',
  textAlign: 'center',
  textBaseline: 'alphabetic',
  color: '#fff'
};


/*
 * File: Options.Tips.js
 *
 */

/*
  Object: Options.Tips
  
  Tips options
  
  Syntax:
    
  (start code js)
  Options.Tips = {
    enable: false,
    type: 'auto',
    offsetX: 20,
    offsetY: 20,
    onShow: $.empty,
    onHide: $.empty
  };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    Tips: {
      enable: true,
      type: 'Native',
      offsetX: 10,
      offsetY: 10,
      onShow: function(tip, node) {
        tip.innerHTML = node.name;
      }
    }
  });
  (end code)

  Parameters:

  enable - (boolean) Default's *false*. If *true*, a tooltip will be shown when a node is hovered. The tooltip is a div DOM element having "tip" as CSS class. 
  type - (string) Default's *auto*. Defines where to attach the MouseEnter/Leave tooltip events. Possible values are 'Native' to attach them to the canvas or 'HTML' to attach them to DOM label elements (if defined). 'auto' sets this property to the value of <Options.Label>'s *type* property.
  offsetX - (number) Default's *20*. An offset added to the current tooltip x-position (which is the same as the current mouse position). Default's 20.
  offsetY - (number) Default's *20*. An offset added to the current tooltip y-position (which is the same as the current mouse position). Default's 20.
  onShow(tip, node) - This callack is used right before displaying a tooltip. The first formal parameter is the tip itself (which is a DivElement). The second parameter may be a <Graph.Node> for graph based visualizations or an object with label, value properties for charts.
  onHide() - This callack is used when hiding a tooltip.

*/
Options.Tips = {
  $extend: false,
  
  enable: false,
  type: 'auto',
  offsetX: 20,
  offsetY: 20,
  force: false,
  onShow: $.empty,
  onHide: $.empty
};


/*
 * File: Options.NodeStyles.js
 *
 */

/*
  Object: Options.NodeStyles
  
  Apply different styles when a node is hovered or selected.
  
  Syntax:
    
  (start code js)
  Options.NodeStyles = {
    enable: false,
    type: 'auto',
    stylesHover: false,
    stylesClick: false
  };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    NodeStyles: {
      enable: true,
      type: 'Native',
      stylesHover: {
        dim: 30,
        color: '#fcc'
      },
      duration: 600
    }
  });
  (end code)

  Parameters:
  
  enable - (boolean) Default's *false*. Whether to enable this option.
  type - (string) Default's *auto*. Use this to attach the hover/click events in the nodes or the nodes labels (if they have been defined as DOM elements: 'HTML' or 'SVG', see <Options.Label> for more details). The default 'auto' value will set NodeStyles to the same type defined for <Options.Label>.
  stylesHover - (boolean|object) Default's *false*. An object with node styles just like the ones defined for <Options.Node> or *false* otherwise.
  stylesClick - (boolean|object) Default's *false*. An object with node styles just like the ones defined for <Options.Node> or *false* otherwise.
*/

Options.NodeStyles = {
  $extend: false,
  
  enable: false,
  type: 'auto',
  stylesHover: false,
  stylesClick: false
};


/*
 * File: Options.Events.js
 *
*/

/*
  Object: Options.Events
  
  Configuration for adding mouse/touch event handlers to Nodes.
  
  Syntax:
  
  (start code js)
  Options.Events = {
    enable: false,
    enableForEdges: false,
    type: 'auto',
    onClick: $.empty,
    onRightClick: $.empty,
    onMouseMove: $.empty,
    onMouseEnter: $.empty,
    onMouseLeave: $.empty,
    onDragStart: $.empty,
    onDragMove: $.empty,
    onDragCancel: $.empty,
    onDragEnd: $.empty,
    onTouchStart: $.empty,
    onTouchMove: $.empty,
    onTouchEnd: $.empty,
    onTouchCancel: $.empty,
    onMouseWheel: $.empty
  };
  (end code)
  
  Example:
  
  (start code js)
  var viz = new $jit.Viz({
    Events: {
      enable: true,
      onClick: function(node, eventInfo, e) {
        viz.doSomething();
      },
      onMouseEnter: function(node, eventInfo, e) {
        viz.canvas.getElement().style.cursor = 'pointer';
      },
      onMouseLeave: function(node, eventInfo, e) {
        viz.canvas.getElement().style.cursor = '';
      }
    }
  });
  (end code)
  
  Parameters:
  
  enable - (boolean) Default's *false*. Whether to enable the Event system.
  enableForEdges - (boolean) Default's *false*. Whether to track events also in arcs. If *true* the same callbacks -described below- are used for nodes *and* edges. A simple duck type check for edges is to check for *node.nodeFrom*.
  type - (string) Default's 'auto'. Whether to attach the events onto the HTML labels (via event delegation) or to use the custom 'Native' canvas Event System of the library. 'auto' is set when you let the <Options.Label> *type* parameter decide this.
  onClick(node, eventInfo, e) - Triggered when a user performs a click in the canvas. *node* is the <Graph.Node> clicked or false if no node has been clicked. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onRightClick(node, eventInfo, e) - Triggered when a user performs a right click in the canvas. *node* is the <Graph.Node> right clicked or false if no node has been clicked. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onMouseMove(node, eventInfo, e) - Triggered when the user moves the mouse. *node* is the <Graph.Node> under the cursor as it's moving over the canvas or false if no node has been clicked. *e* is the grabbed event (should return the native event in a cross-browser manner).  *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas.
  onMouseEnter(node, eventInfo, e) - Triggered when a user moves the mouse over a node. *node* is the <Graph.Node> that the mouse just entered. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onMouseLeave(node, eventInfo, e) - Triggered when the user mouse-outs a node. *node* is the <Graph.Node> 'mouse-outed'. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onDragStart(node, eventInfo, e) - Triggered when the user mouse-downs over a node. *node* is the <Graph.Node> being pressed. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onDragMove(node, eventInfo, e) - Triggered when a user, after pressing the mouse button over a node, moves the mouse around. *node* is the <Graph.Node> being dragged. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onDragEnd(node, eventInfo, e) - Triggered when a user finished dragging a node. *node* is the <Graph.Node> being dragged. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onDragCancel(node, eventInfo, e) - Triggered when the user releases the mouse button over a <Graph.Node> that wasn't dragged (i.e. the user didn't perform any mouse movement after pressing the mouse button). *node* is the <Graph.Node> being dragged. *e* is the grabbed event (should return the native event in a cross-browser manner). *eventInfo* is an object containing useful methods like *getPos* to get the mouse position relative to the canvas. 
  onTouchStart(node, eventInfo, e) - Behaves just like onDragStart. 
  onTouchMove(node, eventInfo, e) - Behaves just like onDragMove. 
  onTouchEnd(node, eventInfo, e) - Behaves just like onDragEnd. 
  onTouchCancel(node, eventInfo, e) - Behaves just like onDragCancel.
  onMouseWheel(delta, e) - Triggered when the user uses the mouse scroll over the canvas. *delta* is 1 or -1 depending on the sense of the mouse scroll.
*/

Options.Events = {
  $extend: false,
  
  enable: false,
  enableForEdges: false,
  type: 'auto',
  onClick: $.empty,
  onRightClick: $.empty,
  onMouseMove: $.empty,
  onMouseEnter: $.empty,
  onMouseLeave: $.empty,
  onDragStart: $.empty,
  onDragMove: $.empty,
  onDragCancel: $.empty,
  onDragEnd: $.empty,
  onTouchStart: $.empty,
  onTouchMove: $.empty,
  onTouchEnd: $.empty,
  onMouseWheel: $.empty
};

/*
 * File: Options.Navigation.js
 *
*/

/*
  Object: Options.Navigation
  
  Panning and zooming options for Graph/Tree based visualizations. These options are implemented 
  by all visualizations except charts (<AreaChart>, <BarChart> and <PieChart>).
  
  Syntax:
  
  (start code js)

  Options.Navigation = {
    enable: false,
    type: 'auto',
    panning: false, //true, 'avoid nodes'
    zooming: false
  };
  
  (end code)
  
  Example:
    
  (start code js)
  var viz = new $jit.Viz({
    Navigation: {
      enable: true,
      panning: 'avoid nodes',
      zooming: 20
    }
  });
  (end code)
  
  Parameters:
  
  enable - (boolean) Default's *false*. Whether to enable Navigation capabilities.
  type - (string) Default's 'auto'. Whether to attach the navigation events onto the HTML labels (via event delegation) or to use the custom 'Native' canvas Event System of the library. When 'auto' set when you let the <Options.Label> *type* parameter decide this.
  panning - (boolean|string) Default's *false*. Set this property to *true* if you want to add Drag and Drop panning support to the visualization. You can also set this parameter to 'avoid nodes' to enable DnD panning but disable it if the DnD is taking place over a node. This is useful when some other events like Drag & Drop for nodes are added to <Graph.Nodes>.
  zooming - (boolean|number) Default's *false*. Set this property to a numeric value to turn mouse-scroll zooming on. The number will be proportional to the mouse-scroll sensitivity.
  
*/

Options.Navigation = {
  $extend: false,
  
  enable: false,
  type: 'auto',
  panning: false, //true | 'avoid nodes'
  zooming: false
};

/*
 * File: Options.Controller.js
 *
*/

/*
  Object: Options.Controller
  
  Provides controller methods. Controller methods are callback functions that get called at different stages 
  of the animation, computing or plotting of the visualization.
  
  Implemented by:
    
  All visualizations except charts (<AreaChart>, <BarChart> and <PieChart>).
  
  Syntax:
  
  (start code js)

  Options.Controller = {
    onBeforeCompute: $.empty,
    onAfterCompute:  $.empty,
    onCreateLabel:   $.empty,
    onPlaceLabel:    $.empty,
    onComplete:      $.empty,
    onBeforePlotLine:$.empty,
    onAfterPlotLine: $.empty,
    onBeforePlotNode:$.empty,
    onAfterPlotNode: $.empty,
    request:         false
  };
  
  (end code)
  
  Example:
    
  (start code js)
  var viz = new $jit.Viz({
    onBeforePlotNode: function(node) {
      if(node.selected) {
        node.setData('color', '#ffc');
      } else {
        node.removeData('color');
      }
    },
    onBeforePlotLine: function(adj) {
      if(adj.nodeFrom.selected && adj.nodeTo.selected) {
        adj.setData('color', '#ffc');
      } else {
        adj.removeData('color');
      }
    },
    onAfterCompute: function() {
      alert("computed!");
    }
  });
  (end code)
  
  Parameters:

   onBeforeCompute(node) - This method is called right before performing all computations and animations. The selected <Graph.Node> is passed as parameter.
   onAfterCompute() - This method is triggered after all animations or computations ended.
   onCreateLabel(domElement, node) - This method receives a new label DIV element as first parameter, and the corresponding <Graph.Node> as second parameter. This method will only be called once for each label. This method is useful when adding events or styles to the labels used by the JIT.
   onPlaceLabel(domElement, node) - This method receives a label DIV element as first parameter and the corresponding <Graph.Node> as second parameter. This method is called each time a label has been placed in the visualization, for example at each step of an animation, and thus it allows you to update the labels properties, such as size or position. Note that onPlaceLabel will be triggered after updating the labels positions. That means that, for example, the left and top css properties are already updated to match the nodes positions. Width and height properties are not set however.
   onBeforePlotNode(node) - This method is triggered right before plotting each <Graph.Node>. This method is useful for changing a node style right before plotting it.
   onAfterPlotNode(node) - This method is triggered right after plotting each <Graph.Node>.
   onBeforePlotLine(adj) - This method is triggered right before plotting a <Graph.Adjacence>. This method is useful for adding some styles to a particular edge before being plotted.
   onAfterPlotLine(adj) - This method is triggered right after plotting a <Graph.Adjacence>.
   onBeforeRemoveNode(node) - This method is triggered right before removing each <Graph.Node>.
   
    *Used in <ST>, <TM.Base> and <Icicle> visualizations*
    
    request(nodeId, level, onComplete) - This method is used for buffering information into the visualization. When clicking on an empty node, the visualization will make a request for this node's subtrees, specifying a given level for this subtree (defined by _levelsToShow_). Once the request is completed, the onComplete callback should be called with the given result. This is useful to provide on-demand information into the visualizations withought having to load the entire information from start. The parameters used by this method are _nodeId_, which is the id of the root of the subtree to request, _level_ which is the depth of the subtree to be requested (0 would mean just the root node). _onComplete_ is an object having the callback method _onComplete.onComplete(json)_ that should be called once the json has been retrieved.  
 
 */
Options.Controller = {
  $extend: true,
  
  onBeforeCompute:   $.empty,
  onAfterCompute:    $.empty,
  onCreateLabel:     $.empty,
  onPlaceLabel:      $.empty,
  onComplete:        $.empty,
  onBeforePlotLine:  $.empty,
  onAfterPlotLine:   $.empty,
  onBeforePlotNode:  $.empty,
  onAfterPlotNode:   $.empty,
  onBeforeRemoveNode:$.empty,
  request:         false
};


/*
 * File: Extras.js
 * 
 * Provides Extras such as Tips and Style Effects.
 * 
 * Description:
 * 
 * Provides the <Tips> and <NodeStyles> classes and functions.
 *
 */

/*
 * Manager for mouse events (clicking and mouse moving).
 * 
 * This class is used for registering objects implementing onClick
 * and onMousemove methods. These methods are called when clicking or
 * moving the mouse around  the Canvas.
 * For now, <Tips> and <NodeStyles> are classes implementing these methods.
 * 
 */
var ExtrasInitializer = {
  initialize: function(className, viz) {
    this.viz = viz;
    this.canvas = viz.canvas;
    this.config = viz.config[className];
    this.nodeTypes = viz.fx.nodeTypes;
    var type = this.config.type;
    this.dom = type == 'auto'? (viz.config.Label.type != 'Native') : (type != 'Native');
    this.labelContainer = this.dom && viz.labels.getLabelContainer();
    this.isEnabled() && this.initializePost();
  },
  initializePost: $.empty,
  setAsProperty: $.lambda(false),
  isEnabled: function() {
    return this.config.enable;
  },
  isLabel: function(e, win, group) {
    e = $.event.get(e, win);
    var labelContainer = this.labelContainer,
        target = e.target || e.srcElement,
        related = e.relatedTarget;
    if(group) {
      return related && related == this.viz.canvas.getCtx().canvas 
          && !!target && this.isDescendantOf(target, labelContainer);
    } else {
      return this.isDescendantOf(target, labelContainer);
    }
  },
  isDescendantOf: function(elem, par) {
    while(elem && elem.parentNode) {
      if(elem.parentNode == par)
        return elem;
      elem = elem.parentNode;
    }
    return false;
  }
};

var EventsInterface = {
  onMouseUp: $.empty,
  onMouseDown: $.empty,
  onMouseMove: $.empty,
  onMouseOver: $.empty,
  onMouseOut: $.empty,
  onMouseWheel: $.empty,
  onTouchStart: $.empty,
  onTouchMove: $.empty,
  onTouchEnd: $.empty,
  onTouchCancel: $.empty
};

var MouseEventsManager = new Class({
  initialize: function(viz) {
    this.viz = viz;
    this.canvas = viz.canvas;
    this.node = false;
    this.edge = false;
    this.registeredObjects = [];
    this.attachEvents();
  },
  
  attachEvents: function() {
    var htmlCanvas = this.canvas.getElement(), 
        that = this;
    htmlCanvas.oncontextmenu = $.lambda(false);
    $.addEvents(htmlCanvas, {
      'mouseup': function(e, win) {
        var event = $.event.get(e, win);
        that.handleEvent('MouseUp', e, win, 
            that.makeEventObject(e, win), 
            $.event.isRightClick(event));
      },
      'mousedown': function(e, win) {
        var event = $.event.get(e, win);
        that.handleEvent('MouseDown', e, win, that.makeEventObject(e, win), 
            $.event.isRightClick(event));
      },
      'mousemove': function(e, win) {
        that.handleEvent('MouseMove', e, win, that.makeEventObject(e, win));
      },
      'mouseover': function(e, win) {
        that.handleEvent('MouseOver', e, win, that.makeEventObject(e, win));
      },
      'mouseout': function(e, win) {
        that.handleEvent('MouseOut', e, win, that.makeEventObject(e, win));
      },
      'touchstart': function(e, win) {
        that.handleEvent('TouchStart', e, win, that.makeEventObject(e, win));
      },
      'touchmove': function(e, win) {
        that.handleEvent('TouchMove', e, win, that.makeEventObject(e, win));
      },
      'touchend': function(e, win) {
        that.handleEvent('TouchEnd', e, win, that.makeEventObject(e, win));
      }
    });
    //attach mousewheel event
    var handleMouseWheel = function(e, win) {
      var event = $.event.get(e, win);
      var wheel = $.event.getWheel(event);
      that.handleEvent('MouseWheel', e, win, wheel);
    };
    //TODO(nico): this is a horrible check for non-gecko browsers!
    if(!document.getBoxObjectFor && window.mozInnerScreenX == null) {
      $.addEvent(htmlCanvas, 'mousewheel', handleMouseWheel);
    } else {
      htmlCanvas.addEventListener('DOMMouseScroll', handleMouseWheel, false);
    }
  },
  
  register: function(obj) {
    this.registeredObjects.push(obj);
  },
  
  handleEvent: function() {
    var args = Array.prototype.slice.call(arguments),
        type = args.shift();
    for(var i=0, regs=this.registeredObjects, l=regs.length; i<l; i++) {
      regs[i]['on' + type].apply(regs[i], args);
    }
  },
  
  makeEventObject: function(e, win) {
    var that = this,
        graph = this.viz.graph,
        fx = this.viz.fx,
        ntypes = fx.nodeTypes,
        etypes = fx.edgeTypes;
    return {
      pos: false,
      node: false,
      edge: false,
      contains: false,
      getNodeCalled: false,
      getEdgeCalled: false,
      getPos: function() {
        //TODO(nico): check why this can't be cache anymore when using edge detection
        //if(this.pos) return this.pos;
        var canvas = that.viz.canvas,
            s = canvas.getSize(),
            p = canvas.getPos(),
            ox = canvas.translateOffsetX,
            oy = canvas.translateOffsetY,
            sx = canvas.scaleOffsetX,
            sy = canvas.scaleOffsetY,
            pos = $.event.getPos(e, win);
        this.pos = {
	  x: (pos.x - p.x - ox) * 1/sx,
          y: (pos.y - p.y - oy) * 1/sy
        };
        return this.pos;
      },
      getNode: function() {
        if(this.getNodeCalled) return this.node;
        this.getNodeCalled = true;
        for(var id in graph.nodes) {
          var n = graph.nodes[id],
              geom = n && ntypes[n.getData('type')],
              contains = geom && geom.contains && geom.contains.call(fx, n, this.getPos());
          if(contains) {
            this.contains = contains;
            return that.node = this.node = n;
          }
        }
        return that.node = this.node = false;
      },
      getEdge: function() {
        if(this.getEdgeCalled) return this.edge;
        this.getEdgeCalled = true;
        var hashset = {};
        for(var id in graph.edges) {
          var edgeFrom = graph.edges[id];
          hashset[id] = true;
          for(var edgeId in edgeFrom) {
            if(edgeId in hashset) continue;
            var e = edgeFrom[edgeId],
                geom = e && etypes[e.getData('type')],
                contains = geom && geom.contains && geom.contains.call(fx, e, this.getPos());
            if(contains) {
              this.contains = contains;
              return that.edge = this.edge = e;
            }
          }
        }
        return that.edge = this.edge = false;
      },
      getContains: function() {
        if(this.getNodeCalled) return this.contains;
        this.getNode();
        return this.contains;
      }
    };
  }
});

/* 
 * Provides the initialization function for <NodeStyles> and <Tips> implemented 
 * by all main visualizations.
 *
 */
var Extras = {
  initializeExtras: function() {
    var mem = new MouseEventsManager(this), that = this;
    $.each(['NodeStyles', 'Tips', 'Navigation', 'Events'], function(k) {
      var obj = new Extras.Classes[k](k, that);
      if(obj.isEnabled()) {
        mem.register(obj);
      }
      if(obj.setAsProperty()) {
        that[k.toLowerCase()] = obj;
      }
    });
  }   
};

Extras.Classes = {};
/*
  Class: Events
   
  This class defines an Event API to be accessed by the user.
  The methods implemented are the ones defined in the <Options.Events> object.
*/

Extras.Classes.Events = new Class({
  Implements: [ExtrasInitializer, EventsInterface],
  
  initializePost: function() {
    this.fx = this.viz.fx;
    this.ntypes = this.viz.fx.nodeTypes;
    this.etypes = this.viz.fx.edgeTypes;
    
    this.hovered = false;
    this.pressed = false;
    this.touched = false;

    this.touchMoved = false;
    this.moved = false;
    
  },
  
  setAsProperty: $.lambda(true),
  
  onMouseUp: function(e, win, event, isRightClick) {
    var evt = $.event.get(e, win);
    if(!this.moved) {
      if(isRightClick) {
        this.config.onRightClick(this.hovered, event, evt);
      } else {
        this.config.onClick(this.pressed, event, evt);
      }
    }
    if(this.pressed) {
      if(this.moved) {
        this.config.onDragEnd(this.pressed, event, evt);
      } else {
        this.config.onDragCancel(this.pressed, event, evt);
      }
      this.pressed = this.moved = false;
    }
  },

  onMouseOut: function(e, win, event) {
   //mouseout a label
   var evt = $.event.get(e, win), label;
   if(this.dom && (label = this.isLabel(e, win, true))) {
     this.config.onMouseLeave(this.viz.graph.getNode(label.id),
                              event, evt);
     this.hovered = false;
     return;
   }
   //mouseout canvas
   var rt = evt.relatedTarget,
       canvasWidget = this.canvas.getElement();
   while(rt && rt.parentNode) {
     if(canvasWidget == rt.parentNode) return;
     rt = rt.parentNode;
   }
   if(this.hovered) {
     this.config.onMouseLeave(this.hovered,
         event, evt);
     this.hovered = false;
   }
  },
  
  onMouseOver: function(e, win, event) {
    //mouseover a label
    var evt = $.event.get(e, win), label;
    if(this.dom && (label = this.isLabel(e, win, true))) {
      this.hovered = this.viz.graph.getNode(label.id);
      this.config.onMouseEnter(this.hovered,
                               event, evt);
    }
  },
  
  onMouseMove: function(e, win, event) {
   var label, evt = $.event.get(e, win);
   if(this.pressed) {
     this.moved = true;
     this.config.onDragMove(this.pressed, event, evt);
     return;
   }
   if(this.dom) {
     this.config.onMouseMove(this.hovered,
         event, evt);
   } else {
     if(this.hovered) {
       var hn = this.hovered;
       var geom = hn.nodeFrom? this.etypes[hn.getData('type')] : this.ntypes[hn.getData('type')];
       var contains = geom && geom.contains 
         && geom.contains.call(this.fx, hn, event.getPos());
       if(contains) {
         this.config.onMouseMove(hn, event, evt);
         return;
       } else {
         this.config.onMouseLeave(hn, event, evt);
         this.hovered = false;
       }
     }
     if(this.hovered = (event.getNode() || (this.config.enableForEdges && event.getEdge()))) {
       this.config.onMouseEnter(this.hovered, event, evt);
     } else {
       this.config.onMouseMove(false, event, evt);
     }
   }
  },
  
  onMouseWheel: function(e, win, delta) {
    this.config.onMouseWheel(delta, $.event.get(e, win));
  },
  
  onMouseDown: function(e, win, event) {
    var evt = $.event.get(e, win), label;
    if(this.dom) {
      if(label = this.isLabel(e, win)) {
        this.pressed = this.viz.graph.getNode(label.id);
      }
    } else {
      this.pressed = event.getNode() || (this.config.enableForEdges && event.getEdge());
    }
    this.pressed && this.config.onDragStart(this.pressed, event, evt);
  },
  
  onTouchStart: function(e, win, event) {
    var evt = $.event.get(e, win), label;
    if(this.dom && (label = this.isLabel(e, win))) {
      this.touched = this.viz.graph.getNode(label.id);
    } else {
      this.touched = event.getNode() || (this.config.enableForEdges && event.getEdge());
    }
    this.touched && this.config.onTouchStart(this.touched, event, evt);
  },
  
  onTouchMove: function(e, win, event) {
    var evt = $.event.get(e, win);
    if(this.touched) {
      this.touchMoved = true;
      this.config.onTouchMove(this.touched, event, evt);
    }
  },
  
  onTouchEnd: function(e, win, event) {
    var evt = $.event.get(e, win);
    if(this.touched) {
      if(this.touchMoved) {
        this.config.onTouchEnd(this.touched, event, evt);
      } else {
        this.config.onTouchCancel(this.touched, event, evt);
      }
      this.touched = this.touchMoved = false;
    }
  }
});

/*
   Class: Tips
    
   A class containing tip related functions. This class is used internally.
   
   Used by:
   
   <ST>, <Sunburst>, <Hypertree>, <RGraph>, <TM>, <ForceDirected>, <Icicle>
   
   See also:
   
   <Options.Tips>
*/

Extras.Classes.Tips = new Class({
  Implements: [ExtrasInitializer, EventsInterface],
  
  initializePost: function() {
    //add DOM tooltip
    if(document.body) {
      var tip = $('_tooltip') || document.createElement('div');
      tip.id = '_tooltip';
      tip.className = 'tip';
      $.extend(tip.style, {
        position: 'absolute',
        display: 'none',
        zIndex: 13000
      });
      document.body.appendChild(tip);
      this.tip = tip;
      this.node = false;
    }
  },
  
  setAsProperty: $.lambda(true),
  
  onMouseOut: function(e, win) {
    //mouseout a label
    var evt = $.event.get(e, win);
    if(this.dom && this.isLabel(e, win, true)) {
      this.hide(true);
      return;
    }
    //mouseout canvas
    var rt = e.relatedTarget,
        canvasWidget = this.canvas.getElement();
    while(rt && rt.parentNode) {
      if(canvasWidget == rt.parentNode) return;
      rt = rt.parentNode;
    }
    this.hide(false);
  },
  
  onMouseOver: function(e, win) {
    //mouseover a label
    var label;
    if(this.dom && (label = this.isLabel(e, win, false))) {
      this.node = this.viz.graph.getNode(label.id);
      this.config.onShow(this.tip, this.node, label);
    }
  },
  
  onMouseMove: function(e, win, opt) {
    if(this.dom && this.isLabel(e, win)) {
      this.setTooltipPosition($.event.getPos(e, win));
    }
    if(!this.dom) {
      var node = opt.getNode();
      if(!node) {
        this.hide(true);
        return;
      }
      if(this.config.force || !this.node || this.node.id != node.id) {
        this.node = node;
        this.config.onShow(this.tip, node, opt.getContains());
      }
      this.setTooltipPosition($.event.getPos(e, win));
    }
  },
  
  setTooltipPosition: function(pos) {
    var tip = this.tip, 
        style = tip.style, 
        cont = this.config;
    style.display = '';
    //get viewport dimensions
    var elem = document.compatMode === "CSS1Compat" && document.documentElement ||
               document.body ||
               document.documentElement;
    var view = {
      'width': elem.clientWidth,
      'height': elem.clientHeight,
      'x': window.pageXOffset ||
           document.documentElement && document.documentElement.scrollLeft ||
           document.body && document.body.scrollLeft ||
           0,
      'y': window.pageYOffset ||
           document.documentElement && document.documentElement.scrollTop ||
           document.body && document.body.scrollTop ||
           0
    };
    //get tooltip dimensions
    var obj = {
      'width': tip.offsetWidth,
      'height': tip.offsetHeight  
    };
    //set tooltip position
    var x = cont.offsetX, y = cont.offsetY;
    style.top = ((pos.y + obj.height + y > view.height + view.y)?
        (pos.y - obj.height - y) : pos.y + y) + 'px';
    style.left = ((pos.x + obj.width + x > view.width + view.x)?
        (pos.x - obj.width - x) : pos.x + x) + 'px';
  },
  
  hide: function(triggerCallback) {
    this.tip.style.display = 'none';
    triggerCallback && this.config.onHide();
  }
});

/*
  Class: NodeStyles
   
  Change node styles when clicking or hovering a node. This class is used internally.
  
  Used by:
  
  <ST>, <Sunburst>, <Hypertree>, <RGraph>, <TM>, <ForceDirected>, <Icicle>
  
  See also:
  
  <Options.NodeStyles>
*/
Extras.Classes.NodeStyles = new Class({
  Implements: [ExtrasInitializer, EventsInterface],
  
  initializePost: function() {
    this.fx = this.viz.fx;
    this.types = this.viz.fx.nodeTypes;
    this.nStyles = this.config;
    this.nodeStylesOnHover = this.nStyles.stylesHover;
    this.nodeStylesOnClick = this.nStyles.stylesClick;
    this.hoveredNode = false;
    this.fx.nodeFxAnimation = new Animation();
    
    this.down = false;
    this.move = false;
  },
  
  onMouseOut: function(e, win) {
    this.down = this.move = false;
    if(!this.hoveredNode) return;
    //mouseout a label
    if(this.dom && this.isLabel(e, win, true)) {
      this.toggleStylesOnHover(this.hoveredNode, false);
    }
    //mouseout canvas
    var rt = e.relatedTarget,
        canvasWidget = this.canvas.getElement();
    while(rt && rt.parentNode) {
      if(canvasWidget == rt.parentNode) return;
      rt = rt.parentNode;
    }
    this.toggleStylesOnHover(this.hoveredNode, false);
    this.hoveredNode = false;
  },
  
  onMouseOver: function(e, win) {
    //mouseover a label
    var label;
    if(this.dom && (label = this.isLabel(e, win, true))) {
      var node = this.viz.graph.getNode(label.id);
      if(node.selected) return;
      this.hoveredNode = node;
      this.toggleStylesOnHover(this.hoveredNode, true);
    }
  },
  
  onMouseDown: function(e, win, event, isRightClick) {
    if(isRightClick) return;
    var label;
    if(this.dom && (label = this.isLabel(e, win))) {
      this.down = this.viz.graph.getNode(label.id);
    } else if(!this.dom) {
      this.down = event.getNode();
    }
    this.move = false;
  },
  
  onMouseUp: function(e, win, event, isRightClick) {
    if(isRightClick) return;
    if(!this.move) {
      this.onClick(event.getNode());
    }
    this.down = this.move = false;
  },
  
  getRestoredStyles: function(node, type) {
    var restoredStyles = {}, 
        nStyles = this['nodeStylesOn' + type];
    for(var prop in nStyles) {
      restoredStyles[prop] = node.styles['$' + prop];
    }
    return restoredStyles;
  },
  
  toggleStylesOnHover: function(node, set) {
    if(this.nodeStylesOnHover) {
      this.toggleStylesOn('Hover', node, set);
    }
  },

  toggleStylesOnClick: function(node, set) {
    if(this.nodeStylesOnClick) {
      this.toggleStylesOn('Click', node, set);
    }
  },
  
  toggleStylesOn: function(type, node, set) {
    var viz = this.viz;
    var nStyles = this.nStyles;
    if(set) {
      var that = this;
      if(!node.styles) {
        node.styles = $.merge(node.data, {});
      }
      for(var s in this['nodeStylesOn' + type]) {
        var $s = '$' + s;
        if(!($s in node.styles)) {
            node.styles[$s] = node.getData(s); 
        }
      }
      viz.fx.nodeFx($.extend({
        'elements': {
          'id': node.id,
          'properties': that['nodeStylesOn' + type]
         },
         transition: Trans.Quart.easeOut,
         duration:300,
         fps:40
      }, this.config));
    } else {
      var restoredStyles = this.getRestoredStyles(node, type);
      viz.fx.nodeFx($.extend({
        'elements': {
          'id': node.id,
          'properties': restoredStyles
         },
         transition: Trans.Quart.easeOut,
         duration:300,
         fps:40
      }, this.config));
    }
  },

  onClick: function(node) {
    if(!node) return;
    var nStyles = this.nodeStylesOnClick;
    if(!nStyles) return;
    //if the node is selected then unselect it
    if(node.selected) {
      this.toggleStylesOnClick(node, false);
      delete node.selected;
    } else {
      //unselect all selected nodes...
      this.viz.graph.eachNode(function(n) {
        if(n.selected) {
          for(var s in nStyles) {
            n.setData(s, n.styles['$' + s], 'end');
          }
          delete n.selected;
        }
      });
      //select clicked node
      this.toggleStylesOnClick(node, true);
      node.selected = true;
      delete node.hovered;
      this.hoveredNode = false;
    }
  },
  
  onMouseMove: function(e, win, event) {
    //if mouse button is down and moving set move=true
    if(this.down) this.move = true;
    //already handled by mouseover/out
    if(this.dom && this.isLabel(e, win)) return;
    var nStyles = this.nodeStylesOnHover;
    if(!nStyles) return;
    
    if(!this.dom) {
      if(this.hoveredNode) {
        var geom = this.types[this.hoveredNode.getData('type')];
        var contains = geom && geom.contains && geom.contains.call(this.fx, 
            this.hoveredNode, event.getPos());
        if(contains) return;
      }
      var node = event.getNode();
      //if no node is being hovered then just exit
      if(!this.hoveredNode && !node) return;
      //if the node is hovered then exit
      if(node.hovered) return;
      //select hovered node
      if(node && !node.selected) {
        //check if an animation is running and exit it
        this.fx.nodeFxAnimation.stopTimer();
        //unselect all hovered nodes...
        this.viz.graph.eachNode(function(n) {
          if(n.hovered && !n.selected) {
            for(var s in nStyles) {
              n.setData(s, n.styles['$' + s], 'end');
            }
            delete n.hovered;
          }
        });
        //select hovered node
        node.hovered = true;
        this.hoveredNode = node;
        this.toggleStylesOnHover(node, true);
      } else if(this.hoveredNode && !this.hoveredNode.selected) {
        //check if an animation is running and exit it
        this.fx.nodeFxAnimation.stopTimer();
        //unselect hovered node
        this.toggleStylesOnHover(this.hoveredNode, false);
        delete this.hoveredNode.hovered;
        this.hoveredNode = false;
      }
    }
  }
});

Extras.Classes.Navigation = new Class({
  Implements: [ExtrasInitializer, EventsInterface],
  
  initializePost: function() {
    this.pos = false;
    this.pressed = false;
  },
  
  onMouseWheel: function(e, win, scroll) {
    if(!this.config.zooming) return;
    $.event.stop($.event.get(e, win));
    var val = this.config.zooming / 1000,
        ans = 1 + scroll * val;
    this.canvas.scale(ans, ans);
  },
  
  onMouseDown: function(e, win, eventInfo) {
    if(!this.config.panning) return;
    if(this.config.panning == 'avoid nodes' && (this.dom? this.isLabel(e, win) : eventInfo.getNode())) return;
    this.pressed = true;
    this.pos = eventInfo.getPos();
    var canvas = this.canvas,
        ox = canvas.translateOffsetX,
        oy = canvas.translateOffsetY,
        sx = canvas.scaleOffsetX,
        sy = canvas.scaleOffsetY;
    this.pos.x *= sx;
    this.pos.x += ox;
    this.pos.y *= sy;
    this.pos.y += oy;
  },
  
  onMouseMove: function(e, win, eventInfo) {
    if(!this.config.panning) return;
    if(!this.pressed) return;
    if(this.config.panning == 'avoid nodes' && (this.dom? this.isLabel(e, win) : eventInfo.getNode())) return;
    var thispos = this.pos, 
        currentPos = eventInfo.getPos(),
        canvas = this.canvas,
        ox = canvas.translateOffsetX,
        oy = canvas.translateOffsetY,
        sx = canvas.scaleOffsetX,
        sy = canvas.scaleOffsetY;
    currentPos.x *= sx;
    currentPos.y *= sy;
    currentPos.x += ox;
    currentPos.y += oy;
    var x = currentPos.x - thispos.x,
        y = currentPos.y - thispos.y;
    this.pos = currentPos;
    this.canvas.translate(x * 1/sx, y * 1/sy);
  },
  
  onMouseUp: function(e, win, eventInfo, isRightClick) {
    if(!this.config.panning) return;
    this.pressed = false;
  }
});


/*
 * File: Canvas.js
 *
 */

/*
 Class: Canvas
 
 	A canvas widget used by all visualizations. The canvas object can be accessed by doing *viz.canvas*. If you want to 
 	know more about <Canvas> options take a look at <Options.Canvas>.
 
 A canvas widget is a set of DOM elements that wrap the native canvas DOM Element providing a consistent API and behavior 
 across all browsers. It can also include Elements to add DOM (SVG or HTML) label support to all visualizations.
 
 Example:
 
 Suppose we have this HTML
 
 (start code xml)
 	<div id="infovis"></div>
 (end code)
 
 Now we create a new Visualization
 
 (start code js)
 	var viz = new $jit.Viz({
 		//Where to inject the canvas. Any div container will do.
 		'injectInto':'infovis',
		 //width and height for canvas. 
		 //Default's to the container offsetWidth and Height.
		 'width': 900,
		 'height':500
	 });
 (end code)

 The generated HTML will look like this
 
 (start code xml)
 <div id="infovis">
 	<div id="infovis-canvaswidget" style="position:relative;">
 	<canvas id="infovis-canvas" width=900 height=500
 	style="position:absolute; top:0; left:0; width:900px; height:500px;" />
 	<div id="infovis-label"
 	style="overflow:visible; position:absolute; top:0; left:0; width:900px; height:0px">
 	</div>
 	</div>
 </div>
 (end code)
 
 As you can see, the generated HTML consists of a canvas DOM Element of id *infovis-canvas* and a div label container
 of id *infovis-label*, wrapped in a main div container of id *infovis-canvaswidget*.
 */

var Canvas;
(function() {
  //check for native canvas support
  var canvasType = typeof HTMLCanvasElement,
      supportsCanvas = (canvasType == 'object' || canvasType == 'function');
  //create element function
  function $E(tag, props) {
    var elem = document.createElement(tag);
    for(var p in props) {
      if(typeof props[p] == "object") {
        $.extend(elem[p], props[p]);
      } else {
        elem[p] = props[p];
      }
    }
    if (tag == "canvas" && !supportsCanvas && G_vmlCanvasManager) {
      elem = G_vmlCanvasManager.initElement(document.body.appendChild(elem));
    }
    return elem;
  }
  //canvas widget which we will call just Canvas
  $jit.Canvas = Canvas = new Class({
    canvases: [],
    pos: false,
    element: false,
    labelContainer: false,
    translateOffsetX: 0,
    translateOffsetY: 0,
    scaleOffsetX: 1,
    scaleOffsetY: 1,
    
    initialize: function(viz, opt) {
      this.viz = viz;
      this.opt = this.config = opt;
      var id = $.type(opt.injectInto) == 'string'? 
          opt.injectInto:opt.injectInto.id,
          type = opt.type,
          idLabel = id + "-label", 
          wrapper = $(id),
          width = opt.width || wrapper.offsetWidth,
          height = opt.height || wrapper.offsetHeight;
      this.id = id;
      //canvas options
      var canvasOptions = {
        injectInto: id,
        width: width,
        height: height
      };
      //create main wrapper
      this.element = $E('div', {
        'id': id + '-canvaswidget',
        'style': {
          'position': 'relative',
          'width': width + 'px',
          'height': height + 'px'
        }
      });
      //create label container
      this.labelContainer = this.createLabelContainer(opt.Label.type, 
          idLabel, canvasOptions);
      //create primary canvas
      this.canvases.push(new Canvas.Base[type]({
        config: $.extend({idSuffix: '-canvas'}, canvasOptions),
        plot: function(base) {
          viz.fx.plot();
        },
        resize: function() {
          viz.refresh();
        }
      }));
      //create secondary canvas
      var back = opt.background;
      if(back) {
        var backCanvas = new Canvas.Background[back.type](viz, $.extend(back, canvasOptions));
        this.canvases.push(new Canvas.Base[type](backCanvas));
      }
      //insert canvases
      var len = this.canvases.length;
      while(len--) {
        this.element.appendChild(this.canvases[len].canvas);
        if(len > 0) {
          this.canvases[len].plot();
        }
      }
      this.element.appendChild(this.labelContainer);
      wrapper.appendChild(this.element);
      //Update canvas position when the page is scrolled.
      var timer = null, that = this;
      $.addEvent(window, 'scroll', function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
          that.getPos(true); //update canvas position
        }, 500);
      });
    },
    /*
      Method: getCtx
      
      Returns the main canvas context object
      
      Example:
      
      (start code js)
       var ctx = canvas.getCtx();
       //Now I can use the native canvas context
       //and for example change some canvas styles
       ctx.globalAlpha = 1;
      (end code)
    */
    getCtx: function(i) {
      return this.canvases[i || 0].getCtx();
    },
    /*
      Method: getConfig
      
      Returns the current Configuration for this Canvas Widget.
      
      Example:
      
      (start code js)
       var config = canvas.getConfig();
      (end code)
    */
    getConfig: function() {
      return this.opt;
    },
    /*
      Method: getElement

      Returns the main Canvas DOM wrapper
      
      Example:
      
      (start code js)
       var wrapper = canvas.getElement();
       //Returns <div id="infovis-canvaswidget" ... >...</div> as element
      (end code)
    */
    getElement: function() {
      return this.element;
    },
    /*
      Method: getSize
      
      Returns canvas dimensions.
      
      Returns:
      
      An object with *width* and *height* properties.
      
      Example:
      (start code js)
      canvas.getSize(); //returns { width: 900, height: 500 }
      (end code)
    */
    getSize: function(i) {
      return this.canvases[i || 0].getSize();
    },
    /*
      Method: resize
      
      Resizes the canvas.
      
      Parameters:
      
      width - New canvas width.
      height - New canvas height.
      
      Example:
      
      (start code js)
       canvas.resize(width, height);
      (end code)
    
    */
    resize: function(width, height) {
      this.getPos(true);
      this.translateOffsetX = this.translateOffsetY = 0;
      this.scaleOffsetX = this.scaleOffsetY = 1;
      for(var i=0, l=this.canvases.length; i<l; i++) {
        this.canvases[i].resize(width, height);
      }
      var style = this.element.style;
      style.width = width + 'px';
      style.height = height + 'px';
      if(this.labelContainer)
        this.labelContainer.style.width = width + 'px';
    },
    /*
      Method: translate
      
      Applies a translation to the canvas.
      
      Parameters:
      
      x - (number) x offset.
      y - (number) y offset.
      disablePlot - (boolean) Default's *false*. Set this to *true* if you don't want to refresh the visualization.
      
      Example:
      
      (start code js)
       canvas.translate(30, 30);
      (end code)
    
    */
    translate: function(x, y, disablePlot) {
      this.translateOffsetX += x*this.scaleOffsetX;
      this.translateOffsetY += y*this.scaleOffsetY;
      for(var i=0, l=this.canvases.length; i<l; i++) {
        this.canvases[i].translate(x, y, disablePlot);
      }
    },
    /*
      Method: scale
      
      Scales the canvas.
      
      Parameters:
      
      x - (number) scale value.
      y - (number) scale value.
      disablePlot - (boolean) Default's *false*. Set this to *true* if you don't want to refresh the visualization.
      
      Example:
      
      (start code js)
       canvas.scale(0.5, 0.5);
      (end code)
    
    */
    scale: function(x, y, disablePlot) {
      var px = this.scaleOffsetX * x,
          py = this.scaleOffsetY * y;
      var dx = this.translateOffsetX * (x -1) / px,
          dy = this.translateOffsetY * (y -1) / py;
      this.scaleOffsetX = px;
      this.scaleOffsetY = py;
      for(var i=0, l=this.canvases.length; i<l; i++) {
        this.canvases[i].scale(x, y, true);
      }
      this.translate(dx, dy, false);
    },
    /*
      Method: getZoom

      Returns canvas zooming factors. *1* means initial zoom.

      Returns:

      An object with *x* and *y* properties.
    */
    getZoom: function() {
      return new Complex(this.scaleOffsetX, this.scaleOffsetY);
    },
    /*
      Method: setZoom

      Sets the zoom to given factors. *1* means initial zoom.

      Parameters:

      x - (number) zooming factor
      y - (number) zooming factor
      disablePlot - (boolean) Default's *false*. Set this to *true* if you don't want to refresh the visualization.

      Example:
      (start code js)
      canvas.setZoom(2, 2); //sets 2x zoom
      (end code)
    */
    setZoom: function(x, y, disablePlot) {
      var cur = this.getZoom(),
          px = x / cur.x,
          py = y / cur.y;
      this.scale(px, py, disablePlot);
    },
    /*
      Method: getPos
      
      Returns the canvas position as an *x, y* object.
      
      Parameters:
      
      force - (boolean) Default's *false*. Set this to *true* if you want to recalculate the position without using any cache information.
      
      Returns:
      
      An object with *x* and *y* properties.
      
      Example:
      (start code js)
      canvas.getPos(true); //returns { x: 900, y: 500 }
      (end code)
    */
    getPos: function(force){
      if(force || !this.pos) {
        return this.pos = $.getPos(this.getElement());
      }
      return this.pos;
    },
    /*
       Method: clear
       
       Clears the canvas.
    */
    clear: function(i){
      this.canvases[i||0].clear();
    },
    
    path: function(type, action){
      var ctx = this.canvases[0].getCtx();
      ctx.beginPath();
      action(ctx);
      ctx[type]();
      ctx.closePath();
    },
    
    createLabelContainer: function(type, idLabel, dim) {
      var NS = 'http://www.w3.org/2000/svg';
      if(type == 'HTML' || type == 'Native') {
        return $E('div', {
          'id': idLabel,
          'style': {
            'overflow': 'visible',
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'width': dim.width + 'px',
            'height': 0
          }
        });
      } else if(type == 'SVG') {
        var svgContainer = document.createElementNS(NS, 'svg:svg');
        svgContainer.setAttribute("width", dim.width);
        svgContainer.setAttribute('height', dim.height);
        var style = svgContainer.style;
        style.position = 'absolute';
        style.left = style.top = '0px';
        var labelContainer = document.createElementNS(NS, 'svg:g');
        labelContainer.setAttribute('width', dim.width);
        labelContainer.setAttribute('height', dim.height);
        labelContainer.setAttribute('x', 0);
        labelContainer.setAttribute('y', 0);
        labelContainer.setAttribute('id', idLabel);
        svgContainer.appendChild(labelContainer);
        return svgContainer;
      }
    }
  });
  //base canvas wrapper
  Canvas.Base = {};
  Canvas.Base['2D'] = new Class({
    translateOffsetX: 0,
    translateOffsetY: 0,
    scaleOffsetX: 1,
    scaleOffsetY: 1,

    initialize: function(viz) {
      this.viz = viz;
      this.opt = viz.config;
      this.size = false;
      this.createCanvas();
      this.translateToCenter();
    },
    createCanvas: function() {
      var opt = this.opt,
          width = opt.width,
          height = opt.height;
      this.canvas = $E('canvas', {
        'id': opt.injectInto + opt.idSuffix,
        'width': width,
        'height': height,
        'style': {
          'position': 'absolute',
          'top': 0,
          'left': 0,
          'width': width + 'px',
          'height': height + 'px'
        }
      });
    },
    getCtx: function() {
      if(!this.ctx) 
        return this.ctx = this.canvas.getContext('2d');
      return this.ctx;
    },
    getSize: function() {
      if(this.size) return this.size;
      var canvas = this.canvas;
      return this.size = {
        width: canvas.width,
        height: canvas.height
      };
    },
    translateToCenter: function(ps) {
      var size = this.getSize(),
          width = ps? (size.width - ps.width - this.translateOffsetX*2) : size.width;
          height = ps? (size.height - ps.height - this.translateOffsetY*2) : size.height;
      var ctx = this.getCtx();
      ps && ctx.scale(1/this.scaleOffsetX, 1/this.scaleOffsetY);
//      ctx.translate(width/2, height/2);
    },
    resize: function(width, height) {
      var size = this.getSize(),
          canvas = this.canvas,
          styles = canvas.style;
      this.size = false;
      canvas.width = width;
      canvas.height = height;
      styles.width = width + "px";
      styles.height = height + "px";
      //small ExCanvas fix
      if(!supportsCanvas) {
        this.translateToCenter(size);
      } else {
        this.translateToCenter();
      }
      this.translateOffsetX =
        this.translateOffsetY = 0;
      this.scaleOffsetX = 
        this.scaleOffsetY = 1;
      this.clear();
      this.viz.resize(width, height, this);
    },
    translate: function(x, y, disablePlot) {
      var sx = this.scaleOffsetX,
          sy = this.scaleOffsetY;
      this.translateOffsetX += x*sx;
      this.translateOffsetY += y*sy;
      this.getCtx().translate(x, y);
      !disablePlot && this.plot();
    },
    scale: function(x, y, disablePlot) {
      this.scaleOffsetX *= x;
      this.scaleOffsetY *= y;
      this.getCtx().scale(x, y);
      !disablePlot && this.plot();
    },
    clear: function(){
      var size = this.getSize(),
          ox = this.translateOffsetX,
          oy = this.translateOffsetY,
          sx = this.scaleOffsetX,
          sy = this.scaleOffsetY;
      /*this.getCtx().clearRect((-size.width / 2 - ox) * 1/sx, 
                              (-size.height / 2 - oy) * 1/sy, 
                              size.width * 1/sx, size.height * 1/sy);
      */var x = (0 - ox) * 1/sx,
         y = (0 - oy) * 1/sy;
      this.getCtx().clearRect(x, y, 
                              size.width * 1/sx + Math.abs(x), size.height * 1/sy + Math.abs(y));
    },
    plot: function() {
      this.clear();
      this.viz.plot(this);
    }
  });
  //background canvases
  //TODO(nico): document this!
  Canvas.Background = {};
  Canvas.Background.Circles = new Class({
    initialize: function(viz, options) {
      this.viz = viz;
      this.config = $.merge({
        idSuffix: '-bkcanvas',
        levelDistance: 100,
        numberOfCircles: 6,
        CanvasStyles: {},
        offset: 0
      }, options);
    },
    resize: function(width, height, base) {
      this.plot(base);
    },
    plot: function(base) {
      var canvas = base.canvas,
          ctx = base.getCtx(),
          conf = this.config,
          styles = conf.CanvasStyles;
      //set canvas styles
      for(var s in styles) ctx[s] = styles[s];
      var n = conf.numberOfCircles,
          rho = conf.levelDistance;
      for(var i=1; i<=n; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, rho * i, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.closePath();
      }
      //TODO(nico): print labels too!
    }
  });
})();


/*
 * File: Polar.js
 * 
 * Defines the <Polar> class.
 *
 * Description:
 *
 * The <Polar> class, just like the <Complex> class, is used by the <Hypertree>, <ST> and <RGraph> as a 2D point representation.
 *
 * See also:
 *
 * <http://en.wikipedia.org/wiki/Polar_coordinates>
 *
*/

/*
   Class: Polar

   A multi purpose polar representation.

   Description:
 
   The <Polar> class, just like the <Complex> class, is used by the <Hypertree>, <ST> and <RGraph> as a 2D point representation.
 
   See also:
 
   <http://en.wikipedia.org/wiki/Polar_coordinates>
 
   Parameters:

      theta - An angle.
      rho - The norm.
*/

var Polar = function(theta, rho) {
  this.theta = theta || 0;
  this.rho = rho || 0;
};

$jit.Polar = Polar;

Polar.prototype = {
    /*
       Method: getc
    
       Returns a complex number.
    
       Parameters:

       simple - _optional_ If *true*, this method will return only an object holding x and y properties and not a <Complex> instance. Default's *false*.

      Returns:
    
          A complex number.
    */
    getc: function(simple) {
        return this.toComplex(simple);
    },

    /*
       Method: getp
    
       Returns a <Polar> representation.
    
       Returns:
    
          A variable in polar coordinates.
    */
    getp: function() {
        return this;
    },


    /*
       Method: set
    
       Sets a number.

       Parameters:

       v - A <Complex> or <Polar> instance.
    
    */
    set: function(v) {
        v = v.getp();
        this.theta = v.theta; this.rho = v.rho;
    },

    /*
       Method: setc
    
       Sets a <Complex> number.

       Parameters:

       x - A <Complex> number real part.
       y - A <Complex> number imaginary part.
    
    */
    setc: function(x, y) {
        this.rho = Math.sqrt(x * x + y * y);
        this.theta = Math.atan2(y, x);
        if(this.theta < 0) this.theta += Math.PI * 2;
    },

    /*
       Method: setp
    
       Sets a polar number.

       Parameters:

       theta - A <Polar> number angle property.
       rho - A <Polar> number rho property.
    
    */
    setp: function(theta, rho) {
        this.theta = theta; 
        this.rho = rho;
    },

    /*
       Method: clone
    
       Returns a copy of the current object.
    
       Returns:
    
          A copy of the real object.
    */
    clone: function() {
        return new Polar(this.theta, this.rho);
    },

    /*
       Method: toComplex
    
        Translates from polar to cartesian coordinates and returns a new <Complex> instance.
    
        Parameters:

        simple - _optional_ If *true* this method will only return an object with x and y properties (and not the whole <Complex> instance). Default's *false*.
 
        Returns:
    
          A new <Complex> instance.
    */
    toComplex: function(simple) {
        var x = Math.cos(this.theta) * this.rho;
        var y = Math.sin(this.theta) * this.rho;
        if(simple) return { 'x': x, 'y': y};
        return new Complex(x, y);
    },

    /*
       Method: add
    
        Adds two <Polar> instances.
    
       Parameters:

       polar - A <Polar> number.

       Returns:
    
          A new Polar instance.
    */
    add: function(polar) {
        return new Polar(this.theta + polar.theta, this.rho + polar.rho);
    },
    
    /*
       Method: scale
    
        Scales a polar norm.
    
        Parameters:

        number - A scale factor.
        
        Returns:
    
          A new Polar instance.
    */
    scale: function(number) {
        return new Polar(this.theta, this.rho * number);
    },
    
    /*
       Method: equals
    
       Comparison method.

       Returns *true* if the theta and rho properties are equal.

       Parameters:

       c - A <Polar> number.

       Returns:

       *true* if the theta and rho parameters for these objects are equal. *false* otherwise.
    */
    equals: function(c) {
        return this.theta == c.theta && this.rho == c.rho;
    },
    
    /*
       Method: $add
    
        Adds two <Polar> instances affecting the current object.
    
       Paramters:

       polar - A <Polar> instance.

       Returns:
    
          The changed object.
    */
    $add: function(polar) {
        this.theta = this.theta + polar.theta; this.rho += polar.rho;
        return this;
    },

    /*
       Method: $madd
    
        Adds two <Polar> instances affecting the current object. The resulting theta angle is modulo 2pi.
    
       Parameters:

       polar - A <Polar> instance.

       Returns:
    
          The changed object.
    */
    $madd: function(polar) {
        this.theta = (this.theta + polar.theta) % (Math.PI * 2); this.rho += polar.rho;
        return this;
    },

    
    /*
       Method: $scale
    
        Scales a polar instance affecting the object.
    
      Parameters:

      number - A scaling factor.

      Returns:
    
          The changed object.
    */
    $scale: function(number) {
        this.rho *= number;
        return this;
    },
    
    /*
      Method: isZero
   
      Returns *true* if the number is zero.
   
   */
    isZero: function () {
      var almostZero = 0.0001, abs = Math.abs;
      return abs(this.theta) < almostZero && abs(this.rho) < almostZero;
    },

    /*
       Method: interpolate
    
        Calculates a polar interpolation between two points at a given delta moment.

        Parameters:
      
        elem - A <Polar> instance.
        delta - A delta factor ranging [0, 1].
    
       Returns:
    
          A new <Polar> instance representing an interpolation between _this_ and _elem_
    */
    interpolate: function(elem, delta) {
        var pi = Math.PI, pi2 = pi * 2;
        var ch = function(t) {
            var a =  (t < 0)? (t % pi2) + pi2 : t % pi2;
            return a;
        };
        var tt = this.theta, et = elem.theta;
        var sum, diff = Math.abs(tt - et);
        if(diff == pi) {
          if(tt > et) {
            sum = ch((et + ((tt - pi2) - et) * delta)) ;
          } else {
            sum = ch((et - pi2 + (tt - (et)) * delta));
          }
        } else if(diff >= pi) {
          if(tt > et) {
            sum = ch((et + ((tt - pi2) - et) * delta)) ;
          } else {
            sum = ch((et - pi2 + (tt - (et - pi2)) * delta));
          }
        } else {  
          sum = ch((et + (tt - et) * delta)) ;
        }
        var r = (this.rho - elem.rho) * delta + elem.rho;
        return {
          'theta': sum,
          'rho': r
        };
    }
};


var $P = function(a, b) { return new Polar(a, b); };

Polar.KER = $P(0, 0);



/*
 * File: Complex.js
 * 
 * Defines the <Complex> class.
 *
 * Description:
 *
 * The <Complex> class, just like the <Polar> class, is used by the <Hypertree>, <ST> and <RGraph> as a 2D point representation.
 *
 * See also:
 *
 * <http://en.wikipedia.org/wiki/Complex_number>
 *
*/

/*
   Class: Complex
    
   A multi-purpose Complex Class with common methods.
 
   Description:
 
   The <Complex> class, just like the <Polar> class, is used by the <Hypertree>, <ST> and <RGraph> as a 2D point representation.
 
   See also:
 
   <http://en.wikipedia.org/wiki/Complex_number>

   Parameters:

   x - _optional_ A Complex number real part.
   y - _optional_ A Complex number imaginary part.
 
*/

var Complex = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
};

$jit.Complex = Complex;

Complex.prototype = {
    /*
       Method: getc
    
       Returns a complex number.
    
       Returns:
    
          A complex number.
    */
    getc: function() {
        return this;
    },

    /*
       Method: getp
    
       Returns a <Polar> representation of this number.
    
       Parameters:

       simple - _optional_ If *true*, this method will return only an object holding theta and rho properties and not a <Polar> instance. Default's *false*.

       Returns:
    
          A variable in <Polar> coordinates.
    */
    getp: function(simple) {
        return this.toPolar(simple);
    },


    /*
       Method: set
    
       Sets a number.

       Parameters:

       c - A <Complex> or <Polar> instance.
    
    */
    set: function(c) {
      c = c.getc(true);
      this.x = c.x; 
      this.y = c.y;
    },

    /*
       Method: setc
    
       Sets a complex number.

       Parameters:

       x - A <Complex> number Real part.
       y - A <Complex> number Imaginary part.
    
    */
    setc: function(x, y) {
        this.x = x; 
        this.y = y;
    },

    /*
       Method: setp
    
       Sets a polar number.

       Parameters:

       theta - A <Polar> number theta property.
       rho - A <Polar> number rho property.
    
    */
    setp: function(theta, rho) {
        this.x = Math.cos(theta) * rho;
        this.y = Math.sin(theta) * rho;
    },

    /*
       Method: clone
    
       Returns a copy of the current object.
    
       Returns:
    
          A copy of the real object.
    */
    clone: function() {
        return new Complex(this.x, this.y);
    },

    /*
       Method: toPolar
    
       Transforms cartesian to polar coordinates.
    
       Parameters:

       simple - _optional_ If *true* this method will only return an object with theta and rho properties (and not the whole <Polar> instance). Default's *false*.
       
       Returns:
    
          A new <Polar> instance.
    */
    
    toPolar: function(simple) {
        var rho = this.norm();
        var atan = Math.atan2(this.y, this.x);
        if(atan < 0) atan += Math.PI * 2;
        if(simple) return { 'theta': atan, 'rho': rho };
        return new Polar(atan, rho);
    },
    /*
       Method: norm
    
       Calculates a <Complex> number norm.
    
       Returns:
    
          A real number representing the complex norm.
    */
    norm: function () {
        return Math.sqrt(this.squaredNorm());
    },
    
    /*
       Method: squaredNorm
    
       Calculates a <Complex> number squared norm.
    
       Returns:
    
          A real number representing the complex squared norm.
    */
    squaredNorm: function () {
        return this.x*this.x + this.y*this.y;
    },

    /*
       Method: add
    
       Returns the result of adding two complex numbers.
       
       Does not alter the original object.

       Parameters:
    
          pos - A <Complex> instance.
    
       Returns:
    
         The result of adding two complex numbers.
    */
    add: function(pos) {
        return new Complex(this.x + pos.x, this.y + pos.y);
    },

    /*
       Method: prod
    
       Returns the result of multiplying two <Complex> numbers.
       
       Does not alter the original object.

       Parameters:
    
          pos - A <Complex> instance.
    
       Returns:
    
         The result of multiplying two complex numbers.
    */
    prod: function(pos) {
        return new Complex(this.x*pos.x - this.y*pos.y, this.y*pos.x + this.x*pos.y);
    },

    /*
       Method: conjugate
    
       Returns the conjugate of this <Complex> number.

       Does not alter the original object.

       Returns:
    
         The conjugate of this <Complex> number.
    */
    conjugate: function() {
        return new Complex(this.x, -this.y);
    },


    /*
       Method: scale
    
       Returns the result of scaling a <Complex> instance.
       
       Does not alter the original object.

       Parameters:
    
          factor - A scale factor.
    
       Returns:
    
         The result of scaling this complex to a factor.
    */
    scale: function(factor) {
        return new Complex(this.x * factor, this.y * factor);
    },

    /*
       Method: equals
    
       Comparison method.

       Returns *true* if both real and imaginary parts are equal.

       Parameters:

       c - A <Complex> instance.

       Returns:

       A boolean instance indicating if both <Complex> numbers are equal.
    */
    equals: function(c) {
        return this.x == c.x && this.y == c.y;
    },

    /*
       Method: $add
    
       Returns the result of adding two <Complex> numbers.
       
       Alters the original object.

       Parameters:
    
          pos - A <Complex> instance.
    
       Returns:
    
         The result of adding two complex numbers.
    */
    $add: function(pos) {
        this.x += pos.x; this.y += pos.y;
        return this;    
    },
    
    /*
       Method: $prod
    
       Returns the result of multiplying two <Complex> numbers.
       
       Alters the original object.

       Parameters:
    
          pos - A <Complex> instance.
    
       Returns:
    
         The result of multiplying two complex numbers.
    */
    $prod:function(pos) {
        var x = this.x, y = this.y;
        this.x = x*pos.x - y*pos.y;
        this.y = y*pos.x + x*pos.y;
        return this;
    },
    
    /*
       Method: $conjugate
    
       Returns the conjugate for this <Complex>.
       
       Alters the original object.

       Returns:
    
         The conjugate for this complex.
    */
    $conjugate: function() {
        this.y = -this.y;
        return this;
    },
    
    /*
       Method: $scale
    
       Returns the result of scaling a <Complex> instance.
       
       Alters the original object.

       Parameters:
    
          factor - A scale factor.
    
       Returns:
    
         The result of scaling this complex to a factor.
    */
    $scale: function(factor) {
        this.x *= factor; this.y *= factor;
        return this;
    },
    
    /*
       Method: $div
    
       Returns the division of two <Complex> numbers.
       
       Alters the original object.

       Parameters:
    
          pos - A <Complex> number.
    
       Returns:
    
         The result of scaling this complex to a factor.
    */
    $div: function(pos) {
        var x = this.x, y = this.y;
        var sq = pos.squaredNorm();
        this.x = x * pos.x + y * pos.y; this.y = y * pos.x - x * pos.y;
        return this.$scale(1 / sq);
    },

    /*
      Method: isZero
   
      Returns *true* if the number is zero.
   
   */
    isZero: function () {
      var almostZero = 0.0001, abs = Math.abs;
      return abs(this.x) < almostZero && abs(this.y) < almostZero;
    }
};

var $C = function(a, b) { return new Complex(a, b); };

Complex.KER = $C(0, 0);
Complex.IM = $C(0, 1);



/*
 * File: Graph.js
 *
*/

/*
 Class: Graph

 A Graph Class that provides useful manipulation functions. You can find more manipulation methods in the <Graph.Util> object.

 An instance of this class can be accessed by using the *graph* parameter of any tree or graph visualization.
 
 Example:

 (start code js)
   //create new visualization
   var viz = new $jit.Viz(options);
   //load JSON data
   viz.loadJSON(json);
   //access model
   viz.graph; //<Graph> instance
 (end code)
 
 Implements:
 
 The following <Graph.Util> methods are implemented in <Graph>
 
  - <Graph.Util.getNode>
  - <Graph.Util.eachNode>
  - <Graph.Util.computeLevels>
  - <Graph.Util.eachBFS>
  - <Graph.Util.clean>
  - <Graph.Util.getClosestNodeToPos>
  - <Graph.Util.getClosestNodeToOrigin>
 
*/  

$jit.Graph = new Class({

  initialize: function(opt, Node, Edge, Label) {
    var innerOptions = {
    'klass': Complex,
    'Node': {}
    };
    this.Node = Node;
    this.Edge = Edge;
    this.Label = Label;
    this.opt = $.merge(innerOptions, opt || {});
    this.nodes = {};
    this.edges = {};
    
    //add nodeList methods
    var that = this;
    this.nodeList = {};
    for(var p in Accessors) {
      that.nodeList[p] = (function(p) {
        return function() {
          var args = Array.prototype.slice.call(arguments);
          that.eachNode(function(n) {
            n[p].apply(n, args);
          });
        };
      })(p);
    }

 },

/*
     Method: getNode
    
     Returns a <Graph.Node> by *id*.

     Parameters:

     id - (string) A <Graph.Node> id.

     Example:

     (start code js)
       var node = graph.getNode('nodeId');
     (end code)
*/  
 getNode: function(id) {
    if(this.hasNode(id)) return this.nodes[id];
    return false;
 },

 /*
     Method: get
    
     An alias for <Graph.Util.getNode>. Returns a node by *id*.
    
     Parameters:
    
     id - (string) A <Graph.Node> id.
    
     Example:
    
     (start code js)
       var node = graph.get('nodeId');
     (end code)
*/  
  get: function(id) {
    return this.getNode(id);
  },

 /*
   Method: getByName
  
   Returns a <Graph.Node> by *name*.
  
   Parameters:
  
   name - (string) A <Graph.Node> name.
  
   Example:
  
   (start code js)
     var node = graph.getByName('someName');
   (end code)
  */  
  getByName: function(name) {
    for(var id in this.nodes) {
      var n = this.nodes[id];
      if(n.name == name) return n;
    }
    return false;
  },

/*
   Method: getAdjacence
  
   Returns a <Graph.Adjacence> object connecting nodes with ids *id* and *id2*.

   Parameters:

   id - (string) A <Graph.Node> id.
   id2 - (string) A <Graph.Node> id.
*/  
  getAdjacence: function (id, id2) {
    if(id in this.edges) {
      return this.edges[id][id2];
    }
    return false;
 },

    /*
     Method: addNode
    
     Adds a node.
     
     Parameters:
    
      obj - An object with the properties described below

      id - (string) A node id
      name - (string) A node's name
      data - (object) A node's data hash

    See also:
    <Graph.Node>

  */  
  addNode: function(obj) { 
   if(!this.nodes[obj.id]) {  
     var edges = this.edges[obj.id] = {};
     this.nodes[obj.id] = new Graph.Node($.extend({
        'id': obj.id,
        'name': obj.name,
        'data': $.merge(obj.data || {}, {}),
        'adjacencies': edges 
      }, this.opt.Node), 
      this.opt.klass, 
      this.Node, 
      this.Edge,
      this.Label);
    }
    return this.nodes[obj.id];
  },
  
    /*
     Method: addAdjacence
    
     Connects nodes specified by *obj* and *obj2*. If not found, nodes are created.
     
     Parameters:
    
      obj - (object) A <Graph.Node> object.
      obj2 - (object) Another <Graph.Node> object.
      data - (object) A data object. Used to store some extra information in the <Graph.Adjacence> object created.

    See also:

    <Graph.Node>, <Graph.Adjacence>
    */  
  addAdjacence: function (obj, obj2, data) {
    if(!this.hasNode(obj.id)) { this.addNode(obj); }
    if(!this.hasNode(obj2.id)) { this.addNode(obj2); }
    obj = this.nodes[obj.id]; obj2 = this.nodes[obj2.id];
    if(!obj.adjacentTo(obj2)) {
      var adjsObj = this.edges[obj.id] = this.edges[obj.id] || {};
      var adjsObj2 = this.edges[obj2.id] = this.edges[obj2.id] || {};
      adjsObj[obj2.id] = adjsObj2[obj.id] = new Graph.Adjacence(obj, obj2, data, this.Edge, this.Label);
      return adjsObj[obj2.id];
    }
    return this.edges[obj.id][obj2.id];
 },

    /*
     Method: removeNode
    
     Removes a <Graph.Node> matching the specified *id*.

     Parameters:

     id - (string) A node's id.

    */  
  removeNode: function(id) {
    if(this.hasNode(id)) {
      delete this.nodes[id];
      var adjs = this.edges[id];
      for(var to in adjs) {
        delete this.edges[to][id];
      }
      delete this.edges[id];
    }
  },
  
/*
     Method: removeAdjacence
    
     Removes a <Graph.Adjacence> matching *id1* and *id2*.

     Parameters:

     id1 - (string) A <Graph.Node> id.
     id2 - (string) A <Graph.Node> id.
*/  
  removeAdjacence: function(id1, id2) {
    delete this.edges[id1][id2];
    delete this.edges[id2][id1];
  },

   /*
     Method: hasNode
    
     Returns a boolean indicating if the node belongs to the <Graph> or not.
     
     Parameters:
    
        id - (string) Node id.
   */  
  hasNode: function(id) {
    return id in this.nodes;
  },
  
  /*
    Method: empty

    Empties the Graph

  */
  empty: function() { this.nodes = {}; this.edges = {};}

});

var Graph = $jit.Graph;

/*
 Object: Accessors
 
 Defines a set of methods for data, canvas and label styles manipulation implemented by <Graph.Node> and <Graph.Adjacence> instances.
 
 */
var Accessors;

(function () {
  var getDataInternal = function(prefix, prop, type, force, prefixConfig) {
    var data;
    type = type || 'current';
    prefix = "$" + (prefix ? prefix + "-" : "");

    if(type == 'current') {
      data = this.data;
    } else if(type == 'start') {
      data = this.startData;
    } else if(type == 'end') {
      data = this.endData;
    }

    var dollar = prefix + prop;

    if(force) {
      return data[dollar];
    }

    if(!this.Config.overridable)
      return prefixConfig[prop] || 0;

    return (dollar in data) ?
      data[dollar] : ((dollar in this.data) ? this.data[dollar] : (prefixConfig[prop] || 0));
  }

  var setDataInternal = function(prefix, prop, value, type) {
    type = type || 'current';
    prefix = '$' + (prefix ? prefix + '-' : '');

    var data;

    if(type == 'current') {
      data = this.data;
    } else if(type == 'start') {
      data = this.startData;
    } else if(type == 'end') {
      data = this.endData;
    }

    data[prefix + prop] = value;
  }

  var removeDataInternal = function(prefix, properties) {
    prefix = '$' + (prefix ? prefix + '-' : '');
    var that = this;
    $.each(properties, function(prop) {
      var pref = prefix + prop;
      delete that.data[pref];
      delete that.endData[pref];
      delete that.startData[pref];
    });
  }

  Accessors = {
    /*
    Method: getData

    Returns the specified data value property.
    This is useful for querying special/reserved <Graph.Node> data properties
    (i.e dollar prefixed properties).

    Parameters:

      prop  - (string) The name of the property. The dollar sign is not needed. For
              example *getData(width)* will return *data.$width*.
      type  - (string) The type of the data property queried. Default's "current". You can access *start* and *end* 
              data properties also. These properties are used when making animations.
      force - (boolean) Whether to obtain the true value of the property (equivalent to
              *data.$prop*) or to check for *node.overridable = true* first.

    Returns:

      The value of the dollar prefixed property or the global Node/Edge property
      value if *overridable=false*

    Example:
    (start code js)
     node.getData('width'); //will return node.data.$width if Node.overridable=true;
    (end code)
    */
    getData: function(prop, type, force) {
      return getDataInternal.call(this, "", prop, type, force, this.Config);
    },


    /*
    Method: setData

    Sets the current data property with some specific value.
    This method is only useful for reserved (dollar prefixed) properties.

    Parameters:

      prop  - (string) The name of the property. The dollar sign is not necessary. For
              example *setData(width)* will set *data.$width*.
      value - (mixed) The value to store.
      type  - (string) The type of the data property to store. Default's "current" but
              can also be "start" or "end".

    Example:
    
    (start code js)
     node.setData('width', 30);
    (end code)
    
    If we were to make an animation of a node/edge width then we could do
    
    (start code js)
      var node = viz.getNode('nodeId');
      //set start and end values
      node.setData('width', 10, 'start');
      node.setData('width', 30, 'end');
      //will animate nodes width property
      viz.fx.animate({
        modes: ['node-property:width'],
        duration: 1000
      });
    (end code)
    */
    setData: function(prop, value, type) {
      setDataInternal.call(this, "", prop, value, type);
    },

    /*
    Method: setDataset

    Convenience method to set multiple data values at once.
    
    Parameters:
    
    types - (array|string) A set of 'current', 'end' or 'start' values.
    obj - (object) A hash containing the names and values of the properties to be altered.

    Example:
    (start code js)
      node.setDataset(['current', 'end'], {
        'width': [100, 5],
        'color': ['#fff', '#ccc']
      });
      //...or also
      node.setDataset('end', {
        'width': 5,
        'color': '#ccc'
      });
    (end code)
    
    See also: 
    
    <Accessors.setData>
    
    */
    setDataset: function(types, obj) {
      types = $.splat(types);
      for(var attr in obj) {
        for(var i=0, val = $.splat(obj[attr]), l=types.length; i<l; i++) {
          this.setData(attr, val[i], types[i]);
        }
      }
    },
    
    /*
    Method: removeData

    Remove data properties.

    Parameters:

    One or more property names as arguments. The dollar sign is not needed.

    Example:
    (start code js)
    node.removeData('width'); //now the default width value is returned
    (end code)
    */
    removeData: function() {
      removeDataInternal.call(this, "", Array.prototype.slice.call(arguments));
    },

    /*
    Method: getCanvasStyle

    Returns the specified canvas style data value property. This is useful for
    querying special/reserved <Graph.Node> canvas style data properties (i.e.
    dollar prefixed properties that match with $canvas-<name of canvas style>).

    Parameters:

      prop  - (string) The name of the property. The dollar sign is not needed. For
              example *getCanvasStyle(shadowBlur)* will return *data[$canvas-shadowBlur]*.
      type  - (string) The type of the data property queried. Default's *current*. You can access *start* and *end* 
              data properties also.
              
    Example:
    (start code js)
      node.getCanvasStyle('shadowBlur');
    (end code)
    
    See also:
    
    <Accessors.getData>
    */
    getCanvasStyle: function(prop, type, force) {
      return getDataInternal.call(
          this, 'canvas', prop, type, force, this.Config.CanvasStyles);
    },

    /*
    Method: setCanvasStyle

    Sets the canvas style data property with some specific value.
    This method is only useful for reserved (dollar prefixed) properties.
    
    Parameters:
    
    prop - (string) Name of the property. Can be any canvas property like 'shadowBlur', 'shadowColor', 'strokeStyle', etc.
    value - (mixed) The value to set to the property.
    type - (string) Default's *current*. Whether to set *start*, *current* or *end* type properties.
    
    Example:
    
    (start code js)
     node.setCanvasStyle('shadowBlur', 30);
    (end code)
    
    If we were to make an animation of a node/edge shadowBlur canvas style then we could do
    
    (start code js)
      var node = viz.getNode('nodeId');
      //set start and end values
      node.setCanvasStyle('shadowBlur', 10, 'start');
      node.setCanvasStyle('shadowBlur', 30, 'end');
      //will animate nodes canvas style property for nodes
      viz.fx.animate({
        modes: ['node-style:shadowBlur'],
        duration: 1000
      });
    (end code)
    
    See also:
    
    <Accessors.setData>.
    */
    setCanvasStyle: function(prop, value, type) {
      setDataInternal.call(this, 'canvas', prop, value, type);
    },

    /*
    Method: setCanvasStyles

    Convenience method to set multiple styles at once.

    Parameters:
    
    types - (array|string) A set of 'current', 'end' or 'start' values.
    obj - (object) A hash containing the names and values of the properties to be altered.

    See also:
    
    <Accessors.setDataset>.
    */
    setCanvasStyles: function(types, obj) {
      types = $.splat(types);
      for(var attr in obj) {
        for(var i=0, val = $.splat(obj[attr]), l=types.length; i<l; i++) {
          this.setCanvasStyle(attr, val[i], types[i]);
        }
      }
    },

    /*
    Method: removeCanvasStyle

    Remove canvas style properties from data.

    Parameters:
    
    A variable number of canvas style strings.

    See also:
    
    <Accessors.removeData>.
    */
    removeCanvasStyle: function() {
      removeDataInternal.call(this, 'canvas', Array.prototype.slice.call(arguments));
    },

    /*
    Method: getLabelData

    Returns the specified label data value property. This is useful for
    querying special/reserved <Graph.Node> label options (i.e.
    dollar prefixed properties that match with $label-<name of label style>).

    Parameters:

      prop  - (string) The name of the property. The dollar sign prefix is not needed. For
              example *getLabelData(size)* will return *data[$label-size]*.
      type  - (string) The type of the data property queried. Default's *current*. You can access *start* and *end* 
              data properties also.
              
    See also:
    
    <Accessors.getData>.
    */
    getLabelData: function(prop, type, force) {
      return getDataInternal.call(
          this, 'label', prop, type, force, this.Label);
    },

    /*
    Method: setLabelData

    Sets the current label data with some specific value.
    This method is only useful for reserved (dollar prefixed) properties.

    Parameters:
    
    prop - (string) Name of the property. Can be any canvas property like 'shadowBlur', 'shadowColor', 'strokeStyle', etc.
    value - (mixed) The value to set to the property.
    type - (string) Default's *current*. Whether to set *start*, *current* or *end* type properties.
    
    Example:
    
    (start code js)
     node.setLabelData('size', 30);
    (end code)
    
    If we were to make an animation of a node label size then we could do
    
    (start code js)
      var node = viz.getNode('nodeId');
      //set start and end values
      node.setLabelData('size', 10, 'start');
      node.setLabelData('size', 30, 'end');
      //will animate nodes label size
      viz.fx.animate({
        modes: ['label-property:size'],
        duration: 1000
      });
    (end code)
    
    See also:
    
    <Accessors.setData>.
    */
    setLabelData: function(prop, value, type) {
      setDataInternal.call(this, 'label', prop, value, type);
    },

    /*
    Method: setLabelDataset

    Convenience function to set multiple label data at once.

    Parameters:
    
    types - (array|string) A set of 'current', 'end' or 'start' values.
    obj - (object) A hash containing the names and values of the properties to be altered.

    See also:
    
    <Accessors.setDataset>.
    */
    setLabelDataset: function(types, obj) {
      types = $.splat(types);
      for(var attr in obj) {
        for(var i=0, val = $.splat(obj[attr]), l=types.length; i<l; i++) {
          this.setLabelData(attr, val[i], types[i]);
        }
      }
    },

    /*
    Method: removeLabelData

    Remove label properties from data.
    
    Parameters:
    
    A variable number of label property strings.

    See also:
    
    <Accessors.removeData>.
    */
    removeLabelData: function() {
      removeDataInternal.call(this, 'label', Array.prototype.slice.call(arguments));
    }
  };
})();

/*
     Class: Graph.Node

     A <Graph> node.
     
     Implements:
     
     <Accessors> methods.
     
     The following <Graph.Util> methods are implemented by <Graph.Node>
     
    - <Graph.Util.eachAdjacency>
    - <Graph.Util.eachLevel>
    - <Graph.Util.eachSubgraph>
    - <Graph.Util.eachSubnode>
    - <Graph.Util.anySubnode>
    - <Graph.Util.getSubnodes>
    - <Graph.Util.getParents>
    - <Graph.Util.isDescendantOf>     
*/
Graph.Node = new Class({
    
  initialize: function(opt, klass, Node, Edge, Label) {
    var innerOptions = {
      'id': '',
      'name': '',
      'data': {},
      'startData': {},
      'endData': {},
      'adjacencies': {},

      'selected': false,
      'drawn': false,
      'exist': false,

      'angleSpan': {
        'begin': 0,
        'end' : 0
      },

      'pos': new klass,
      'startPos': new klass,
      'endPos': new klass
    };
    
    $.extend(this, $.extend(innerOptions, opt));
    this.Config = this.Node = Node;
    this.Edge = Edge;
    this.Label = Label;
  },

    /*
       Method: adjacentTo
    
       Indicates if the node is adjacent to the node specified by id

       Parameters:
    
          id - (string) A node id.
    
       Example:
       (start code js)
        node.adjacentTo('nodeId') == true;
       (end code)
    */
    adjacentTo: function(node) {
        return node.id in this.adjacencies;
    },

    /*
       Method: getAdjacency
    
       Returns a <Graph.Adjacence> object connecting the current <Graph.Node> and the node having *id* as id.

       Parameters:
    
          id - (string) A node id.
    */  
    getAdjacency: function(id) {
        return this.adjacencies[id];
    },

    /*
      Method: getPos
   
      Returns the position of the node.
  
      Parameters:
   
         type - (string) Default's *current*. Possible values are "start", "end" or "current".
   
      Returns:
   
        A <Complex> or <Polar> instance.
  
      Example:
      (start code js)
       var pos = node.getPos('end');
      (end code)
   */
   getPos: function(type) {
       type = type || "current";
       if(type == "current") {
         return this.pos;
       } else if(type == "end") {
         return this.endPos;
       } else if(type == "start") {
         return this.startPos;
       }
   },
   /*
     Method: setPos
  
     Sets the node's position.
  
     Parameters:
  
        value - (object) A <Complex> or <Polar> instance.
        type - (string) Default's *current*. Possible values are "start", "end" or "current".
  
     Example:
     (start code js)
      node.setPos(new $jit.Complex(0, 0), 'end');
     (end code)
  */
  setPos: function(value, type) {
      type = type || "current";
      var pos;
      if(type == "current") {
        pos = this.pos;
      } else if(type == "end") {
        pos = this.endPos;
      } else if(type == "start") {
        pos = this.startPos;
      }
      pos.set(value);
  }
});

Graph.Node.implement(Accessors);

/*
     Class: Graph.Adjacence

     A <Graph> adjacence (or edge) connecting two <Graph.Nodes>.
     
     Implements:
     
     <Accessors> methods.

     See also:

     <Graph>, <Graph.Node>

     Properties:
     
      nodeFrom - A <Graph.Node> connected by this edge.
      nodeTo - Another  <Graph.Node> connected by this edge.
      data - Node data property containing a hash (i.e {}) with custom options.
*/
Graph.Adjacence = new Class({
  
  initialize: function(nodeFrom, nodeTo, data, Edge, Label) {
    this.nodeFrom = nodeFrom;
    this.nodeTo = nodeTo;
    this.data = data || {};
    this.startData = {};
    this.endData = {};
    this.Config = this.Edge = Edge;
    this.Label = Label;
  }
});

Graph.Adjacence.implement(Accessors);

/*
   Object: Graph.Util

   <Graph> traversal and processing utility object.
   
   Note:
   
   For your convenience some of these methods have also been appended to <Graph> and <Graph.Node> classes.
*/
Graph.Util = {
    /*
       filter
    
       For internal use only. Provides a filtering function based on flags.
    */
    filter: function(param) {
        if(!param || !($.type(param) == 'string')) return function() { return true; };
        var props = param.split(" ");
        return function(elem) {
            for(var i=0; i<props.length; i++) { 
              if(elem[props[i]]) { 
                return false; 
              }
            }
            return true;
        };
    },
    /*
       Method: getNode
    
       Returns a <Graph.Node> by *id*.
       
       Also implemented by:
       
       <Graph>

       Parameters:

       graph - (object) A <Graph> instance.
       id - (string) A <Graph.Node> id.

       Example:

       (start code js)
         $jit.Graph.Util.getNode(graph, 'nodeid');
         //or...
         graph.getNode('nodeid');
       (end code)
    */
    getNode: function(graph, id) {
        return graph.nodes[id];
    },
    
    /*
       Method: eachNode
    
       Iterates over <Graph> nodes performing an *action*.
       
       Also implemented by:
       
       <Graph>.

       Parameters:

       graph - (object) A <Graph> instance.
       action - (function) A callback function having a <Graph.Node> as first formal parameter.

       Example:
       (start code js)
         $jit.Graph.Util.eachNode(graph, function(node) {
          alert(node.name);
         });
         //or...
         graph.eachNode(function(node) {
           alert(node.name);
         });
       (end code)
    */
    eachNode: function(graph, action, flags) {
        var filter = this.filter(flags);
        for(var i in graph.nodes) {
          if(filter(graph.nodes[i])) action(graph.nodes[i]);
        } 
    },
    
    /*
      Method: each
   
      Iterates over <Graph> nodes performing an *action*. It's an alias for <Graph.Util.eachNode>.
      
      Also implemented by:
      
      <Graph>.
  
      Parameters:
  
      graph - (object) A <Graph> instance.
      action - (function) A callback function having a <Graph.Node> as first formal parameter.
  
      Example:
      (start code js)
        $jit.Graph.Util.each(graph, function(node) {
         alert(node.name);
        });
        //or...
        graph.each(function(node) {
          alert(node.name);
        });
      (end code)
   */
   each: function(graph, action, flags) {
      this.eachNode(graph, action, flags); 
   },

 /*
       Method: eachAdjacency
    
       Iterates over <Graph.Node> adjacencies applying the *action* function.
       
       Also implemented by:
       
       <Graph.Node>.

       Parameters:

       node - (object) A <Graph.Node>.
       action - (function) A callback function having <Graph.Adjacence> as first formal parameter.

       Example:
       (start code js)
         $jit.Graph.Util.eachAdjacency(node, function(adj) {
          alert(adj.nodeTo.name);
         });
         //or...
         node.eachAdjacency(function(adj) {
           alert(adj.nodeTo.name);
         });
       (end code)
    */
    eachAdjacency: function(node, action, flags) {
        var adj = node.adjacencies, filter = this.filter(flags);
        for(var id in adj) {
          var a = adj[id];
          if(filter(a)) {
            if(a.nodeFrom != node) {
              var tmp = a.nodeFrom;
              a.nodeFrom = a.nodeTo;
              a.nodeTo = tmp;
            }
            action(a, id);
          }
        }
    },

     /*
       Method: computeLevels
    
       Performs a BFS traversal setting the correct depth for each node.
        
       Also implemented by:
       
       <Graph>.
       
       Note:
       
       The depth of each node can then be accessed by 
       >node._depth

       Parameters:

       graph - (object) A <Graph>.
       id - (string) A starting node id for the BFS traversal.
       startDepth - (optional|number) A minimum depth value. Default's 0.

    */
    computeLevels: function(graph, id, startDepth, flags) {
        startDepth = startDepth || 0;
        var filter = this.filter(flags);
        this.eachNode(graph, function(elem) {
            elem._flag = false;
            elem._depth = -1;
        }, flags);
        var root = graph.getNode(id);
        root._depth = startDepth;
        var queue = [root];
        while(queue.length != 0) {
            var node = queue.pop();
            node._flag = true;
            this.eachAdjacency(node, function(adj) {
                var n = adj.nodeTo;
                if(n._flag == false && filter(n)) {
                    if(n._depth < 0) n._depth = node._depth + 1 + startDepth;
                    queue.unshift(n);
                }
            }, flags);
        }
    },

    /*
       Method: eachBFS
    
       Performs a BFS traversal applying *action* to each <Graph.Node>.
       
       Also implemented by:
       
       <Graph>.

       Parameters:

       graph - (object) A <Graph>.
       id - (string) A starting node id for the BFS traversal.
       action - (function) A callback function having a <Graph.Node> as first formal parameter.

       Example:
       (start code js)
         $jit.Graph.Util.eachBFS(graph, 'mynodeid', function(node) {
          alert(node.name);
         });
         //or...
         graph.eachBFS('mynodeid', function(node) {
           alert(node.name);
         });
       (end code)
    */
    eachBFS: function(graph, id, action, flags) {
        var filter = this.filter(flags);
        this.clean(graph);
        var queue = [graph.getNode(id)];
        while(queue.length != 0) {
            var node = queue.pop();
            if (!node) return;
            node._flag = true;
            action(node, node._depth);
            this.eachAdjacency(node, function(adj) {
                var n = adj.nodeTo;
                if(n._flag == false && filter(n)) {
                    n._flag = true;
                    queue.unshift(n);
                }
            }, flags);
        }
    },
    
    /*
       Method: eachLevel
    
       Iterates over a node's subgraph applying *action* to the nodes of relative depth between *levelBegin* and *levelEnd*.
       In case you need to break the iteration, *action* should return false.
       
       Also implemented by:
       
       <Graph.Node>.

       Parameters:
       
       node - (object) A <Graph.Node>.
       levelBegin - (number) A relative level value.
       levelEnd - (number) A relative level value.
       action - (function) A callback function having a <Graph.Node> as first formal parameter.

    */
    eachLevel: function(node, levelBegin, levelEnd, action, flags) {
        var d = node._depth, filter = this.filter(flags), that = this, shouldContinue = true;
        levelEnd = levelEnd === false? Number.MAX_VALUE -d : levelEnd;
        (function loopLevel(node, levelBegin, levelEnd) {
            if(!shouldContinue) return;
            var d = node._depth, ret;
            if(d >= levelBegin && d <= levelEnd && filter(node)) ret = action(node, d);
            if(typeof ret !== "undefined") shouldContinue = ret;
            if(shouldContinue && d < levelEnd) {
                that.eachAdjacency(node, function(adj) {
                    var n = adj.nodeTo;
                    if(n._depth > d) loopLevel(n, levelBegin, levelEnd);
                });
            }
        })(node, levelBegin + d, levelEnd + d);
    },

    /*
       Method: eachSubgraph
    
       Iterates over a node's children recursively.
       
       Also implemented by:
       
       <Graph.Node>.

       Parameters:
       node - (object) A <Graph.Node>.
       action - (function) A callback function having a <Graph.Node> as first formal parameter.

       Example:
       (start code js)
         $jit.Graph.Util.eachSubgraph(node, function(node) {
           alert(node.name);
         });
         //or...
         node.eachSubgraph(function(node) {
           alert(node.name);
         });
       (end code)
    */
    eachSubgraph: function(node, action, flags) {
      this.eachLevel(node, 0, false, action, flags);
    },

    /*
       Method: eachSubnode
    
       Iterates over a node's children (without deeper recursion).
       
       Also implemented by:
       
       <Graph.Node>.
       
       Parameters:
       node - (object) A <Graph.Node>.
       action - (function) A callback function having a <Graph.Node> as first formal parameter.

       Example:
       (start code js)
         $jit.Graph.Util.eachSubnode(node, function(node) {
          alert(node.name);
         });
         //or...
         node.eachSubnode(function(node) {
           alert(node.name);
         });
       (end code)
    */
    eachSubnode: function(node, action, flags) {
        this.eachLevel(node, 1, 1, action, flags);
    },

    /*
       Method: anySubnode
    
       Returns *true* if any subnode matches the given condition.
       
       Also implemented by:
       
       <Graph.Node>.

       Parameters:
       node - (object) A <Graph.Node>.
       cond - (function) A callback function returning a Boolean instance. This function has as first formal parameter a <Graph.Node>.

       Example:
       (start code js)
         $jit.Graph.Util.anySubnode(node, function(node) { return node.name == "mynodename"; });
         //or...
         node.anySubnode(function(node) { return node.name == 'mynodename'; });
       (end code)
    */
    anySubnode: function(node, cond, flags) {
      var flag = false;
      cond = cond || $.lambda(true);
      var c = $.type(cond) == 'string'? function(n) { return n[cond]; } : cond;
      this.eachSubnode(node, function(elem) {
        if(c(elem)) flag = true;
      }, flags);
      return flag;
    },
  
    /*
       Method: getSubnodes
    
       Collects all subnodes for a specified node. 
       The *level* parameter filters nodes having relative depth of *level* from the root node. 
       
       Also implemented by:
       
       <Graph.Node>.

       Parameters:
       node - (object) A <Graph.Node>.
       level - (optional|number) Default's *0*. A starting relative depth for collecting nodes.

       Returns:
       An array of nodes.

    */
    getSubnodes: function(node, level, flags) {
        var ans = [], that = this;
        level = level || 0;
        var levelStart, levelEnd;
        if($.type(level) == 'array') {
            levelStart = level[0];
            levelEnd = level[1];
        } else {
            levelStart = level;
            levelEnd = Number.MAX_VALUE - node._depth;
        }
        this.eachLevel(node, levelStart, levelEnd, function(n) {
            ans.push(n);
        }, flags);
        return ans;
    },
  
  
    /*
       Method: getParents
    
       Returns an Array of <Graph.Nodes> which are parents of the given node.
       
       Also implemented by:
       
       <Graph.Node>.

       Parameters:
       node - (object) A <Graph.Node>.

       Returns:
       An Array of <Graph.Nodes>.

       Example:
       (start code js)
         var pars = $jit.Graph.Util.getParents(node);
         //or...
         var pars = node.getParents();
         
         if(pars.length > 0) {
           //do stuff with parents
         }
       (end code)
    */
    getParents: function(node) {
        var ans = [];
        this.eachAdjacency(node, function(adj) {
            var n = adj.nodeTo;
            if(n._depth < node._depth) ans.push(n);
        });
        return ans;
    },
    
    /*
    Method: isDescendantOf
 
    Returns a boolean indicating if some node is descendant of the node with the given id. 

    Also implemented by:
    
    <Graph.Node>.
    
    
    Parameters:
    node - (object) A <Graph.Node>.
    id - (string) A <Graph.Node> id.

    Example:
    (start code js)
      $jit.Graph.Util.isDescendantOf(node, "nodeid"); //true|false
      //or...
      node.isDescendantOf('nodeid');//true|false
    (end code)
 */
 isDescendantOf: function(node, id) {
    if(node.id == id) return true;
    var pars = this.getParents(node), ans = false;
    for ( var i = 0; !ans && i < pars.length; i++) {
    ans = ans || this.isDescendantOf(pars[i], id);
  }
    return ans;
 },

 /*
     Method: clean
  
     Cleans flags from nodes.

     Also implemented by:
     
     <Graph>.
     
     Parameters:
     graph - A <Graph> instance.
  */
  clean: function(graph) { this.eachNode(graph, function(elem) { elem._flag = false; }); },
  
  /* 
    Method: getClosestNodeToOrigin 
  
    Returns the closest node to the center of canvas.
  
    Also implemented by:
    
    <Graph>.
    
    Parameters:
   
     graph - (object) A <Graph> instance.
     prop - (optional|string) Default's 'current'. A <Graph.Node> position property. Possible properties are 'start', 'current' or 'end'.
  
  */
  getClosestNodeToOrigin: function(graph, prop, flags) {
   return this.getClosestNodeToPos(graph, Polar.KER, prop, flags);
  },
  
  /* 
    Method: getClosestNodeToPos
  
    Returns the closest node to the given position.
  
    Also implemented by:
    
    <Graph>.
    
    Parameters:
   
     graph - (object) A <Graph> instance.
     pos - (object) A <Complex> or <Polar> instance.
     prop - (optional|string) Default's *current*. A <Graph.Node> position property. Possible properties are 'start', 'current' or 'end'.
  
  */
  getClosestNodeToPos: function(graph, pos, prop, flags) {
   var node = null;
   prop = prop || 'current';
   pos = pos && pos.getc(true) || Complex.KER;
   var distance = function(a, b) {
     var d1 = a.x - b.x, d2 = a.y - b.y;
     return d1 * d1 + d2 * d2;
   };
   this.eachNode(graph, function(elem) {
     node = (node == null || distance(elem.getPos(prop).getc(true), pos) < distance(
         node.getPos(prop).getc(true), pos)) ? elem : node;
   }, flags);
   return node;
  } 
};

//Append graph methods to <Graph>
$.each(['get', 'getNode', 'each', 'eachNode', 'computeLevels', 'eachBFS', 'clean', 'getClosestNodeToPos', 'getClosestNodeToOrigin'], function(m) {
  Graph.prototype[m] = function() {
    return Graph.Util[m].apply(Graph.Util, [this].concat(Array.prototype.slice.call(arguments)));
  };
});

//Append node methods to <Graph.Node>
$.each(['eachAdjacency', 'eachLevel', 'eachSubgraph', 'eachSubnode', 'anySubnode', 'getSubnodes', 'getParents', 'isDescendantOf'], function(m) {
  Graph.Node.prototype[m] = function() {
    return Graph.Util[m].apply(Graph.Util, [this].concat(Array.prototype.slice.call(arguments)));
  };
});

/*
 * File: Graph.Op.js
 *
*/

/*
   Object: Graph.Op

   Perform <Graph> operations like adding/removing <Graph.Nodes> or <Graph.Adjacences>, 
   morphing a <Graph> into another <Graph>, contracting or expanding subtrees, etc.

*/
Graph.Op = {

    options: {
      type: 'nothing',
      duration: 2000,
      hideLabels: true,
      fps:30
    },
    
    initialize: function(viz) {
      this.viz = viz;
    },

    /*
       Method: removeNode
    
       Removes one or more <Graph.Nodes> from the visualization. 
       It can also perform several animations like fading sequentially, fading concurrently, iterating or replotting.

       Parameters:
    
        node - (string|array) The node's id. Can also be an array having many ids.
        opt - (object) Animation options. It's an object with optional properties described below
        type - (string) Default's *nothing*. Type of the animation. Can be "nothing", "replot", "fade:seq",  "fade:con" or "iter".
        duration - Described in <Options.Fx>.
        fps - Described in <Options.Fx>.
        transition - Described in <Options.Fx>.
        hideLabels - (boolean) Default's *true*. Hide labels during the animation.
   
      Example:
      (start code js)
        var viz = new $jit.Viz(options);
        viz.op.removeNode('nodeId', {
          type: 'fade:seq',
          duration: 1000,
          hideLabels: false,
          transition: $jit.Trans.Quart.easeOut
        });
        //or also
        viz.op.removeNode(['someId', 'otherId'], {
          type: 'fade:con',
          duration: 1500
        });
      (end code)
    */
  
    removeNode: function(node, opt) {
        var viz = this.viz;
        var options = $.merge(this.options, viz.controller, opt);
        var n = $.splat(node);
        var i, that, nodeObj;
        switch(options.type) {
            case 'nothing':
                for(i=0; i<n.length; i++) {
                    options.onBeforeRemoveNode(viz.graph.getNode(n[i]));
                    viz.graph.removeNode(n[i]);
                }
                break;
            
            case 'replot':
                this.removeNode(n, { type: 'nothing' });
                viz.labels.clearLabels();
                viz.refresh(true);
                break;
            
            case 'fade:seq': case 'fade':
                that = this;
                //set alpha to 0 for nodes to remove.
                for(i=0; i<n.length; i++) {
                    nodeObj = viz.graph.getNode(n[i]);
                    nodeObj.setData('alpha', 0, 'end');
                }
                viz.fx.animate($.merge(options, {
                    modes: ['node-property:alpha'],
                    onComplete: function() {
                        that.removeNode(n, { type: 'nothing' });
                        viz.labels.clearLabels();
                        viz.reposition();
                        viz.fx.animate($.merge(options, {
                            modes: ['linear']
                        }));
                    }
                }));
                break;
            
            case 'fade:con':
                that = this;
                //set alpha to 0 for nodes to remove. Tag them for being ignored on computing positions.
                for(i=0; i<n.length; i++) {
                    nodeObj = viz.graph.getNode(n[i]);
                    nodeObj.setData('alpha', 0, 'end');
                    nodeObj.ignore = true;
                }
                viz.reposition();
                viz.fx.animate($.merge(options, {
                    modes: ['node-property:alpha', 'linear'],
                    onComplete: function() {
                        that.removeNode(n, { type: 'nothing' });
                        options.onComplete && options.onComplete();
                    }
                }));
                break;
            
            case 'iter':
                that = this;
                viz.fx.sequence({
                    condition: function() { return n.length != 0; },
                    step: function() { that.removeNode(n.shift(), { type: 'nothing' });  viz.labels.clearLabels(); },
                    onComplete: function() { options.onComplete && options.onComplete(); },
                    duration: Math.ceil(options.duration / n.length)
                });
                break;
                
            default: this.doError();
        }
    },
    
    /*
       Method: removeEdge
    
       Removes one or more <Graph.Adjacences> from the visualization. 
       It can also perform several animations like fading sequentially, fading concurrently, iterating or replotting.

       Parameters:
    
       vertex - (array) An array having two strings which are the ids of the nodes connected by this edge (i.e ['id1', 'id2']). Can also be a two dimensional array holding many edges (i.e [['id1', 'id2'], ['id3', 'id4'], ...]).
       opt - (object) Animation options. It's an object with optional properties described below
       type - (string) Default's *nothing*. Type of the animation. Can be "nothing", "replot", "fade:seq",  "fade:con" or "iter".
       duration - Described in <Options.Fx>.
       fps - Described in <Options.Fx>.
       transition - Described in <Options.Fx>.
       hideLabels - (boolean) Default's *true*. Hide labels during the animation.
   
      Example:
      (start code js)
        var viz = new $jit.Viz(options);
        viz.op.removeEdge(['nodeId', 'otherId'], {
          type: 'fade:seq',
          duration: 1000,
          hideLabels: false,
          transition: $jit.Trans.Quart.easeOut
        });
        //or also
        viz.op.removeEdge([['someId', 'otherId'], ['id3', 'id4']], {
          type: 'fade:con',
          duration: 1500
        });
      (end code)
    
    */
    removeEdge: function(vertex, opt) {
        var viz = this.viz;
        var options = $.merge(this.options, viz.controller, opt);
        var v = ($.type(vertex[0]) == 'string')? [vertex] : vertex;
        var i, that, adj;
        switch(options.type) {
            case 'nothing':
                for(i=0; i<v.length; i++)   viz.graph.removeAdjacence(v[i][0], v[i][1]);
                break;
            
            case 'replot':
                this.removeEdge(v, { type: 'nothing' });
                viz.refresh(true);
                break;
            
            case 'fade:seq': case 'fade':
                that = this;
                //set alpha to 0 for edges to remove.
                for(i=0; i<v.length; i++) {
                    adj = viz.graph.getAdjacence(v[i][0], v[i][1]);
                    if(adj) {
                        adj.setData('alpha', 0,'end');
                    }
                }
                viz.fx.animate($.merge(options, {
                    modes: ['edge-property:alpha'],
                    onComplete: function() {
                        that.removeEdge(v, { type: 'nothing' });
                        viz.reposition();
                        viz.fx.animate($.merge(options, {
                            modes: ['linear']
                        }));
                    }
                }));
                break;
            
            case 'fade:con':
                that = this;
                //set alpha to 0 for nodes to remove. Tag them for being ignored when computing positions.
                for(i=0; i<v.length; i++) {
                    adj = viz.graph.getAdjacence(v[i][0], v[i][1]);
                    if(adj) {
                        adj.setData('alpha',0 ,'end');
                        adj.ignore = true;
                    }
                }
                viz.reposition();
                viz.fx.animate($.merge(options, {
                    modes: ['edge-property:alpha', 'linear'],
                    onComplete: function() {
                        that.removeEdge(v, { type: 'nothing' });
                        options.onComplete && options.onComplete();
                    }
                }));
                break;
            
            case 'iter':
                that = this;
                viz.fx.sequence({
                    condition: function() { return v.length != 0; },
                    step: function() { that.removeEdge(v.shift(), { type: 'nothing' }); viz.labels.clearLabels(); },
                    onComplete: function() { options.onComplete(); },
                    duration: Math.ceil(options.duration / v.length)
                });
                break;
                
            default: this.doError();
        }
    },
    
    /*
       Method: sum
    
       Adds a new graph to the visualization. 
       The JSON graph (or tree) must at least have a common node with the current graph plotted by the visualization. 
       The resulting graph can be defined as follows <http://mathworld.wolfram.com/GraphSum.html>

       Parameters:
    
       json - (object) A json tree or graph structure. See also <Loader.loadJSON>.
       opt - (object) Animation options. It's an object with optional properties described below
       type - (string) Default's *nothing*. Type of the animation. Can be "nothing", "replot", "fade:seq",  "fade:con".
       duration - Described in <Options.Fx>.
       fps - Described in <Options.Fx>.
       transition - Described in <Options.Fx>.
       hideLabels - (boolean) Default's *true*. Hide labels during the animation.
   
      Example:
      (start code js)
        //...json contains a tree or graph structure...

        var viz = new $jit.Viz(options);
        viz.op.sum(json, {
          type: 'fade:seq',
          duration: 1000,
          hideLabels: false,
          transition: $jit.Trans.Quart.easeOut
        });
        //or also
        viz.op.sum(json, {
          type: 'fade:con',
          duration: 1500
        });
      (end code)
    
    */
    sum: function(json, opt) {
        var viz = this.viz;
        var options = $.merge(this.options, viz.controller, opt), root = viz.root;
        var graph;
        viz.root = opt.id || viz.root;
        switch(options.type) {
            case 'nothing':
                graph = viz.construct(json);
                graph.eachNode(function(elem) {
                    elem.eachAdjacency(function(adj) {
                        viz.graph.addAdjacence(adj.nodeFrom, adj.nodeTo, adj.data);
                    });
                });
                break;
            
            case 'replot':
                viz.refresh(true);
                this.sum(json, { type: 'nothing' });
                viz.refresh(true);
                break;
            
            case 'fade:seq': case 'fade': case 'fade:con':
                that = this;
                graph = viz.construct(json);

                //set alpha to 0 for nodes to add.
                var fadeEdges = this.preprocessSum(graph);
                var modes = !fadeEdges? ['node-property:alpha'] : ['node-property:alpha', 'edge-property:alpha'];
                viz.reposition();
                if(options.type != 'fade:con') {
                    viz.fx.animate($.merge(options, {
                        modes: ['linear'],
                        onComplete: function() {
                            viz.fx.animate($.merge(options, {
                                modes: modes,
                                onComplete: function() {
                                    options.onComplete();
                                }
                            }));
                        }
                    }));
                } else {
                    viz.graph.eachNode(function(elem) {
                        if (elem.id != root && elem.pos.isZero()) {
                          elem.pos.set(elem.endPos); 
                          elem.startPos.set(elem.endPos);
                        }
                    });
                    viz.fx.animate($.merge(options, {
                        modes: ['linear'].concat(modes)
                    }));
                }
                break;

            default: this.doError();
        }
    },
    
    /*
       Method: morph
    
       This method will transform the current visualized graph into the new JSON representation passed in the method. 
       The JSON object must at least have the root node in common with the current visualized graph.

       Parameters:
    
       json - (object) A json tree or graph structure. See also <Loader.loadJSON>.
       opt - (object) Animation options. It's an object with optional properties described below
       type - (string) Default's *nothing*. Type of the animation. Can be "nothing", "replot", "fade:con".
       duration - Described in <Options.Fx>.
       fps - Described in <Options.Fx>.
       transition - Described in <Options.Fx>.
       hideLabels - (boolean) Default's *true*. Hide labels during the animation.
       id - (string) The shared <Graph.Node> id between both graphs.
       
       extraModes - (optional|object) When morphing with an animation, dollar prefixed data parameters are added to 
                    *endData* and not *data* itself. This way you can animate dollar prefixed parameters during your morphing operation. 
                    For animating these extra-parameters you have to specify an object that has animation groups as keys and animation 
                    properties as values, just like specified in <Graph.Plot.animate>.
   
      Example:
      (start code js)
        //...json contains a tree or graph structure...

        var viz = new $jit.Viz(options);
        viz.op.morph(json, {
          type: 'fade',
          duration: 1000,
          hideLabels: false,
          transition: $jit.Trans.Quart.easeOut
        });
        //or also
        viz.op.morph(json, {
          type: 'fade',
          duration: 1500
        });
        //if the json data contains dollar prefixed params
        //like $width or $height these too can be animated
        viz.op.morph(json, {
          type: 'fade',
          duration: 1500
        }, {
          'node-property': ['width', 'height']
        });
      (end code)
    
    */
    morph: function(json, opt, extraModes) {
        extraModes = extraModes || {};
        var viz = this.viz;
        var options = $.merge(this.options, viz.controller, opt), root = viz.root;
        var graph;
        //TODO(nico) this hack makes morphing work with the Hypertree. 
        //Need to check if it has been solved and this can be removed.
        viz.root = opt.id || viz.root;
        switch(options.type) {
            case 'nothing':
                graph = viz.construct(json);
                graph.eachNode(function(elem) {
                  var nodeExists = viz.graph.hasNode(elem.id);  
                  elem.eachAdjacency(function(adj) {
                    var adjExists = !!viz.graph.getAdjacence(adj.nodeFrom.id, adj.nodeTo.id);
                    viz.graph.addAdjacence(adj.nodeFrom, adj.nodeTo, adj.data);
                    //Update data properties if the node existed
                    if(adjExists) {
                      var addedAdj = viz.graph.getAdjacence(adj.nodeFrom.id, adj.nodeTo.id);
                      for(var prop in (adj.data || {})) {
                        addedAdj.data[prop] = adj.data[prop];
                      }
                    }
                  });
                  //Update data properties if the node existed
                  if(nodeExists) {
                    var addedNode = viz.graph.getNode(elem.id);
                    for(var prop in (elem.data || {})) {
                      addedNode.data[prop] = elem.data[prop];
                    }
                  }
                });
                viz.graph.eachNode(function(elem) {
                    elem.eachAdjacency(function(adj) {
                        if(!graph.getAdjacence(adj.nodeFrom.id, adj.nodeTo.id)) {
                            viz.graph.removeAdjacence(adj.nodeFrom.id, adj.nodeTo.id);
                        }
                    });
                    if(!graph.hasNode(elem.id)) viz.graph.removeNode(elem.id);
                });
                
                break;
            
            case 'replot':
                viz.labels.clearLabels(true);
                this.morph(json, { type: 'nothing' });
                viz.refresh(true);
                viz.refresh(true);
                break;
                
            case 'fade:seq': case 'fade': case 'fade:con':
                that = this;
                graph = viz.construct(json);
                //preprocessing for nodes to delete.
                //get node property modes to interpolate
                var nodeModes = ('node-property' in extraModes) 
                  && $.map($.splat(extraModes['node-property']), 
                      function(n) { return '$' + n; });
                viz.graph.eachNode(function(elem) {
                  var graphNode = graph.getNode(elem.id);   
                  if(!graphNode) {
                      elem.setData('alpha', 1);
                      elem.setData('alpha', 1, 'start');
                      elem.setData('alpha', 0, 'end');
                      elem.ignore = true;
                    } else {
                      //Update node data information
                      var graphNodeData = graphNode.data;
                      for(var prop in graphNodeData) {
                        if(nodeModes && ($.indexOf(nodeModes, prop) > -1)) {
                          elem.endData[prop] = graphNodeData[prop];
                        } else {
                          elem.data[prop] = graphNodeData[prop];
                        }
                      }
                    }
                }); 
                viz.graph.eachNode(function(elem) {
                    if(elem.ignore) return;
                    elem.eachAdjacency(function(adj) {
                        if(adj.nodeFrom.ignore || adj.nodeTo.ignore) return;
                        var nodeFrom = graph.getNode(adj.nodeFrom.id);
                        var nodeTo = graph.getNode(adj.nodeTo.id);
                        if(!nodeFrom.adjacentTo(nodeTo)) {
                            var adj = viz.graph.getAdjacence(nodeFrom.id, nodeTo.id);
                            fadeEdges = true;
                            adj.setData('alpha', 1);
                            adj.setData('alpha', 1, 'start');
                            adj.setData('alpha', 0, 'end');
                        }
                    });
                }); 
                //preprocessing for adding nodes.
                var fadeEdges = this.preprocessSum(graph);

                var modes = !fadeEdges? ['node-property:alpha'] : 
                                        ['node-property:alpha', 
                                         'edge-property:alpha'];
                //Append extra node-property animations (if any)
                modes[0] = modes[0] + (('node-property' in extraModes)? 
                    (':' + $.splat(extraModes['node-property']).join(':')) : '');
                //Append extra edge-property animations (if any)
                modes[1] = (modes[1] || 'edge-property:alpha') + (('edge-property' in extraModes)? 
                    (':' + $.splat(extraModes['edge-property']).join(':')) : '');
                //Add label-property animations (if any)
                if('label-property' in extraModes) {
                  modes.push('label-property:' + $.splat(extraModes['label-property']).join(':'))
                }
                //only use reposition if its implemented.
                if (viz.reposition) {
                  viz.reposition();
                } else {
                  viz.compute('end');
                }
                viz.graph.eachNode(function(elem) {
                    if (elem.id != root && elem.pos.getp().equals(Polar.KER)) {
                      elem.pos.set(elem.endPos); elem.startPos.set(elem.endPos);
                    }
                });
                viz.fx.animate($.merge(options, {
                    modes: [extraModes.position || 'polar'].concat(modes),
                    onComplete: function() {
                        viz.graph.eachNode(function(elem) {
                            if(elem.ignore) viz.graph.removeNode(elem.id);
                        });
                        viz.graph.eachNode(function(elem) {
                            elem.eachAdjacency(function(adj) {
                                if(adj.ignore) viz.graph.removeAdjacence(adj.nodeFrom.id, adj.nodeTo.id);
                            });
                        });
                        options.onComplete();
                    }
                }));
                break;

            default:;
        }
    },

    
  /*
    Method: contract
 
    Collapses the subtree of the given node. The node will have a _collapsed=true_ property.
    
    Parameters:
 
    node - (object) A <Graph.Node>.
    opt - (object) An object containing options described below
    type - (string) Whether to 'replot' or 'animate' the contraction.
   
    There are also a number of Animation options. For more information see <Options.Fx>.

    Example:
    (start code js)
     var viz = new $jit.Viz(options);
     viz.op.contract(node, {
       type: 'animate',
       duration: 1000,
       hideLabels: true,
       transition: $jit.Trans.Quart.easeOut
     });
   (end code)
 
   */
    contract: function(node, opt) {
      var viz = this.viz;
      if(node.collapsed || !node.anySubnode($.lambda(true))) return;
      opt = $.merge(this.options, viz.config, opt || {}, {
        'modes': ['node-property:alpha:span', 'linear']
      });
      node.collapsed = true;
      (function subn(n) {
        n.eachSubnode(function(ch) {
          ch.ignore = true;
          ch.setData('alpha', 0, opt.type == 'animate'? 'end' : 'current');
          subn(ch);
        });
      })(node);
      if(opt.type == 'animate') {
        viz.compute('end');
        if(viz.rotated) {
          viz.rotate(viz.rotated, 'none', {
            'property':'end'
          });
        }
        (function subn(n) {
          n.eachSubnode(function(ch) {
            ch.setPos(node.getPos('end'), 'end');
            subn(ch);
          });
        })(node);
        viz.fx.animate(opt);
      } else if(opt.type == 'replot'){
        viz.refresh();
      }
    },
    
    /*
    Method: expand
 
    Expands the previously contracted subtree. The given node must have the _collapsed=true_ property.
    
    Parameters:
 
    node - (object) A <Graph.Node>.
    opt - (object) An object containing options described below
    type - (string) Whether to 'replot' or 'animate'.
     
    There are also a number of Animation options. For more information see <Options.Fx>.

    Example:
    (start code js)
      var viz = new $jit.Viz(options);
      viz.op.expand(node, {
        type: 'animate',
        duration: 1000,
        hideLabels: true,
        transition: $jit.Trans.Quart.easeOut
      });
    (end code)
 
   */
    expand: function(node, opt) {
      if(!('collapsed' in node)) return;
      var viz = this.viz;
      opt = $.merge(this.options, viz.config, opt || {}, {
        'modes': ['node-property:alpha:span', 'linear']
      });
      delete node.collapsed;
      (function subn(n) {
        n.eachSubnode(function(ch) {
          delete ch.ignore;
          ch.setData('alpha', 1, opt.type == 'animate'? 'end' : 'current');
          subn(ch);
        });
      })(node);
      if(opt.type == 'animate') {
        viz.compute('end');
        if(viz.rotated) {
          viz.rotate(viz.rotated, 'none', {
            'property':'end'
          });
        }
        viz.fx.animate(opt);
      } else if(opt.type == 'replot'){
        viz.refresh();
      }
    },

    preprocessSum: function(graph) {
        var viz = this.viz;
        graph.eachNode(function(elem) {
            if(!viz.graph.hasNode(elem.id)) {
                viz.graph.addNode(elem);
                var n = viz.graph.getNode(elem.id);
                n.setData('alpha', 0);
                n.setData('alpha', 0, 'start');
                n.setData('alpha', 1, 'end');
            }
        }); 
        var fadeEdges = false;
        graph.eachNode(function(elem) {
            elem.eachAdjacency(function(adj) {
                var nodeFrom = viz.graph.getNode(adj.nodeFrom.id);
                var nodeTo = viz.graph.getNode(adj.nodeTo.id);
                if(!nodeFrom.adjacentTo(nodeTo)) {
                    var adj = viz.graph.addAdjacence(nodeFrom, nodeTo, adj.data);
                    if(nodeFrom.startAlpha == nodeFrom.endAlpha 
                    && nodeTo.startAlpha == nodeTo.endAlpha) {
                        fadeEdges = true;
                        adj.setData('alpha', 0);
                        adj.setData('alpha', 0, 'start');
                        adj.setData('alpha', 1, 'end');
                    } 
                }
            });
        }); 
        return fadeEdges;
    }
};



/*
   File: Helpers.js
 
   Helpers are objects that contain rendering primitives (like rectangles, ellipses, etc), for plotting nodes and edges.
   Helpers also contain implementations of the *contains* method, a method returning a boolean indicating whether the mouse
   position is over the rendered shape.
   
   Helpers are very useful when implementing new NodeTypes, since you can access them through *this.nodeHelper* and 
   *this.edgeHelper* <Graph.Plot> properties, providing you with simple primitives and mouse-position check functions.
   
   Example:
   (start code js)
   //implement a new node type
   $jit.Viz.Plot.NodeTypes.implement({
     'customNodeType': {
       'render': function(node, canvas) {
         this.nodeHelper.circle.render ...
       },
       'contains': function(node, pos) {
         this.nodeHelper.circle.contains ...
       }
     }
   });
   //implement an edge type
   $jit.Viz.Plot.EdgeTypes.implement({
     'customNodeType': {
       'render': function(node, canvas) {
         this.edgeHelper.circle.render ...
       },
       //optional
       'contains': function(node, pos) {
         this.edgeHelper.circle.contains ...
       }
     }
   });
   (end code)

*/

/*
   Object: NodeHelper
   
   Contains rendering and other type of primitives for simple shapes.
 */
var NodeHelper = {
  'none': {
    'render': $.empty,
    'contains': $.lambda(false)
  },
  /*
   Object: NodeHelper.circle
   */
  'circle': {
    /*
     Method: render
     
     Renders a circle into the canvas.
     
     Parameters:
     
     type - (string) Possible options are 'fill' or 'stroke'.
     pos - (object) An *x*, *y* object with the position of the center of the circle.
     radius - (number) The radius of the circle to be rendered.
     canvas - (object) A <Canvas> instance.
     
     Example:
     (start code js)
     NodeHelper.circle.render('fill', { x: 10, y: 30 }, 30, viz.canvas);
     (end code)
     */
    'render': function(type, pos, radius, canvas){
      var ctx = canvas.getCtx();
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx[type]();
    },
    /*
    Method: contains
    
    Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.
    
    Parameters:
    
    npos - (object) An *x*, *y* object with the <Graph.Node> position.
    pos - (object) An *x*, *y* object with the position to check.
    radius - (number) The radius of the rendered circle.
    
    Example:
    (start code js)
    NodeHelper.circle.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, 30); //true
    (end code)
    */
    'contains': function(npos, pos, radius){
      var diffx = npos.x - pos.x, 
          diffy = npos.y - pos.y, 
          diff = diffx * diffx + diffy * diffy;
      return diff <= radius * radius;
    }
  },
  /*
  Object: NodeHelper.ellipse
  */
  'ellipse': {
    /*
    Method: render
    
    Renders an ellipse into the canvas.
    
    Parameters:
    
    type - (string) Possible options are 'fill' or 'stroke'.
    pos - (object) An *x*, *y* object with the position of the center of the ellipse.
    width - (number) The width of the ellipse.
    height - (number) The height of the ellipse.
    canvas - (object) A <Canvas> instance.
    
    Example:
    (start code js)
    NodeHelper.ellipse.render('fill', { x: 10, y: 30 }, 30, 40, viz.canvas);
    (end code)
    */
    'render': function(type, pos, width, height, canvas){
      var ctx = canvas.getCtx(),
          scalex = 1,
          scaley = 1,
          scaleposx = 1,
          scaleposy = 1,
          radius = 0;

      if (width > height) {
          radius = width / 2;
          scaley = height / width;
          scaleposy = width / height;
      } else {
          radius = height / 2;
          scalex = width / height;
          scaleposx = height / width;
      }

      ctx.save();
      ctx.scale(scalex, scaley);
      ctx.beginPath();
      ctx.arc(pos.x * scaleposx, pos.y * scaleposy, radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx[type]();
      ctx.restore();
    },
    /*
    Method: contains
    
    Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.
    
    Parameters:
    
    npos - (object) An *x*, *y* object with the <Graph.Node> position.
    pos - (object) An *x*, *y* object with the position to check.
    width - (number) The width of the rendered ellipse.
    height - (number) The height of the rendered ellipse.
    
    Example:
    (start code js)
    NodeHelper.ellipse.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, 30, 40);
    (end code)
    */
    'contains': function(npos, pos, width, height){
      var radius = 0,
          scalex = 1,
          scaley = 1,
          diffx = 0,
          diffy = 0,
          diff = 0;

      if (width > height) {
	      radius = width / 2;
	      scaley = height / width;
      } else {
          radius = height / 2;
          scalex = width / height;
      }

      diffx = (npos.x - pos.x) * (1 / scalex);
      diffy = (npos.y - pos.y) * (1 / scaley);
      diff = diffx * diffx + diffy * diffy;
      return diff <= radius * radius;
    }
  },
  /*
  Object: NodeHelper.square
  */
  'square': {
    /*
    Method: render
    
    Renders a square into the canvas.
    
    Parameters:
    
    type - (string) Possible options are 'fill' or 'stroke'.
    pos - (object) An *x*, *y* object with the position of the center of the square.
    dim - (number) The radius (or half-diameter) of the square.
    canvas - (object) A <Canvas> instance.
    
    Example:
    (start code js)
    NodeHelper.square.render('stroke', { x: 10, y: 30 }, 40, viz.canvas);
    (end code)
    */
    'render': function(type, pos, dim, canvas){
      canvas.getCtx()[type + "Rect"](pos.x - dim, pos.y - dim, 2*dim, 2*dim);
    },
    /*
    Method: contains
    
    Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.
    
    Parameters:
    
    npos - (object) An *x*, *y* object with the <Graph.Node> position.
    pos - (object) An *x*, *y* object with the position to check.
    dim - (number) The radius (or half-diameter) of the square.
    
    Example:
    (start code js)
    NodeHelper.square.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, 30);
    (end code)
    */
    'contains': function(npos, pos, dim){
      return Math.abs(pos.x - npos.x) <= dim && Math.abs(pos.y - npos.y) <= dim;
    }
  },
  /*
  Object: NodeHelper.rectangle
  */
  'rectangle': {
    /*
    Method: render
    
    Renders a rectangle into the canvas.
    
    Parameters:
    
    type - (string) Possible options are 'fill' or 'stroke'.
    pos - (object) An *x*, *y* object with the position of the center of the rectangle.
    width - (number) The width of the rectangle.
    height - (number) The height of the rectangle.
    canvas - (object) A <Canvas> instance.
    
    Example:
    (start code js)
    NodeHelper.rectangle.render('fill', { x: 10, y: 30 }, 30, 40, viz.canvas);
    (end code)
    */
    'render': function(type, pos, width, height, canvas){
      canvas.getCtx()[type + "Rect"](pos.x - width / 2, pos.y - height / 2, 
                                      width, height);
    },
    /*
    Method: contains
    
    Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.
    
    Parameters:
    
    npos - (object) An *x*, *y* object with the <Graph.Node> position.
    pos - (object) An *x*, *y* object with the position to check.
    width - (number) The width of the rendered rectangle.
    height - (number) The height of the rendered rectangle.
    
    Example:
    (start code js)
    NodeHelper.rectangle.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, 30, 40);
    (end code)
    */
    'contains': function(npos, pos, width, height){
      return Math.abs(pos.x - npos.x) <= width / 2
          && Math.abs(pos.y - npos.y) <= height / 2;
    }
  },
  /*
  Object: NodeHelper.triangle
  */
  'triangle': {
    /*
    Method: render
    
    Renders a triangle into the canvas.
    
    Parameters:
    
    type - (string) Possible options are 'fill' or 'stroke'.
    pos - (object) An *x*, *y* object with the position of the center of the triangle.
    dim - (number) Half the base and half the height of the triangle.
    canvas - (object) A <Canvas> instance.
    
    Example:
    (start code js)
    NodeHelper.triangle.render('stroke', { x: 10, y: 30 }, 40, viz.canvas);
    (end code)
    */
    'render': function(type, pos, dim, canvas){
      var ctx = canvas.getCtx(), 
          c1x = pos.x, 
          c1y = pos.y - dim, 
          c2x = c1x - dim, 
          c2y = pos.y + dim, 
          c3x = c1x + dim, 
          c3y = c2y;
      ctx.beginPath();
      ctx.moveTo(c1x, c1y);
      ctx.lineTo(c2x, c2y);
      ctx.lineTo(c3x, c3y);
      ctx.closePath();
      ctx[type]();
    },
    /*
    Method: contains
    
    Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.
    
    Parameters:
    
    npos - (object) An *x*, *y* object with the <Graph.Node> position.
    pos - (object) An *x*, *y* object with the position to check.
    dim - (number) Half the base and half the height of the triangle.
    
    Example:
    (start code js)
    NodeHelper.triangle.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, 30);
    (end code)
    */
    'contains': function(npos, pos, dim) {
      return NodeHelper.circle.contains(npos, pos, dim);
    }
  },
  /*
  Object: NodeHelper.star
  */
  'star': {
    /*
    Method: render
    
    Renders a star (concave decagon) into the canvas.
    
    Parameters:
    
    type - (string) Possible options are 'fill' or 'stroke'.
    pos - (object) An *x*, *y* object with the position of the center of the star.
    dim - (number) The length of a side of a concave decagon.
    canvas - (object) A <Canvas> instance.
    
    Example:
    (start code js)
    NodeHelper.star.render('stroke', { x: 10, y: 30 }, 40, viz.canvas);
    (end code)
    */
    'render': function(type, pos, dim, canvas){
      var ctx = canvas.getCtx(), 
          pi5 = Math.PI / 5;
      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.beginPath();
      ctx.moveTo(dim, 0);
      for (var i = 0; i < 9; i++) {
        ctx.rotate(pi5);
        if (i % 2 == 0) {
          ctx.lineTo((dim / 0.525731) * 0.200811, 0);
        } else {
          ctx.lineTo(dim, 0);
        }
      }
      ctx.closePath();
      ctx[type]();
      ctx.restore();
    },
    /*
    Method: contains
    
    Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.
    
    Parameters:
    
    npos - (object) An *x*, *y* object with the <Graph.Node> position.
    pos - (object) An *x*, *y* object with the position to check.
    dim - (number) The length of a side of a concave decagon.
    
    Example:
    (start code js)
    NodeHelper.star.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, 30);
    (end code)
    */
    'contains': function(npos, pos, dim) {
      return NodeHelper.circle.contains(npos, pos, dim);
    }
  }
};

/*
  Object: EdgeHelper
  
  Contains rendering primitives for simple edge shapes.
*/
var EdgeHelper = {
  /*
    Object: EdgeHelper.line
  */
  'line': {
      /*
      Method: render
      
      Renders a line into the canvas.
      
      Parameters:
      
      from - (object) An *x*, *y* object with the starting position of the line.
      to - (object) An *x*, *y* object with the ending position of the line.
      canvas - (object) A <Canvas> instance.
      
      Example:
      (start code js)
      EdgeHelper.line.render({ x: 10, y: 30 }, { x: 10, y: 50 }, viz.canvas);
      (end code)
      */
      'render': function(from, to, canvas){
        var ctx = canvas.getCtx();
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      },
      /*
      Method: contains
      
      Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.
      
      Parameters:
      
      posFrom - (object) An *x*, *y* object with a <Graph.Node> position.
      posTo - (object) An *x*, *y* object with a <Graph.Node> position.
      pos - (object) An *x*, *y* object with the position to check.
      epsilon - (number) The dimension of the shape.
      
      Example:
      (start code js)
      EdgeHelper.line.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, { x: 15, y: 35 }, 30);
      (end code)
      */
      'contains': function(posFrom, posTo, pos, epsilon) {
        var min = Math.min, 
            max = Math.max,
            minPosX = min(posFrom.x, posTo.x),
            maxPosX = max(posFrom.x, posTo.x),
            minPosY = min(posFrom.y, posTo.y),
            maxPosY = max(posFrom.y, posTo.y);
        
        if(pos.x >= minPosX && pos.x <= maxPosX 
            && pos.y >= minPosY && pos.y <= maxPosY) {
          if(Math.abs(posTo.x - posFrom.x) <= epsilon) {
            return true;
          }
          var dist = (posTo.y - posFrom.y) / (posTo.x - posFrom.x) * (pos.x - posFrom.x) + posFrom.y;
          return Math.abs(dist - pos.y) <= epsilon;
        }
        return false;
      }
    },
  /*
    Object: EdgeHelper.arrow
  */
  'arrow': {
      /*
      Method: render
      
      Renders an arrow into the canvas.
      
      Parameters:
      
      from - (object) An *x*, *y* object with the starting position of the arrow.
      to - (object) An *x*, *y* object with the ending position of the arrow.
      dim - (number) The dimension of the arrow.
      swap - (boolean) Whether to set the arrow pointing to the starting position or the ending position.
      canvas - (object) A <Canvas> instance.
      
      Example:
      (start code js)
      EdgeHelper.arrow.render({ x: 10, y: 30 }, { x: 10, y: 50 }, 13, false, viz.canvas);
      (end code)
      */
    'render': function(from, to, dim, swap, canvas){
        var ctx = canvas.getCtx();
        // invert edge direction
        if (swap) {
          var tmp = from;
          from = to;
          to = tmp;
        }
        var vect = new Complex(to.x - from.x, to.y - from.y);
        vect.$scale(dim / vect.norm());
        var intermediatePoint = new Complex(to.x - vect.x, to.y - vect.y),
            normal = new Complex(-vect.y / 2, vect.x / 2),
            v1 = intermediatePoint.add(normal), 
            v2 = intermediatePoint.$add(normal.$scale(-1));
        
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(v1.x, v1.y);
        ctx.lineTo(v2.x, v2.y);
        ctx.lineTo(to.x, to.y);
        ctx.closePath();
        ctx.fill();
    },
    /*
    Method: contains
    
    Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.
    
    Parameters:
    
    posFrom - (object) An *x*, *y* object with a <Graph.Node> position.
    posTo - (object) An *x*, *y* object with a <Graph.Node> position.
    pos - (object) An *x*, *y* object with the position to check.
    epsilon - (number) The dimension of the shape.
    
    Example:
    (start code js)
    EdgeHelper.arrow.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, { x: 15, y: 35 }, 30);
    (end code)
    */
    'contains': function(posFrom, posTo, pos, epsilon) {
      return EdgeHelper.line.contains(posFrom, posTo, pos, epsilon);
    }
  },
  /*
    Object: EdgeHelper.hyperline
  */
  'hyperline': {
    /*
    Method: render
    
    Renders a hyperline into the canvas. A hyperline are the lines drawn for the <Hypertree> visualization.
    
    Parameters:
    
    from - (object) An *x*, *y* object with the starting position of the hyperline. *x* and *y* must belong to [0, 1).
    to - (object) An *x*, *y* object with the ending position of the hyperline. *x* and *y* must belong to [0, 1).
    r - (number) The scaling factor.
    canvas - (object) A <Canvas> instance.
    
    Example:
    (start code js)
    EdgeHelper.hyperline.render({ x: 10, y: 30 }, { x: 10, y: 50 }, 100, viz.canvas);
    (end code)
    */
    'render': function(from, to, r, canvas){
      var ctx = canvas.getCtx();  
      var centerOfCircle = computeArcThroughTwoPoints(from, to);
      if (centerOfCircle.a > 1000 || centerOfCircle.b > 1000
          || centerOfCircle.ratio < 0) {
        ctx.beginPath();
        ctx.moveTo(from.x * r, from.y * r);
        ctx.lineTo(to.x * r, to.y * r);
        ctx.stroke();
      } else {
        var angleBegin = Math.atan2(to.y - centerOfCircle.y, to.x
            - centerOfCircle.x);
        var angleEnd = Math.atan2(from.y - centerOfCircle.y, from.x
            - centerOfCircle.x);
        var sense = sense(angleBegin, angleEnd);
        ctx.beginPath();
        ctx.arc(centerOfCircle.x * r, centerOfCircle.y * r, centerOfCircle.ratio
            * r, angleBegin, angleEnd, sense);
        ctx.stroke();
      }
      /*      
        Calculates the arc parameters through two points.
        
        More information in <http://en.wikipedia.org/wiki/Poincar%C3%A9_disc_model#Analytic_geometry_constructions_in_the_hyperbolic_plane> 
      
        Parameters:
      
        p1 - A <Complex> instance.
        p2 - A <Complex> instance.
        scale - The Disk's diameter.
      
        Returns:
      
        An object containing some arc properties.
      */
      function computeArcThroughTwoPoints(p1, p2){
        var aDen = (p1.x * p2.y - p1.y * p2.x), bDen = aDen;
        var sq1 = p1.squaredNorm(), sq2 = p2.squaredNorm();
        // Fall back to a straight line
        if (aDen == 0)
          return {
            x: 0,
            y: 0,
            ratio: -1
          };
    
        var a = (p1.y * sq2 - p2.y * sq1 + p1.y - p2.y) / aDen;
        var b = (p2.x * sq1 - p1.x * sq2 + p2.x - p1.x) / bDen;
        var x = -a / 2;
        var y = -b / 2;
        var squaredRatio = (a * a + b * b) / 4 - 1;
        // Fall back to a straight line
        if (squaredRatio < 0)
          return {
            x: 0,
            y: 0,
            ratio: -1
          };
        var ratio = Math.sqrt(squaredRatio);
        var out = {
          x: x,
          y: y,
          ratio: ratio > 1000? -1 : ratio,
          a: a,
          b: b
        };
    
        return out;
      }
      /*      
        Sets angle direction to clockwise (true) or counterclockwise (false). 
         
        Parameters: 
      
           angleBegin - Starting angle for drawing the arc. 
           angleEnd - The HyperLine will be drawn from angleBegin to angleEnd. 
      
        Returns: 
      
           A Boolean instance describing the sense for drawing the HyperLine. 
      */
      function sense(angleBegin, angleEnd){
        return (angleBegin < angleEnd)? ((angleBegin + Math.PI > angleEnd)? false
            : true) : ((angleEnd + Math.PI > angleBegin)? true : false);
      }
    },
    /*
    Method: contains
    
    Not Implemented
    
    Returns *true* if *pos* is contained in the area of the shape. Returns *false* otherwise.
    
    Parameters:
    
    posFrom - (object) An *x*, *y* object with a <Graph.Node> position.
    posTo - (object) An *x*, *y* object with a <Graph.Node> position.
    pos - (object) An *x*, *y* object with the position to check.
    epsilon - (number) The dimension of the shape.
    
    Example:
    (start code js)
    EdgeHelper.hyperline.contains({ x: 10, y: 30 }, { x: 15, y: 35 }, { x: 15, y: 35 }, 30);
    (end code)
    */
    'contains': $.lambda(false)
  }
};


	/*
 * File: Graph.Plot.js
 */

/*
   Object: Graph.Plot

   <Graph> rendering and animation methods.
   
   Properties:
   
   nodeHelper - <NodeHelper> object.
   edgeHelper - <EdgeHelper> object.
*/
Graph.Plot = {
    //Default initializer
    initialize: function(viz, klass){
      this.viz = viz;
      this.config = viz.config;
      this.node = viz.config.Node;
      this.edge = viz.config.Edge;
      this.animation = new Animation;
      this.nodeTypes = new klass.Plot.NodeTypes;
      this.edgeTypes = new klass.Plot.EdgeTypes;
      this.labels = viz.labels;
   },

    //Add helpers
    nodeHelper: NodeHelper,
    edgeHelper: EdgeHelper,
    
    Interpolator: {
        //node/edge property parsers
        'map': {
          'border': 'color',
          'color': 'color',
          'width': 'number',
          'height': 'number',
          'dim': 'number',
          'alpha': 'number',
          'lineWidth': 'number',
          'angularWidth':'number',
          'span':'number',
          'valueArray':'array-number',
          'dimArray':'array-number',
          'vertices':'polygon'
          //'colorArray':'array-color'
        },

        //canvas specific parsers
        'canvas': {
          'globalAlpha': 'number',
          'fillStyle': 'color',
          'strokeStyle': 'color',
          'lineWidth': 'number',
          'shadowBlur': 'number',
          'shadowColor': 'color',
          'shadowOffsetX': 'number',
          'shadowOffsetY': 'number',
          'miterLimit': 'number'
        },

        //label parsers
        'label': {
          'size': 'number',
          'color': 'color'
        },

        //Number interpolator
        'compute': function(from, to, delta) {
          return from + (to - from) * delta;
        },

        //Position interpolators
        'moebius': function(elem, props, delta, vector) {
          var v = vector.scale(-delta);
          if(v.norm() < 1) {
              var x = v.x, y = v.y;
              var ans = elem.startPos
                .getc().moebiusTransformation(v);
              elem.pos.setc(ans.x, ans.y);
              v.x = x; v.y = y;
            }
        },

        'linear': function(elem, props, delta) {
            var from = elem.startPos.getc(true);
            var to = elem.endPos.getc(true);
            elem.pos.setc(this.compute(from.x, to.x, delta),
                          this.compute(from.y, to.y, delta));
        },

        'polar': function(elem, props, delta) {
          var from = elem.startPos.getp(true);
          var to = elem.endPos.getp();
          var ans = to.interpolate(from, delta);
          elem.pos.setp(ans.theta, ans.rho);
        },

        //Graph's Node/Edge interpolators
        'number': function(elem, prop, delta, getter, setter) {
          var from = elem[getter](prop, 'start');
          var to = elem[getter](prop, 'end');
          elem[setter](prop, this.compute(from, to, delta));
        },

        'color': function(elem, prop, delta, getter, setter) {
          var from = $.hexToRgb(elem[getter](prop, 'start'));
          var to = $.hexToRgb(elem[getter](prop, 'end'));
          var comp = this.compute;
          var val = $.rgbToHex([parseInt(comp(from[0], to[0], delta)),
                                parseInt(comp(from[1], to[1], delta)),
                                parseInt(comp(from[2], to[2], delta))]);

          elem[setter](prop, val);
        },

        'array-number': function(elem, prop, delta, getter, setter) {
          var from = elem[getter](prop, 'start'),
              to = elem[getter](prop, 'end'),
              cur = [];
          for(var i=0, l=from.length; i<l; i++) {
            var fromi = from[i], toi = to[i];
            if(fromi.length) {
              for(var j=0, len=fromi.length, curi=[]; j<len; j++) {
                curi.push(this.compute(fromi[j], toi[j], delta));
              }
              cur.push(curi);
            } else {
              cur.push(this.compute(fromi, toi, delta));
            }
          }
          elem[setter](prop, cur);
        },

        'node': function(elem, props, delta, map, getter, setter) {
          map = this[map];
          if(props) {
            var len = props.length;
            for(var i=0; i<len; i++) {
              var pi = props[i];
              this[map[pi]](elem, pi, delta, getter, setter);
            }
          } else {
            for(var pi in map) {
              this[map[pi]](elem, pi, delta, getter, setter);
            }
          }
        },

        'edge': function(elem, props, delta, mapKey, getter, setter) {
            var adjs = elem.adjacencies;
            for(var id in adjs) this['node'](adjs[id], props, delta, mapKey, getter, setter);
        },

        'node-property': function(elem, props, delta) {
          this['node'](elem, props, delta, 'map', 'getData', 'setData');
        },

        'edge-property': function(elem, props, delta) {
          this['edge'](elem, props, delta, 'map', 'getData', 'setData');
        },

        'label-property': function(elem, props, delta) {
          this['node'](elem, props, delta, 'label', 'getLabelData', 'setLabelData');
        },

        'node-style': function(elem, props, delta) {
          this['node'](elem, props, delta, 'canvas', 'getCanvasStyle', 'setCanvasStyle');
        },

        'edge-style': function(elem, props, delta) {
          this['edge'](elem, props, delta, 'canvas', 'getCanvasStyle', 'setCanvasStyle');
        },

        'polygon': function(elem, prop, delta, getter, setter) {
          var from = elem[getter](prop, 'start'),
              to = elem[getter](prop, 'end'),
              cur = [];
          if (typeof from.offset == 'undefined') {
            if (from === 0) {
              from = $.map(to, function() {
                return new $jit.Complex(0, 0);
              });
              from.offset = 0;
            }
            else {
              if (from.length == 0) {
                from.push(new $jit.Complex(0, 0));
              }
              while (from.length < to.length) {
                from.push(from[0]);
              }
              while (from.length > to.length) {
                to.push(to[0] || new $jit.Complex(0, 0));
              }
              if (from.length == 0) return;
              var l = from.length;
              var minDist = 1e300;
              for (var offset = 0; offset < l; offset ++) {
                var d = 0;
                for (var i = 0; i < l; i++) {
                  d +=Geometry.dist2(from[(offset + i) % l], to[i]);
                }
                if (d < minDist) {
                  from.offset = offset;
                  minDist = d;
                }
              }
            }
          }

          for (var i = 0, l = from.length; i < l; i++) {
            var fromi = from[(i + from.offset) % l], toi = to[i];
            cur.push(new $jit.Complex(
                this.compute(fromi.x, toi.x, delta),
                this.compute(fromi.y, toi.y, delta)
            ));
          }
          elem[setter](prop, cur);
        }
    },
    
  
    /*
       sequence
    
       Iteratively performs an action while refreshing the state of the visualization.

       Parameters:

       options - (object) An object containing some sequence options described below
       condition - (function) A function returning a boolean instance in order to stop iterations.
       step - (function) A function to execute on each step of the iteration.
       onComplete - (function) A function to execute when the sequence finishes.
       duration - (number) Duration (in milliseconds) of each step.

      Example:
       (start code js)
        var rg = new $jit.RGraph(options);
        var i = 0;
        rg.fx.sequence({
          condition: function() {
           return i == 10;
          },
          step: function() {
            alert(i++);
          },
          onComplete: function() {
           alert('done!');
          }
        });
       (end code)

    */
    sequence: function(options) {
        var that = this;
        options = $.merge({
          condition: $.lambda(false),
          step: $.empty,
          onComplete: $.empty,
          duration: 200
        }, options || {});

        var interval = setInterval(function() {
          if(options.condition()) {
            options.step();
          } else {
            clearInterval(interval);
            options.onComplete();
          }
          that.viz.refresh(true);
        }, options.duration);
    },
    
    /*
      prepare
 
      Prepare graph position and other attribute values before performing an Animation. 
      This method is used internally by the Toolkit.
      
      See also:
       
       <Animation>, <Graph.Plot.animate>

    */
    prepare: function(modes) {
      var graph = this.viz.graph,
          accessors = {
            'node-property': {
              'getter': 'getData',
              'setter': 'setData'
            },
            'edge-property': {
              'getter': 'getData',
              'setter': 'setData'
            },
            'node-style': {
              'getter': 'getCanvasStyle',
              'setter': 'setCanvasStyle'
            },
            'edge-style': {
              'getter': 'getCanvasStyle',
              'setter': 'setCanvasStyle'
            }
          };

      //parse modes
      var m = {};
      if($.type(modes) == 'array') {
        for(var i=0, len=modes.length; i < len; i++) {
          var elems = modes[i].split(':');
          m[elems.shift()] = elems;
        }
      } else {
        for(var p in modes) {
          if(p == 'position') {
            m[modes.position] = [];
          } else {
            m[p] = $.splat(modes[p]);
          }
        }
      }
      
      graph.eachNode(function(node) { 
        node.startPos.set(node.pos);
        $.each(['node-property', 'node-style'], function(p) {
          if(p in m) {
            var prop = m[p];
            for(var i=0, l=prop.length; i < l; i++) {
              node[accessors[p].setter](prop[i], node[accessors[p].getter](prop[i]), 'start');
            }
          }
        });
        $.each(['edge-property', 'edge-style'], function(p) {
          if(p in m) {
            var prop = m[p];
            node.eachAdjacency(function(adj) {
              for(var i=0, l=prop.length; i < l; i++) {
                adj[accessors[p].setter](prop[i], adj[accessors[p].getter](prop[i]), 'start');
              }
            });
          }
        });
      });
      return m;
    },
    
    /*
       Method: animate
    
       Animates a <Graph> by interpolating some <Graph.Node>, <Graph.Adjacence> or <Graph.Label> properties.

       Parameters:

       opt - (object) Animation options. The object properties are described below
       duration - (optional) Described in <Options.Fx>.
       fps - (optional) Described in <Options.Fx>.
       hideLabels - (optional|boolean) Whether to hide labels during the animation.
       modes - (required|object) An object with animation modes (described below).

       Animation modes:
       
       Animation modes are strings representing different node/edge and graph properties that you'd like to animate. 
       They are represented by an object that has as keys main categories of properties to animate and as values a list 
       of these specific properties. The properties are described below
       
       position - Describes the way nodes' positions must be interpolated. Possible values are 'linear', 'polar' or 'moebius'.
       node-property - Describes which Node properties will be interpolated. These properties can be any of the ones defined in <Options.Node>.
       edge-property - Describes which Edge properties will be interpolated. These properties can be any the ones defined in <Options.Edge>.
       label-property - Describes which Label properties will be interpolated. These properties can be any of the ones defined in <Options.Label> like color or size.
       node-style - Describes which Node Canvas Styles will be interpolated. These are specific canvas properties like fillStyle, strokeStyle, lineWidth, shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY, etc.
       edge-style - Describes which Edge Canvas Styles will be interpolated. These are specific canvas properties like fillStyle, strokeStyle, lineWidth, shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY, etc.

       Example:
       (start code js)
       var viz = new $jit.Viz(options);
       //...tweak some Data, CanvasStyles or LabelData properties...
       viz.fx.animate({
         modes: {
           'position': 'linear',
           'node-property': ['width', 'height'],
           'node-style': 'shadowColor',
           'label-property': 'size'
         },
         hideLabels: false
       });
       //...can also be written like this...
       viz.fx.animate({
         modes: ['linear',
                 'node-property:width:height',
                 'node-style:shadowColor',
                 'label-property:size'],
         hideLabels: false
       });
       (end code)
    */
    animate: function(opt, versor) {
      opt = $.merge(this.viz.config, opt || {});
      var that = this,
          viz = this.viz,
          graph  = viz.graph,
          interp = this.Interpolator,
          animation =  opt.type === 'nodefx'? this.nodeFxAnimation : this.animation;
      //prepare graph values
      var m = this.prepare(opt.modes);
      
      //animate
      if(opt.hideLabels) this.labels.hideLabels(true);
      animation.setOptions($.extend(opt, {
        $animating: false,
        compute: function(delta) {
          graph.eachNode(function(node) { 
            for(var p in m) {
              interp[p](node, m[p], delta, versor);
            }
          });
          that.plot(opt, this.$animating, delta);
          this.$animating = true;
        },
        complete: function() {
          if(opt.hideLabels) that.labels.hideLabels(false);
          that.plot(opt);
          opt.onComplete();
          //TODO(nico): This shouldn't be here!
          //opt.onAfterCompute();
        }       
      })).start();
    },
    
    /*
      nodeFx
   
      Apply animation to node properties like color, width, height, dim, etc.
  
      Parameters:
  
      options - Animation options. This object properties is described below
      elements - The Elements to be transformed. This is an object that has a properties
      
      (start code js)
      'elements': {
        //can also be an array of ids
        'id': 'id-of-node-to-transform',
        //properties to be modified. All properties are optional.
        'properties': {
          'color': '#ccc', //some color
          'width': 10, //some width
          'height': 10, //some height
          'dim': 20, //some dim
          'lineWidth': 10 //some line width
        } 
      }
      (end code)
      
      - _reposition_ Whether to recalculate positions and add a motion animation. 
      This might be used when changing _width_ or _height_ properties in a <Layouts.Tree> like layout. Default's *false*.
      
      - _onComplete_ A method that is called when the animation completes.
      
      ...and all other <Graph.Plot.animate> options like _duration_, _fps_, _transition_, etc.
  
      Example:
      (start code js)
       var rg = new RGraph(canvas, config); //can be also Hypertree or ST
       rg.fx.nodeFx({
         'elements': {
           'id':'mynodeid',
           'properties': {
             'color':'#ccf'
           },
           'transition': Trans.Quart.easeOut
         }
       });
      (end code)    
   */
   nodeFx: function(opt) {
     var viz = this.viz,
         graph  = viz.graph,
         animation = this.nodeFxAnimation,
         options = $.merge(this.viz.config, {
           'elements': {
             'id': false,
             'properties': {}
           },
           'reposition': false
         });
     opt = $.merge(options, opt || {}, {
       onBeforeCompute: $.empty,
       onAfterCompute: $.empty
     });
     //check if an animation is running
     animation.stopTimer();
     var props = opt.elements.properties;
     //set end values for nodes
     if(!opt.elements.id) {
       graph.eachNode(function(n) {
         for(var prop in props) {
           n.setData(prop, props[prop], 'end');
         }
       });
     } else {
       var ids = $.splat(opt.elements.id);
       $.each(ids, function(id) {
         var n = graph.getNode(id);
         if(n) {
           for(var prop in props) {
             n.setData(prop, props[prop], 'end');
           }
         }
       });
     }
     //get keys
     var propnames = [];
     for(var prop in props) propnames.push(prop);
     //add node properties modes
     var modes = ['node-property:' + propnames.join(':')];
     //set new node positions
     if(opt.reposition) {
       modes.push('linear');
       viz.compute('end');
     }
     //animate
     this.animate($.merge(opt, {
       modes: modes,
       type: 'nodefx'
     }));
   },

    
    /*
       Method: plot
    
       Plots a <Graph>.

       Parameters:

       opt - (optional) Plotting options. Most of them are described in <Options.Fx>.

       Example:

       (start code js)
       var viz = new $jit.Viz(options);
       viz.fx.plot(); 
       (end code)

    */
   plot: function(opt, animating) {
     var viz = this.viz, 
         aGraph = viz.graph, 
         canvas = viz.canvas, 
         id = viz.root, 
         that = this, 
         ctx = canvas.getCtx(), 
         min = Math.min,
         opt = opt || this.viz.controller;
     
     opt.clearCanvas && canvas.clear();
       
     var root = aGraph.getNode(id);
     if(!root) return;
     
     var T = !!root.visited;
     aGraph.eachNode(function(node) {
       var nodeAlpha = node.getData('alpha');
       node.eachAdjacency(function(adj) {
         var nodeTo = adj.nodeTo;
         if(!!nodeTo.visited === T && node.drawn && nodeTo.drawn) {
           !animating && opt.onBeforePlotLine(adj);
           that.plotLine(adj, canvas, animating);
           !animating && opt.onAfterPlotLine(adj);
         }
       });
       if(node.drawn) {
         !animating && opt.onBeforePlotNode(node);
         that.plotNode(node, canvas, animating);
         !animating && opt.onAfterPlotNode(node);
       }
       if(!that.labelsHidden && opt.withLabels) {
         if(node.drawn && nodeAlpha >= 0.95) {
           that.labels.plotLabel(canvas, node, opt);
         } else {
           that.labels.hideLabel(node, false);
         }
       }
       node.visited = !T;
     });
    },

  /*
      Plots a Subtree.
   */
   plotTree: function(node, opt, animating) {
       var that = this, 
           viz = this.viz, 
           canvas = viz.canvas,
           config = this.config,
           ctx = canvas.getCtx();
       var nodeAlpha = node.getData('alpha');
       node.eachSubnode(function(elem) {
         if(opt.plotSubtree(node, elem) && elem.exist && elem.drawn) {
             var adj = node.getAdjacency(elem.id);
             !animating && opt.onBeforePlotLine(adj);
             that.plotLine(adj, canvas, animating);
             !animating && opt.onAfterPlotLine(adj);
             that.plotTree(elem, opt, animating);
         }
       });
       if(node.drawn) {
           !animating && opt.onBeforePlotNode(node);
           this.plotNode(node, canvas, animating);
           !animating && opt.onAfterPlotNode(node);
           if(!opt.hideLabels && opt.withLabels && nodeAlpha >= 0.95) 
               this.labels.plotLabel(canvas, node, opt);
           else 
               this.labels.hideLabel(node, false);
       } else {
           this.labels.hideLabel(node, true);
       }
   },

  /*
       Method: plotNode
    
       Plots a <Graph.Node>.

       Parameters:
       
       node - (object) A <Graph.Node>.
       canvas - (object) A <Canvas> element.

    */
    plotNode: function(node, canvas, animating) {
        var f = node.getData('type'), 
            ctxObj = this.node.CanvasStyles;
        if(f != 'none') {
          var width = node.getData('lineWidth'),
              color = node.getData('color'),
              alpha = node.getData('alpha'),
              ctx = canvas.getCtx();
          ctx.save();
          ctx.lineWidth = width;
          ctx.fillStyle = ctx.strokeStyle = color;
          ctx.globalAlpha = alpha;
          
          for(var s in ctxObj) {
            ctx[s] = node.getCanvasStyle(s);
          }

          this.nodeTypes[f].render.call(this, node, canvas, animating);
          ctx.restore();
        }
    },
    
    /*
       Method: plotLine
    
       Plots a <Graph.Adjacence>.

       Parameters:

       adj - (object) A <Graph.Adjacence>.
       canvas - (object) A <Canvas> instance.

    */
    plotLine: function(adj, canvas, animating) {
      var f = adj.getData('type'),
          ctxObj = this.edge.CanvasStyles;
      if(f != 'none') {
        var width = adj.getData('lineWidth'),
            color = adj.getData('color'),
            ctx = canvas.getCtx(),
            nodeFrom = adj.nodeFrom,
            nodeTo = adj.nodeTo;
        
        ctx.save();
        ctx.lineWidth = width;
        ctx.fillStyle = ctx.strokeStyle = color;
        ctx.globalAlpha = Math.min(nodeFrom.getData('alpha'), 
            nodeTo.getData('alpha'), 
            adj.getData('alpha'));
        
        for(var s in ctxObj) {
          ctx[s] = adj.getCanvasStyle(s);
        }

        this.edgeTypes[f].render.call(this, adj, canvas, animating);
        ctx.restore();
      }
    }    
  
};

/*
  Object: Graph.Plot3D
  
  <Graph> 3D rendering and animation methods.
  
  Properties:
  
  nodeHelper - <NodeHelper> object.
  edgeHelper - <EdgeHelper> object.

*/
Graph.Plot3D = $.merge(Graph.Plot, {
  Interpolator: {
    'linear': function(elem, props, delta) {
      var from = elem.startPos.getc(true);
      var to = elem.endPos.getc(true);
      elem.pos.setc(this.compute(from.x, to.x, delta), 
                    this.compute(from.y, to.y, delta),
                    this.compute(from.z, to.z, delta));
    }
  },
  
  plotNode: function(node, canvas) {
    if(node.getData('type') == 'none') return;
    this.plotElement(node, canvas, {
      getAlpha: function() {
        return node.getData('alpha');
      }
    });
  },
  
  plotLine: function(adj, canvas) {
    if(adj.getData('type') == 'none') return;
    this.plotElement(adj, canvas, {
      getAlpha: function() {
        return Math.min(adj.nodeFrom.getData('alpha'),
                        adj.nodeTo.getData('alpha'),
                        adj.getData('alpha'));
      }
    });
  },
  
  plotElement: function(elem, canvas, opt) {
    var gl = canvas.getCtx(),
        viewMatrix = new Matrix4,
        lighting = canvas.config.Scene.Lighting,
        wcanvas = canvas.canvases[0],
        program = wcanvas.program,
        camera = wcanvas.camera;
    
    if(!elem.geometry) {
      elem.geometry = new O3D[elem.getData('type')];
    }
    elem.geometry.update(elem);
    if(!elem.webGLVertexBuffer) {
      var vertices = [],
          faces = [],
          normals = [],
          vertexIndex = 0,
          geom = elem.geometry;
      
      for(var i=0, vs=geom.vertices, fs=geom.faces, fsl=fs.length; i<fsl; i++) {
        var face = fs[i],
            v1 = vs[face.a],
            v2 = vs[face.b],
            v3 = vs[face.c],
            v4 = face.d? vs[face.d] : false,
            n = face.normal;
        
        vertices.push(v1.x, v1.y, v1.z);
        vertices.push(v2.x, v2.y, v2.z);
        vertices.push(v3.x, v3.y, v3.z);
        if(v4) vertices.push(v4.x, v4.y, v4.z);
            
        normals.push(n.x, n.y, n.z);
        normals.push(n.x, n.y, n.z);
        normals.push(n.x, n.y, n.z);
        if(v4) normals.push(n.x, n.y, n.z);
            
        faces.push(vertexIndex, vertexIndex +1, vertexIndex +2);
        if(v4) {
          faces.push(vertexIndex, vertexIndex +2, vertexIndex +3);
          vertexIndex += 4;
        } else {
          vertexIndex += 3;
        }
      }
      //create and store vertex data
      elem.webGLVertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, elem.webGLVertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      //create and store faces index data
      elem.webGLFaceBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elem.webGLFaceBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(faces), gl.STATIC_DRAW);
      elem.webGLFaceCount = faces.length;
      //calculate vertex normals and store them
      elem.webGLNormalBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, elem.webGLNormalBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    }
    viewMatrix.multiply(camera.matrix, elem.geometry.matrix);
    //send matrix data
    gl.uniformMatrix4fv(program.viewMatrix, false, viewMatrix.flatten());
    gl.uniformMatrix4fv(program.projectionMatrix, false, camera.projectionMatrix.flatten());
    //send normal matrix for lighting
    var normalMatrix = Matrix4.makeInvert(viewMatrix);
    normalMatrix.$transpose();
    gl.uniformMatrix4fv(program.normalMatrix, false, normalMatrix.flatten());
    //send color data
    var color = $.hexToRgb(elem.getData('color'));
    color.push(opt.getAlpha());
    gl.uniform4f(program.color, color[0] / 255, color[1] / 255, color[2] / 255, color[3]);
    //send lighting data
    gl.uniform1i(program.enableLighting, lighting.enable);
    if(lighting.enable) {
      //set ambient light color
      if(lighting.ambient) {
        var acolor = lighting.ambient;
        gl.uniform3f(program.ambientColor, acolor[0], acolor[1], acolor[2]);
      }
      //set directional light
      if(lighting.directional) {
        var dir = lighting.directional,
            color = dir.color,
            pos = dir.direction,
            vd = new Vector3(pos.x, pos.y, pos.z).normalize().$scale(-1);
        gl.uniform3f(program.lightingDirection, vd.x, vd.y, vd.z);
        gl.uniform3f(program.directionalColor, color[0], color[1], color[2]);
      }
    }
    //send vertices data
    gl.bindBuffer(gl.ARRAY_BUFFER, elem.webGLVertexBuffer);
    gl.vertexAttribPointer(program.position, 3, gl.FLOAT, false, 0, 0);
    //send normals data
    gl.bindBuffer(gl.ARRAY_BUFFER, elem.webGLNormalBuffer);
    gl.vertexAttribPointer(program.normal, 3, gl.FLOAT, false, 0, 0);
    //draw!
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elem.webGLFaceBuffer );
    gl.drawElements(gl.TRIANGLES, elem.webGLFaceCount, gl.UNSIGNED_SHORT, 0);
  }
});


/*
 * File: Graph.Label.js
 *
*/

/*
   Object: Graph.Label

   An interface for plotting/hiding/showing labels.

   Description:

   This is a generic interface for plotting/hiding/showing labels.
   The <Graph.Label> interface is implemented in multiple ways to provide
   different label types.

   For example, the Graph.Label interface is implemented as <Graph.Label.HTML> to provide
   HTML label elements. Also we provide the <Graph.Label.SVG> interface for SVG type labels. 
   The <Graph.Label.Native> interface implements these methods with the native Canvas text rendering functions.
   
   All subclasses (<Graph.Label.HTML>, <Graph.Label.SVG> and <Graph.Label.Native>) implement the method plotLabel.
*/

Graph.Label = {};

/*
   Class: Graph.Label.Native

   Implements labels natively, using the Canvas text API.
*/
Graph.Label.Native = new Class({
    initialize: function(viz) {
      this.viz = viz;
    },

    /*
       Method: plotLabel

       Plots a label for a given node.

       Parameters:

       canvas - (object) A <Canvas> instance.
       node - (object) A <Graph.Node>.
       controller - (object) A configuration object.
       
       Example:
       
       (start code js)
       var viz = new $jit.Viz(options);
       var node = viz.graph.getNode('nodeId');
       viz.labels.plotLabel(viz.canvas, node, viz.config);
       (end code)
    */
    plotLabel: function(canvas, node, controller) {
      var ctx = canvas.getCtx();
      var pos = node.pos.getc(true);

      ctx.font = node.getLabelData('style') + ' ' + node.getLabelData('size') + 'px ' + node.getLabelData('family');
      ctx.textAlign = node.getLabelData('textAlign');
      ctx.fillStyle = ctx.strokeStyle = node.getLabelData('color');
      ctx.textBaseline = node.getLabelData('textBaseline');

      this.renderLabel(canvas, node, controller);
    },

    /*
       renderLabel

       Does the actual rendering of the label in the canvas. The default
       implementation renders the label close to the position of the node, this
       method should be overriden to position the labels differently.

       Parameters:

       canvas - A <Canvas> instance.
       node - A <Graph.Node>.
       controller - A configuration object. See also <Hypertree>, <RGraph>, <ST>.
    */
    renderLabel: function(canvas, node, controller) {
      var ctx = canvas.getCtx();
      var pos = node.pos.getc(true);
      ctx.fillText(node.name, pos.x, pos.y + node.getData("height") / 2);
    },

    /*
       Method: hideLabel
   
       Hides the corresponding <Graph.Node> label.
    
       Parameters:
   
       node - (object) A <Graph.Node>. Can also be an array of <Graph.Nodes>.
       show - (boolean) If *true*, nodes will be shown. Otherwise nodes will be hidden.
   
       Example:
       (start code js)
        var rg = new $jit.Viz(options);
        viz.labels.hideLabel(viz.graph.getNode('someid'), false);
       (end code)
    */
    hideLabel: function(node, show) {
      node = $.splat(node);
      var al = show ? false : true;
      $.each(node, function(n) {
        n._hideLabel = al;
      });
    },
    hideLabels: $.empty
});

/*
   Class: Graph.Label.DOM

   Abstract Class implementing some DOM label methods.

   Implemented by:

   <Graph.Label.HTML> and <Graph.Label.SVG>.

*/
Graph.Label.DOM = new Class({
    //A flag value indicating if node labels are being displayed or not.
    labelsHidden: false,
    //Label container
    labelContainer: false,
    //Label elements hash.
    labels: {},

    /*
       Method: getLabelContainer

       Lazy fetcher for the label container.

       Returns:

       The label container DOM element.

       Example:

      (start code js)
        var viz = new $jit.Viz(options);
        var labelContainer = viz.labels.getLabelContainer();
        alert(labelContainer.innerHTML);
      (end code)
    */
    getLabelContainer: function() {
      return this.labelContainer ?
        this.labelContainer :
        this.labelContainer = document.getElementById(this.viz.config.labelContainer);
    },

    /*
       Method: getLabel

       Lazy fetcher for the label element.

       Parameters:

       id - (string) The label id (which is also a <Graph.Node> id).

       Returns:

       The label element.

       Example:

      (start code js)
        var viz = new $jit.Viz(options);
        var label = viz.labels.getLabel('someid');
        alert(label.innerHTML);
      (end code)

    */
    getLabel: function(id) {
      return (id in this.labels && this.labels[id] != null) ?
        this.labels[id] :
        this.labels[id] = document.getElementById(id);
    },

    /*
       Method: hideLabels

       Hides all labels (by hiding the label container).

       Parameters:

       hide - (boolean) A boolean value indicating if the label container must be hidden or not.

       Example:
       (start code js)
        var viz = new $jit.Viz(options);
        rg.labels.hideLabels(true);
       (end code)

    */
    hideLabels: function (hide) {
      var container = this.getLabelContainer();
      if(hide)
        container.style.display = 'none';
      else
        container.style.display = '';
      this.labelsHidden = hide;
    },

    /*
       Method: clearLabels

       Clears the label container.

       Useful when using a new visualization with the same canvas element/widget.

       Parameters:

       force - (boolean) Forces deletion of all labels.

       Example:
       (start code js)
        var viz = new $jit.Viz(options);
        viz.labels.clearLabels();
        (end code)
    */
    clearLabels: function(force) {
      for(var id in this.labels) {
        if (force || !this.viz.graph.hasNode(id)) {
          this.disposeLabel(id);
          delete this.labels[id];
        }
      }
    },

    /*
       Method: disposeLabel

       Removes a label.

       Parameters:

       id - (string) A label id (which generally is also a <Graph.Node> id).

       Example:
       (start code js)
        var viz = new $jit.Viz(options);
        viz.labels.disposeLabel('labelid');
       (end code)
    */
    disposeLabel: function(id) {
      var elem = this.getLabel(id);
      if(elem && elem.parentNode) {
        elem.parentNode.removeChild(elem);
      }
    },

    /*
       Method: hideLabel

       Hides the corresponding <Graph.Node> label.

       Parameters:

       node - (object) A <Graph.Node>. Can also be an array of <Graph.Nodes>.
       show - (boolean) If *true*, nodes will be shown. Otherwise nodes will be hidden.

       Example:
       (start code js)
        var rg = new $jit.Viz(options);
        viz.labels.hideLabel(viz.graph.getNode('someid'), false);
       (end code)
    */
    hideLabel: function(node, show) {
      node = $.splat(node);
      var st = show ? "" : "none", lab, that = this;
      $.each(node, function(n) {
        lab = that.getLabel(n.id);
        if (lab) {
          lab.style.display = st;
        }
      });
    },

    /*
       fitsInCanvas

       Returns _true_ or _false_ if the label for the node is contained in the canvas dom element or not.

       Parameters:

       pos - A <Complex> instance (I'm doing duck typing here so any object with _x_ and _y_ parameters will do).
       canvas - A <Canvas> instance.

       Returns:

       A boolean value specifying if the label is contained in the <Canvas> DOM element or not.

    */
    fitsInCanvas: function(pos, canvas) {
      var size = canvas.getSize();
      if (pos.w && pos.h) {
      	if (pos.x >= size.width || pos.x < -pos.w
         || pos.y >= size.height || pos.y < -pos.h) return false;      	
      }
      else {
      	if (pos.x >= size.width || pos.x < 0
         || pos.y >= size.height || pos.y < 0) return false;
      }
       return true;
    }
});

/*
   Class: Graph.Label.HTML

   Implements HTML labels.

   Extends:

   All <Graph.Label.DOM> methods.

*/
Graph.Label.HTML = new Class({
    Implements: Graph.Label.DOM,

    /*
       Method: plotLabel

       Plots a label for a given node.

       Parameters:

       canvas - (object) A <Canvas> instance.
       node - (object) A <Graph.Node>.
       controller - (object) A configuration object.
       
      Example:
       
       (start code js)
       var viz = new $jit.Viz(options);
       var node = viz.graph.getNode('nodeId');
       viz.labels.plotLabel(viz.canvas, node, viz.config);
       (end code)


    */
    plotLabel: function(canvas, node, controller) {
      var id = node.id, tag = this.getLabel(id);

      if(!tag && !(tag = document.getElementById(id))) {
        tag = document.createElement('div');
        var container = this.getLabelContainer();
        tag.id = id;
        tag.className = 'node';
        tag.style.position = 'absolute';
        controller.onCreateLabel(tag, node);
        container.appendChild(tag);
        this.labels[node.id] = tag;
      }

      this.placeLabel(tag, node, controller);
    }
});

/*
   Class: Graph.Label.SVG

   Implements SVG labels.

   Extends:

   All <Graph.Label.DOM> methods.
*/
Graph.Label.SVG = new Class({
    Implements: Graph.Label.DOM,

    /*
       Method: plotLabel

       Plots a label for a given node.

       Parameters:

       canvas - (object) A <Canvas> instance.
       node - (object) A <Graph.Node>.
       controller - (object) A configuration object.
       
       Example:
       
       (start code js)
       var viz = new $jit.Viz(options);
       var node = viz.graph.getNode('nodeId');
       viz.labels.plotLabel(viz.canvas, node, viz.config);
       (end code)


    */
    plotLabel: function(canvas, node, controller) {
      var id = node.id, tag = this.getLabel(id);
      if(!tag && !(tag = document.getElementById(id))) {
        var ns = 'http://www.w3.org/2000/svg';
          tag = document.createElementNS(ns, 'svg:text');
        var tspan = document.createElementNS(ns, 'svg:tspan');
        tag.appendChild(tspan);
        var container = this.getLabelContainer();
        tag.setAttribute('id', id);
        tag.setAttribute('class', 'node');
        container.appendChild(tag);
        controller.onCreateLabel(tag, node);
        this.labels[node.id] = tag;
      }
      this.placeLabel(tag, node, controller);
    }
});



Graph.Geom = new Class({

  initialize: function(viz) {
    this.viz = viz;
    this.config = viz.config;
    this.node = viz.config.Node;
    this.edge = viz.config.Edge;
  },
  /*
    Applies a translation to the tree.
  
    Parameters:
  
    pos - A <Complex> number specifying translation vector.
    prop - A <Graph.Node> position property ('pos', 'start' or 'end').
  
    Example:
  
    (start code js)
      st.geom.translate(new Complex(300, 100), 'end');
    (end code)
  */  
  translate: function(pos, prop) {
     prop = $.splat(prop);
     this.viz.graph.eachNode(function(elem) {
         $.each(prop, function(p) { elem.getPos(p).$add(pos); });
     });
  },
  /*
    Hides levels of the tree until it properly fits in canvas.
  */  
  setRightLevelToShow: function(node, canvas, callback) {
     var level = this.getRightLevelToShow(node, canvas), 
         fx = this.viz.labels,
         opt = $.merge({
           execShow:true,
           execHide:true,
           onHide: $.empty,
           onShow: $.empty
         }, callback || {});
     node.eachLevel(0, this.config.levelsToShow, function(n) {
         var d = n._depth - node._depth;
         if(d > level) {
             opt.onHide(n);
             if(opt.execHide) {
               n.drawn = false; 
               n.exist = false;
               fx.hideLabel(n, false);
             }
         } else {
             opt.onShow(n);
             if(opt.execShow) {
               n.exist = true;
             }
         }
     });
     node.drawn= true;
  },
  /*
    Returns the right level to show for the current tree in order to fit in canvas.
  */  
  getRightLevelToShow: function(node, canvas) {
     var config = this.config;
     var level = config.levelsToShow;
     var constrained = config.constrained;
     if(!constrained) return level;
     while(!this.treeFitsInCanvas(node, canvas, level) && level > 1) { level-- ; }
     return level;
  }
});

/*
 * File: Loader.js
 * 
 */

/*
   Object: Loader

   Provides methods for loading and serving JSON data.
*/
var Loader = {
     construct: function(json) {
        var isGraph = ($.type(json) == 'array');
        var ans = new Graph(this.graphOptions, this.config.Node, this.config.Edge, this.config.Label);
        if(!isGraph) 
            //make tree
            (function (ans, json) {
                ans.addNode(json);
                if(json.children) {
                  for(var i=0, ch = json.children; i<ch.length; i++) {
                    ans.addAdjacence(json, ch[i]);
                    arguments.callee(ans, ch[i]);
                  }
                }
            })(ans, json);
        else
            //make graph
            (function (ans, json) {
                var getNode = function(id) {
                  for(var i=0, l=json.length; i<l; i++) {
                    if(json[i].id == id) {
                      return json[i];
                    }
                  }
                  // The node was not defined in the JSON
                  // Let's create it
                  var newNode = {
                		"id" : id,
                		"name" : id
                	};
                  return ans.addNode(newNode);
                };

                for(var i=0, l=json.length; i<l; i++) {
                  ans.addNode(json[i]);
                  var adj = json[i].adjacencies;
                  if (adj) {
                    for(var j=0, lj=adj.length; j<lj; j++) {
                      var node = adj[j], data = {};
                      if(typeof adj[j] != 'string') {
                        data = $.merge(node.data, {});
                        node = node.nodeTo;
                      }
                      ans.addAdjacence(json[i], getNode(node), data);
                    }
                  }
                }
            })(ans, json);

        return ans;
    },

    /*
     Method: loadJSON
    
     Loads a JSON structure to the visualization. The JSON structure can be a JSON *tree* or *graph* structure.
     
      A JSON tree or graph structure consists of nodes, each having as properties
       
       id - (string) A unique identifier for the node
       name - (string) A node's name
       data - (object) The data optional property contains a hash (i.e {}) 
       where you can store all the information you want about this node.
        
      For JSON *Tree* structures, there's an extra optional property *children* of type Array which contains the node's children.
      
      Example:

      (start code js)
        var json = {  
          "id": "aUniqueIdentifier",  
          "name": "usually a nodes name",  
          "data": {
            "some key": "some value",
            "some other key": "some other value"
           },  
          "children": [ *other nodes or empty* ]  
        };  
      (end code)
        
        JSON *Graph* structures consist of an array of nodes, each specifying the nodes to which the current node is connected. 
        For JSON *Graph* structures, the *children* property is replaced by the *adjacencies* property.
        
        There are two types of *Graph* structures, *simple* and *extended* graph structures.
        
        For *simple* Graph structures, the adjacencies property contains an array of strings, each specifying the 
        id of the node connected to the main node.
        
        Example:
        
        (start code js)
        var json = [  
          {  
            "id": "aUniqueIdentifier",  
            "name": "usually a nodes name",  
            "data": {
              "some key": "some value",
              "some other key": "some other value"
             },  
            "adjacencies": ["anotherUniqueIdentifier", "yetAnotherUniqueIdentifier", 'etc']  
          },

          'other nodes go here...' 
        ];          
        (end code)
        
        For *extended Graph structures*, the adjacencies property contains an array of Adjacency objects that have as properties
        
        nodeTo - (string) The other node connected by this adjacency.
        data - (object) A data property, where we can store custom key/value information.
        
        Example:
        
        (start code js)
        var json = [  
          {  
            "id": "aUniqueIdentifier",  
            "name": "usually a nodes name",  
            "data": {
              "some key": "some value",
              "some other key": "some other value"
             },  
            "adjacencies": [  
            {  
              nodeTo:"aNodeId",  
              data: {} //put whatever you want here  
            },
            'other adjacencies go here...'  
          },

          'other nodes go here...' 
        ];          
        (end code)
       
       About the data property:
       
       As described before, you can store custom data in the *data* property of JSON *nodes* and *adjacencies*. 
       You can use almost any string as key for the data object. Some keys though are reserved by the toolkit, and 
       have special meanings. This is the case for keys starting with a dollar sign, for example, *$width*.
       
       For JSON *node* objects, adding dollar prefixed properties that match the names of the options defined in 
       <Options.Node> will override the general value for that option with that particular value. For this to work 
       however, you do have to set *overridable = true* in <Options.Node>.
       
       The same thing is true for JSON adjacencies. Dollar prefixed data properties will alter values set in <Options.Edge> 
       if <Options.Edge> has *overridable = true*.
       
       When loading JSON data into TreeMaps, the *data* property must contain a value for the *$area* key, 
       since this is the value which will be taken into account when creating the layout. 
       The same thing goes for the *$color* parameter.
       
       In JSON Nodes you can use also *$label-* prefixed properties to refer to <Options.Label> properties. For example, 
       *$label-size* will refer to <Options.Label> size property. Also, in JSON nodes and adjacencies you can set 
       canvas specific properties individually by using the *$canvas-* prefix. For example, *$canvas-shadowBlur* will refer 
       to the *shadowBlur* property.
       
       These properties can also be accessed after loading the JSON data from <Graph.Nodes> and <Graph.Adjacences> 
       by using <Accessors>. For more information take a look at the <Graph> and <Accessors> documentation.
       
       Finally, these properties can also be used to create advanced animations like with <Options.NodeStyles>. For more 
       information about creating animations please take a look at the <Graph.Plot> and <Graph.Plot.animate> documentation.
       
       loadJSON Parameters:
    
        json - A JSON Tree or Graph structure.
        i - For Graph structures only. Sets the indexed node as root for the visualization.

    */
    loadJSON: function(json, i) {
      this.json = json;
      //if they're canvas labels erase them.
      if(this.labels && this.labels.clearLabels) {
        this.labels.clearLabels(true);
      }
      this.graph = this.construct(json);
      if($.type(json) != 'array'){
        this.root = json.id;
      } else {
        this.root = json[i? i : 0].id;
      }
    },
    
    /*
      Method: toJSON
   
      Returns a JSON tree/graph structure from the visualization's <Graph>. 
      See <Loader.loadJSON> for the graph formats available.
      
      See also:
      
      <Loader.loadJSON>
      
      Parameters:
      
      type - (string) Default's "tree". The type of the JSON structure to be returned. 
      Possible options are "tree" or "graph".
    */    
    toJSON: function(type) {
      type = type || "tree";
      if(type == 'tree') {
        var ans = {};
        var rootNode = this.graph.getNode(this.root);
        var ans = (function recTree(node) {
          var ans = {};
          ans.id = node.id;
          ans.name = node.name;
          ans.data = node.data;
          var ch =[];
          node.eachSubnode(function(n) {
            ch.push(recTree(n));
          });
          ans.children = ch;
          return ans;
        })(rootNode);
        return ans;
      } else {
        var ans = [];
        var T = !!this.graph.getNode(this.root).visited;
        this.graph.eachNode(function(node) {
          var ansNode = {};
          ansNode.id = node.id;
          ansNode.name = node.name;
          ansNode.data = node.data;
          var adjs = [];
          node.eachAdjacency(function(adj) {
            var nodeTo = adj.nodeTo;
            if(!!nodeTo.visited === T) {
              var ansAdj = {};
              ansAdj.nodeTo = nodeTo.id;
              ansAdj.data = adj.data;
              adjs.push(ansAdj);
            }
          });
          ansNode.adjacencies = adjs;
          ans.push(ansNode);
          node.visited = !T;
        });
        return ans;
      }
    }
};



/*
 * File: Layouts.js
 * 
 * Implements base Tree and Graph layouts.
 *
 * Description:
 *
 * Implements base Tree and Graph layouts like Radial, Tree, etc.
 * 
 */

/*
 * Object: Layouts
 * 
 * Parent object for common layouts.
 *
 */
var Layouts = $jit.Layouts = {};


//Some util shared layout functions are defined here.
var NodeDim = {
  label: null,
  
  compute: function(graph, prop, opt) {
    this.initializeLabel(opt);
    var label = this.label, style = label.style;
    graph.eachNode(function(n) {
      var autoWidth  = n.getData('autoWidth'),
          autoHeight = n.getData('autoHeight');
      if(autoWidth || autoHeight) {
        //delete dimensions since these are
        //going to be overridden now.
        delete n.data.$width;
        delete n.data.$height;
        delete n.data.$dim;
        
        var width  = n.getData('width'),
            height = n.getData('height');
        //reset label dimensions
        style.width  = autoWidth? 'auto' : width + 'px';
        style.height = autoHeight? 'auto' : height + 'px';
        
        //TODO(nico) should let the user choose what to insert here.
        label.innerHTML = n.name;
        
        var offsetWidth  = label.offsetWidth,
            offsetHeight = label.offsetHeight;
        var type = n.getData('type');
        if($.indexOf(['circle', 'square', 'triangle', 'star'], type) === -1) {
          n.setData('width', offsetWidth);
          n.setData('height', offsetHeight);
        } else {
          var dim = offsetWidth > offsetHeight? offsetWidth : offsetHeight;
          n.setData('width', dim);
          n.setData('height', dim);
          n.setData('dim', dim); 
        }
      }
    });
  },
  
  initializeLabel: function(opt) {
    if(!this.label) {
      this.label = document.createElement('div');
      document.body.appendChild(this.label);
    }
    this.setLabelStyles(opt);
  },
  
  setLabelStyles: function(opt) {
    $.extend(this.label.style, {
      'visibility': 'hidden',
      'position': 'absolute',
      'width': 'auto',
      'height': 'auto'
    });
    this.label.className = 'jit-autoadjust-label';
  }
};


/*
 * Class: Layouts.PhyloJive
 * 
 * Implements a Tree Layout.
 * 
 * Implemented By:
 * 
 * <PhyloJive>
 * 
 * 
 */
Layouts.PhyloJive = (function() {
  //Layout functions
  var slice = Array.prototype.slice;

  /*
     Calculates the max width and height nodes for a tree level
  */  
  function getBoundaries(graph, config, level, orn, prop) {
    var dim = config.Node;
    var multitree = config.multitree;
    if (dim.overridable) {
      var w = -1, h = -1;
      graph.eachNode(function(n) {
        if (n._depth == level
            && (!multitree || ('$orn' in n.data) && n.data.$orn == orn)) {
          var dw = n.getData('width', prop);
          var dh = n.getData('height', prop);
          w = (w < dw) ? dw : w;
          h = (h < dh) ? dh : h;
        }
      });
      return {
        'width' : w < 0 ? dim.width : w,
        'height' : h < 0 ? dim.height : h
      };
    } else {
      return dim;
    }
  }

  function design(graph, node, prop, config, orn) {
    
    var multitree = config.multitree;
    var auxp = [ 'x', 'y' ], auxs = [ 'width', 'height' ];
    var ind = +(orn == "left" || orn == "right");
    var p = auxp[ind], notp = auxp[1 - ind];

    var cnode = config.Node;
    var s = auxs[ind], nots = auxs[1 - ind];

    var siblingOffset = config.siblingOffset;
    var subtreeOffset = config.subtreeOffset;
    var align = config.align;

    var baseZero = function (pos){ 
  var min = Math.abs(Math.min.apply(this,pos)); 
  for(var i = 0;i<pos.length;i++){
     pos[i]+=min;
  }
  return pos;
    };
//   if ( !graph.maxXpos  ) {
    graph.maxXpos = Number.MIN_VALUE;
//   }
  if ( !graph.maxLen && !graph.minLen && !graph.factor){
  var max = Number.MIN_VALUE , min=Number.MAX_VALUE;
  graph.eachNode( function ( node ) {
    if ( node.data.len < min ){
      min = node.data.len;
    }
    if ( node.data.len > max ){
      max = node.data.len;
    }
  });
  graph.minLen = min;
  graph.maxLen = max;
//  TODO:need to remove hard coding.the number is the width of the canvas.
  var constant = ( config.width / graph.depth.length ) ;
//  var constant = ( 600 / graph.depth.length ) * 20;
  graph.factor = ( constant ) / ( graph.maxLen - graph.minLen );
    }
    function $design(node, maxsize, y, xpos) {
      
      var ymin = Number.MAX_VALUE , ymax= Number.MIN_VALUE ;
      var subnodeVisible = false;
      if ( config.branchLength ) {
        xpos += 10 + (graph.factor * node.data.len) *config.branchMultiplier;
      } else {
        xpos += config.levelDistance ;
      }
      
//  if ( node.collapsed != true) {
      node.eachSubnode(function(n){
        if(n.exist){
          subnodeVisible = true;
          y = $design ( n , null , y, xpos);
          if ( ymin > y.ymid ) {
            ymin = y.ymid;
          }
          if ( ymax < y.ymid ) {
            ymax = y.ymid;
          }
        }
      });
//  }
  
  if ( graph.maxXpos < xpos ) {
    graph.maxXpos = xpos;    
    
  }
  if (subnodeVisible){
    y.ymid = node.getPos( prop )['y'] = ( ymax + ymin ) / 2;
  } else {
    y.ymid = y.ymin = y.ymax = node.getPos( prop )['y'] = ( y.ymax + node.getData( s , prop ) + siblingOffset );
  }

  node.getPos( prop )['x'] = xpos;
  
  // show label for the last visible node in the clade
  if ( !node.data.leaf ) {
    var anyChildVisible = true;
    node.eachLevel ( 1, 1 , function ( n ) {
      if ( !n.exist && !n.drawn ){
        anyChildVisible = false;
      }
    });
    if ( !anyChildVisible ) {
      node.data.display = '';
      node.data.$type = 'triangle';
    } else {
      node.data.display = 'none';
      node.data.$type = 'circle';
    }
  }
  
  return y;
    }
    
    $design(node, false, { ymid : 0 , ymin : 0 , ymax : 0 },0);
    graph.maxXpos += (node.data.$dim +10 ) || 0;
  }


  return new Class({
    /*
    Method: compute
    
    Computes nodes' positions.

     */
    compute : function(property, computeLevels) {
      var prop = property || 'start';
      var node = this.graph.getNode(this.root);
      $.extend(node, {
        'drawn' : true,
        'exist' : true,
        'selected' : true
      });
      NodeDim.compute(this.graph, prop, this.config);
      if (!!computeLevels || !("_depth" in node)) {
        this.graph.computeLevels(this.root, 0, "ignore");
      }
      
      this.computePositions(node, prop);
    },

    computePositions : function(node, prop) {
      var config = this.config;
      var multitree = config.multitree;
      var align = config.align;
      var indent = align !== 'center' && config.indent;
      var orn = config.orientation;
      var orns = multitree ? [ 'top', 'right', 'bottom', 'left' ] : [ orn ];
      var that = this;
      $.each(orns, function(orn) {
        //calculate layout
          design(that.graph, node, prop, that.config, orn, prop);
          var i = [ 'x', 'y' ][+(orn == "left" || orn == "right")];
    var prev;
    if(!prev){
    prev = node;  
    }
        });
    },
    
    computeLeaves : function ( node , leaves) {
      var that = this;
      node.eachSubnode ( function (node) {
  leaves += that.computeLeaves( node , 0 );
      });
      if ( node.data.leaf ) {
  return node.data.leaves = 1;
      }
      return node.data.leaves = leaves;
    }
  });
  
})();

/*
 * File: PhyloJive.js
 *
 * © Copyright 2012 Temi.Varghese@csiro.au, Garry.Jolley-Rogers@csiro.au &
 * Joe.Miller@csiro.au as part of the
 * Centre for Australian National Biodiversity Research, Canberra and
 * The Commonwealth Scientific and Industrial Research Organisation, Australia.
 *
 * Newick parsing in this visualization is made possible by jsPhyloSVG by
 * Smits SA, Ouverney CC, 2010. Please see Extras/PhyloJive/jsPhyloSVG/readme.txt
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
/*
  Class: Phylo
  
  A Tree layout with advanced contraction and expansion animations.
    
  Inspired by:

  SpaceTree Visualisation of JIT
  
  Note:

  This visualization was built and engineered from scratch, taking only the papers as inspiration, and only shares some features with the visualization described in those papers.

  Implements:
  
  All <Loader> methods
  
  Constructor Options:
  
  Inherits options from
  
  - <Options.Canvas>
  - <Options.Controller>
  - <Options.Tree>
  - <Options.Node>
  - <Options.Edge>
  - <Options.Label>
  - <Options.Events>
  - <Options.Tips>
  - <Options.NodeStyles>
  - <Options.Navigation>
  
  Additionally, there are other parameters and some default values changed
  
  constrained - (boolean) Default's *true*. Whether to show the entire tree when loaded or just the number of levels specified by _levelsToShow_.
  levelsToShow - (number) Default's *2*. The number of levels to show for a subtree. This number is relative to the selected node.
  levelDistance - (number) Default's *30*. The distance between two consecutive levels of the tree.
  Node.type - Described in <Options.Node>. Default's set to *rectangle*.
  offsetX - (number) Default's *0*. The x-offset distance from the selected node to the center of the canvas.
  offsetY - (number) Default's *0*. The y-offset distance from the selected node to the center of the canvas.
  duration - Described in <Options.Fx>. It's default value has been changed to *700*.
  
  Instance Properties:
  
  canvas - Access a <Canvas> instance.
  graph - Access a <Graph> instance.
  op - Access a <Phylo.Op> instance.
  fx - Access a <Phylo.Plot> instance.
  labels - Access a <Phylo.Label> interface implementation.

*/
$jit.Phylo = (function () {
  // Define some private methods first...
  // Nodes in path
  var nodesInPath = [];
  // Nodes to contract
  function getNodesToHide(node) {
    node = node || this.clickedNode;
    if (!this.config.constrained) {
      return [];
    }
    var i, Geom = this.geom;
    var graph = this.graph;
    var canvas = this.canvas;
    var level = node._depth,
      nodeArray = [];
    graph.eachNode(function (n) {
      if (n.exist && !n.selected) {
        if (n.isDescendantOf(node.id)) {
          if (n._depth <= level) {
            nodeArray.push(n);
          }
        } else {
          nodeArray.push(n);
        }
      }
    });
    var leafLevel = Geom.getRightLevelToShow(node, canvas);
    node.eachLevel(leafLevel, leafLevel, function (n) {
      if (n.exist && !n.selected) {
        nodeArray.push(n);
      }
    });

    for (i = 0; i < nodesInPath.length; i += 1) {
      var n = this.graph.getNode(nodesInPath[i]);
      if (!n.isDescendantOf(node.id)) {
        nodeArray.push(n);
      }
    }
    return nodeArray;
  }
  // Nodes to expand
  function getNodesToShow(node) {
    var nodeArray = [],
      config = this.config;
    node = node || this.clickedNode;
    this.clickedNode.eachLevel(0, config.levelsToShow, function (n) {
      if (config.multitree && !('$orn' in n.data) && n.anySubnode(function (ch) {
        return ch.exist && !ch.drawn;
      })) {
        nodeArray.push(n);
      } else if (n.drawn && !n.anySubnode("drawn")) {
        nodeArray.push(n);
      }
    });
    return nodeArray;
  }
  // Now define the actual class.
  return new Class({

    Implements: [Loader, Extras, Layouts.PhyloJive],

    initialize: function (controller) {
      var $Phylo = $jit.Phylo;

      var config = {
        levelsToShow: 2,
        levelDistance: 30,
        constrained: true,
        Node: {
          type: 'rectangle'
        },
        duration: 700,
        offsetX: 0,
        offsetY: 0
      };

      this.controller = this.config = $.merge(
      Options("Canvas", "Fx", "Tree", "PhyloJive", "Node", "Edge", "Controller", "Tips", "NodeStyles", "Events", "Navigation", "Label"), config, controller);

      var canvasConfig = this.config;
      if (canvasConfig.useCanvas) {
        this.canvas = canvasConfig.useCanvas;
        this.config.labelContainer = this.canvas.id + '-label';
      } else {
        if (canvasConfig.background) {
          canvasConfig.background = $.merge({
            type: 'Circles'
          }, canvasConfig.background);
        }
        this.canvas = new Canvas(this, canvasConfig);
        this.config.labelContainer = (typeof canvasConfig.injectInto === 'string' ? canvasConfig.injectInto : canvasConfig.injectInto.id) + '-label';
      }

      this.graphOptions = {
        'klass': Complex
      };
      this.graph = new Graph(this.graphOptions, this.config.Node, this.config.Edge);
      this.labels = new $Phylo.Label[canvasConfig.Label.type](this);
      this.fx = new $Phylo.Plot(this, $Phylo);
      this.op = new $Phylo.Op(this);
      this.group = new $Phylo.Group(this);
      this.geom = new $Phylo.Geom(this);
      this.clickedNode = null;
      // initialize extras
      this.initializeExtras();
    },
    hasProperty: function (obj) {
      if (typeof obj === 'undefined') {
        return false;
      }
      var i;
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          return true;
        }
      }
      return false;
    },
    sum: function (array) {
      if (!array || array.length === 0) {
        return;
      }
      return $.reduce(array, function (acc, value) {
        return acc + value;
      }, 0);
    },
    //     sumArray : function ( num1 , num2 )  {
    //       if ( !num1 || !num2 || num1.length !== num2.length ) {
    //         return ;
    //       }
    //       var i , result = [];
    //       for ( i = 0 ; i < num1.length ; i += 1 ) {
    //         result.push ( num1 +
    //       }
    //     },
    mean: function (sample) {
      if (!sample || sample.length === 0) {
        return;
      }
      return this.sum(sample) / sample.length;
    },
    wtmean: function (sample, number) {
      if (!sample || sample.length === 0 || !number || number.length === 0 || number.length !== sample.length) {
        return;
      }
      var i, sum = 0,
        count = 0;
      for (i = 0; i < number.length; i += 1) {
        sum += number[i] * sample[i];
        count += number[i];
      }
      return sum / count;
    },
    variance: function (sample) {
      if (!sample || sample.length === 0) {
        return;
      }
      var avg, num, total;
      avg = this.mean(sample);
      num = sample.length;
      total = $.reduce(sample, function (acc, value) {
        var diff = value - avg;
        return acc + diff * diff;
      }, 0);
      return total / num;
    },
    sd: function (sample) {
      if (!sample || sample.length === 0) {
        return;
      }
      return Math.sqrt(this.variance(sample));
    },
    square: function (num) {
      return $jit.util.map(num, function (elem) {
        return elem * elem;
      });
    },
    multiply: function (num1, num2) {
      if (!num1 || !num2 || num1.length !== num2.length) {
        return;
      }
      var i, result = [];
      for (i = 0; i < num1.length; i += 1) {
        result.push(num1[i] * num2[i]);
      }
      return result;
    },
    variancePop: function (num, sd, ui, up) {
      if (!num || !sd || !ui || num.length !== sd.length || sd.length !== ui.length) {
        return;
      }
      if (num.length === 1) {
        return 0;
      }
      var sumNum = this.sum(num),
        sqUp = up * up,
        lessNum, sqSd, sqUi;
      lessNum = $jit.util.map(num, function (elem) {
        return elem - 1;
      });
      sqSd = this.square(sd);
      sqUi = this.square(ui);
      return (this.sum(this.multiply(lessNum, sqSd)) + this.sum(this.multiply(num, sqUi)) - sumNum * sqUp) / (sumNum - 1);
    },
    sdPop: function (num, sd, ui, up) {
      if (!num || !sd || !ui || num.length !== sd.length || sd.length !== ui.length) {
        return;
      }
      return Math.sqrt(this.variancePop(num, sd, ui, up));
    },
    meanPop: function (ni, ui) {
      if (!ni || !ui || ni.length != ui.length) {
        return;
      }
      return this.sum(this.multiply(ni, ui)) / this.sum(ni);
    },
    isQuant: function (data) {
      if (typeof data[0] === 'number') {
        return true;
      } else {
        return false;
      }
    },
    isQuali: function (data) {
      if (typeof data[0] === 'string') {
        return true;
      } else {
        return false;
      }
    },
    characterType: function (data, testcase) {
      if (!data || data.length === 0) {
        return;
      }
      switch (testcase) {
      case "quant":
        return this.isQuant(data);
        break;
      case "quali":
        return this.isQuali(data);
        break;
      }
    },
    intersect: function (setA, setB) {
      if (!setA || !setB || setA.length === 0 || setB.length === 0) {
        return [];
      }
      /*else if ( !setA || setA.length == 0 ) {
        return setB;
      } else if ( !setB || setB.length == 0 ) {
        return setA;
      }*/
      var hashA = {},
        i, result = [];
      for (i = 0; i < setA.length; i += 1) {
        hashA[setA[i]] = true;
      }
      for (i = 0; i < setB.length; i += 1) {
        if (hashA[setB[i]]) {
          result.push(setB[i]);
        }
      }
      return result;
    },
    union: function (setA, setB) {
      setA = setA || [];
      setB = setB || [];
      var i, j, sets = [setA, setB],
        char, union = {};
      for (i = 0; i < sets.length; i += 1) {
        char = sets[i];
        for (j = 0; j < char.length; j += 1) {
          union[char[j]] = char[j];
        }
      }
      char = [];
      for (i in union) {
        if (union.hasOwnProperty(i)) {
          char.push(union[i]);
        }
      }
      return char;
    },
    setCollapsed: function (node) {
      if (node.data.$type === 'triangle') {
        node.collapsed = true;
      } else {
        node.collapsed = false;
      }
    },
    nodesExpCol: function (node) {
      var level = 0;
      if (node.collapsed) {
        node.eachSubgraph(function (elem) {
          if (!elem.exist) {
            elem.exist = true;
            elem.drawn = true;
          }
          if (!elem.data.leaf) {
            elem.data.$type = 'circle';
          } else {
            elem.data.$type = 'none';
          }
          elem.collapsed = false;
          if (level < elem._depth) {
            level = elem._depth + 1;
          }
        });
        if (!node.data.leaf) {
          node.data.$type = 'circle';
        } else {
          node.data.$type = 'none';
        }
      } else {
        node.eachSubgraph(function (elem) {
          elem.exist = false;
          elem.drawn = false;
          if (!elem.data.leaf) {
            elem.data.$type = 'circle';
          } else {
            elem.data.$type = 'none';
          }
          elem.collapsed = true;
        });
        node.exist = true;
        node.drawn = true;
        level = false;
        if (!node.data.leaf) {
          node.data.$type = 'triangle';
        } else {
          node.data.$type = 'none';
        }
      }
      return level;
    },
    fitchParsimony: function (node, characterList) {
      function downPass(node) {
        var childrenChar = {},
          key, i, j;
        node.eachSubnode(function (snode) {
          char = downPass(snode);
          for (i = 0; i < characterList.length; i += 1) {
            key = characterList[i];
            childrenChar[key] = childrenChar[key] || [];
            childrenChar[key].push(char[key]);
          }
          //           childrenChar.push( char );
        });
        if (node.data.leaf) {
          return node.data.character || [];
          //           return node.data.colorCharacter ;
        }
        var parentChar = {};
        for (j = 0; j < characterList.length; j += 1) {
          key = characterList[j];
          // find intersection
          var intersection = childrenChar[key][0] || [],
            union = {};
          for (i = 0; i < childrenChar[key].length; i += 1) {
            char = childrenChar[key][i] || [];
            intersection = that.intersect(intersection, char);
          }
          if (intersection.length > 0) {
            parentChar[key] = intersection;
          } else {
            // union
            char = childrenChar[key][0] || []
            for (i = 1; i < childrenChar[key].length; i += 1) {
              char = that.union(char, childrenChar[key][i]);
            }
            parentChar[key] = char;
            //change shape of node to indicate union
            /*        node.data.$type = 'square';
              node.data.$dim = 10;*/
          }
        }
        node.data.colorCharacter = parentChar[that.config.firstCharacter];
        return node.data.character = parentChar;
      }

      function upPass(node) {
        function $upPass(n) {
          if (n.data.leaf) {
            return;
          }
          var key, morphData = n.data.character,
            p = n.getParents()[0],
            fp, i;

          for (key in morphData) {
            if (morphData.hasOwnProperty(key)) {
              var sp = morphData[key],
                fa = p.data.character[key];
              fp = that.intersect(sp, fa);
              if (fp.length !== fa.length) {
                var cIntersect;
                n.eachSubnode(function (subn) {
                  if (!cIntersect) {
                    cIntersect = subn.data.character[key];
                    return;
                  }
                  cIntersect = that.intersect(cIntersect, subn.data.character[key]);
                });
                if (cIntersect && cIntersect.length !== 0) {
                  var cUnion = [],
                    aIntersect;
                  n.eachSubnode(function (subn) {
                    cUnion = that.union(cUnion, subn.data.character[key]);
                  });
                  aIntersect = that.intersect(cUnion, fa);
                  fp = that.union(aIntersect, n.data.character[key]);
                } else {
                  fp = that.union(n.data.character[key], fa);
                }
              }
              n.data.character[key] = fp;
            }
          }
          n.eachSubnode(function (sn) {
            $upPass(sn);
          });
          n.data.colorCharacter = n.data.character[that.config.firstCharacter];
        }
        //         var that = this;
        node.eachSubnode(function (n) {
          $upPass(n);
        });
        return [];
      };

      if (characterList && characterList.length != 0) {
        var i, char, j, that = this,
          result;
        downPass(node);
        upPass(node);
      }

    },
    setCharacter: function (firstCharacter) {
      firstCharacter = firstCharacter || this.config.firstCharacter;
      if (!firstCharacter) {
        return;
      }
      var speciesHash = this.character,
        speciesName, char, i;
      for (i in this.graph.nodes) {
        if (this.graph.nodes.hasOwnProperty(i)) {
          var node = this.graph.nodes[i];
          node.data.character = {};
          if (node.data.leaf) {
            for (key in speciesHash) {
              if (speciesHash.hasOwnProperty(key)) {
                var speciesCharacter = speciesHash[key][firstCharacter];
                if (node.name === key) {
                  node.data.colorCharacter = speciesCharacter;
                  node.data.character = speciesHash[key];
                  break;
                }
              }
            }
          }
        }
      }
    },
    sdAtTree: function (root, characters) {
      var samples = {},
        char, result = {};
      for (i = 0; i < characters.length; i += 1) {
        samples[characters[i]] = [];
      }
      root.eachSubgraph(function (node) {
        if (node.data.leaf) {
          for (i = 0; i < characters.length; i += 1) {
            char = characters[i];
            if (node.data.character[char] && typeof node.data.character[char][0] !== "undefined") {
              samples[char].push(node.data.character[char][0]);
            }
          }
        }
      });
      for (i = 0; i < characters.length; i += 1) {
        char = characters[i];
        result[char] = this.sd(samples[char]);
      }
      return result;
    },
    varianceAtTree: function (root, characters) {
      var samples = {},
        char, result = {};
      for (i = 0; i < characters.length; i += 1) {
        samples[characters[i]] = [];
      }
      root.eachSubgraph(function (node) {
        if (node.data.leaf) {
          for (i = 0; i < characters.length; i += 1) {
            char = characters[i];
            if (node.data.character[char] && typeof node.data.character[char][0] !== "undefined") {
              samples[char].push(node.data.character[char][0]);
            }
          }
        }
      });
      for (i = 0; i < characters.length; i += 1) {
        char = characters[i];
        result[char] = this.variance(samples[char]);
      }
      return result;
    },
    meanAtTree: function (root, characters) {
      var samples = {},
        char, result = {};
      for (i = 0; i < characters.length; i += 1) {
        samples[characters[i]] = {
          value: [],
          number: []
        };
      }
      root.eachSubgraph(function (node) {
        if (node.data.leaf) {
          for (i = 0; i < characters.length; i += 1) {
            char = characters[i];
            if (node.data.character[char] && typeof node.data.character[char][0] !== "undefined") {
              samples[char].value.push(node.data.character[char][0]);
              samples[char].number.push(1);
            }
          }
        }
      });
      for (i = 0; i < characters.length; i += 1) {
        char = characters[i];
        result[char] = this.wtmean(samples[char].value, samples[char].number);
      }
      return result;
    },
    checkQuant: function (characters) {
      var n = this.config.threshold,
        root = this.graph.getNode(this.root),
        meanTree = this.meanAtTree(root, characters),
        //         varTree = this.varianceAtTree( root , characters ),
        sdTree = this.sdAtTree(root, characters),
        i, that = this,
        count = 0;

      function compareFunction(mean, sd, mTree, sTree) {
        var test1 = Math.abs(mean - mTree) > sTree;
        var test2 = sd > sTree;
        return !(test1 && test2);
      }
      (function $checkQuant(node) {
        var childrenValues = {},
          result, sd = {},
          ui = {},
          num = {},
          ans, char;
        node.data.characterConsistency = node.data.characterConsistency || {};
        node.data.stat = {};
        for (i = 0; i < characters.length; i += 1) {
          char = characters[i];
          childrenValues[characters[i]] = [];
          node.data.stat[characters[i]] = {
            sd: undefined,
            u: undefined,
            n: undefined
          };
          sd[char] = [];
          ui[char] = [];
          num[char] = [];
        }
        node.eachSubnode(function (n) {
          ans = $checkQuant(n);
          result = ans.character;
          for (i = 0; i < characters.length; i += 1) {
            if (result[characters[i]] && typeof result[characters[i]][0] !== "undefined") {
              childrenValues[characters[i]].push(result[characters[i]][0]);
              sd[characters[i]].push(ans.stat[characters[i]].sd);
              ui[characters[i]].push(ans.stat[characters[i]].u);
              num[characters[i]].push(ans.stat[characters[i]].n);
            }
          }
        });
        if (!node.data.leaf) {
          for (i = 0; i < characters.length; i += 1) {
            char = characters[i];
            if (childrenValues[char].length !== 0) {
              node.data.stat[char].u = that.meanPop(num[char], ui[char]);
              node.data.character[char] = [node.data.stat[char].u];
              node.data.stat[char].n = that.sum(num[char]);
              node.data.stat[char].sd = that.sdPop(num[char], sd[char], ui[char], node.data.stat[characters[i]].u);
              result = compareFunction(node.data.stat[char].u, node.data.stat[char].sd, meanTree[char], sdTree[char]);
            } else {
              node.data.stat[char] = {
                sd: undefined,
                u: undefined,
                n: undefined
              };
              result = true;
            }

            node.data.characterConsistency[char] = result;
          }
        } else {
          for (i = 0; i < characters.length; i += 1) {
            result = node.data.character;
            if (result[characters[i]] && typeof result[characters[i]][0] !== "undefined") {
              node.data.stat[characters[i]] = {
                sd: 0,
                u: result[characters[i]][0],
                n: 1
              };
            } else {
              node.data.stat[characters[i]] = {
                sd: undefined,
                u: undefined,
                n: undefined
              };
            }
          }
        }
        return node.data;
      })(root);
    },
    checkQuali: function (characters) {
      var root = this.graph.getNode(this.root),
        i, that = this;

      function compareFunction(sample) {
        var test1 = sample[0],
          test2;
        for (var j = 0; j < sample.length; j += 1) {
          test2 = sample[j];
          var result = that.intersect(test1, test2);
          if (result.length !== test1.length || result.length !== test2.length) {
            return false;
          }
          test1 = result;
        }
        return true;
      }(function $checkQuali(node) {
        var childrenValues = {},
          result;
        node.data.characterConsistency = node.data.characterConsistency || {};
        for (i = 0; i < characters.length; i += 1) {
          childrenValues[characters[i]] = [];
        }
        node.eachSubnode(function (n) {
          result = $checkQuali(n);
          for (i = 0; i < characters.length; i += 1) {
            if (result[characters[i]]) {
              childrenValues[characters[i]].push(result[characters[i]]);
            }
          }
        });
        if (!node.data.leaf) {
          for (i = 0; i < characters.length; i += 1) {
            var char = characters[i];
            result = compareFunction(childrenValues[char]);
            node.data.characterConsistency[char] = result;
          }
        }
        return node.data.character;
      })(root);
    },
    quantParsimony: function (root, characters) {
      var methods = this.calcMethods;
      //       this.sdOfTree = this.sdAtTree ( root , characters );
      (function $quantParsimony(node) {
        var childrenValues = {};
        for (i = 0; i < characters.length; i += 1) {
          childrenValues[characters[i]] = [];
        }
        node.eachSubnode(function (n) {
          var result = $quantParsimony(n);
          for (i = 0; i < characters.length; i += 1) {
            if (result[characters[i]] && typeof result[characters[i]][0] !== "undefined") {
              childrenValues[characters[i]].push(result[characters[i]][0]);
            }
          }
        });
        if (!node.data.leaf) {
          for (i = 0; i < characters.length; i += 1) {
            var char = characters[i];
            var value = node.data.character[char];
            var mean = st.mean(childrenValues[char]);
            node.data.character[char] = [mean];
          }
        }
        return node.data.character;
      })(root);
    },
    listCharacters: function () {
      var aSpecies, i, result = [];
      for (aSpecies in this.character) {
        for (i in this.character[aSpecies]) {
          result.push(i);
        }
        return result;
      }
    },
    findAllCharTypes: function (root) {
      var type = {
        quant: [],
        quali: []
      },
        all = [],
        quali = {},
        quant = {},
        key, that = this,
        first = this.config.firstCharacter,
        charTypeMapping = {},
        i;
      if (all && all.length === 0) {
        all = this.listCharacters();
        if ( this.config.selectedCharacters.length !== 0 ) {
          // if the first character is not defined
          if ( typeof this.config.selectedCharacters [ 0 ] === 'undefined' ) {
            this.config.selectedCharacters [ 0 ] = all [ 0 ];
          }
          this.config.firstCharacter = this.config.selectedCharacters [ 0 ];
        } else if ( all.length !== 0  ) {
          this.config.selectedCharacters = [ all [ 0 ] ];
          this.config.firstCharacter = all [ 0 ];              
        }
      }
      if (all && all.length !== 0) {
        root.eachSubgraph(function (node) {
          if (node.data.leaf) {
            //           for ( key in node.data.character ){
            for (i = 0; i < all.length; i += 1) {
              key = all[i];
              //               if ( node.data.character.hasOwnProperty ( key ) ) {
              if (that.characterType(node.data.character[key], 'quali')) {
                quali[key] = true;
                charTypeMapping[key] = that.config.typeEnum.quali;
              } else if (that.characterType(node.data.character[key], 'quant')) {
                quant[key] = true;
                charTypeMapping[key] = that.config.typeEnum.quant;
              }
              //               }
            }
          }
        });
      }
      /*      if ( this.character && this.hasProperty ( this.character )) { 
        all.push ( first ) ;         
      }*/
      for (key in quali) {
        if (quali.hasOwnProperty(key)) {
          type.quali.push(key);
          /*           if ( key !== first ) {
              all.push ( key );
           }*/
        }
      }
      for (key in quant) {
        if (quant.hasOwnProperty(key)) {
          type.quant.push(key);
          /*           if ( key !== first ) {
              all.push ( key );
           }*/
        }
      }
      this.characterList = all;
      this.charTypeMapping = charTypeMapping;
      return type;
    },
    findQuantMinMax: function (root, quantCharacters) {
      var char, min, max, result = {},
        i;
      for (i = 0; i < quantCharacters.length; i += 1) {
        char = quantCharacters[i];
        result[char] = result[char] || {};
        result[char].min = min = Number.MAX_VALUE;
        result[char].max = max = Number.MIN_VALUE;
        root.eachSubgraph(function (node) {
          if (node.data.leaf) {
            var charState = node.data.character[char] && node.data.character[char][0];
            if (typeof charState !== 'undefined') {
              min = min < charState ? min : charState;
              max = max > charState ? max : charState;
            }
          }
        });
        result[char].min = min;
        result[char].max = max;
      }
      return result;
    },
    findQuantRange: function (quantMinMax) {
      var result = {},
        char, rangeCount = this.config.rangeCount,
        stepsize, i;
      for (char in quantMinMax) {
        if (quantMinMax.hasOwnProperty(char)) {
          var min = quantMinMax[char].min,
            max = quantMinMax[char].max;
          stepsize = (max - min) / rangeCount;
          result[char] = [];
          for (i = 1; i <= rangeCount; i += 1) {
            result[char].push((min + i * stepsize).toFixed(2));
          }
        }
      }
      return result;
    },
    colorCharacter: function (colorOverwrite) {
      var speciesHash = this.character,
        speciesName, char, i, that = this,
        box, node, characterValue, j, html;
      if ( this.hasProperty ( speciesHash ) ) {
        var rootNode = this.graph.getNode(this.root),
          string;
        var color = this.config.color;
        var distinct = {};
        var legendColorCollection = {};
        var pointerCollection = {};
        var legendCollection = {};
        var pointer = 0;
        var legendRows = '',
          multiple = false,
          firstCharacter, firstSpecies;

        //get character list
        var characterKey = [];
        for (speciesName in speciesHash) {
          if (speciesHash.hasOwnProperty(speciesName)) {
            for (char in speciesHash[speciesName]) {
              if (speciesHash[speciesName].hasOwnProperty(char)) {
                characterKey.push(char);
              }
            }
            break;
          }
        }

        function $colorCharacter(root, characterColorCollection) {
          var firstCharacter = that.config.firstCharacter,
            key, charArray, char, i, quantColor = that.config.quantColor,
            currentAdj;
          root.eachSubgraph(function (node) {
            node.data.color = node.data.color || {};

            // delete all colors
            for (adj in node.adjacencies) {
              if (node.adjacencies.hasOwnProperty(adj)) {
                currentAdj = node.adjacencies[adj];
                currentAdj.data && delete currentAdj.data.$color;
                //                 //adj.data && delete adj.data.$color;
              }
            }


            for (i = 0; i < that.characterGroups.quali.length; i += 1) {
              char = that.characterGroups.quali[i];
              charArray = node.data.character[char];
              key = charArray && charArray.length === 1 && charArray[0] || '';

              if (key) {
                key = key.replace(/ /g, '');
                node.data.color[char] = characterColorCollection[char].color;
                if (char === firstCharacter) {
                  for (adj in node.adjacencies) {
                    if (node.adjacencies.hasOwnProperty(adj)) {
                      currentAdj = node.adjacencies[adj];
                      var nodeTo = node.adjacencies[adj].nodeTo;
                      var nodeFrom = node.adjacencies[adj].nodeFrom;
                      if (nodeTo._depth < node._depth || nodeFrom._depth < node._depth) {
                        if (charArray.length === 1) {
                          currentAdj.data.$color = characterColorCollection[firstCharacter][charArray[0]].color;
                          break;
                        } else {
                          delete currentAdj.data.$color;
                        }
                      }
                    }
                  }
                }
              } else {
                node.data.color[char] = characterColorCollection[char]['multiple'];
              }
            }
            for (i = 0; i < that.characterGroups.quant.length; i += 1) {
              char = that.characterGroups.quant[i];
              charArray = node.data.character[char];
              key = charArray && charArray.length === 1 && charArray[0] || '';

              if (key) {
                var rangeArray = that.range[char];
                var index = that.findIndex(key, rangeArray);
                //                 node.data.color[ char ] = characterColorCollection [ char ][ index ];
                node.data.color[char] = quantColor[index];
                if (char === firstCharacter) {
                  for (adj in node.adjacencies) {
                    if (node.adjacencies.hasOwnProperty(adj)) {
                      var currentAdj = node.adjacencies[adj];
                      var nodeTo = node.adjacencies[adj].nodeTo;
                      var nodeFrom = node.adjacencies[adj].nodeFrom;
                      if (nodeTo._depth < node._depth || nodeFrom._depth < node._depth) {
                        if (charArray.length === 1) {
                          //                           currentAdj.data.$color = characterColorCollection [ firstCharacter ][ key ];
                          currentAdj.data.$color = quantColor[index];
                          break;
                        } else {
                          delete currentAdj.data.$color;
                        }
                      }
                    }
                  }
                }
              }
            }
          });
        }
        //append to legend table
        distinct = legendColorCollection[firstCharacter];
        if (!this.config.initCharacter) {
          this.setCharacter(this.config.firstCharacter);
          this.config.initCharacter = true;
        }
        this.characterGroups = this.findAllCharTypes(rootNode);
        this.fitchParsimony(rootNode, this.characterGroups.quali);
        this.quantParsimony(rootNode, this.characterGroups.quant);
        this.checkQuali(this.characterGroups.quali);
        this.checkQuant(this.characterGroups.quant);
        this.characterMinMax = this.findQuantMinMax(rootNode, this.characterGroups.quant);
        this.range = this.findQuantRange(this.characterMinMax);
        html = this.createLegend();
        $colorCharacter(this.graph.getNode(this.root), this.colorCoding);
        return html;

      }
    },
    findDistinctCharacterStates: function (character) {
      var i, result = [],
        temp = {},
        node, char, j;

      for (i in this.graph.nodes) {
        if (this.graph.nodes.hasOwnProperty(i)) {
          node = this.graph.nodes[i];
          char = node.data.character[character];
          if (node.data.leaf && char) {
            for (j = 0; j < char.length; j++) {
              temp[char[j]] = character;
            }
          }
        }
      }

      for (i in temp) {
        if (temp.hasOwnProperty(i)) {
          result.push(i);
        }
      }
      return {
        hash: temp,
        array: result
      };
    },
    createLegend: function () {


      // find distinct character states for different characters
      var list, root, i, char, temp = {},
        ds = {},
        j, dschar, sh, jj, shapes = this.config.shapes,
        dsAlt = {},
        dscharAlt, color = this.config.color,
        shapePointer = 0,
        rangeArray, label, quantColor = this.config.quantColor,
        quantShape = this.config.quantShape,
        heading, content;
      root = this.graph.getNode(this.root);
      list = this.characterGroups.quali;

      // qualitative characters
      if (!list) {
        this.findAllCharTypes(root);
        list = this.characterGroups.quali;
      }
      if (list) {
        for (i = 0; i < list.length; i += 1) {
          char = list[i];
          temp[char] = this.findDistinctCharacterStates(char).array;
          temp[char] && temp[char].push('multiple');
        }
      }
      for (i in temp) {
        if (temp.hasOwnProperty(i)) {
          char = temp[i];
          dschar = [];
          dscharAlt = {};
          for (j = 0; j < char.length; j += 1) {
            jj = color.length > j ? j : color.length - 1;
            sh = shapes.length > shapePointer ? shapePointer : shapes.length - 1;
            dschar.push({
              color: color[jj],
              name: char[j],
              shape: shapes[sh]
            });
            dscharAlt[char[j]] = {
              color: color[jj],
              shape: shapes[sh]
            };
          }
          ds[i] = dschar;
          dsAlt[i] = dscharAlt;
          shapePointer++;
        }
      }

      // quantitative characters
      for (i = 0; i < this.characterGroups.quant.length; i += 1) {
        char = this.characterGroups.quant[i];
        rangeArray = this.range[char];
        dschar = [];
        dscharAlt = {};
        for (j = 0; j < rangeArray.length; j += 1) {
          //           jj = color.length > j ? j : color.length - 1;
          jj = quantColor.length > j ? j : quantColor.length - 1;
          sh = shapes.length > shapePointer ? shapePointer : shapes.length - 1;
          label = (j === 0 ? this.characterMinMax[char].min.toFixed(2) : rangeArray[j - 1]) + ' - ' + rangeArray[j];
          /*          dschar.push ({ color: color[jj], name: label , shape: shapes [ sh ] });
          dscharAlt[label] = {color: color[jj],shape: shapes [ sh ] };*/
          dschar.push({
            color: quantColor[j],
            name: label,
            shape: quantShape
          });
          dscharAlt[label] = {
            color: quantColor[j],
            shape: quantShape
          };

        }
        ds[char] = dschar;
        dsAlt[char] = dscharAlt;
        shapePointer++;
      }

      // formatting
      heading = '';
      content = '';
      //       list = this.characterList;
      list = this.config.selectedCharacters;
      for (i = 0; i < list.length; i += 1) {
        label = '';
        char = list[i];
        if ( typeof char !== 'undefined' ) {
          dschar = ds[char] || [];
          heading = '<tr><th colspan="2">' + char.replace(/_/g, ' ') + '</th></tr>';
          for (j = 0; j < dschar.length; j += 1) {
            sh = dschar[j];
            label += '<tr><td><div class ="' + sh.shape + '" style="background-color:' + sh.color + ';"></div></td><td>' + sh.name + '</td></tr>';
          }
          if (label) {
            content += heading + label;
          }
        }
      }
      this.colorCoding = dsAlt;
      this.colorCodingQuali = ds;
      return content;
    },
    findIndex: function (value, rangeArray) {
      var i;
      if (typeof value === 'undefined' || typeof rangeArray === 'undefined') {
        return;
      }
      for (i = 0; i < rangeArray.length; i += 1) {
        if (value <= rangeArray[i]) {
          break;
        }
      }
      return i === rangeArray.length ? i - 1 : i;
    },
    /*
        Method: plot
        
        Plots the <Phylo>. This is a shortcut to *fx.plot*.

        */
    plot: function () {
      this.fx.plot(this.controller);
    },
    /*
    Method: zoom
      
    Zoom in or out of the tree. This causes clades to collapse or expand. It is dependent on the values of scroll.
    
    Parameters:

    scroll - (number) positive for zoom in and negative for zoom out.
  */
    fitScreen: function () {
      var size = this.canvas.getSize(),
        key, i;
      var overflow = false;
      //     var nodes = this.graph.nodes;
      var clicked = this.clickedNode.id || this.root;
      var height = 0,
        root = this.graph.getNode(clicked),
        depth = this.graph.depth;
      this.config.onBeforeCompute({
        name: ''
      });
      for (key in depth) {
        if (depth.hasOwnProperty(key)) {
          if (depth[key]) {
            var nodes = depth[key];
            var tempHeight = 0;
            for (i = 0; i < nodes.length; i += 1) {
              var node = nodes[i];
              if (height < size.height) {
                if (node.data.leaf) {
                  tempHeight += node.getData('height', 'start') + 8;
                } else {
                  tempHeight += node.getData('height', 'start') / 2;
                }
                node.drawn = true;
                node.exist = true;
              }
            }
            if (tempHeight + height < size.height && !overflow) {
              height += tempHeight;
              this.zoomIndex = parseInt(key, 10);
            } else {
              for (i = 0; i < nodes.length; i += 1) {
                var node = nodes[i];
                node.exist = false;
                node.drawn = false;
                node.collapsed = true;
              }
              overflow = true;
            }
          }
        }
      }
      var canvas = this.canvas,
        ox = canvas.translateOffsetX,
        oy = canvas.translateOffsetY;
      this.canvas.translate(-1 * ox, -1 * oy);
      this.computePositions(this.graph.getNode(this.root), '');
      this.plot();
      this.config.onAfterCompute();
    },
    /*
    Method: zoom
      
    Zoom in or out of the tree. This causes clades to collapse or expand. It is dependent on the values of scroll.
    
    Parameters:

    scroll - (number) positive for zoom in and negative for zoom out.
  */

    zoom: function (scroll) {
      if (!this.busy) {
        this.busy = true;
        this.config.onBeforeCompute({
          name: ''
        });
        var viz = this,
          graph = viz.graph,
          flag = true,
          node = viz.graph.getNode(viz.root),
          step = 2,
          min = 1,
          max = graph.depth.length - 1,
          j;
        if (typeof viz.zoomIndex === 'undefined') {
          viz.zoomIndex = 1;
        }
        var i = viz.zoomIndex;
        if (i < 1) {
          i = 1;
        } else if (i > graph.depth.length - 1) {
          i = graph.depth.length - 1;
        }
        var show = scroll < 0 ? false : true;
        // calculate the step size
        step = Math.round(graph.depth.length / 10);
        step = Math.max(step, 2);
        var maxDepth = graph.depth.length;
        var nodelist = graph.depth[i];
        for (j = nodelist.length - 1; j >= 0; j -= 1) {
          var n = nodelist[j];
          n.eachLevel(1, step, function (subn) {
            var nodeVisible = show ? !subn.exist : subn.exist;
            if (nodeVisible) {
              subn.exist = show;
              subn.drawn = show;
            }
          });
        }
        viz.computePositions(node, '');
        viz.plot();
        viz.config.onAfterCompute('Depth ' + i);
        //         show ? i+=step : i-=step;
        i += (show ? +1 : -1) * step;
        viz.zoomIndex = i;
        this.busy = false;
      }
    },


    /*
        Method: switchPosition
        
        Switches the tree orientation.

        Parameters:

        pos - (string) The new tree orientation. Possible values are "top", "left", "right" and "bottom".
        method - (string) Set this to "animate" if you want to animate the tree when switching its position. You can also set this parameter to "replot" to just replot the subtree.
        onComplete - (optional|object) This callback is called once the "switching" animation is complete.

        Example:

        (start code js)
          st.switchPosition("right", "animate", {
            onComplete: function() {
              alert('completed!');
            } 
          });
        (end code)
        */
    switchPosition: function (pos, method, onComplete) {
      var Geom = this.geom,
        Plot = this.fx,
        that = this;
      if (!Plot.busy) {
        Plot.busy = true;
        this.contract({
          onComplete: function () {
            Geom.switchOrientation(pos);
            that.compute('end', false);
            Plot.busy = false;
            if (method === 'animate') {
              that.onClick(that.clickedNode.id, onComplete);
            } else if (method === 'replot') {
              that.select(that.clickedNode.id, onComplete);
            }
          }
        }, pos);
      }
    },

    /*
        Method: switchAlignment
      
        Switches the tree alignment.

        Parameters:

      align - (string) The new tree alignment. Possible values are "left", "center" and "right".
      method - (string) Set this to "animate" if you want to animate the tree after aligning its position. You can also set this parameter to "replot" to just replot the subtree.
      onComplete - (optional|object) This callback is called once the "switching" animation is complete.

        Example:

        (start code js)
          st.switchAlignment("right", "animate", {
          onComplete: function() {
            alert('completed!');
          } 
          });
        (end code)
      */
    switchAlignment: function (align, method, onComplete) {
      this.config.align = align;
      if (method === 'animate') {
        this.select(this.clickedNode.id, onComplete);
      } else if (method === 'replot') {
        this.onClick(this.clickedNode.id, onComplete);
      }
    },

    /*
        Method: addNodeInPath
      
        Adds a node to the current path as selected node. The selected node will be visible (as in non-collapsed) at all times.
        

        Parameters:

      id - (string) A <Graph.Node> id.

        Example:

        (start code js)
          st.addNodeInPath("nodeId");
        (end code)
      */
    addNodeInPath: function (id) {
      nodesInPath.push(id);
      this.select((this.clickedNode && this.clickedNode.id) || this.root);
    },

    /*
      Method: clearNodesInPath
      
      Removes all nodes tagged as selected by the <Phylo.addNodeInPath> method.
      
      See also:
      
      <Phylo.addNodeInPath>
    
      Example:

      (start code js)
        st.clearNodesInPath();
      (end code)
      */
    clearNodesInPath: function (id) {
      nodesInPath.length = 0;
      this.select((this.clickedNode && this.clickedNode.id) || this.root);
    },

    /*
        Method: refresh
        
        Computes positions and plots the tree.
        
      */
    refresh: function () {
      this.reposition();
      this.select((this.clickedNode && this.clickedNode.id) || this.root);
    },

    reposition: function () {
      this.graph.computeLevels(this.root, 0, "ignore");
      this.geom.setRightLevelToShow(this.clickedNode, this.canvas);
      this.graph.eachNode(function (n) {
        if (n.exist) {
          n.drawn = true;
        }
      });
      this.compute('end');
    },

    requestNodes: function (node, onComplete) {
      var handler = $.merge(this.controller, onComplete),
        lev = this.config.levelsToShow;
      if (handler.request) {
        var leaves = [],
          d = node._depth;
        node.eachLevel(0, lev, function (n) {
          if (n.drawn && !n.anySubnode()) {
            leaves.push(n);
            n._level = lev - (n._depth - d);
          }
        });
        this.group.requestNodes(leaves, handler);
      } else {
        handler.onComplete();
      }
    },

    contract: function (onComplete, switched) {
      var orn = this.config.orientation;
      var Geom = this.geom,
        Group = this.group;
      if (switched) {
        Geom.switchOrientation(switched);
      }
      var nodes = getNodesToHide.call(this);
      if (switched) {
        Geom.switchOrientation(orn);
      }
      Group.contract(nodes, $.merge(this.controller, onComplete));
    },

    move: function (node, onComplete) {
      this.compute('end', false);
      var move = onComplete.Move,
        offset = {
          'x': move.offsetX,
          'y': move.offsetY
        };
      this.fx.animate($.merge(this.controller, {
        modes: ['linear']
      }, onComplete));
    },

    expand: function (node, onComplete) {
      var nodeArray = getNodesToShow.call(this, node);
      this.group.expand(nodeArray, $.merge(this.controller, onComplete));
    },

    selectPath: function (node) {
      var that = this,
        i, ns;
      this.graph.eachNode(function (n) {
        n.selected = false;
      });

      function path(node) {
        if (node === null || node.selected) {
          return;
        }
        node.selected = true;
        $.each(that.group.getSiblings([node])[node.id], function (n) {
          n.exist = true;
          n.drawn = true;
        });
        var parents = node.getParents();
        parents = (parents.length > 0) ? parents[0] : null;
        path(parents);
      }
      for (i = 0, ns = [node.id].concat(nodesInPath); i < ns.length; i += 1) {
        path(this.graph.getNode(ns[i]));
      }
    },

    /*
        Method: setRoot
    
        Switches the current root node. Changes the topology of the Tree.
    
        Parameters:
          id - (string) The id of the node to be set as root.
          method - (string) Set this to "animate" if you want to animate the tree after adding the subtree. You can also set this parameter to "replot" to just replot the subtree.
          onComplete - (optional|object) An action to perform after the animation (if any).

        Example:

        (start code js)
          st.setRoot('nodeId', 'animate', {
            onComplete: function() {
              alert('complete!');
            }
          });
        (end code)
    */
    setRoot: function (id, method, onComplete) {
      if (this.busy) {
        return;
      }
      this.busy = true;
      var that = this,
        canvas = this.canvas;
      var clickedNode = this.graph.getNode(id);

      function $setRoot() {
        this.root = id;
        var node = this.graph.getNode(id);
        this.clickedNode = clickedNode;
        this.graph.computeLevels(this.root, 0, "ignore");
        node.collapsed = true;
        this.nodesExpCol(node);
        this.computePositions(node, 'end', true);
        this.computeLeaves(this.graph.getNode(id), 0);
        this.fitchParsimony(this.graph.getNode(id));
        this.colorCharacter();
        this.fx.animate({
          modes: ['linear', 'node-property:alpha'],
          onComplete: function () {
            that.busy = false;
          }
        });
      }

      if (method === 'animate') {
        $setRoot.call(this);
      } else if (method === 'replot') {
        $setRoot.call(this);
      }
      this.zoomIndex = this.graph.depth.length - 1;
    },

    /*
          Method: addSubtree
        
            Adds a subtree.
        
          Parameters:
              subtree - (object) A JSON Tree object. See also <Loader.loadJSON>.
              method - (string) Set this to "animate" if you want to animate the tree after adding the subtree. You can also set this parameter to "replot" to just replot the subtree.
              onComplete - (optional|object) An action to perform after the animation (if any).
    
          Example:

          (start code js)
            st.addSubtree(json, 'animate', {
                onComplete: function() {
                  alert('complete!');
                }
            });
          (end code)
        */
    addSubtree: function (subtree, method, onComplete) {
      if (method === 'replot') {
        this.op.sum(subtree, $.extend({
          type: 'replot'
        }, onComplete || {}));
      } else if (method === 'animate') {
        this.op.sum(subtree, $.extend({
          type: 'fade:seq'
        }, onComplete || {}));
      }
    },

    /*
          Method: removeSubtree
        
            Removes a subtree.
        
          Parameters:
              id - (string) The _id_ of the subtree to be removed.
              removeRoot - (boolean) Default's *false*. Remove the root of the subtree or only its subnodes.
              method - (string) Set this to "animate" if you want to animate the tree after removing the subtree. You can also set this parameter to "replot" to just replot the subtree.
              onComplete - (optional|object) An action to perform after the animation (if any).

          Example:

          (start code js)
            st.removeSubtree('idOfSubtreeToBeRemoved', false, 'animate', {
              onComplete: function() {
                alert('complete!');
              }
            });
          (end code)
    
        */
    removeSubtree: function (id, removeRoot, method, onComplete) {
      var node = this.graph.getNode(id),
        subids = [];
      node.eachLevel(+!removeRoot, false, function (n) {
        subids.push(n.id);
      });
      if (method === 'replot') {
        this.op.removeNode(subids, $.extend({
          type: 'replot'
        }, onComplete || {}));
      } else if (method === 'animate') {
        this.op.removeNode(subids, $.extend({
          type: 'fade:seq'
        }, onComplete || {}));
      }
    },

    /*
          Method: select
        
            Selects a node in the <Phylo> without performing an animation. Useful when selecting 
            nodes which are currently hidden or deep inside the tree.

          Parameters:
            id - (string) The id of the node to select.
            onComplete - (optional|object) an onComplete callback.

          Example:
          (start code js)
            st.select('mynodeid', {
              onComplete: function() {
                alert('complete!');
              }
            });
          (end code)
        */
    select: function (id, onComplete) {
      var group = this.group,
        geom = this.geom;
      var node = this.graph.getNode(id),
        canvas = this.canvas;
      var root = this.graph.getNode(this.root);
      var complete = $.merge(this.controller, onComplete);
      var that = this;

      complete.onBeforeCompute(node);
      this.selectPath(node);
      this.clickedNode = node;
      this.requestNodes(node, {
        onComplete: function () {
          group.hide(group.prepare(getNodesToHide.call(that)), complete);
          geom.setRightLevelToShow(node, canvas);
          that.compute("current");
          that.graph.eachNode(function (n) {
            var pos = n.pos.getc(true);
            n.startPos.setc(pos.x, pos.y);
            n.endPos.setc(pos.x, pos.y);
            n.visited = false;
          });
          var offset = {
            x: complete.offsetX,
            y: complete.offsetY
          };
          that.geom.translate(node.endPos.add(offset).$scale(-1), ["start", "current", "end"]);
          group.show(getNodesToShow.call(that));
          that.plot();
          complete.onAfterCompute(that.clickedNode);
          complete.onComplete();
        }
      });
    },

    /*
        Method: onClick
    
        Animates the <Phylo> to center the node specified by *id*.
            
        Parameters:
        
        id - (string) A node id.
        options - (optional|object) A group of options and callbacks described below.
        onComplete - (object) An object callback called when the animation finishes.
        Move - (object) An object that has as properties _offsetX_ or _offsetY_ for adding some offset position to the centered node.

        Example:

        (start code js)
          st.onClick('mynodeid', {
            Move: {
              enable: true,
              offsetX: 30,
              offsetY: 5
            },
            onComplete: function() {
                alert('yay!');
            }
          });
        (end code)
    
        */
    onClick: function (id, options) {
      var canvas = this.canvas,
        that = this,
        Geom = this.geom,
        config = this.config;
      var innerController = {
        Move: {
          enable: true,
          offsetX: config.offsetX || 0,
          offsetY: config.offsetY || 0
        },
        setRightLevelToShowConfig: false,
        onBeforeRequest: $.empty,
        onBeforeContract: $.empty,
        onBeforeMove: $.empty,
        onBeforeExpand: $.empty
      };
      var complete = $.merge(this.controller, innerController, options);

      if (!this.busy) {
        this.busy = true;
        var node = this.graph.getNode(id);
        this.selectPath(node, this.clickedNode);
        this.clickedNode = node;
        complete.onBeforeCompute(node);
        complete.onBeforeRequest(node);
        complete.onBeforeContract(node);
        Geom.setRightLevelToShow(node, canvas, complete.setRightLevelToShowConfig);
        complete.onBeforeMove(node);
        var nodes = getNodesToShow.call(this, node);
        that.group.show(nodes);
        that.computePositions(node, '');
        complete.onAfterCompute(id);
        this.busy = false;
      }
    }
  });

})();

$jit.Phylo.$extend = true;

/*
  Class: Phylo.Op
    
  Custom extension of <Graph.Op>.

  Extends:

  All <Graph.Op> methods
  
  See also:
  
  <Graph.Op>

*/
$jit.Phylo.Op = new Class({

  Implements: Graph.Op

});

/*
    
    Performs operations on group of nodes.

*/
$jit.Phylo.Group = new Class({

  initialize: function (viz) {
    this.viz = viz;
    this.canvas = viz.canvas;
    this.config = viz.config;
    this.animation = new Animation;
    this.nodes = null;
  },

  /*
    
      Calls the request method on the controller to request a subtree for each node. 
    */
  requestNodes: function (nodes, controller) {
    var counter = 0,
      len = nodes.length,
      nodeSelected = {},
      i;
    var complete = function () {
        controller.onComplete();
      };
    var viz = this.viz;
    if (len === 0) {
      complete();
    }
    for (i = 0; i < len; i += 1) {
      nodeSelected[nodes[i].id] = nodes[i];
      controller.request(nodes[i].id, nodes[i]._level, {
        onComplete: function (nodeId, data) {
          if (data && data.children) {
            data.id = nodeId;
            viz.op.sum(data, {
              type: 'nothing'
            });
          }
          if (++counter === len) {
            viz.graph.computeLevels(viz.root, 0);
            complete();
          }
        }
      });
    }
  },

  /*
    
      Collapses group of nodes. 
    */
  contract: function (nodes, controller) {
    var viz = this.viz;
    var that = this;

    nodes = this.prepare(nodes);
    this.animation.setOptions($.merge(controller, {
      $animating: false,
      compute: function (delta) {
        if (delta === 1) {
          delta = 0.99;
        }
        that.plotStep(1 - delta, controller, this.$animating);
        this.$animating = 'contract';
      },

      complete: function () {
        that.hide(nodes, controller);
      }
    })).start();
  },

  hide: function (nodes, controller) {
    var viz = this.viz,
      i;
    for (i = 0; i < nodes.length; i += 1) {
      // TODO nodes are requested on demand, but not
      // deleted when hidden. Would that be a good feature?
      // Currently that feature is buggy, so I'll turn it off
      // Actually this feature is buggy because trimming should take
      // place onAfterCompute and not right after collapsing nodes.
      if (true || !controller || !controller.request) {
        nodes[i].eachLevel(1, false, function (elem) {
          if (elem.exist) {
            $.extend(elem, {
              'drawn': false,
              'exist': false
            });
          }
        });
      } else {
        var ids = [];
        nodes[i].eachLevel(1, false, function (n) {
          ids.push(n.id);
        });
        viz.op.removeNode(ids, {
          'type': 'nothing'
        });
        viz.labels.clearLabels();
      }
    }
    controller.onComplete();
  },


  /*
      Expands group of nodes. 
    */
  expand: function (nodes, controller) {
    var that = this;
    this.show(nodes);
    this.animation.setOptions($.merge(controller, {
      $animating: false,
      compute: function (delta) {
        that.plotStep(delta, controller, this.$animating);
        this.$animating = 'expand';
      },

      complete: function () {
        that.plotStep(undefined, controller, false);
        controller.onComplete();
      }
    })).start();

  },

  show: function (nodes) {
    var config = this.config;
    this.prepare(nodes);
    $.each(nodes, function (n) {
      // check for root nodes if multitree
      if (config.multitree && !('$orn' in n.data)) {
        delete n.data.$orns;
        var orns = ' ';
        n.eachSubnode(function (ch) {
          if (('$orn' in ch.data) && orns.indexOf(ch.data.$orn) < 0 && ch.exist && !ch.drawn) {
            orns += ch.data.$orn + ' ';
          }
        });
        n.data.$orns = orns;
      }
      n.eachLevel(0, config.levelsToShow, function (n) {
        if (n.exist) {
          n.drawn = true;
        }
      });
    });
  },

  prepare: function (nodes) {
    this.nodes = this.getNodesWithChildren(nodes);
    return this.nodes;
  },

  /*
      Filters an array of nodes leaving only nodes with children.
    */
  getNodesWithChildren: function (nodes) {
    var ans = [],
      config = this.config,
      root = this.viz.root,
      i, j, desc;
    nodes.sort(function (a, b) {
      return (a._depth <= b._depth) - (a._depth >= b._depth);
    });
    for (i = 0; i < nodes.length; i += 1) {
      if (nodes[i].anySubnode("exist")) {
        for (j = i + 1, desc = false; !desc && j < nodes.length; j += 1) {
          if (!config.multitree || '$orn' in nodes[j].data) {
            desc = desc || nodes[i].isDescendantOf(nodes[j].id);
          }
        }
        if (!desc) {
          ans.push(nodes[i]);
        }
      }
    }
    return ans;
  },

  plotStep: function (delta, controller, animating) {
    var viz = this.viz,
      config = this.config,
      canvas = viz.canvas,
      ctx = canvas.getCtx(),
      nodes = this.nodes;
    var i, node;
    // hide nodes that are meant to be collapsed/expanded
    var nds = {};
    for (i = 0; i < nodes.length; i += 1) {
      node = nodes[i];
      nds[node.id] = [];
      var root = config.multitree && !('$orn' in node.data);
      var orns = root && node.data.$orns;
      node.eachSubgraph(function (n) {
        // TODO(nico): Cleanup
        // special check for root node subnodes when
        // multitree is checked.
        if (root && orns && orns.indexOf(n.data.$orn) > 0 && n.drawn) {
          n.drawn = false;
          nds[node.id].push(n);
        } else if ((!root || !orns) && n.drawn) {
          n.drawn = false;
          nds[node.id].push(n);
        }
      });
      node.drawn = true;
    }
    // plot the whole (non-scaled) tree
    if (nodes.length > 0) {
      viz.fx.plot();
    }
    // show nodes that were previously hidden
    for (i in nds) {
      $.each(nds[i], function (n) {
        n.drawn = true;
      });
    }
    // plot each scaled subtree
    for (i = 0; i < nodes.length; i += 1) {
      node = nodes[i];
      ctx.save();
      viz.fx.plotSubtree(node, controller, delta, animating);
      ctx.restore();
    }
  },
  /*
Gets the siblings of the nodes in the array.
*/
  getSiblings: function (nodes) {
    var siblings = {};
    $.each(nodes, function (n) {
      var par = n.getParents();
      if (par.length === 0) {
        siblings[n.id] = [n];
      } else {
        var ans = [];
        par[0].eachSubnode(function (sn) {
          ans.push(sn);
        });
        siblings[n.id] = ans;
      }
    });
    return siblings;
  }
});

/*
  Phylo.Geom

  Performs low level geometrical computations.

  Access:

  This instance can be accessed with the _geom_ parameter of the st instance created.

  Example:

  (start code js)
    var st = new Phylo(canvas, config);
    st.geom.translate //or can also call any other <Phylo.Geom> method
  (end code)

*/

$jit.Phylo.Geom = new Class({
  Implements: Graph.Geom,
  /*
      Changes the tree current orientation to the one specified.

      You should usually use <Phylo.switchPosition> instead.
    */
  switchOrientation: function (orn) {
    this.config.orientation = orn;
  },

  /*
      Makes a value dispatch according to the current layout
      Works like a CSS property, either _top-right-bottom-left_ or _top|bottom - left|right_.
    */
  dispatch: function () {
    // TODO(nico) should store Array.prototype.slice.call somewhere.
    var args = Array.prototype.slice.call(arguments);
    var s = args.shift(),
      len = args.length;
    var val = function (a) {
        return typeof a === 'function' ? a() : a;
      };
    if (len === 2) {
      return (s === "top" || s === "bottom") ? val(args[0]) : val(args[1]);
    } else if (len === 4) {
      switch (s) {
      case "top":
        return val(args[0]);
      case "right":
        return val(args[1]);
      case "bottom":
        return val(args[2]);
      case "left":
        return val(args[3]);
      }
    }
    return undefined;
  },

  /*
      Returns label height or with, depending on the tree current orientation.
    */
  getSize: function (n, invert) {
    var data = n.data,
      config = this.config;
    var siblingOffset = config.siblingOffset;
    var s = (config.multitree && ('$orn' in data) && data.$orn) || config.orientation;
    var w = n.getData('width') + siblingOffset;
    var h = n.getData('height') + siblingOffset;
    if (!invert) {
      return this.dispatch(s, h, w);
    } else {
      return this.dispatch(s, w, h);
    }
  },

  /*
      Calculates a subtree base size. This is an utility function used by _getBaseSize_
    */
  getTreeBaseSize: function (node, level, leaf) {
    var size = this.getSize(node, true),
      baseHeight = 0,
      that = this;
    if (leaf(level, node)) {
      return size;
    }
    if (level === 0) {
      return 0;
    }
    node.eachSubnode(function (elem) {
      baseHeight += that.getTreeBaseSize(elem, level - 1, leaf);
    });
    return (size > baseHeight ? size : baseHeight) + this.config.subtreeOffset;
  },


  /*
      getEdge
      
      Returns a Complex instance with the begin or end position of the edge to be plotted.

      Parameters:

      node - A <Graph.Node> that is connected to this edge.
      type - Returns the begin or end edge position. Possible values are 'begin' or 'end'.

      Returns:

      A <Complex> number specifying the begin or end position.
    */
  getEdge: function (node, type, s) {
    var $C = function (a, b) {
        return function () {
          return node.pos.add(new Complex(a, b));
        };
      };
    var dim = this.node;
    var w = node.getData('width');
    var h = node.getData('height');

    if (type === 'begin') {
      if (dim.align === "center") {
        return this.dispatch(s, $C(0, h / 2), $C(-w / 2, 0), $C(0, -h / 2), $C(w / 2, 0));
      } else if (dim.align === "left") {
        return this.dispatch(s, $C(0, h), $C(0, 0), $C(0, 0), $C(w, 0));
      } else if (dim.align === "right") {
        return this.dispatch(s, $C(0, 0), $C(-w, 0), $C(0, -h), $C(0, 0));
      } else {
        throw "align: not implemented";
      }


    } else if (type === 'end') {
      if (dim.align === "center") {
        return this.dispatch(s, $C(0, -h / 2), $C(w / 2, 0), $C(0, h / 2), $C(-w / 2, 0));
      } else if (dim.align === "left") {
        return this.dispatch(s, $C(0, 0), $C(w, 0), $C(0, h), $C(0, 0));
      } else if (dim.align === "right") {
        return this.dispatch(s, $C(0, -h), $C(0, 0), $C(0, 0), $C(-w, 0));
      } else {
        throw "align: not implemented";
      }
    }
  },

  /*
      Adjusts the tree position due to canvas scaling or translation.
    */
  getScaledTreePosition: function (node, scale) {
    var dim = this.node;
    var w = node.getData('width');
    var h = node.getData('height');
    var s = (this.config.multitree && ('$orn' in node.data) && node.data.$orn) || this.config.orientation;

    var $C = function (a, b) {
        return function () {
          return node.pos.add(new Complex(a, b)).$scale(1 - scale);
        };
      };
    if (dim.align === "left") {
      return this.dispatch(s, $C(0, h), $C(0, 0), $C(0, 0), $C(w, 0));
    } else if (dim.align === "center") {
      return this.dispatch(s, $C(0, h / 2), $C(-w / 2, 0), $C(0, -h / 2), $C(w / 2, 0));
    } else if (dim.align === "right") {
      return this.dispatch(s, $C(0, 0), $C(-w, 0), $C(0, -h), $C(0, 0));
    } else {
      throw "align: not implemented";
    }
  },

  /*
      treeFitsInCanvas
      
      Returns a Boolean if the current subtree fits in canvas.

      Parameters:

      node - A <Graph.Node> which is the current root of the subtree.
      canvas - The <Canvas> object.
      level - The depth of the subtree to be considered.
    */
  treeFitsInCanvas: function (node, canvas, level) {
    var csize = canvas.getSize();
    var s = (this.config.multitree && ('$orn' in node.data) && node.data.$orn) || this.config.orientation;

    var size = this.dispatch(s, csize.width, csize.height);
    var baseSize = this.getTreeBaseSize(node, level, function (level, node) {
      return level === 0 || !node.anySubnode();
    });
    return (baseSize < size);
  }
});
/*
  Class: Phylo.Util
  
  Custom extension of <Graph.Plot>.

  Extends:

  All <Graph.Util> methods
  
  See also:
  
  <Graph.Util>

*/
Graph.Util.eachAdjacency = function (node, action, flags) {
  var adj = node.adjacencies,
    filter = this.filter(flags),
    id, i;
  var keys = new Array();
  var nodeList = new Array();
  for (id in adj) {
    keys.push(id);
    if (node !== adj[id].nodeTo) {
      nodeList.push(adj[id].nodeTo);
    } else {
      nodeList.push(adj[id].nodeFrom);
    }
  }
  // TODO: change this function
  if (isLateralise()) {
    var cmp = function (node1, node2) {
        node1.data.len = node1.data.len || 0;
        node2.data.len = node2.data.len || 0;
        return node1.data.len - node2.data.len;
      };
    nodeList = nodeList.sort(cmp);
    keys = new Array();
    for (i = 0; i < nodeList.length; i += 1) {
      keys.push(nodeList[i].id);
    }
  }
  if (node.data.rotate) {
    keys = keys.reverse();
  }
  for (id in keys) {
    if ( keys.hasOwnProperty ( id ) ) {
      var a = adj[keys[id]];
      if (filter(a)) {
        if (a.nodeFrom !== node) {
          var tmp = a.nodeFrom;
          a.nodeFrom = a.nodeTo;
          a.nodeTo = tmp;
        }
        action(a, id);
      }
    }
  }
};

/*
  Class: Phylo.Plot
  
  Custom extension of <Graph.Plot>.

  Extends:

  All <Graph.Plot> methods
  
  See also:
  
  <Graph.Plot>

*/
Graph.Plot.plotTree = function (node, opt, animating) {
  var that = this,
    viz = this.viz,
    canvas = viz.canvas,
    config = this.config,
    ctx = canvas.getCtx();
  var nodeAlpha = node.getData('alpha');
  if (viz.clickedNode.id === node.id) {
    ctx.save();
    ctx.strokeStyle = 'yellow';
  }
  node.eachSubnode(function (elem) {
    if (opt.plotSubtree(node, elem) && elem.exist && elem.drawn) {
      var adj = node.getAdjacency(elem.id);
      !animating && opt.onBeforePlotLine(adj);
      that.plotLine(adj, canvas, animating);
      !animating && opt.onAfterPlotLine(adj);
      that.plotTree(elem, opt, animating);
    }
  });
  if (node.drawn) {
    !animating && opt.onBeforePlotNode(node);
    this.plotNode(node, canvas, animating);
    !animating && opt.onAfterPlotNode(node);
    if (!opt.hideLabels && opt.withLabels && nodeAlpha >= 0.95) {
      this.labels.plotLabel(canvas, node, opt);
    } else {
      this.labels.hideLabel(node, false);
    }
  } else {
    this.labels.hideLabel(node, true);
  }
  if (viz.clickedNode.id === node.id) {
    ctx.restore();
  }
};

$jit.Phylo.Plot = new Class({

  Implements: Graph.Plot,

  /*
      Plots a subtree from the PhyloJive.
    */
  plotSubtree: function (node, opt, scale, animating) {
    var viz = this.viz,
      canvas = viz.canvas,
      config = viz.config;
    scale = Math.min(Math.max(0.001, scale), 1);
    if (scale >= 0) {
      node.drawn = false;
      var ctx = canvas.getCtx();
      var diff = viz.geom.getScaledTreePosition(node, scale);
      ctx.translate(diff.x, diff.y);
      ctx.scale(scale, scale);
    }
    this.plotTree(node, $.merge(opt, {
      'withLabels': true,
      'hideLabels': !! scale,
      'plotSubtree': function (n, ch) {
        var root = config.multitree && !('$orn' in node.data);
        var orns = root && node.getData('orns');
        return !root || orns.indexOf(node.getData('orn')) > -1;
      }
    }), animating);
    if (scale >= 0) {
      node.drawn = true;
    }
  },

  /*
        Method: getAlignedPos
        
        Returns a *x, y* object with the position of the top/left corner of a <Phylo> node.
        
        Parameters:
        
        pos - (object) A <Graph.Node> position.
        width - (number) The width of the node.
        height - (number) The height of the node.
        
    */
  getAlignedPos: function (pos, width, height) {
    var nconfig = this.node;
    var square, orn;
    if (nconfig.align === "center") {
      square = {
        x: pos.x - width / 2,
        y: pos.y - height / 2
      };
    } else if (nconfig.align === "left") {
      orn = this.config.orientation;
      if (orn === "bottom" || orn === "top") {
        square = {
          x: pos.x - width / 2,
          y: pos.y
        };
      } else {
        square = {
          x: pos.x,
          y: pos.y - height / 2
        };
      }
    } else if (nconfig.align === "right") {
      orn = this.config.orientation;
      if (orn === "bottom" || orn === "top") {
        square = {
          x: pos.x - width / 2,
          y: pos.y - height
        };
      } else {
        square = {
          x: pos.x - width,
          y: pos.y - height / 2
        };
      }
    } else {
      throw "align: not implemented";
    }

    return square;
  },

  getOrientation: function (adj) {
    var config = this.config;
    var orn = config.orientation;

    if (config.multitree) {
      var nodeFrom = adj.nodeFrom;
      var nodeTo = adj.nodeTo;
      orn = (('$orn' in nodeFrom.data) && nodeFrom.data.$orn) || (('$orn' in nodeTo.data) && nodeTo.data.$orn);
    }

    return orn;
  }
});

/*
  Class: Phylo.Label

  Custom extension of <Graph.Label>. 
  Contains custom <Graph.Label.SVG>, <Graph.Label.HTML> and <Graph.Label.Native> extensions.

  Extends:

  All <Graph.Label> methods and subclasses.

  See also:

  <Graph.Label>, <Graph.Label.Native>, <Graph.Label.HTML>, <Graph.Label.SVG>.
*/
$jit.Phylo.Label = {};

/*
  Phylo.Label.Native

  Custom extension of <Graph.Label.Native>.

  Extends:

  All <Graph.Label.Native> methods

  See also:

  <Graph.Label.Native>
*/
$jit.Phylo.Label.Native = new Class({
  Implements: Graph.Label.Native,

  renderLabel: function (canvas, node, controller) {
    var ctx = canvas.getCtx(),
      coord = node.pos.getc(true),
      width = node.getData('width'),
      height = node.getData('height'),
      pos = this.viz.fx.getAlignedPos(coord, width, height);
    ctx.fillText(node.name, pos.x + width / 2, pos.y + height / 2);
  }
});

$jit.Phylo.Label.DOM = new Class({
  Implements: Graph.Label.DOM,

  /* 
      placeLabel

      Overrides abstract method placeLabel in <Graph.Plot>.

      Parameters:

      tag - A DOM label element.
      node - A <Graph.Node>.
      controller - A configuration/controller object passed to the visualization.
    
    */
  placeLabel: function (tag, node, controller) {
    var pos = node.pos.getc(true).clone(),
      config = this.viz.config,
      dim = config.Node,
      canvas = this.viz.canvas,
      w = node.getData('width'),
      h = node.getData('height'),
      radius = canvas.getSize(),
      labelPos, orn;
    if (config.alignName) {
      pos.x = this.viz.graph.maxXpos;
    }
    var ox = canvas.translateOffsetX,
      oy = canvas.translateOffsetY,
      sx = canvas.scaleOffsetX,
      sy = canvas.scaleOffsetY,
      posx = pos.x * sx + ox,
      posy = pos.y * sy + oy;

    if (dim.align === "left") {
      labelPos = {
        x: Math.round(posx + 10),
        y: Math.round(posy - h / 2)
      };
      if (!controller.alignName && !node.data.leaf) {
        labelPos.x += controller.collapsedXOffset;
      }
      tag.style.textAlign = 'left';
    } else {
      throw "align: not implemented";
    }

    var style = tag.style;
    style.left = labelPos.x + 'px';
    style.top = labelPos.y + 'px';
    style.display = this.fitsInCanvas(labelPos, canvas) ? 'inline' : 'none';
    controller.onPlaceLabel(tag, node);
  }
});

/*
  Phylo.Label.SVG

  Custom extension of <Graph.Label.SVG>.

  Extends:

  All <Graph.Label.SVG> methods

  See also:

  <Graph.Label.SVG>
*/
$jit.Phylo.Label.SVG = new Class({
  Implements: [$jit.Phylo.Label.DOM, Graph.Label.SVG],

  initialize: function (viz) {
    this.viz = viz;
  }
});

/*
  Phylo.Label.HTML

  Custom extension of <Graph.Label.HTML>.

  Extends:

  All <Graph.Label.HTML> methods.

  See also:

  <Graph.Label.HTML>

*/
$jit.Phylo.Label.HTML = new Class({
  Implements: [$jit.Phylo.Label.DOM, Graph.Label.HTML],

  initialize: function (viz) {
    this.viz = viz;
  }
});


/*
  Class: Phylo.Plot.NodeTypes

  This class contains a list of <Graph.Node> built-in types. 
  Node types implemented are 'none', 'circle', 'rectangle', 'ellipse' and 'square'.

  You can add your custom node types, customizing your visualization to the extreme.

  Example:

  (start code js)
    Phylo.Plot.NodeTypes.implement({
      'mySpecialType': {
        'render': function(node, canvas) {
          //print your custom node to canvas
        },
        //optional
        'contains': function(node, pos) {
          //return true if pos is inside the node or false otherwise
        }
      }
    });
  (end code)

*/
$jit.Phylo.Plot.NodeTypes = new Class({
  'none': {
    'render': $.empty,
    'contains': $.lambda(false)
  },
  'circle': {
    'render': function (node, canvas) {
      var dim = node.getData('dim'),
        pos = this.getAlignedPos(node.pos.getc(true), dim, dim),
        dim2 = dim / 2;
      this.nodeHelper.circle.render('fill', {
        x: pos.x,
        y: pos.y + dim2
      }, dim2, canvas);
    },
    'contains': function (node, pos) {
      if (!node.exist) {
        return false;
      }
      var dim = node.getData('dim'),
        npos = this.getAlignedPos(node.pos.getc(true), dim, dim),
        dim2 = dim / 2;
      return this.nodeHelper.circle.contains({
        x: npos.x,
        y: npos.y + dim2
      }, pos, dim2 + 10);
    }
  },
  'square': {
    'render': function (node, canvas) {
      var dim = node.getData('dim'),
        dim2 = dim / 2,
        pos = this.getAlignedPos(node.pos.getc(true), dim, dim);
      this.nodeHelper.square.render('fill', {
        x: pos.x,
        y: pos.y + dim2
      }, dim2, canvas);
    },
    'contains': function (node, pos) {
      if (!node.exist) {
        return false;
      }
      var dim = node.getData('dim'),
        npos = this.getAlignedPos(node.pos.getc(true), dim, dim),
        dim2 = dim / 2;
      return this.nodeHelper.square.contains({
        x: npos.x,
        y: npos.y + dim2
      }, pos, dim2);
    }
  },
  'ellipse': {
    'render': function (node, canvas) {
      var width = node.getData('width'),
        height = node.getData('height'),
        pos = this.getAlignedPos(node.pos.getc(true), width, height);
      this.nodeHelper.ellipse.render('fill', {
        x: pos.x + width / 2,
        y: pos.y + height / 2
      }, width, height, canvas);
    },
    'contains': function (node, pos) {
      if (!node.exist) {
        return false;
      }
      var width = node.getData('width'),
        height = node.getData('height'),
        npos = this.getAlignedPos(node.pos.getc(true), width, height);
      this.nodeHelper.ellipse.contains({
        x: npos.x + width / 2,
        y: npos.y + height / 2
      }, pos, width, height);
    }
  },
  'rectangle': {
    'render': function (node, canvas) {
      var width = node.getData('width'),
        height = node.getData('height'),
        pos = this.getAlignedPos(node.pos.getc(true), width, height);
      this.nodeHelper.rectangle.render('fill', {
        x: pos.x + width / 2,
        y: pos.y + height / 2
      }, width, height, canvas);
    },
    'contains': function (node, pos) {
      if (!node.exist) {
        return false;
      }
      var width = node.getData('width'),
        height = node.getData('height'),
        npos = this.getAlignedPos(node.pos.getc(true), width, height);
      this.nodeHelper.rectangle.contains({
        x: npos.x + width / 2,
        y: npos.y + height / 2
      }, pos, width, height);
    }
  },
  'triangle': {
    'render': function (node, canvas) {
      var width = node.getData('width'),
        height = node.getData('height'),
        dim = node.getData('dim'),
        pos = this.getAlignedPos(node.pos.getc(true), width, height);
      this.nodeHelper.triangle.render('fill', {
        x: pos.x + width / 2,
        y: pos.y + height / 2
      }, dim, canvas);
    },
    'contains': function (node, pos) {
      if (!node.exist) {
        return false;
      }
      var width = node.getData('width'),
        height = node.getData('height'),
        dim = node.getData('dim'),
        npos = this.getAlignedPos(node.pos.getc(true), width, height);
      return this.nodeHelper.triangle.contains({
        x: npos.x + width / 2,
        y: npos.y + height / 2
      }, pos, dim);
    }
  }
});

/*
  Class: Phylo.Plot.EdgeTypes

  This class contains a list of <Graph.Adjacence> built-in types. 
  Edge types implemented are 'none', 'line', 'arrow', 'quadratic:begin', 'quadratic:end', 'bezier'.

  You can add your custom edge types, customizing your visualization to the extreme.

  Example:

  (start code js)
    Phylo.Plot.EdgeTypes.implement({
      'mySpecialType': {
        'render': function(adj, canvas) {
          //print your custom edge to canvas
        },
        //optional
        'contains': function(adj, pos) {
          //return true if pos is inside the arc or false otherwise
        }
      }
    });
  (end code)

*/
$jit.Phylo.Plot.EdgeTypes = new Class({
  'none': $.empty,
  'line': {
    'render': function (adj, canvas) {
      var orn = this.getOrientation(adj),
        nodeFrom = adj.nodeFrom,
        nodeTo = adj.nodeTo,
        rel = nodeFrom._depth < nodeTo._depth,
        from = (rel ? nodeFrom : nodeTo).getPos(),
        to = (rel ? nodeTo : nodeFrom).getPos(),
        middle1 = {
          x: (from.x),
          y: from.y
        },
        middle2 = {
          x: middle1.x,
          y: to.y
        };
      this.edgeHelper.line.render(from, middle2, canvas);
      this.edgeHelper.line.render(middle2, to, canvas);
      if (!nodeTo.anySubnode() && this.config.alignName) {
        var ctx = canvas.getCtx();
        ctx.save();
        ctx.lineWidth = 2;
        ctx.lineCap = 'butt';
        ctx.fillStyle = ctx.strokeStyle = '#ccb';
        ctx.beginPath();
        ctx.dashedLine(to.x, to.y, this.viz.graph.maxXpos, to.y, [4, 2]);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }
    },
    'contains': function (adj, pos) {
      var orn = this.getOrientation(adj),
        nodeFrom = adj.nodeFrom,
        nodeTo = adj.nodeTo,
        rel = nodeFrom._depth < nodeTo._depth,
        from = this.viz.geom.getEdge(rel ? nodeFrom : nodeTo, 'begin', orn),
        to = this.viz.geom.getEdge(rel ? nodeTo : nodeFrom, 'end', orn);
      return this.edgeHelper.line.contains(from, to, pos, this.edge.epsilon);
    }
  },
  'arrow': {
    'render': function (adj, canvas) {
      var orn = this.getOrientation(adj),
        node = adj.nodeFrom,
        child = adj.nodeTo,
        dim = adj.getData('dim'),
        from = this.viz.geom.getEdge(node, 'begin', orn),
        to = this.viz.geom.getEdge(child, 'end', orn),
        direction = adj.data.$direction,
        inv = (direction && direction.length > 1 && direction[0] !== node.id);
      this.edgeHelper.arrow.render(from, to, dim, inv, canvas);
    },
    'contains': function (adj, pos) {
      var orn = this.getOrientation(adj),
        nodeFrom = adj.nodeFrom,
        nodeTo = adj.nodeTo,
        rel = nodeFrom._depth < nodeTo._depth,
        from = this.viz.geom.getEdge(rel ? nodeFrom : nodeTo, 'begin', orn),
        to = this.viz.geom.getEdge(rel ? nodeTo : nodeFrom, 'end', orn);
      return this.edgeHelper.arrow.contains(from, to, pos, this.edge.epsilon);
    }
  },
  'quadratic:begin': {
    'render': function (adj, canvas) {
      var orn = this.getOrientation(adj);
      var nodeFrom = adj.nodeFrom,
        nodeTo = adj.nodeTo,
        rel = nodeFrom._depth < nodeTo._depth,
        begin = this.viz.geom.getEdge(rel ? nodeFrom : nodeTo, 'begin', orn),
        end = this.viz.geom.getEdge(rel ? nodeTo : nodeFrom, 'end', orn),
        dim = adj.getData('dim'),
        ctx = canvas.getCtx();
      ctx.beginPath();
      ctx.moveTo(begin.x, begin.y);
      switch (orn) {
      case "left":
        ctx.quadraticCurveTo(begin.x + dim, begin.y, end.x, end.y);
        break;
      case "right":
        ctx.quadraticCurveTo(begin.x - dim, begin.y, end.x, end.y);
        break;
      case "top":
        ctx.quadraticCurveTo(begin.x, begin.y + dim, end.x, end.y);
        break;
      case "bottom":
        ctx.quadraticCurveTo(begin.x, begin.y - dim, end.x, end.y);
        break;
      }
      ctx.stroke();
    }
  },
  'quadratic:end': {
    'render': function (adj, canvas) {
      var orn = this.getOrientation(adj);
      var nodeFrom = adj.nodeFrom,
        nodeTo = adj.nodeTo,
        rel = nodeFrom._depth < nodeTo._depth,
        begin = this.viz.geom.getEdge(rel ? nodeFrom : nodeTo, 'begin', orn),
        end = this.viz.geom.getEdge(rel ? nodeTo : nodeFrom, 'end', orn),
        dim = adj.getData('dim'),
        ctx = canvas.getCtx();
      ctx.beginPath();
      ctx.moveTo(begin.x, begin.y);
      switch (orn) {
      case "left":
        ctx.quadraticCurveTo(end.x - dim, end.y, end.x, end.y);
        break;
      case "right":
        ctx.quadraticCurveTo(end.x + dim, end.y, end.x, end.y);
        break;
      case "top":
        ctx.quadraticCurveTo(end.x, end.y - dim, end.x, end.y);
        break;
      case "bottom":
        ctx.quadraticCurveTo(end.x, end.y + dim, end.x, end.y);
        break;
      }
      ctx.stroke();
    }
  },
  'bezier': {
    'render': function (adj, canvas) {
      var orn = this.getOrientation(adj),
        nodeFrom = adj.nodeFrom,
        nodeTo = adj.nodeTo,
        rel = nodeFrom._depth < nodeTo._depth,
        begin = this.viz.geom.getEdge(rel ? nodeFrom : nodeTo, 'begin', orn),
        end = this.viz.geom.getEdge(rel ? nodeTo : nodeFrom, 'end', orn),
        dim = adj.getData('dim'),
        ctx = canvas.getCtx();
      ctx.beginPath();
      ctx.moveTo(begin.x, begin.y);
      switch (orn) {
      case "left":
        ctx.bezierCurveTo(begin.x + dim, begin.y, end.x - dim, end.y, end.x, end.y);
        break;
      case "right":
        ctx.bezierCurveTo(begin.x - dim, begin.y, end.x + dim, end.y, end.x, end.y);
        break;
      case "top":
        ctx.bezierCurveTo(begin.x, begin.y + dim, end.x, end.y - dim, end.x, end.y);
        break;
      case "bottom":
        ctx.bezierCurveTo(begin.x, begin.y - dim, end.x, end.y + dim, end.x, end.y);
        break;
      }
      ctx.stroke();
    }
  },
  'rectangular': {
    'render': function (adj, canvas) {
      var orn = this.getOrientation(adj),
        nodeFrom = adj.nodeFrom,
        nodeTo = adj.nodeTo,
        rel = nodeFrom._depth < nodeTo._depth,
        from = this.viz.geom.getEdge(rel ? nodeFrom : nodeTo, 'begin', orn),
        to = this.viz.geom.getEdge(rel ? nodeTo : nodeFrom, 'end', orn),
        middle = {
          x: from.x,
          y: to.y
        };
      this.edgeHelper.line.render(from, middle, canvas);
      this.edgeHelper.line.render(middle, to, canvas);
    },
    'contains': function (adj, pos) {
      var orn = this.getOrientation(adj),
        nodeFrom = adj.nodeFrom,
        nodeTo = adj.nodeTo,
        rel = nodeFrom._depth < nodeTo._depth,
        from = this.viz.geom.getEdge(rel ? nodeFrom : nodeTo, 'begin', orn),
        to = this.viz.geom.getEdge(rel ? nodeTo : nodeFrom, 'end', orn);
      return this.edgeHelper.line.contains(from, to, pos, this.edge.epsilon);
    }
  }
});
//modified to enable collapsing and expanding on mouse wheel
Extras.Classes.Navigation.implement({
  onMouseWheel: function (e, win, scroll) {

    if (!this.config.zooming) {
      return;
    }
    $.event.stop($.event.get(e, win));
    this.viz.zoom(scroll);
  }
});

/*
      Method: computeLevels
    
      Performs a BFS traversal setting the correct depth for each node.
        
      Also implemented by:
      
      <Graph>.
      
      Note:
      
      The depth of each node can then be accessed by 
      >node._depth

      Parameters:

      graph - (object) A <Graph>.
      id - (string) A starting node id for the BFS traversal.
      startDepth - (optional|number) A minimum depth value. Default's 0.

    */
Graph.Util.computeLevels = function (graph, id, startDepth, flags) {
  startDepth = startDepth || 0;
  var filter = this.filter(flags);
  this.eachNode(graph, function (elem) {
    elem._flag = false;
    elem._depth = -1;
  }, flags);
  var root = graph.getNode(id);
  root._depth = startDepth;
  var queue = [root];
  graph.depth = [];
  var that = this;
  while (queue.length !== 0) {
    var node = queue.pop();
    node._flag = true;
    this.eachAdjacency(node, function (adj) {
      var n = adj.nodeTo;
      if (n._flag === false && filter(n)) {
        if (n._depth < 0) {
          n._depth = node._depth + 1 + startDepth;
          // store all nodes of equal depth in an array
          if (!graph.depth[n._depth]) {
            graph.depth[n._depth] = [];
          }
          graph.depth[n._depth].push(n);
        }
        queue.unshift(n);
      }
    }, flags);
  }
};

/*
make the vertex at the end of the branch line. 
*/
NodeHelper.triangle = {
  render: function (type, pos, dim, canvas) {
    var ctx = canvas.getCtx(),
      c1x = pos.x,
      c1y = pos.y,
      c2x = c1x + dim,
      c2y = pos.y - dim,
      c3x = c2x,
      c3y = pos.y + dim;
    ctx.beginPath();
    ctx.moveTo(c1x, c1y);
    ctx.lineTo(c2x, c2y);
    ctx.lineTo(c3x, c3y);
    ctx.closePath();
    ctx[type]();
  },
  contains: function (npos, pos, dim) {
    var a = new Complex(npos.x, npos.y),
      b = new Complex(a.x + dim, npos.y - dim),
      c = new Complex(b.x, npos.y + dim),
      pos = new Complex(pos.x, pos.y),
      negOne = new Complex(-1, -1),
      v0 = new Complex(c.x - a.x, c.y - a.y),
      v1 = new Complex(b.x - a.x, b.y - a.y),
      v2 = new Complex(pos.x - a.x, pos.y - a.y),
      dot00 = v0.x * v0.x + v0.y * v0.y,
      dot01 = v0.x * v1.x + v0.y * v1.y,
      dot02 = v0.x * v2.x + v0.y * v2.y,
      dot11 = v1.x * v1.x + v1.y * v1.y,
      dot12 = v1.x * v2.x + v1.y * v2.y,
      inv = 1 / (dot00 * dot11 - dot01 * dot01),
      u = (dot11 * dot02 - dot01 * dot12) * inv,
      v = (dot00 * dot12 - dot01 * dot02) * inv;

    return (u > 0) && (v > 0) && (u + v < 1);
  }
};

var CP = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
if (CP && CP.lineTo) {
  CP.dashedLine = function (x, y, x2, y2, dashArray) {
    if (!dashArray) {
      dashArray = [10, 5];
    }
    var dashCount = dashArray.length;
    this.moveTo(x, y);
    var dx = (x2 - x),
      dy = (y2 - y);
    var slope = dy / dx;
    var distRemaining = Math.sqrt(dx * dx + dy * dy);
    var dashIndex = 0,
      draw = true;
    while (distRemaining >= 0.1) {
      dashIndex += 1;
      var dashLength = dashArray[dashIndex % dashCount];
      if (dashLength > distRemaining) {
        dashLength = distRemaining;
      }
      var xStep = Math.sqrt(dashLength * dashLength / (1 + slope * slope));
      x += xStep;
      y += slope * xStep;
      this[draw ? 'lineTo' : 'moveTo'](x, y);
      distRemaining -= dashLength;
      draw = !draw;
    }
  };
}




 })();


// https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js
/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);


// https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.effects.core.js, jquery.effects.blind.js, jquery.effects.bounce.js, jquery.effects.clip.js, jquery.effects.drop.js, jquery.effects.explode.js, jquery.effects.fade.js, jquery.effects.fold.js, jquery.effects.highlight.js, jquery.effects.pulsate.js, jquery.effects.scale.js, jquery.effects.shake.js, jquery.effects.slide.js, jquery.effects.transfer.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.24",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.curCSS||(a.curCSS=a.css),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery),function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}}(jQuery),function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})}(jQuery),function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!this.element.data("draggable"))return;return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(b),this.handle?(c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);var d=this.element[0],e=!1;while(d&&(d=d.parentNode))d==document&&(e=!0);if(!e&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",b)!==!1&&f._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){return a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.24"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!e.length)return;var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})}(jQuery),function(a,b){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var b=this.options,c=b.accept;this.isover=0,this.isout=1,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++)b[c]==this&&b.splice(c,1);return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"),this},_setOption:function(b,c){b=="accept"&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]==this.element[0])return!1;var e=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope==d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance))return e=!0,!1}),e?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element):!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.extend(a.ui.droppable,{version:"1.8.24"}),a.ui.intersect=function(b,c,d){if(!c.offset)return!1;var e=(b.positionAbs||b.position.absolute).left,f=e+b.helperProportions.width,g=(b.positionAbs||b.position.absolute).top,h=g+b.helperProportions.height,i=c.offset.left,j=i+c.proportions.width,k=c.offset.top,l=k+c.proportions.height;switch(d){case"fit":return i<=e&&f<=j&&k<=g&&h<=l;case"intersect":return i<e+b.helperProportions.width/2&&f-b.helperProportions.width/2<j&&k<g+b.helperProportions.height/2&&h-b.helperProportions.height/2<l;case"pointer":var m=(b.positionAbs||b.position.absolute).left+(b.clickOffset||b.offset.click).left,n=(b.positionAbs||b.position.absolute).top+(b.clickOffset||b.offset.click).top,o=a.ui.isOver(n,m,k,i,c.proportions.height,c.proportions.width);return o;case"touch":return(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l)&&(e>=i&&e<=j||f>=i&&f<=j||e<i&&f>j);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d=a.ui.ddmanager.droppables[b.options.scope]||[],e=c?c.type:null,f=(b.currentItem||b.element).find(":data(droppable)").andSelf();g:for(var h=0;h<d.length;h++){if(d[h].options.disabled||b&&!d[h].accept.call(d[h].element[0],b.currentItem||b.element))continue;for(var i=0;i<f.length;i++)if(f[i]==d[h].element[0]){d[h].proportions.height=0;continue g}d[h].visible=d[h].element.css("display")!="none";if(!d[h].visible)continue;e=="mousedown"&&d[h]._activate.call(d[h],c),d[h].offset=d[h].element.offset(),d[h].proportions={width:d[h].element[0].offsetWidth,height:d[h].element[0].offsetHeight}}},drop:function(b,c){var d=!1;return a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,c))}),d},dragStart:function(b,c){b.element.parents(":not(body,html)").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var d=a.ui.intersect(b,this,this.options.tolerance),e=!d&&this.isover==1?"isout":d&&this.isover==0?"isover":null;if(!e)return;var f;if(this.options.greedy){var g=this.options.scope,h=this.element.parents(":data(droppable)").filter(function(){return a.data(this,"droppable").options.scope===g});h.length&&(f=a.data(h[0],"droppable"),f.greedyChild=e=="isover"?1:0)}f&&e=="isover"&&(f.isover=0,f.isout=1,f._out.call(f,c)),this[e]=1,this[e=="isout"?"isover":"isout"]=0,this[e=="isover"?"_over":"_out"].call(this,c),f&&e=="isout"&&(f.isout=0,f.isover=1,f._over.call(f,c))})},dragStop:function(b,c){b.element.parents(":not(body,html)").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}}(jQuery),function(a,b){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var b=this,c=this.options;this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=c.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var d=this.handles.split(",");this.handles={};for(var e=0;e<d.length;e++){var f=a.trim(d[e]),g="ui-resizable-"+f,h=a('<div class="ui-resizable-handle '+g+'"></div>');h.css({zIndex:c.zIndex}),"se"==f&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[f]=".ui-resizable-"+f,this.element.append(h)}}this._renderAxis=function(b){b=b||this.element;for(var c in this.handles){this.handles[c].constructor==String&&(this.handles[c]=a(this.handles[c],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var d=a(this.handles[c],this.element),e=0;e=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth();var f=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join("");b.css(f,e),this._proportionallyResize()}if(!a(this.handles[c]).length)continue}},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!b.resizing){if(this.className)var a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=a&&a[1]?a[1]:"se"}}),c.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").hover(function(){if(c.disabled)return;a(this).removeClass("ui-resizable-autohide"),b._handles.show()},function(){if(c.disabled)return;b.resizing||(a(this).addClass("ui-resizable-autohide"),b._handles.hide())})),this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var c=this.element;c.after(this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")})).remove()}return this.originalElement.css("resize",this.originalResizeStyle),b(this.originalElement),this},_mouseCapture:function(b){var c=!1;for(var d in this.handles)a(this.handles[d])[0]==b.target&&(c=!0);return!this.options.disabled&&c},_mouseStart:function(b){var d=this.options,e=this.element.position(),f=this.element;this.resizing=!0,this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()},(f.is(".ui-draggable")||/absolute/.test(f.css("position")))&&f.css({position:"absolute",top:e.top,left:e.left}),this._renderProxy();var g=c(this.helper.css("left")),h=c(this.helper.css("top"));d.containment&&(g+=a(d.containment).scrollLeft()||0,h+=a(d.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:g,top:h},this.size=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalPosition={left:g,top:h},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio=typeof d.aspectRatio=="number"?d.aspectRatio:this.originalSize.width/this.originalSize.height||1;var i=a(".ui-resizable-"+this.axis).css("cursor");return a("body").css("cursor",i=="auto"?this.axis+"-resize":i),f.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c=this.helper,d=this.options,e={},f=this,g=this.originalMousePosition,h=this.axis,i=b.pageX-g.left||0,j=b.pageY-g.top||0,k=this._change[h];if(!k)return!1;var l=k.apply(this,[b,i,j]),m=a.browser.msie&&a.browser.version<7,n=this.sizeDiff;this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)l=this._updateRatio(l,b);return l=this._respectSize(l,b),this._propagate("resize",b),c.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",b,this.ui()),!1},_mouseStop:function(b){this.resizing=!1;var c=this.options,d=this;if(this._helper){var e=this._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:d.sizeDiff.height,h=f?0:d.sizeDiff.width,i={width:d.helper.width()-h,height:d.helper.height()-g},j=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,k=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;c.animate||this.element.css(a.extend(i,{top:k,left:j})),d.helper.height(d.size.height),d.helper.width(d.size.width),this._helper&&!c.animate&&this._proportionallyResize()}return a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(a){var b=this.options,c,e,f,g,h;h={minWidth:d(b.minWidth)?b.minWidth:0,maxWidth:d(b.maxWidth)?b.maxWidth:Infinity,minHeight:d(b.minHeight)?b.minHeight:0,maxHeight:d(b.maxHeight)?b.maxHeight:Infinity};if(this._aspectRatio||a)c=h.minHeight*this.aspectRatio,f=h.minWidth/this.aspectRatio,e=h.maxHeight*this.aspectRatio,g=h.maxWidth/this.aspectRatio,c>h.minWidth&&(h.minWidth=c),f>h.minHeight&&(h.minHeight=f),e<h.maxWidth&&(h.maxWidth=e),g<h.maxHeight&&(h.maxHeight=g);this._vBoundaries=h},_updateCache:function(a){var b=this.options;this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a,b){var c=this.options,e=this.position,f=this.size,g=this.axis;return d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),g=="sw"&&(a.left=e.left+(f.width-a.width),a.top=null),g=="nw"&&(a.top=e.top+(f.height-a.height),a.left=e.left+(f.width-a.width)),a},_respectSize:function(a,b){var c=this.helper,e=this._vBoundaries,f=this._aspectRatio||b.shiftKey,g=this.axis,h=d(a.width)&&e.maxWidth&&e.maxWidth<a.width,i=d(a.height)&&e.maxHeight&&e.maxHeight<a.height,j=d(a.width)&&e.minWidth&&e.minWidth>a.width,k=d(a.height)&&e.minHeight&&e.minHeight>a.height;j&&(a.width=e.minWidth),k&&(a.height=e.minHeight),h&&(a.width=e.maxWidth),i&&(a.height=e.maxHeight);var l=this.originalPosition.left+this.originalSize.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(g),o=/nw|ne|n/.test(g);j&&n&&(a.left=l-e.minWidth),h&&n&&(a.left=l-e.maxWidth),k&&o&&(a.top=m-e.minHeight),i&&o&&(a.top=m-e.maxHeight);var p=!a.width&&!a.height;return p&&!a.left&&a.top?a.top=null:p&&!a.top&&a.left&&(a.left=null),a},_proportionallyResize:function(){var b=this.options;if(!this._proportionallyResizeElements.length)return;var c=this.helper||this.element;for(var d=0;d<this._proportionallyResizeElements.length;d++){var e=this._proportionallyResizeElements[d];if(!this.borderDif){var f=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],g=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];this.borderDif=a.map(f,function(a,b){var c=parseInt(a,10)||0,d=parseInt(g[b],10)||0;return c+d})}if(!a.browser.msie||!a(c).is(":hidden")&&!a(c).parents(":hidden").length)e.css({height:c.height()-this.borderDif[0]-this.borderDif[2]||0,width:c.width()-this.borderDif[1]-this.borderDif[3]||0});else continue}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var d=a.browser.msie&&a.browser.version<7,e=d?1:0,f=d?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+f,height:this.element.outerHeight()+f,position:"absolute",left:this.elementOffset.left-e+"px",top:this.elementOffset.top-e+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(a,b,c){return{width:this.originalSize.width+b}},w:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{left:f.left+b,width:e.width-b}},n:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{top:f.top+c,height:e.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),b!="resize"&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.extend(a.ui.resizable,{version:"1.8.24"}),a.ui.plugin.add("resizable","alsoResize",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=function(b){a(b).each(function(){var b=a(this);b.data("resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};typeof e.alsoResize=="object"&&!e.alsoResize.parentNode?e.alsoResize.length?(e.alsoResize=e.alsoResize[0],f(e.alsoResize)):a.each(e.alsoResize,function(a){f(a)}):f(e.alsoResize)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?a.each(e.alsoResize,function(a,b){i(a,b)}):i(e.alsoResize)},stop:function(b,c){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","animate",{stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d._proportionallyResizeElements,g=f.length&&/textarea/i.test(f[0].nodeName),h=g&&a.ui.hasScroll(f[0],"left")?0:d.sizeDiff.height,i=g?0:d.sizeDiff.width,j={width:d.size.width-i,height:d.size.height-h},k=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,l=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;d.element.animate(a.extend(j,l&&k?{top:l,left:k}:{}),{duration:e.animateDuration,easing:e.animateEasing,step:function(){var c={width:parseInt(d.element.css("width"),10),height:parseInt(d.element.css("height"),10),top:parseInt(d.element.css("top"),10),left:parseInt(d.element.css("left"),10)};f&&f.length&&a(f[0]).css({width:c.width,height:c.height}),d._updateCache(c),d._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(b,d){var e=a(this).data("resizable"),f=e.options,g=e.element,h=f.containment,i=h instanceof a?h.get(0):/parent/.test(h)?g.parent().get(0):h;if(!i)return;e.containerElement=a(i);if(/document/.test(h)||h==document)e.containerOffset={left:0,top:0},e.containerPosition={left:0,top:0},e.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight};else{var j=a(i),k=[];a(["Top","Right","Left","Bottom"]).each(function(a,b){k[a]=c(j.css("padding"+b))}),e.containerOffset=j.offset(),e.containerPosition=j.position(),e.containerSize={height:j.innerHeight()-k[3],width:j.innerWidth()-k[1]};var l=e.containerOffset,m=e.containerSize.height,n=e.containerSize.width,o=a.ui.hasScroll(i,"left")?i.scrollWidth:n,p=a.ui.hasScroll(i)?i.scrollHeight:m;e.parentData={element:i,left:l.left,top:l.top,width:o,height:p}}},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.containerSize,g=d.containerOffset,h=d.size,i=d.position,j=d._aspectRatio||b.shiftKey,k={top:0,left:0},l=d.containerElement;l[0]!=document&&/static/.test(l.css("position"))&&(k=g),i.left<(d._helper?g.left:0)&&(d.size.width=d.size.width+(d._helper?d.position.left-g.left:d.position.left-k.left),j&&(d.size.height=d.size.width/d.aspectRatio),d.position.left=e.helper?g.left:0),i.top<(d._helper?g.top:0)&&(d.size.height=d.size.height+(d._helper?d.position.top-g.top:d.position.top),j&&(d.size.width=d.size.height*d.aspectRatio),d.position.top=d._helper?g.top:0),d.offset.left=d.parentData.left+d.position.left,d.offset.top=d.parentData.top+d.position.top;var m=Math.abs((d._helper?d.offset.left-k.left:d.offset.left-k.left)+d.sizeDiff.width),n=Math.abs((d._helper?d.offset.top-k.top:d.offset.top-g.top)+d.sizeDiff.height),o=d.containerElement.get(0)==d.element.parent().get(0),p=/relative|absolute/.test(d.containerElement.css("position"));o&&p&&(m-=d.parentData.left),m+d.size.width>=d.parentData.width&&(d.size.width=d.parentData.width-m,j&&(d.size.height=d.size.width/d.aspectRatio)),n+d.size.height>=d.parentData.height&&(d.size.height=d.parentData.height-n,j&&(d.size.width=d.size.height*d.aspectRatio))},stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.position,g=d.containerOffset,h=d.containerPosition,i=d.containerElement,j=a(d.helper),k=j.offset(),l=j.outerWidth()-d.sizeDiff.width,m=j.outerHeight()-d.sizeDiff.height;d._helper&&!e.animate&&/relative/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m}),d._helper&&!e.animate&&/static/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m})}}),a.ui.plugin.add("resizable","ghost",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size;d.ghost=d.originalElement.clone(),d.ghost.css({opacity:.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:""),d.ghost.appendTo(d.helper)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})},stop:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size,g=d.originalSize,h=d.originalPosition,i=d.axis,j=e._aspectRatio||b.shiftKey;e.grid=typeof e.grid=="number"?[e.grid,e.grid]:e.grid;var k=Math.round((f.width-g.width)/(e.grid[0]||1))*(e.grid[0]||1),l=Math.round((f.height-g.height)/(e.grid[1]||1))*(e.grid[1]||1);/^(se|s|e)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l):/^(ne)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l):/^(sw)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.left=h.left-k):(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l,d.position.left=h.left-k)}});var c=function(a){return parseInt(a,10)||0},d=function(a){return!isNaN(parseInt(a,10))}}(jQuery),function(a,b){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var b=this;this.element.addClass("ui-selectable"),this.dragged=!1;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]),c.addClass("ui-selectee"),c.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=c.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},destroy:function(){return this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),this._mouseDestroy(),this},_mouseStart:function(b){var c=this;this.opos=[b.pageX,b.pageY];if(this.options.disabled)return;var d=this.options;this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.clientX,top:b.clientY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,!b.metaKey&&!b.ctrlKey&&(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().andSelf().each(function(){var d=a.data(this,"selectable-item");if(d){var e=!b.metaKey&&!b.ctrlKey||!d.$element.hasClass("ui-selected");return d.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting"),d.unselecting=!e,d.selecting=e,d.selected=e,e?c._trigger("selecting",b,{selecting:d.element}):c._trigger("unselecting",b,{unselecting:d.element}),!1}})},_mouseDrag:function(b){var c=this;this.dragged=!0;if(this.options.disabled)return;var d=this.options,e=this.opos[0],f=this.opos[1],g=b.pageX,h=b.pageY;if(e>g){var i=g;g=e,e=i}if(f>h){var i=h;h=f,f=i}return this.helper.css({left:e,top:f,width:g-e,height:h-f}),this.selectees.each(function(){var i=a.data(this,"selectable-item");if(!i||i.element==c.element[0])return;var j=!1;d.tolerance=="touch"?j=!(i.left>g||i.right<e||i.top>h||i.bottom<f):d.tolerance=="fit"&&(j=i.left>e&&i.right<g&&i.top>f&&i.bottom<h),j?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,c._trigger("selecting",b,{selecting:i.element}))):(i.selecting&&((b.metaKey||b.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),c._trigger("unselecting",b,{unselecting:i.element}))),i.selected&&!b.metaKey&&!b.ctrlKey&&!i.startselected&&(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,c._trigger("unselecting",b,{unselecting:i.element})))}),!1},_mouseStop:function(b){var c=this;this.dragged=!1;var d=this.options;return a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}}),a.extend(a.ui.selectable,{version:"1.8.24"})}(jQuery),function(a,b){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},destroy:function(){a.Widget.prototype.destroy.call(this),this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--)this.items[b].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){b==="disabled"?(this.options[b]=c,this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")):a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(b);var e=null,f=this,g=a(b.target).parents().each(function(){if(a.data(this,d.widgetName+"-item")==f)return e=a(this),!1});a.data(b.target,d.widgetName+"-item")==f&&(e=a(b.target));if(!e)return!1;if(this.options.handle&&!c){var h=!1;a(this.options.handle,e).find("*").andSelf().each(function(){this==b.target&&(h=!0)});if(!h)return!1}return this.currentItem=e,this._removeCurrentsFromItems(),!0},_mouseStart:function(b,c,d){var e=this.options,f=this;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),e.containment&&this._setContainment(),e.cursor&&(a("body").css("cursor")&&(this._storedCursor=a("body").css("cursor")),a("body").css("cursor",e.cursor)),e.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",e.opacity)),e.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",e.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!d)for(var g=this.containers.length-1;g>=0;g--)this.containers[g]._trigger("activate",b,f._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var c=this.options,d=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop+c.scrollSpeed:b.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft+c.scrollSpeed:b.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(b.pageY-a(document).scrollTop()<c.scrollSensitivity?d=a(document).scrollTop(a(document).scrollTop()-c.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<c.scrollSensitivity&&(d=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed)),b.pageX-a(document).scrollLeft()<c.scrollSensitivity?d=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<c.scrollSensitivity&&(d=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed))),d!==!1&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var e=this.items.length-1;e>=0;e--){var f=this.items[e],g=f.item[0],h=this._intersectsWithPointer(f);if(!h)continue;if(f.instance!==this.currentContainer)continue;if(g!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=g&&!a.ui.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],g):!0)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(b,f);else break;this._trigger("change",b,this._uiHash());break}}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(!b)return;a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b);if(this.options.revert){var d=this,e=d.placeholder.offset();d.reverting=!0,a(this.helper).animate({left:e.left-this.offset.parent.left-d.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-d.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1},cancel:function(){var b=this;if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("deactivate",null,b._uiHash(this)),this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",null,b._uiHash(this)),this.containers[c].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l=d+j>h&&d+j<i&&b+k>f&&b+k<g;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?l:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(b){var c=this.options.axis==="x"||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top,b.height),d=this.options.axis==="y"||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left,b.width),e=c&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return e?this.floating?g&&g=="right"||f=="down"?2:1:f&&(f=="down"?2:1):!1},_intersectsWithSides:function(b){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top+b.height/2,b.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left+b.width/2,b.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?f=="right"&&d||f=="left"&&!d:e&&(e=="down"&&c||e=="up"&&!c)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c=this,d=[],e=[],f=this._connectWith();if(f&&b)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&e.push([a.isFunction(j.options.items)?j.options.items.call(j.element):a(j.options.items,j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),j])}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var g=e.length-1;g>=0;g--)e[g][0].each(function(){d.push(this)});return a(d)},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");for(var b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(b){this.items=[],this.containers=[this];var c=this.items,d=this,e=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],f=this._connectWith();if(f&&this.ready)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&(e.push([a.isFunction(j.options.items)?j.options.items.call(j.element[0],b,{item:this.currentItem}):a(j.options.items,j.element),j]),this.containers.push(j))}}for(var g=e.length-1;g>=0;g--){var k=e[g][1],l=e[g][0];for(var i=0,m=l.length;i<m;i++){var n=a(l[i]);n.data(this.widgetName+"-item",k),c.push({item:n,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var c=this.items.length-1;c>=0;c--){var d=this.items[c];if(d.instance!=this.currentContainer&&this.currentContainer&&d.item[0]!=this.currentItem[0])continue;var e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item;b||(d.width=e.outerWidth(),d.height=e.outerHeight());var f=e.offset();d.left=f.left,d.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var c=this.containers.length-1;c>=0;c--){var f=this.containers[c].element.offset();this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}return this},_createPlaceholder:function(b){var c=b||this,d=c.options;if(!d.placeholder||d.placeholder.constructor==String){var e=d.placeholder;d.placeholder={element:function(){var b=a(document.createElement(c.currentItem[0].nodeName)).addClass(e||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return e||(b.style.visibility="hidden"),b},update:function(a,b){if(e&&!d.forcePlaceholderSize)return;b.height()||b.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10)),b.width()||b.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||0,10))}}}c.placeholder=a(d.placeholder.element.call(c.element,c.currentItem)),c.currentItem.after(c.placeholder),d.placeholder.update(c,c.placeholder)},_contactContainers:function(b){var c=null,d=null;for(var e=this.containers.length-1;e>=0;e--){if(a.ui.contains(this.currentItem[0],this.containers[e].element[0]))continue;if(this._intersectsWith(this.containers[e].containerCache)){if(c&&a.ui.contains(this.containers[e].element[0],c.element[0]))continue;c=this.containers[e],d=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1;else if(this.currentContainer!=this.containers[d]){var f=1e4,g=null,h=this.positionAbs[this.containers[d].floating?"left":"top"];for(var i=this.items.length-1;i>=0;i--){if(!a.ui.contains(this.containers[d].element[0],this.items[i].item[0]))continue;var j=this.containers[d].floating?this.items[i].item.offset().left:this.items[i].item.offset().top;Math.abs(j-h)<f&&(f=Math.abs(j-h),g=this.items[i],this.direction=j-h>0?"down":"up")}if(!g&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[d],g?this._rearrange(b,g,null,!0):this._rearrange(b,null,this.containers[d].element,!0),this._trigger("change",b,this._uiHash()),this.containers[d]._trigger("change",b,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;return d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(d[0].style.width==""||c.forceHelperSize)&&d.width(this.currentItem.width()),(d[0].style.height==""||c.forceHelperSize)&&d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)){var c=a(b.containment)[0],d=a(b.containment).offset(),e=a(c).css("overflow")!="hidden";this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(e?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(e?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var f=b.pageX,g=b.pageY;if(this.originalPosition){this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top));if(c.grid){var h=this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1];g=this.containment?h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3]?h-this.offset.click.top<this.containment[1]?h+c.grid[1]:h-c.grid[1]:h:h;var i=this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0];f=this.containment?i-this.offset.click.left<this.containment[0]||i-this.offset.click.left>this.containment[2]?i-this.offset.click.left<this.containment[0]?i+c.grid[0]:i-c.grid[0]:i:i}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this,f=this.counter;window.setTimeout(function(){f==e.counter&&e.refreshPositions(!d)},0)},_clear:function(b,c){this.reverting=!1;var d=[],e=this;!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var f in this._storedCSS)if(this._storedCSS[f]=="auto"||this._storedCSS[f]=="static")this._storedCSS[f]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!c&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!c&&d.push(function(a){this._trigger("update",a,this._uiHash())}),this!==this.currentContainer&&(c||(d.push(function(a){this._trigger("remove",a,this._uiHash())}),d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer))));for(var f=this.containers.length-1;f>=0;f--)c||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over=0);this._storedCursor&&a("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!c){this._trigger("beforeStop",b,this._uiHash());for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!1}c||this._trigger("beforeStop",b,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!c){for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}}),a.extend(a.ui.sortable,{version:"1.8.24"})}(jQuery),jQuery.effects||function(a,b){function c(b){var c;return b&&b.constructor==Array&&b.length==3?b:(c=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))?[parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10)]:(c=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))?[parseFloat(c[1])*2.55,parseFloat(c[2])*2.55,parseFloat(c[3])*2.55]:(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]:(c=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))?[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]:(c=/rgba\(0, 0, 0, 0\)/.exec(b))?e.transparent:e[a.trim(b).toLowerCase()]}function d(b,d){var e;do{e=(a.curCSS||a.css)(b,d);if(e!=""&&e!="transparent"||a.nodeName(b,"body"))break;d="backgroundColor"}while(b=b.parentNode);return c(e)}function h(){var a=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,b={},c,d;if(a&&a.length&&a[0]&&a[a[0]]){var e=a.length;while(e--)c=a[e],typeof a[c]=="string"&&(d=c.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b[d]=a[c])}else for(c in a)typeof a[c]=="string"&&(b[c]=a[c]);return b}function i(b){var c,d;for(c in b)d=b[c],(d==null||a.isFunction(d)||c in g||/scrollbar/.test(c)||!/color/i.test(c)&&isNaN(parseFloat(d)))&&delete b[c];return b}function j(a,b){var c={_:0},d;for(d in b)a[d]!=b[d]&&(c[d]=b[d]);return c}function k(b,c,d,e){typeof b=="object"&&(e=c,d=null,c=b,b=c.effect),a.isFunction(c)&&(e=c,d=null,c={});if(typeof c=="number"||a.fx.speeds[c])e=d,d=c,c={};return a.isFunction(d)&&(e=d,d=null),c=c||{},d=d||c.duration,d=a.fx.off?0:typeof d=="number"?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,e=e||c.complete,[b,c,d,e]}function l(b){return!b||typeof b=="number"||a.fx.speeds[b]?!0:typeof b=="string"&&!a.effects[b]?!0:!1}a.effects={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(b,e){a.fx.step[e]=function(a){a.colorInit||(a.start=d(a.elem,e),a.end=c(a.end),a.colorInit=!0),a.elem.style[e]="rgb("+Math.max(Math.min(parseInt(a.pos*(a.end[0]-a.start[0])+a.start[0],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[1]-a.start[1])+a.start[1],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[2]-a.start[2])+a.start[2],10),255),0)+")"}});var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(b,c,d,e){return a.isFunction(d)&&(e=d,d=null),this.queue(function(){var g=a(this),k=g.attr("style")||" ",l=i(h.call(this)),m,n=g.attr("class")||"";a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),m=i(h.call(this)),g.attr("class",n),g.animate(j(l,m),{queue:!1,duration:c,easing:d,complete:function(){a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),typeof g.attr("style")=="object"?(g.attr("style").cssText="",g.attr("style").cssText=k):g.attr("style",k),e&&e.apply(this,arguments),a.dequeue(this)}})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{remove:b},c,d,e]):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return typeof d=="boolean"||d===b?e?a.effects.animateClass.apply(this,[d?{add:c}:{remove:c},e,f,g]):this._toggleClass(c,d):a.effects.animateClass.apply(this,[{toggle:c},d,e,f])},switchClass:function(b,c,d,e,f){return a.effects.animateClass.apply(this,[{add:c,remove:b},d,e,f])}}),a.extend(a.effects,{version:"1.8.24",save:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.data("ec.storage."+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.css(b[c],a.data("ec.storage."+b[c]))},setMode:function(a,b){return b=="toggle"&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e=document.activeElement;try{e.id}catch(f){e=document.body}return b.wrap(d),(b[0]===e||a.contains(b[0],e))&&a(e).focus(),d=b.parent(),b.css("position")=="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),d.css(c).show()},removeWrapper:function(b){var c,d=document.activeElement;return b.parent().is(".ui-effects-wrapper")?(c=b.parent().replaceWith(b),(b[0]===d||a.contains(b[0],d))&&a(d).focus(),c):b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(b,c,d,e){var f=k.apply(this,arguments),g={options:f[1],duration:f[2],callback:f[3]},h=g.options.mode,i=a.effects[b];return a.fx.off||!i?h?this[h](g.duration,g.callback):this.each(function(){g.callback&&g.callback.call(this)}):i.call(this,g)},_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="show",this.effect.apply(this,b)},_hide:a.fn.hide,hide:function(a){if(l(a))return this._hide.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="hide",this.effect.apply(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(l(b)||typeof b=="boolean"||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=k.apply(this,arguments);return c[1].mode="toggle",this.effect.apply(this,c)},cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}});var m={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,b){m[b]=function(b){return Math.pow(b,a+2)}}),a.extend(m,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return a===0||a===1?a:-Math.pow(2,8*(a-1))*Math.sin(((a-1)*80-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){var b,c=4;while(a<((b=Math.pow(2,--c))-1)/11);return 1/Math.pow(4,3-c)-7.5625*Math.pow((b*3-2)/22-a,2)}}),a.each(m,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return a<.5?c(a*2)/2:c(a*-2+2)/-2+1}})}(jQuery),function(a,b){a.effects.blind=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"vertical";a.effects.save(c,d),c.show();var g=a.effects.createWrapper(c).css({overflow:"hidden"}),h=f=="vertical"?"height":"width",i=f=="vertical"?g.height():g.width();e=="show"&&g.css(h,0);var j={};j[h]=e=="show"?i:0,g.animate(j,b.duration,b.options.easing,function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}}(jQuery),function(a,b){a.effects.bounce=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"up",g=b.options.distance||20,h=b.options.times||5,i=b.duration||250;/show|hide/.test(e)&&d.push("opacity"),a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",g=b.options.distance||(j=="top"?c.outerHeight(!0)/3:c.outerWidth(!0)/3);e=="show"&&c.css("opacity",0).css(j,k=="pos"?-g:g),e=="hide"&&(g=g/(h*2)),e!="hide"&&h--;if(e=="show"){var l={opacity:1};l[j]=(k=="pos"?"+=":"-=")+g,c.animate(l,i/2,b.options.easing),g=g/2,h--}for(var m=0;m<h;m++){var n={},p={};n[j]=(k=="pos"?"-=":"+=")+g,p[j]=(k=="pos"?"+=":"-=")+g,c.animate(n,i/2,b.options.easing).animate(p,i/2,b.options.easing),g=e=="hide"?g*2:g/2}if(e=="hide"){var l={opacity:0};l[j]=(k=="pos"?"-=":"+=")+g,c.animate(l,i/2,b.options.easing,function(){c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)})}else{var n={},p={};n[j]=(k=="pos"?"-=":"+=")+g,p[j]=(k=="pos"?"+=":"-=")+g,c.animate(n,i/2,b.options.easing).animate(p,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)})}c.queue("fx",function(){c.dequeue()}),c.dequeue()})}}(jQuery),function(a,b){a.effects.clip=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","height","width"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"vertical";a.effects.save(c,d),c.show();var g=a.effects.createWrapper(c).css({overflow:"hidden"}),h=c[0].tagName=="IMG"?g:c,i={size:f=="vertical"?"height":"width",position:f=="vertical"?"top":"left"},j=f=="vertical"?h.height():h.width();e=="show"&&(h.css(i.size,0),h.css(i.position,j/2));var k={};k[i.size]=e=="show"?j:0,k[i.position]=e=="show"?0:j/2,h.animate(k,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()}})})}}(jQuery),function(a,b){a.effects.drop=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","opacity"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight(!0)/2:c.outerWidth(!0)/2);e=="show"&&c.css("opacity",0).css(g,h=="pos"?-i:i);var j={opacity:e=="show"?1:0};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}}(jQuery),function(a,b){a.effects.explode=function(b){return this.queue(function(){var c=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3,d=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;b.options.mode=b.options.mode=="toggle"?a(this).is(":visible")?"hide":"show":b.options.mode;var e=a(this).show().css("visibility","hidden"),f=e.offset();f.top-=parseInt(e.css("marginTop"),10)||0,f.left-=parseInt(e.css("marginLeft"),10)||0;var g=e.outerWidth(!0),h=e.outerHeight(!0);for(var i=0;i<c;i++)for(var j=0;j<d;j++)e.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(g/d),top:-i*(h/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/d,height:h/c,left:f.left+j*(g/d)+(b.options.mode=="show"?(j-Math.floor(d/2))*(g/d):0),top:f.top+i*(h/c)+(b.options.mode=="show"?(i-Math.floor(c/2))*(h/c):0),opacity:b.options.mode=="show"?0:1}).animate({left:f.left+j*(g/d)+(b.options.mode=="show"?0:(j-Math.floor(d/2))*(g/d)),top:f.top+i*(h/c)+(b.options.mode=="show"?0:(i-Math.floor(c/2))*(h/c)),opacity:b.options.mode=="show"?1:0},b.duration||500);setTimeout(function(){b.options.mode=="show"?e.css({visibility:"visible"}):e.css({visibility:"visible"}).hide(),b.callback&&b.callback.apply(e[0]),e.dequeue(),a("div.ui-effects-explode").remove()},b.duration||500)})}}(jQuery),function(a,b){a.effects.fade=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide");c.animate({opacity:d},{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}}(jQuery),function(a,b){a.effects.fold=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"hide"),f=b.options.size||15,g=!!b.options.horizFirst,h=b.duration?b.duration/2:a.fx.speeds._default/2;a.effects.save(c,d),c.show();var i=a.effects.createWrapper(c).css({overflow:"hidden"}),j=e=="show"!=g,k=j?["width","height"]:["height","width"],l=j?[i.width(),i.height()]:[i.height(),i.width()],m=/([0-9]+)%/.exec(f);m&&(f=parseInt(m[1],10)/100*l[e=="hide"?0:1]),e=="show"&&i.css(g?{height:0,width:f}:{height:f,width:0});var n={},p={};n[k[0]]=e=="show"?l[0]:f,p[k[1]]=e=="show"?l[1]:0,i.animate(n,h,b.options.easing).animate(p,h,b.options.easing,function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}}(jQuery),function(a,b){a.effects.highlight=function(b){return this.queue(function(){var c=a(this),d=["backgroundImage","backgroundColor","opacity"],e=a.effects.setMode(c,b.options.mode||"show"),f={backgroundColor:c.css("backgroundColor")};e=="hide"&&(f.opacity=0),a.effects.save(c,d),c.show().css({backgroundImage:"none",backgroundColor:b.options.color||"#ffff99"}).animate(f,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),e=="show"&&!a.support.opacity&&this.style.removeAttribute("filter"),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}}(jQuery),function(a,b){a.effects.pulsate=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"show"),e=(b.options.times||5)*2-1,f=b.duration?b.duration/2:a.fx.speeds._default/2,g=c.is(":visible"),h=0;g||(c.css("opacity",0).show(),h=1),(d=="hide"&&g||d=="show"&&!g)&&e--;for(var i=0;i<e;i++)c.animate({opacity:h},f,b.options.easing),h=(h+1)%2;c.animate({opacity:h},f,b.options.easing,function(){h==0&&c.hide(),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}).dequeue()})}}(jQuery),function(a,b){a.effects.puff=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide"),e=parseInt(b.options.percent,10)||150,f=e/100,g={height:c.height(),width:c.width()};a.extend(b.options,{fade:!0,mode:d,percent:d=="hide"?e:100,from:d=="hide"?g:{height:g.height*f,width:g.width*f}}),c.effect("scale",b.options,b.duration,b.callback),c.dequeue()})},a.effects.scale=function(b){return this.queue(function(){var c=a(this),d=a.extend(!0,{},b.options),e=a.effects.setMode(c,b.options.mode||"effect"),f=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:e=="hide"?0:100),g=b.options.direction||"both",h=b.options.origin;e!="effect"&&(d.origin=h||["middle","center"],d.restore=!0);var i={height:c.height(),width:c.width()};c.from=b.options.from||(e=="show"?{height:0,width:0}:i);var j={y:g!="horizontal"?f/100:1,x:g!="vertical"?f/100:1};c.to={height:i.height*j.y,width:i.width*j.x},b.options.fade&&(e=="show"&&(c.from.opacity=0,c.to.opacity=1),e=="hide"&&(c.from.opacity=1,c.to.opacity=0)),d.from=c.from,d.to=c.to,d.mode=e,c.effect("size",d,b.duration,b.callback),c.dequeue()})},a.effects.size=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right","width","height","overflow","opacity"],e=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],g=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],i=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],j=a.effects.setMode(c,b.options.mode||"effect"),k=b.options.restore||!1,l=b.options.scale||"both",m=b.options.origin,n={height:c.height(),width:c.width()};c.from=b.options.from||n,c.to=b.options.to||n;if(m){var p=a.effects.getBaseline(m,n);c.from.top=(n.height-c.from.height)*p.y,c.from.left=(n.width-c.from.width)*p.x,c.to.top=(n.height-c.to.height)*p.y,c.to.left=(n.width-c.to.width)*p.x}var q={from:{y:c.from.height/n.height,x:c.from.width/n.width},to:{y:c.to.height/n.height,x:c.to.width/n.width}};if(l=="box"||l=="both")q.from.y!=q.to.y&&(d=d.concat(h),c.from=a.effects.setTransition(c,h,q.from.y,c.from),c.to=a.effects.setTransition(c,h,q.to.y,c.to)),q.from.x!=q.to.x&&(d=d.concat(i),c.from=a.effects.setTransition(c,i,q.from.x,c.from),c.to=a.effects.setTransition(c,i,q.to.x,c.to));(l=="content"||l=="both")&&q.from.y!=q.to.y&&(d=d.concat(g),c.from=a.effects.setTransition(c,g,q.from.y,c.from),c.to=a.effects.setTransition(c,g,q.to.y,c.to)),a.effects.save(c,k?d:e),c.show(),a.effects.createWrapper(c),c.css("overflow","hidden").css(c.from);if(l=="content"||l=="both")h=h.concat(["marginTop","marginBottom"]).concat(g),i=i.concat(["marginLeft","marginRight"]),f=d.concat(h).concat(i),c.find("*[width]").each(function(){var c=a(this);k&&a.effects.save(c,f);var d={height:c.height(),width:c.width()};c.from={height:d.height*q.from.y,width:d.width*q.from.x},c.to={height:d.height*q.to.y,width:d.width*q.to.x},q.from.y!=q.to.y&&(c.from=a.effects.setTransition(c,h,q.from.y,c.from),c.to=a.effects.setTransition(c,h,q.to.y,c.to)),q.from.x!=q.to.x&&(c.from=a.effects.setTransition(c,i,q.from.x,c.from),c.to=a.effects.setTransition(c,i,q.to.x,c.to)),c.css(c.from),c.animate(c.to,b.duration,b.options.easing,function(){k&&a.effects.restore(c,f)})});c.animate(c.to,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){c.to.opacity===0&&c.css("opacity",c.from.opacity),j=="hide"&&c.hide(),a.effects.restore(c,k?d:e),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}}(jQuery),function(a,b){a.effects.shake=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"effect"),f=b.options.direction||"left",g=b.options.distance||20,h=b.options.times||3,i=b.duration||b.options.duration||140;a.effects.save(c,d),c.show(),a.effects.createWrapper(c);var j=f=="up"||f=="down"?"top":"left",k=f=="up"||f=="left"?"pos":"neg",l={},m={},n={};l[j]=(k=="pos"?"-=":"+=")+g,m[j]=(k=="pos"?"+=":"-=")+g*2,n[j]=(k=="pos"?"-=":"+=")+g*2,c.animate(l,i,b.options.easing);for(var p=1;p<h;p++)c.animate(m,i,b.options.easing).animate(n,i,b.options.easing);c.animate(m,i,b.options.easing).animate(l,i/2,b.options.easing,function(){a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments)}),c.queue("fx",function(){c.dequeue()}),c.dequeue()})}}(jQuery),function(a,b){a.effects.slide=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"show"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c).css({overflow:"hidden"});var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight(!0):c.outerWidth(!0));e=="show"&&c.css(g,h=="pos"?isNaN(i)?"-"+i:-i:i);var j={};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}}(jQuery),function(a,b){a.effects.transfer=function(b){return this.queue(function(){var c=a(this),d=a(b.options.to),e=d.offset(),f={top:e.top,left:e.left,height:d.innerHeight(),width:d.innerWidth()},g=c.offset(),h=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:g.top,left:g.left,height:c.innerHeight(),width:c.innerWidth(),position:"absolute"}).animate(f,b.duration,b.options.easing,function(){h.remove(),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}}(jQuery),function(a,b){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:!0,clearStyle:!1,collapsible:!1,event:"click",fillSpace:!1,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var b=this,c=b.options;b.running=0,b.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"),b.headers=b.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-focus")}),b.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(c.navigation){var d=b.element.find("a").filter(c.navigationFilter).eq(0);if(d.length){var e=d.closest(".ui-accordion-header");e.length?b.active=e:b.active=d.closest(".ui-accordion-content").prev()}}b.active=b._findActive(b.active||c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"),b.active.next().addClass("ui-accordion-content-active"),b._createIcons(),b.resize(),b.element.attr("role","tablist"),b.headers.attr("role","tab").bind("keydown.accordion",function(a){return b._keydown(a)}).next().attr("role","tabpanel"),b.headers.not(b.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide(),b.active.length?b.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):b.headers.eq(0).attr("tabIndex",0),a.browser.safari||b.headers.find("a").attr("tabIndex",-1),c.event&&b.headers.bind(c.event.split(" ").join(".accordion ")+".accordion",function(a){b._clickHandler.call(b,a,this),a.preventDefault()})},_createIcons:function(){var b=this.options;b.icons&&(a("<span></span>").addClass("ui-icon "+b.icons.header).prependTo(this.headers),this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected),this.element.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.children(".ui-icon").remove(),this.element.removeClass("ui-accordion-icons")},destroy:function(){var b=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"),this.headers.find("a").removeAttr("tabIndex"),this._destroyIcons();var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");return(b.autoHeight||b.fillHeight)&&c.css("height",""),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b=="active"&&this.activate(c),b=="icons"&&(this._destroyIcons(),c&&this._createIcons()),b=="disabled"&&this.headers.add(this.headers.next())[c?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(b){if(this.options.disabled||b.altKey||b.ctrlKey)return;var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._clickHandler({target:b.target},b.target),b.preventDefault()}return f?(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),!1):!0},resize:function(){var b=this.options,c;if(b.fillSpace){if(a.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}c=this.element.parent().height(),a.browser.msie&&this.element.parent().css("overflow",d),this.headers.each(function(){c-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")}else b.autoHeight&&(c=0,this.headers.next().each(function(){c=Math.max(c,a(this).height("").height())}).height(c));return this},activate:function(a){this.options.active=a;var b=this._findActive(a)[0];return this._clickHandler({target:b},b),this},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===!1?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,c){var d=this.options;if(d.disabled)return;if(!b.target){if(!d.collapsible)return;this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),this.active.next().addClass("ui-accordion-content-active");var e=this.active.next(),f={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:e},g=this.active=a([]);this._toggle(g,e,f);return}var h=a(b.currentTarget||c),i=h[0]===this.active[0];d.active=d.collapsible&&i?!1:this.headers.index(h);if(this.running||!d.collapsible&&i)return;var j=this.active,g=h.next(),e=this.active.next(),f={options:d,newHeader:i&&d.collapsible?a([]):h,oldHeader:this.active,newContent:i&&d.collapsible?a([]):g,oldContent:e},k=this.headers.index(this.active[0])>this.headers.index(h[0]);this.active=i?a([]):h,this._toggle(g,e,f,i,k),j.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),i||(h.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected),h.next().addClass("ui-accordion-content-active"));return},_toggle:function(b,c,d,e,f){var g=this,h=g.options;g.toShow=b,g.toHide=c,g.data=d;var i=function(){if(!g)return;return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data),g.running=c.size()===0?b.size():c.size();if(h.animated){var j={};h.collapsible&&e?j={toShow:a([]),toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace}:j={toShow:b,toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace},h.proxied||(h.proxied=h.animated),h.proxiedDuration||(h.proxiedDuration=h.duration),h.animated=a.isFunction(h.proxied)?h.proxied(j):h.proxied,h.duration=a.isFunction(h.proxiedDuration)?h.proxiedDuration(j):h.proxiedDuration;var k=a.ui.accordion.animations,l=h.duration,m=h.animated;m&&!k[m]&&!a.easing[m]&&(m="slide"),k[m]||(k[m]=function(a){this.slide(a,{easing:m,duration:l||700})}),k[m](j)}else h.collapsible&&e?b.toggle():(c.hide(),b.show()),i(!0);c.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur(),b.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(this.running)return;this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""}),this.toHide.removeClass("ui-accordion-content-active"),this.toHide.length&&(this.toHide.parent()[0].className=this.toHide.parent()[0].className),this._trigger("change",null,this.data)}}),a.extend(a.ui.accordion,{version:"1.8.24",animations:{slide:function(b,c){b=a.extend({easing:"swing",duration:300},b,c);if(!b.toHide.size()){b.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},b);return}if(!b.toShow.size()){b.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},b);return}var d=b.toShow.css("overflow"),e=0,f={},g={},h=["height","paddingTop","paddingBottom"],i,j=b.toShow;i=j[0].style.width,j.width(j.parent().width()-parseFloat(j.css("paddingLeft"))-parseFloat(j.css("paddingRight"))-(parseFloat(j.css("borderLeftWidth"))||0)-(parseFloat(j.css("borderRightWidth"))||0)),a.each(h,function(c,d){g[d]="hide";var e=(""+a.css(b.toShow[0],d)).match(/^([\d+-.]+)(.*)$/);f[d]={value:e[1],unit:e[2]||"px"}}),b.toShow.css({height:0,overflow:"hidden"}).show(),b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate(g,{step:function(a,c){c.prop=="height"&&(e=c.end-c.start===0?0:(c.now-c.start)/(c.end-c.start)),b.toShow[0].style[c.prop]=e*f[c.prop].value+f[c.prop].unit},duration:b.duration,easing:b.easing,complete:function(){b.autoHeight||b.toShow.css("height",""),b.toShow.css({width:i,overflow:d}),b.complete()}})},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1e3:200})}}})}(jQuery),function(a,b){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var b=this,c=this.element[0].ownerDocument,d;this.isMultiLine=this.element.is("textarea"),this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(b.options.disabled||b.element.propAttr("readOnly"))return;d=!1;var e=a.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:b._move("previousPage",c);break;case e.PAGE_DOWN:b._move("nextPage",c);break;case e.UP:b._keyEvent("previous",c);break;case e.DOWN:b._keyEvent("next",c);break;case e.ENTER:case e.NUMPAD_ENTER:b.menu.active&&(d=!0,c.preventDefault());case e.TAB:if(!b.menu.active)return;b.menu.select(c);break;case e.ESCAPE:b.element.val(b.term),b.close(c);break;default:clearTimeout(b.searching),b.searching=setTimeout(function(){b.term!=b.element.val()&&(b.selectedItem=null,b.search(null,c))},b.options.delay)}}).bind("keypress.autocomplete",function(a){d&&(d=!1,a.preventDefault())}).bind("focus.autocomplete",function(){if(b.options.disabled)return;b.selectedItem=null,b.previous=b.element.val()}).bind("blur.autocomplete",function(a){if(b.options.disabled)return;clearTimeout(b.searching),b.closing=setTimeout(function(){b.close(a),b._change(a)},150)}),this._initSource(),this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",c)[0]).mousedown(function(c){var d=b.menu.element[0];a(c.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(c){c.target!==b.element[0]&&c.target!==d&&!a.ui.contains(d,c.target)&&b.close()})},1),setTimeout(function(){clearTimeout(b.closing)},13)}).menu({focus:function(a,c){var d=c.item.data("item.autocomplete");!1!==b._trigger("focus",a,{item:d})&&/^key/.test(a.originalEvent.type)&&b.element.val(d.value)},selected:function(a,d){var e=d.item.data("item.autocomplete"),f=b.previous;b.element[0]!==c.activeElement&&(b.element.focus(),b.previous=f,setTimeout(function(){b.previous=f,b.selectedItem=e},1)),!1!==b._trigger("select",a,{item:e})&&b.element.val(e.value),b.term=b.element.val(),b.close(a),b.selectedItem=e},blur:function(a,c){b.menu.element.is(":visible")&&b.element.val()!==b.term&&b.element.val(b.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),a.fn.bgiframe&&this.menu.element.bgiframe(),b.beforeunloadHandler=function(){b.element.removeAttr("autocomplete")},a(window).bind("beforeunload",b.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),a(window).unbind("beforeunload",this.beforeunloadHandler),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b==="source"&&this._initSource(),b==="appendTo"&&this.menu.element.appendTo(a(c||"body",this.element[0].ownerDocument)[0]),b==="disabled"&&c&&this.xhr&&this.xhr.abort()},_initSource:function(){var b=this,c,d;a.isArray(this.options.source)?(c=this.options.source,this.source=function(b,d){d(a.ui.autocomplete.filter(c,b.term))}):typeof this.options.source=="string"?(d=this.options.source,this.source=function(c,e){b.xhr&&b.xhr.abort(),b.xhr=a.ajax({url:d,data:c,dataType:"json",success:function(a,b){e(a)},error:function(){e([])}})}):this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val(),this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)===!1)return;return this._search(a)},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){!this.options.disabled&&a&&a.length?(a=this._normalize(a),this._suggest(a),this._trigger("open")):this.close()},close:function(a){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",a))},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return typeof b=="string"?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(c,b),this.menu.deactivate(),this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItem(b,c)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append(a("<a></a>").text(c.label)).appendTo(b)},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term),this.menu.deactivate();return}this.menu[a](b)},widget:function(){return this.menu.element},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(a,b),b.preventDefault()}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}})}(jQuery),function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length)return;c.preventDefault(),b.select(c)}),this.refresh()},refresh:function(){var b=this,c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.scrollTop(),e=this.element.height();c<0?this.element.scrollTop(d+c):c>=e&&this.element.scrollTop(d+c-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",a,{item:b})},deactivate:function(){if(!this.active)return;this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,c){if(!this.active){this.activate(c,this.element.children(b));return}var d=this.active[a+"All"](".ui-menu-item").eq(0);d.length?this.activate(c,d):this.activate(c,this.element.children(b))},nextPage:function(b){if(this.hasScroll()){if(!this.active||this.last()){this.activate(b,this.element.children(".ui-menu-item:first"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c-d+a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:last")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(b){if(this.hasScroll()){if(!this.active||this.first()){this.activate(b,this.element.children(".ui-menu-item:last"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c+d-a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:first")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})}(jQuery),function(a,b){var c,d,e,f,g="ui-button ui-widget ui-state-default ui-corner-all",h="ui-state-hover ui-state-active ",i="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var b=a(this).find(":ui-button");setTimeout(function(){b.button("refresh")},1)},k=function(b){var c=b.name,d=b.form,e=a([]);return c&&(d?e=a(d).find("[name='"+c+"']"):e=a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",j),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.propAttr("disabled"):this.element.propAttr("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,h=this.options,i=this.type==="checkbox"||this.type==="radio",l="ui-state-hover"+(i?"":" ui-state-active"),m="ui-state-focus";h.label===null&&(h.label=this.buttonElement.html()),this.buttonElement.addClass(g).attr("role","button").bind("mouseenter.button",function(){if(h.disabled)return;a(this).addClass("ui-state-hover"),this===c&&a(this).addClass("ui-state-active")}).bind("mouseleave.button",function(){if(h.disabled)return;a(this).removeClass(l)}).bind("click.button",function(a){h.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this.element.bind("focus.button",function(){b.buttonElement.addClass(m)}).bind("blur.button",function(){b.buttonElement.removeClass(m)}),i&&(this.element.bind("change.button",function(){if(f)return;b.refresh()}),this.buttonElement.bind("mousedown.button",function(a){if(h.disabled)return;f=!1,d=a.pageX,e=a.pageY}).bind("mouseup.button",function(a){if(h.disabled)return;if(d!==a.pageX||e!==a.pageY)f=!0})),this.type==="checkbox"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).toggleClass("ui-state-active"),b.buttonElement.attr("aria-pressed",b.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var c=b.element[0];k(c).not(c).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown.button",function(){if(h.disabled)return!1;a(this).addClass("ui-state-active"),c=this,a(document).one("mouseup",function(){c=null})}).bind("mouseup.button",function(){if(h.disabled)return!1;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(b){if(h.disabled)return!1;(b.keyCode==a.ui.keyCode.SPACE||b.keyCode==a.ui.keyCode.ENTER)&&a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",h.disabled),this._resetButton()},_determineButtonType:function(){this.element.is(":checkbox")?this.type="checkbox":this.element.is(":radio")?this.type="radio":this.element.is("input")?this.type="input":this.type="button";if(this.type==="checkbox"||this.type==="radio"){var a=this.element.parents().filter(":last"),b="label[for='"+this.element.attr("id")+"']";this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible");var c=this.element.is(":checked");c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.attr("aria-pressed",c)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(g+" "+h+" "+i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title"),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled"){c?this.element.propAttr("disabled",!0):this.element.propAttr("disabled",!1);return}this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b),this.type==="radio"?k(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var b=this.buttonElement.removeClass(i),c=a("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",c))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c),a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var b=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy"),a.Widget.prototype.destroy.call(this)}})}(jQuery),function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);if(!c.length)return;c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);if($.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])||!d.length)return;d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover")})}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}$.extend($.ui,{datepicker:{version:"1.8.24"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);if(c.hasClass(this.markerClassName))return;this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a)},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]),!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName))return;c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block")},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f),this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(d){$.datepicker.log(d)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if($.datepicker._isDisabledDatepicker(a)||$.datepicker._lastInput==a)return;var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){return e|=$(this).css("position")=="fixed",!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a)),this._attachHandlers(a);var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+(c?0:$(document).scrollLeft()),i=document.documentElement.clientHeight+(c?0:$(document).scrollTop());return b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0),b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!b||a&&b!=$.data(a,PROP_NAME))return;if(this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=function(){$.datepicker._tidyDialog(b)};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,e):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1;var f=this._get(b,"onClose");f&&f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!$.datepicker._curInst)return;var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);if(this._isDisabledDatepicker(d[0]))return;this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e)},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if($(d).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0]))return;var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;return c&&s++,c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;return r+=f[0].length,parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase())return f=c[0],r+=d.length,!1});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;do{var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}while(!0)}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;return c&&m++,c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;return c&&e++,c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()==a.lastVal)return;var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());return f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id.replace(/\\\\/g,"\\");a.dpDiv.find("[data-handler]").map(function(){var a={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,-b,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,+b,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(c)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),a[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' data-handler="selectDay" data-event="click" data-month="'+Y.getMonth()+'" data-year="'+Y.getFullYear()+'"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}return K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1,K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}return l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>",l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return e=d&&e>d?d:e,e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return typeof a!="string"||a!="isDisabled"&&a!="getDate"&&a!="widget"?a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)}):$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.24",window["DP_jQuery_"+dpuuid]=$}(jQuery),function(a,b){var c="ui-dialog ui-widget ui-widget-content ui-corner-all ",d={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},e={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};a.widget("ui.dialog",{options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.options.title=this.options.title||this.originalTitle;var b=this,d=b.options,e=d.title||"&#160;",f=a.ui.dialog.getTitleId(b.element),g=(b.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass(c+d.dialogClass).css({zIndex:d.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(c){d.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(a){b.moveToTop(!1,a)}),h=b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),i=(b.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),j=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){j.addClass("ui-state-hover")},function(){j.removeClass("ui-state-hover")}).focus(function(){j.addClass("ui-state-focus")}).blur(function(){j.removeClass("ui-state-focus")}).click(function(a){return b.close(a),!1}).appendTo(i),k=(b.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),l=a("<span></span>").addClass("ui-dialog-title").attr("id",f).html(e).prependTo(i);a.isFunction(d.beforeclose)&&!a.isFunction(d.beforeClose)&&(d.beforeClose=d.beforeclose),i.find("*").add(i).disableSelection(),d.draggable&&a.fn.draggable&&b._makeDraggable(),d.resizable&&a.fn.resizable&&b._makeResizable(),b._createButtons(d.buttons),b._isOpen=!1,a.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;return a.overlay&&a.overlay.destroy(),a.uiDialog.hide(),a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),a.uiDialog.remove(),a.originalTitle&&a.element.attr("title",a.originalTitle),a},widget:function(){return this.uiDialog},close:function(b){var c=this,d,e;if(!1===c._trigger("beforeClose",b))return;return c.overlay&&c.overlay.destroy(),c.uiDialog.unbind("keypress.ui-dialog"),c._isOpen=!1,c.options.hide?c.uiDialog.hide(c.options.hide,function(){c._trigger("close",b)}):(c.uiDialog.hide(),c._trigger("close",b)),a.ui.dialog.overlay.resize(),c.options.modal&&(d=0,a(".ui-dialog").each(function(){this!==c.uiDialog[0]&&(e=a(this).css("z-index"),isNaN(e)||(d=Math.max(d,e)))}),a.ui.dialog.maxZ=d),c},isOpen:function(){return this._isOpen},moveToTop:function(b,c){var d=this,e=d.options,f;return e.modal&&!b||!e.stack&&!e.modal?d._trigger("focus",c):(e.zIndex>a.ui.dialog.maxZ&&(a.ui.dialog.maxZ=e.zIndex),d.overlay&&(a.ui.dialog.maxZ+=1,d.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)),f={scrollTop:d.element.scrollTop(),scrollLeft:d.element.scrollLeft()},a.ui.dialog.maxZ+=1,d.uiDialog.css("z-index",a.ui.dialog.maxZ),d.element.attr(f),d._trigger("focus",c),d)},open:function(){if(this._isOpen)return;var b=this,c=b.options,d=b.uiDialog;return b.overlay=c.modal?new a.ui.dialog.overlay(b):null,b._size(),b._position(c.position),d.show(c.show),b.moveToTop(!0),c.modal&&d.bind("keydown.ui-dialog",function(b){if(b.keyCode!==a.ui.keyCode.TAB)return;var c=a(":tabbable",this),d=c.filter(":first"),e=c.filter(":last");if(b.target===e[0]&&!b.shiftKey)return d.focus(1),!1;if(b.target===d[0]&&b.shiftKey)return e.focus(1),!1}),a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(),b._isOpen=!0,b._trigger("open"),b},_createButtons:function(b){var c=this,d=!1,e=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),f=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);c.uiDialog.find(".ui-dialog-buttonpane").remove(),typeof b=="object"&&b!==null&&a.each(b,function(){return!(d=!0)}),d&&(a.each(b,function(b,d){d=a.isFunction(d)?{click:d,text:b}:d;var e=a('<button type="button"></button>').click(function(){d.click.apply(c.element[0],arguments)}).appendTo(f);a.each(d,function(a,b){if(a==="click")return;a in e?e[a](b):e.attr(a,b)}),a.fn.button&&e.button()}),e.appendTo(c.uiDialog))},_makeDraggable:function(){function f(a){return{position:a.position,offset:a.offset}}var b=this,c=b.options,d=a(document),e;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,g){e=c.height==="auto"?"auto":a(this).height(),a(this).height(a(this).height()).addClass("ui-dialog-dragging"),b._trigger("dragStart",d,f(g))},drag:function(a,c){b._trigger("drag",a,f(c))},stop:function(g,h){c.position=[h.position.left-d.scrollLeft(),h.position.top-d.scrollTop()],a(this).removeClass("ui-dialog-dragging").height(e),b._trigger("dragStop",g,f(h)),a.ui.dialog.overlay.resize()}})},_makeResizable:function(c){function h(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}c=c===b?this.options.resizable:c;var d=this,e=d.options,f=d.uiDialog.css("position"),g=typeof c=="string"?c:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:g,start:function(b,c){a(this).addClass("ui-dialog-resizing"),d._trigger("resizeStart",b,h(c))},resize:function(a,b){d._trigger("resize",a,h(b))},stop:function(b,c){a(this).removeClass("ui-dialog-resizing"),e.height=a(this).height(),e.width=a(this).width(),d._trigger("resizeStop",b,h(c)),a.ui.dialog.overlay.resize()}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(b){var c=[],d=[0,0],e;if(b){if(typeof b=="string"||typeof b=="object"&&"0"in b)c=b.split?b.split(" "):[b[0],b[1]],c.length===1&&(c[1]=c[0]),a.each(["left","top"],function(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c.join(" "),at:c.join(" "),offset:d.join(" ")};b=a.extend({},a.ui.dialog.prototype.options.position,b)}else b=a.ui.dialog.prototype.options.position;e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},b)),e||this.uiDialog.hide()},_setOptions:function(b){var c=this,f={},g=!1;a.each(b,function(a,b){c._setOption(a,b),a in d&&(g=!0),a in e&&(f[a]=b)}),g&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",f)},_setOption:function(b,d){var e=this,f=e.uiDialog;switch(b){case"beforeclose":b="beforeClose";break;case"buttons":e._createButtons(d);break;case"closeText":e.uiDialogTitlebarCloseText.text(""+d);break;case"dialogClass":f.removeClass(e.options.dialogClass).addClass(c+d);break;case"disabled":d?f.addClass("ui-dialog-disabled"):f.removeClass("ui-dialog-disabled");break;case"draggable":var g=f.is(":data(draggable)");g&&!d&&f.draggable("destroy"),!g&&d&&e._makeDraggable();break;case"position":e._position(d);break;case"resizable":var h=f.is(":data(resizable)");h&&!d&&f.resizable("destroy"),h&&typeof d=="string"&&f.resizable("option","handles",d),!h&&d!==!1&&e._makeResizable(d);break;case"title":a(".ui-dialog-title",e.uiDialogTitlebar).html(""+(d||"&#160;"))}a.Widget.prototype._setOption.apply(e,arguments)},_size:function(){var b=this.options,c,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),b.minWidth>b.width&&(b.width=b.minWidth),c=this.uiDialog.css({height:"auto",width:b.width}).height(),d=Math.max(0,b.minHeight-c);if(b.height==="auto")if(a.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();var f=this.element.css("height","auto").height();e||this.uiDialog.hide(),this.element.height(Math.max(f,d))}else this.element.height(Math.max(b.height-c,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),a.extend(a.ui.dialog,{version:"1.8.24",uuid:0,maxZ:0,getTitleId:function(a){var b=a.attr("id");return b||(this.uuid+=1,b=this.uuid),"ui-dialog-title-"+b},overlay:function(b){this.$el=a.ui.dialog.overlay.create(b)}}),a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(b){this.instances.length===0&&(setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return!1})},1),a(document).bind("keydown.dialog-overlay",function(c){b.options.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}),a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize));var c=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});return a.fn.bgiframe&&c.bgiframe(),this.instances.push(c),c},destroy:function(b){var c=a.inArray(b,this.instances);c!=-1&&this.oldInstances.push(this.instances.splice(c,1)[0]),this.instances.length===0&&a([document,window]).unbind(".dialog-overlay"),b.remove();var d=0;a.each(this.instances,function(){d=Math.max(d,this.css("z-index"))}),this.maxZ=d},height:function(){var b,c;return a.browser.msie&&a.browser.version<7?(b=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),b<c?a(window).height()+"px":b+"px"):a(document).height()+"px"},width:function(){var b,c;return a.browser.msie?(b=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),b<c?a(window).width()+"px":b+"px"):a(document).width()+"px"},resize:function(){var b=a([]);a.each(a.ui.dialog.overlay.instances,function(){b=b.add(this)}),b.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}}),a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})}(jQuery),function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?a.isFunction(b)?this.each(function(c){a(this).offset(b.call(this,c,a(this).offset()))}):this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),a.curCSS||(a.curCSS=a.css),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()}(jQuery),function(a,b){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove(),a.Widget.prototype.destroy.apply(this,arguments)},value:function(a){return a===b?this._value():(this._setOption("value",a),this)},_setOption:function(b,c){b==="value"&&(this.options.value=c,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),a.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;return typeof a!="number"&&(a=0),Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var a=this.value(),b=this._percentage();this.oldValue!==a&&(this.oldValue=a,this._trigger("change")),this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(b.toFixed(0)+"%"),this.element.attr("aria-valuenow",a)}}),a.extend(a.ui.progressbar,{version:"1.8.24"})}(jQuery),function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=a(this).data("index.ui-slider-handle"),f,g,h,i;if(b.options.disabled)return;switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:d.preventDefault();if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),f=b._start(d,e);if(f===!1)return}}i=b.options.step,b.options.values&&b.options.values.length?g=h=b.values(e):g=h=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:h=b._valueMin();break;case a.ui.keyCode.END:h=b._valueMax();break;case a.ui.keyCode.PAGE_UP:h=b._trimAlignValue(g+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(g-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=b._trimAlignValue(g+i);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g===b._valueMin())return;h=b._trimAlignValue(g-i)}b._slide(d,e,h)}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i),j===!1?!1:(this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0,!0))},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);return}if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a),a},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b),b;c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return Math.abs(c)*2>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.24"})}(jQuery),function(a,b){function e(){return++c}function f(){return++d}var c=0,d=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:!1,cookie:null,collapsible:!1,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(!0)},_setOption:function(a,b){if(a=="selected"){if(this.options.collapsible&&b==this.options.selected)return;this.select(b)}else this.options[a]=b,this._tabify()},_tabId:function(a){return a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(a){return a.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+f());return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(a,b){return{tab:a,panel:b,index:this.anchors.index(a)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function m(b,c){b.css("display",""),!a.support.opacity&&c.opacity&&b[0].style.removeAttribute("filter")}var d=this,e=this.options,f=/^#.+/;this.list=this.element.find("ol,ul").eq(0),this.lis=a(" > li:has(a[href])",this.list),this.anchors=this.lis.map(function(){return a("a",this)[0]}),this.panels=a([]),this.anchors.each(function(b,c){var g=a(c).attr("href"),h=g.split("#")[0],i;h&&(h===location.toString().split("#")[0]||(i=a("base")[0])&&h===i.href)&&(g=c.hash,c.href=g);if(f.test(g))d.panels=d.panels.add(d.element.find(d._sanitizeSelector(g)));else if(g&&g!=="#"){a.data(c,"href.tabs",g),a.data(c,"load.tabs",g.replace(/#.*$/,""));var j=d._tabId(c);c.href="#"+j;var k=d.element.find("#"+j);k.length||(k=a(e.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d.panels[b-1]||d.list),k.data("destroy.tabs",!0)),d.panels=d.panels.add(k)}else e.disabled.push(b)}),c?(this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.lis.addClass("ui-state-default ui-corner-top"),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),e.selected===b?(location.hash&&this.anchors.each(function(a,b){if(b.hash==location.hash)return e.selected=a,!1}),typeof e.selected!="number"&&e.cookie&&(e.selected=parseInt(d._cookie(),10)),typeof e.selected!="number"&&this.lis.filter(".ui-tabs-selected").length&&(e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))),e.selected=e.selected||(this.lis.length?0:-1)):e.selected===null&&(e.selected=-1),e.selected=e.selected>=0&&this.anchors[e.selected]||e.selected<0?e.selected:0,e.disabled=a.unique(e.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(a,b){return d.lis.index(a)}))).sort(),a.inArray(e.selected,e.disabled)!=-1&&e.disabled.splice(a.inArray(e.selected,e.disabled),1),this.panels.addClass("ui-tabs-hide"),this.lis.removeClass("ui-tabs-selected ui-state-active"),e.selected>=0&&this.anchors.length&&(d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"),this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"),d.element.queue("tabs",function(){d._trigger("show",null,d._ui(d.anchors[e.selected],d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]))}),this.load(e.selected)),a(window).bind("unload",function(){d.lis.add(d.anchors).unbind(".tabs"),d.lis=d.anchors=d.panels=null})):e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected")),this.element[e.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible"),e.cookie&&this._cookie(e.selected,e.cookie);for(var g=0,h;h=this.lis[g];g++)a(h)[a.inArray(g,e.disabled)!=-1&&!a(h).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");e.cache===!1&&this.anchors.removeData("cache.tabs"),this.lis.add(this.anchors).unbind(".tabs");if(e.event!=="mouseover"){var i=function(a,b){b.is(":not(.ui-state-disabled)")&&b.addClass("ui-state-"+a)},j=function(a,b){b.removeClass("ui-state-"+a)};this.lis.bind("mouseover.tabs",function(){i("hover",a(this))}),this.lis.bind("mouseout.tabs",function(){j("hover",a(this))}),this.anchors.bind("focus.tabs",function(){i("focus",a(this).closest("li"))}),this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var k,l;e.fx&&(a.isArray(e.fx)?(k=e.fx[0],l=e.fx[1]):k=l=e.fx);var n=l?function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.hide().removeClass("ui-tabs-hide").animate(l,l.duration||"normal",function(){m(c,l),d._trigger("show",null,d._ui(b,c[0]))})}:function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.removeClass("ui-tabs-hide"),d._trigger("show",null,d._ui(b,c[0]))},o=k?function(a,b){b.animate(k,k.duration||"normal",function(){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),m(b,k),d.element.dequeue("tabs")})}:function(a,b,c){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),d.element.dequeue("tabs")};this.anchors.bind(e.event+".tabs",function(){var b=this,c=a(b).closest("li"),f=d.panels.filter(":not(.ui-tabs-hide)"),g=d.element.find(d._sanitizeSelector(b.hash));if(c.hasClass("ui-tabs-selected")&&!e.collapsible||c.hasClass("ui-state-disabled")||c.hasClass("ui-state-processing")||d.panels.filter(":animated").length||d._trigger("select",null,d._ui(this,g[0]))===!1)return this.blur(),!1;e.selected=d.anchors.index(this),d.abort();if(e.collapsible){if(c.hasClass("ui-tabs-selected"))return e.selected=-1,e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){o(b,f)}).dequeue("tabs"),this.blur(),!1;if(!f.length)return e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this)),this.blur(),!1}e.cookie&&d._cookie(e.selected,e.cookie);if(g.length)f.length&&d.element.queue("tabs",function(){o(b,f)}),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this));else throw"jQuery UI Tabs: Mismatching fragment identifier.";a.browser.msie&&this.blur()}),this.anchors.bind("click.tabs",function(){return!1})},_getIndex:function(a){return typeof a=="string"&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},destroy:function(){var b=this.options;return this.abort(),this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.anchors.each(function(){var b=a.data(this,"href.tabs");b&&(this.href=b);var c=a(this).unbind(".tabs");a.each(["href","load","cache"],function(a,b){c.removeData(b+".tabs")})}),this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}),b.cookie&&this._cookie(null,b.cookie),this},add:function(c,d,e){e===b&&(e=this.anchors.length);var f=this,g=this.options,h=a(g.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,d)),i=c.indexOf("#")?this._tabId(a("a",h)[0]):c.replace("#","");h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",!0);var j=f.element.find("#"+i);return j.length||(j=a(g.panelTemplate).attr("id",i).data("destroy.tabs",!0)),j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),e>=this.lis.length?(h.appendTo(this.list),j.appendTo(this.list[0].parentNode)):(h.insertBefore(this.lis[e]),j.insertBefore(this.panels[e])),g.disabled=a.map(g.disabled,function(a,b){return a>=e?++a:a}),this._tabify(),this.anchors.length==1&&(g.selected=0,h.addClass("ui-tabs-selected ui-state-active"),j.removeClass("ui-tabs-hide"),this.element.queue("tabs",function(){f._trigger("show",null,f._ui(f.anchors[0],f.panels[0]))}),this.load(0)),this._trigger("add",null,this._ui(this.anchors[e],this.panels[e])),this},remove:function(b){b=this._getIndex(b);var c=this.options,d=this.lis.eq(b).remove(),e=this.panels.eq(b).remove();return d.hasClass("ui-tabs-selected")&&this.anchors.length>1&&this.select(b+(b+1<this.anchors.length?1:-1)),c.disabled=a.map(a.grep(c.disabled,function(a,c){return a!=b}),function(a,c){return a>=b?--a:a}),this._tabify(),this._trigger("remove",null,this._ui(d.find("a")[0],e[0])),this},enable:function(b){b=this._getIndex(b);var c=this.options;if(a.inArray(b,c.disabled)==-1)return;return this.lis.eq(b).removeClass("ui-state-disabled"),c.disabled=a.grep(c.disabled,function(a,c){return a!=b}),this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b])),this},disable:function(a){a=this._getIndex(a);var b=this,c=this.options;return a!=c.selected&&(this.lis.eq(a).addClass("ui-state-disabled"),c.disabled.push(a),c.disabled.sort(),this._trigger("disable",null,this._ui(this.anchors[a],this.panels[a]))),this},select:function(a){a=this._getIndex(a);if(a==-1)if(this.options.collapsible&&this.options.selected!=-1)a=this.options.selected;else return this;return this.anchors.eq(a).trigger(this.options.event+".tabs"),this},load:function(b){b=this._getIndex(b);var c=this,d=this.options,e=this.anchors.eq(b)[0],f=a.data(e,"load.tabs");this.abort();if(!f||this.element.queue("tabs").length!==0&&a.data(e,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(b).addClass("ui-state-processing");if(d.spinner){var g=a("span",e);g.data("label.tabs",g.html()).html(d.spinner)}return this.xhr=a.ajax(a.extend({},d.ajaxOptions,{url:f,success:function(f,g){c.element.find(c._sanitizeSelector(e.hash)).html(f),c._cleanup(),d.cache&&a.data(e,"cache.tabs",!0),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.success(f,g)}catch(h){}},error:function(a,f,g){c._cleanup(),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.error(a,f,b,e)}catch(g){}}})),c.element.dequeue("tabs"),this},abort:function(){return this.element.queue([]),this.panels.stop(!1,!0),this.element.queue("tabs",this.element.queue("tabs").splice(-2,2)),this.xhr&&(this.xhr.abort(),delete this.xhr),this._cleanup(),this},url:function(a,b){return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs",b),this},length:function(){return this.anchors.length}}),a.extend(a.ui.tabs,{version:"1.8.24"}),a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(a,b){var c=this,d=this.options,e=c._rotate||(c._rotate=function(b){clearTimeout(c.rotation),c.rotation=setTimeout(function(){var a=d.selected;c.select(++a<c.anchors.length?a:0)},a),b&&b.stopPropagation()}),f=c._unrotate||(c._unrotate=b?function(a){e()}:function(a){a.clientX&&c.rotate(null)});return a?(this.element.bind("tabsshow",e),this.anchors.bind(d.event+".tabs",f),e()):(clearTimeout(c.rotation),this.element.unbind("tabsshow",e),this.anchors.unbind(d.event+".tabs",f),delete this._rotate,delete this._unrotate),this}})}(jQuery);


// https://raw.github.com/jackmoore/colorbox/master/jquery.colorbox-min.js

/*!
	Colorbox v1.4.36 - 2014-02-01
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var r=t.createElement(i);return o&&(r.id=Z+o),n&&(r.style.cssText=n),e(r)}function n(){return i.innerHeight?i.innerHeight:e(i).height()}function r(e){var t=k.length,i=(z+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?E.width():n())/100:1)*parseInt(e,10))}function l(e,t){return e.photo||e.photoRegex.test(t)}function s(e,t){return e.retinaUrl&&i.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function a(e){"contains"in g[0]&&!g[0].contains(e.target)&&(e.stopPropagation(),g.focus())}function d(){var t,i=e.data(N,Y);null==i?(B=e.extend({},X),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=e.extend({},i);for(t in B)e.isFunction(B[t])&&"on"!==t.slice(0,2)&&(B[t]=B[t].call(N));B.rel=B.rel||N.rel||e(N).data("rel")||"nofollow",B.href=B.href||e(N).attr("href"),B.title=B.title||N.title,"string"==typeof B.href&&(B.href=e.trim(B.href))}function c(i,o){e(t).trigger(i),lt.triggerHandler(i),e.isFunction(o)&&o.call(N)}function u(i){q||(N=i,d(),k=e(N),z=0,"nofollow"!==B.rel&&(k=e("."+et).filter(function(){var t,i=e.data(this,Y);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===B.rel}),z=k.index(N),-1===z&&(k=k.add(N),z=k.length-1)),w.css({opacity:parseFloat(B.opacity),cursor:B.overlayClose?"pointer":"auto",visibility:"visible"}).show(),J&&g.add(w).removeClass(J),B.className&&g.add(w).addClass(B.className),J=B.className,B.closeButton?K.html(B.close).appendTo(y):K.appendTo("<div/>"),U||(U=$=!0,g.css({visibility:"hidden",display:"block"}),H=o(st,"LoadedContent","width:0; height:0; overflow:hidden"),y.css({width:"",height:""}).append(H),O=x.height()+C.height()+y.outerHeight(!0)-y.height(),_=b.width()+T.width()+y.outerWidth(!0)-y.width(),D=H.outerHeight(!0),A=H.outerWidth(!0),B.w=h(B.initialWidth,"x"),B.h=h(B.initialHeight,"y"),H.css({width:"",height:B.h}),Q.position(),c(tt,B.onOpen),P.add(L).hide(),g.focus(),B.trapFocus&&t.addEventListener&&(t.addEventListener("focus",a,!0),lt.one(rt,function(){t.removeEventListener("focus",a,!0)})),B.returnFocus&&lt.one(rt,function(){e(N).focus()})),m())}function f(){!g&&t.body&&(V=!1,E=e(i),g=o(st).attr({id:Y,"class":e.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),w=o(st,"Overlay").hide(),F=e([o(st,"LoadingOverlay")[0],o(st,"LoadingGraphic")[0]]),v=o(st,"Wrapper"),y=o(st,"Content").append(L=o(st,"Title"),S=o(st,"Current"),I=e('<button type="button"/>').attr({id:Z+"Previous"}),R=e('<button type="button"/>').attr({id:Z+"Next"}),M=o("button","Slideshow"),F),K=e('<button type="button"/>').attr({id:Z+"Close"}),v.append(o(st).append(o(st,"TopLeft"),x=o(st,"TopCenter"),o(st,"TopRight")),o(st,!1,"clear:left").append(b=o(st,"MiddleLeft"),y,T=o(st,"MiddleRight")),o(st,!1,"clear:left").append(o(st,"BottomLeft"),C=o(st,"BottomCenter"),o(st,"BottomRight"))).find("div div").css({"float":"left"}),W=o(st,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),P=R.add(I).add(S).add(M),e(t.body).append(w,g.append(v,W)))}function p(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),u(this))}return g?(V||(V=!0,R.click(function(){Q.next()}),I.click(function(){Q.prev()}),K.click(function(){Q.close()}),w.click(function(){B.overlayClose&&Q.close()}),e(t).bind("keydown."+Z,function(e){var t=e.keyCode;U&&B.escKey&&27===t&&(e.preventDefault(),Q.close()),U&&B.arrowKey&&k[1]&&!e.altKey&&(37===t?(e.preventDefault(),I.click()):39===t&&(e.preventDefault(),R.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+Z,"."+et,i):e("."+et).live("click."+Z,i)),!0):!1}function m(){var n,r,a,u=Q.prep,f=++at;$=!0,j=!1,N=k[z],d(),c(ht),c(it,B.onLoad),B.h=B.height?h(B.height,"y")-D-O:B.innerHeight&&h(B.innerHeight,"y"),B.w=B.width?h(B.width,"x")-A-_:B.innerWidth&&h(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=h(B.maxWidth,"x")-A-_,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=h(B.maxHeight,"y")-D-O,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,G=setTimeout(function(){F.show()},100),B.inline?(a=o(st).hide().insertBefore(e(n)[0]),lt.one(ht,function(){a.replaceWith(H.children())}),u(e(n))):B.iframe?u(" "):B.html?u(B.html):l(B,n)?(n=s(B,n),j=t.createElement("img"),e(j).addClass(Z+"Photo").bind("error",function(){B.title=!1,u(o(st,"Error").html(B.imgError))}).one("load",function(){var t;f===at&&(e.each(["alt","longdesc","aria-describedby"],function(t,i){var o=e(N).attr(i)||e(N).attr("data-"+i);o&&j.setAttribute(i,o)}),B.retinaImage&&i.devicePixelRatio>1&&(j.height=j.height/i.devicePixelRatio,j.width=j.width/i.devicePixelRatio),B.scalePhotos&&(r=function(){j.height-=j.height*t,j.width-=j.width*t},B.mw&&j.width>B.mw&&(t=(j.width-B.mw)/j.width,r()),B.mh&&j.height>B.mh&&(t=(j.height-B.mh)/j.height,r())),B.h&&(j.style.marginTop=Math.max(B.mh-j.height,0)/2+"px"),k[1]&&(B.loop||k[z+1])&&(j.style.cursor="pointer",j.onclick=function(){Q.next()}),j.style.width=j.width+"px",j.style.height=j.height+"px",setTimeout(function(){u(j)},1))}),setTimeout(function(){j.src=n},1)):n&&W.load(n,B.data,function(t,i){f===at&&u("error"===i?o(st,"Error").html(B.xhrError):e(this).contents())})}var w,g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,A,N,z,j,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1},Y="colorbox",Z="cbox",et=Z+"Element",tt=Z+"_open",it=Z+"_load",ot=Z+"_complete",nt=Z+"_cleanup",rt=Z+"_closed",ht=Z+"_purge",lt=e("<a/>"),st="div",at=0,dt={},ct=function(){function e(){clearTimeout(h)}function t(){(B.loop||k[z+1])&&(e(),h=setTimeout(Q.next,B.slideshowSpeed))}function i(){M.html(B.slideshowStop).unbind(s).one(s,o),lt.bind(ot,t).bind(it,e),g.removeClass(l+"off").addClass(l+"on")}function o(){e(),lt.unbind(ot,t).unbind(it,e),M.html(B.slideshowStart).unbind(s).one(s,function(){Q.next(),i()}),g.removeClass(l+"on").addClass(l+"off")}function n(){r=!1,M.hide(),e(),lt.unbind(ot,t).unbind(it,e),g.removeClass(l+"off "+l+"on")}var r,h,l=Z+"Slideshow_",s="click."+Z;return function(){r?B.slideshow||(lt.unbind(nt,n),n()):B.slideshow&&k[1]&&(r=!0,lt.one(nt,n),B.slideshowAuto?i():o(),M.show())}}();e.colorbox||(e(f),Q=e.fn[Y]=e[Y]=function(t,i){var o=this;if(t=t||{},f(),p()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,Y,e.extend({},e.data(this,Y)||X,t))}).addClass(et),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&u(o[0])}return o},Q.position=function(t,i){function o(){x[0].style.width=C[0].style.width=y[0].style.width=parseInt(g[0].style.width,10)-_+"px",y[0].style.height=b[0].style.height=T[0].style.height=parseInt(g[0].style.height,10)-O+"px"}var r,l,s,a=0,d=0,c=g.offset();if(E.unbind("resize."+Z),g.css({top:-9e4,left:-9e4}),l=E.scrollTop(),s=E.scrollLeft(),B.fixed?(c.top-=l,c.left-=s,g.css({position:"fixed"})):(a=l,d=s,g.css({position:"absolute"})),d+=B.right!==!1?Math.max(E.width()-B.w-A-_-h(B.right,"x"),0):B.left!==!1?h(B.left,"x"):Math.round(Math.max(E.width()-B.w-A-_,0)/2),a+=B.bottom!==!1?Math.max(n()-B.h-D-O-h(B.bottom,"y"),0):B.top!==!1?h(B.top,"y"):Math.round(Math.max(n()-B.h-D-O,0)/2),g.css({top:c.top,left:c.left,visibility:"visible"}),v[0].style.width=v[0].style.height="9999px",r={width:B.w+A+_,height:B.h+D+O,top:a,left:d},t){var u=0;e.each(r,function(e){return r[e]!==dt[e]?(u=t,void 0):void 0}),t=u}dt=r,t||g.css(r),g.dequeue().animate(r,{duration:t||0,complete:function(){o(),$=!1,v[0].style.width=B.w+A+_+"px",v[0].style.height=B.h+D+O+"px",B.reposition&&setTimeout(function(){E.bind("resize."+Z,Q.position)},1),i&&i()},step:o})},Q.resize=function(e){var t;U&&(e=e||{},e.width&&(B.w=h(e.width,"x")-A-_),e.innerWidth&&(B.w=h(e.innerWidth,"x")),H.css({width:B.w}),e.height&&(B.h=h(e.height,"y")-D-O),e.innerHeight&&(B.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(t=H.scrollTop(),H.css({height:"auto"}),B.h=H.height()),H.css({height:B.h}),t&&H.scrollTop(t),Q.position("none"===B.transition?0:B.speed))},Q.prep=function(i){function n(){return B.w=B.w||H.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function h(){return B.h=B.h||H.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(U){var a,d="none"===B.transition?0:B.speed;H.empty().remove(),H=o(st,"LoadedContent").append(i),H.hide().appendTo(W.show()).css({width:n(),overflow:B.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(y),W.hide(),e(j).css({"float":"none"}),a=function(){function i(){e.support.opacity===!1&&g[0].style.removeAttribute("filter")}var n,h,a=k.length,u="frameBorder",f="allowTransparency";U&&(h=function(){clearTimeout(G),F.hide(),c(ot,B.onComplete)},L.html(B.title).add(H).show(),a>1?("string"==typeof B.current&&S.html(B.current.replace("{current}",z+1).replace("{total}",a)).show(),R[B.loop||a-1>z?"show":"hide"]().html(B.next),I[B.loop||z?"show":"hide"]().html(B.previous),ct(),B.preloading&&e.each([r(-1),r(1)],function(){var i,o,n=k[this],r=e.data(n,Y);r&&r.href?(i=r.href,e.isFunction(i)&&(i=i.call(n))):i=e(n).attr("href"),i&&l(r,i)&&(i=s(r,i),o=t.createElement("img"),o.src=i)})):P.hide(),B.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),f in n&&(n[f]="true"),B.scrolling||(n.scrolling="no"),e(n).attr({src:B.href,name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",h).appendTo(H),lt.one(ht,function(){n.src="//about:blank"}),B.fastIframe&&e(n).trigger("load")):h(),"fade"===B.transition?g.fadeTo(d,1,i):i())},"fade"===B.transition?g.fadeTo(d,0,function(){Q.position(0,a)}):Q.position(d,a)}},Q.next=function(){!$&&k[1]&&(B.loop||k[z+1])&&(z=r(1),u(k[z]))},Q.prev=function(){!$&&k[1]&&(B.loop||z)&&(z=r(-1),u(k[z]))},Q.close=function(){U&&!q&&(q=!0,U=!1,c(nt,B.onCleanup),E.unbind("."+Z),w.fadeTo(B.fadeOut||0,0),g.stop().fadeTo(B.fadeOut||0,0,function(){g.add(w).css({opacity:1,cursor:"auto"}).hide(),c(ht),H.empty().remove(),setTimeout(function(){q=!1,c(rt,B.onClosed)},1)}))},Q.remove=function(){g&&(g.stop(),e.colorbox.close(),g.stop().remove(),w.remove(),q=!1,g=null,e("."+et).removeData(Y).removeClass(et),e(t).unbind("click."+Z))},Q.element=function(){return e(N)},Q.settings=X)})(jQuery,document,window);


// http://www.jsphylosvg.com/js/jsphylosvg-min.js
Smits={};
Smits.Common={nodeIdIncrement:0,activeNode:0,roundFloat:function(a,c){for(var b=0,f=1;b<c;)f*=10,b++;return Math.round(a*f)/f},apply:function(a,c){if(a&&typeof c=="object")for(var b in c)a[b]=c[b];return a},addRaphEventHandler:function(a,c,b,f){try{a[c](function(c,a){return function(g){a.e=g;c(a)}}(b,f))}catch(k){}},isInteger:function(a){return!isNaN(parseInt(a))},isXMLSerializerAvailable:function(){return typeof XMLSerializer=="function"?!0:!1},createSvgEl:function(a,c){a=document.createElementNS("http://www.w3.org/2000/svg",a);
if(c)for(var b in c)c.hasOwnProperty(b)&&a.setAttribute(b,String(c[b]));return a},createGradientEl:function(a,c,b){if(c.type!="radialGradient")return!1;a=Smits.Common.createSvgEl("radialGradient",{id:a,gradientUnits:"userSpaceOnUse",cx:b[0],cy:b[1],r:b[2],fx:b[0],fy:b[1]});if(c.stop){c=c.stop;for(b=0;b<c.length;b++){var f=c[b];f["@attributes"]?a.appendChild(Smits.Common.createSvgEl("stop",f["@attributes"])):(f._attributes&&delete f._attributes,f._children&&delete f._children,f.__proto__&&delete f.__proto__,
a.appendChild(Smits.Common.createSvgEl("stop",f)))}}return a},setCssStyle:function(a,c){var b=document.styleSheets[0];b.addRule?b.addRule(a,c):b.insertRule&&b.insertRule(a+" { "+c+" }",b.cssRules.length)}};
Smits.PhyloCanvas=function(){var a,c,b,f;return function(k,l,p,g,m){this.getNewickObject=function(){};this.clear=function(){};this.scale=function(d){b.svg.scale(d)};this.getSvg=function(){return b};this.getPhylogram=function(){return a};this.getSvgSource=function(){return Raphael.svg&&Smits.Common.isXMLSerializerAvailable()?(new XMLSerializer).serializeToString(b.svg.canvas):!1};if(typeof k==="object")if(k.xml){var d=k.fileSource?k.xml:XMLObjectifier.textToXML(k.xml),d=XMLObjectifier.xmlToJSON(d);
f=new Smits.PhyloCanvas.PhyloxmlParse(d)}else k.phyloxml?(d=k.fileSource?k.phyloxml:XMLObjectifier.textToXML(k.phyloxml),d=XMLObjectifier.xmlToJSON(d),f=new Smits.PhyloCanvas.PhyloxmlParse(d)):k.nexml?(d=k.fileSource?k.nexml:XMLObjectifier.textToXML(k.nexml),d=XMLObjectifier.xmlToJSON(d),f=new Smits.PhyloCanvas.NexmlParse(d,k)):k.json?f=new Smits.PhyloCanvas.PhyloxmlParse(k.json):k.newick?f=new Smits.PhyloCanvas.NewickParse(k.newick):k.nexmlJson?f=new Smits.PhyloCanvas.NexmlJsonParse(k):alert("Please set the format of input data");
else f=new Smits.PhyloCanvas.NewickParse(k);c=l;b=new Smits.PhyloCanvas.Render.SVG(c,p,g);a=m=="circular"?new Smits.PhyloCanvas.Render.CircularPhylogram(b,f):new Smits.PhyloCanvas.Render.Phylogram(b,f)}}();Smits.PhyloCanvas.prototype={};
Smits.PhyloCanvas.Node=function(){return function(a,c){this.id=Smits.Common.nodeIdIncrement+=1;this.newickLen=this.len=this.level=0;this.type=this.name="";this.chart={};this.img=[];a&&Smits.Common.apply(this,a);this._midBranchPosition=this._countImmediateChildren=this._countAllChildren=!1;this.children=[];c&&c.children.push(this)}}();
Smits.PhyloCanvas.Node.prototype={getCountAllChildren:function(){if(this._countAllChildren!==!1)return this._countAllChildren;var a=0,c;for(c in this.children)if(Smits.Common.isInteger(c)){var b=this.children[c];b.children&&b.children.length>0?a+=b.getCountAllChildren():a++}return this._countAllChildren=a},getCountImmediateChildren:function(){if(this._countImmediateChildren!==!1)return this._countImmediateChildren;var a=0,c;for(c in this.children)a+=this.children[c].length;return this._countImmediateChildren=
a},getMidbranchPosition:function(a){if(this._midBranchPosition!==!1)return this._midBranchPosition;for(var c=[0,0],b=0;b<this.children.length;b++){var f=this.children[b];f.children&&f.children.length>0?b==0&&a?(c[0]=f.getMidbranchPosition(!0),c[1]+=f.getCountAllChildren()-1):b==0?(c[0]=f.getMidbranchPosition(),c[1]+=f.getCountAllChildren()):c[1]+=b==this.children.length-1?f.getMidbranchPosition():f.getCountAllChildren():b==0&&a?c[0]=0:(b==0&&(c[0]=1),c[1]+=1)}return this._midBranchPosition=c[1]>=
c[0]?(c[1]+c[0])/2:c[0]}};
Smits.PhyloCanvas.NewickParse=function(){var a,c,b,f=0,k=0,l,p=function(a){for(var e=new Smits.PhyloCanvas.Node;c!==")"&&c!==",";)if(c===":"){if(d(),e.len=Smits.Common.roundFloat(m(),4),e.len==0)e.len=1.0E-4}else if(c==="'"||c==='"'){e.type="label";for(var g=e,j=c,b="";c!==j;)b+=c,d();g.name=b}else e.type="label",e.name=m();e.level=a.level+1;return e},g=function(a){var e=new Smits.PhyloCanvas.Node;if(a)e.level=a.level+1;for(;c!==")";)d(),c==="("?e.children.push(g(e)):e.children.push(p(e));d();if(c!==
":"&&c!==")"&&c!==","&&c!==";")e.type="label",e.name=m();if(c===":"){d();e.len=Smits.Common.roundFloat(m(),4);if(e.len==0)e.len=1.0E-4;e.type="stem"}return e},m=function(){for(var a="";c!==":"&&c!==")"&&c!==","&&c!==";";)a+=c,d();return a},d=function(){c=a.charAt(b);b+=1;return c},j=function(d){if(d.children&&d.children.length)for(var c=0;c<d.children.length;c++){var a=d.children[c];if(a.len===0)a.len=1;a.newickLen=Smits.Common.roundFloat(a.len+d.newickLen,4);if(a.level>f)f=a.level;if(a.newickLen>
k)k=a.newickLen;a.children.length>0&&j(a,d)}return d};return function(c){this.getRoot=function(){return l};this.getLevels=function(){return f};this.getNewickLen=function(){return k};this.getValidate=function(){};k=f=0;a=c;b=0;d();l=g();l=j(l)}}();Smits.PhyloCanvas.NewickParse.prototype={};
Smits.PhyloCanvas.PhyloxmlParse=function(){var a=0,c=0,b,f,k=function(a,c){var d=new Smits.PhyloCanvas.Node;if(c)d.level=c.level+1;if(a.clade&&a.clade.length)for(var j=0;j<a.clade.length;j++)d.children.push(k(a.clade[j],d));if(a.branch_length){if(typeof a.branch_length==="object")a.branch_length=a.branch_length[0].Text;d.len=Smits.Common.roundFloat(a.branch_length,4);if(d.len==0)d.len=1.0E-4}if(a.name){d.type="label";d.name=a.name[0].Text;if(a.name[0]&&a.name[0].style)d.style=a.name[0].style;if(a.name[0]&&
a.name[0].bgStyle)d.bgStyle=a.name[0].bgStyle}else if(a.confidence)d.name=a.confidence[0].Text;if(a.sequence&&a.sequence[0]&&a.sequence[0].name&&a.sequence[0].name[0]&&a.sequence[0].name[0].Text)d.sequenceName=a.sequence[0].name[0].Text;if(a.taxonomy&&a.taxonomy[0]){if(a.taxonomy[0].scientific_name&&a.taxonomy[0].scientific_name[0]&&a.taxonomy[0].scientific_name[0].Text)d.taxonomyScientificName=a.taxonomy[0].scientific_name[0].Text;if(a.taxonomy[0].common_name&&a.taxonomy[0].common_name[0]&&a.taxonomy[0].common_name[0].Text)d.taxonomyCommonName=
a.taxonomy[0].common_name[0].Text}if(a.sequence&&a.sequence[0]&&a.sequence[0].accession&&a.sequence[0].accession[0]&&a.sequence[0].accession[0].Text)d.sequenceAccession=a.sequence[0].accession[0].Text;if(a.point)d.LatLong=[a.point[0].lat[0].Text,a.point[0]["long"][0].Text];if(!d.name){if(d.sequenceName)d.name=d.sequenceName;else if(d.taxonomyScientificName)d.name=d.taxonomyScientificName;else if(d.taxonomyCommonName)d.name=d.taxonomyCommonName;else if(d.sequenceAccession)d.name=d.sequenceAccession;
if(d.name)d.type="label"}if(a.annotation){if(a.annotation[0]&&a.annotation[0].desc&&a.annotation[0].desc[0]&&a.annotation[0].desc[0].Text)d.description=a.annotation[0].desc[0].Text;if(a.annotation[0]&&a.annotation[0].uri&&a.annotation[0].uri[0]&&a.annotation[0].uri[0].Text)d.uri=a.annotation[0].uri[0].Text;if(a.annotation[0]&&a.annotation[0].img)for(j in a.annotation[0].img)if(Smits.Common.isInteger(j))d.img[j]=a.annotation[0].img[j].Text}if(a.chart&&a.chart[0])for(j in a.chart[0])if(j!="Text"&&j!=
"_children")d.chart[j]=a.chart[0][j][0].Text;d&&d.level>1&&(d.len||(f="Error. Please include Branch Lengths - we only draw rooted phylogenetic trees."));return d},l=function(b){if(b.children&&b.children.length)for(var f=0;f<b.children.length;f++){var d=b.children[f];d.newickLen=Math.round((d.len+b.newickLen)*1E4)/1E4;if(d.level>a)a=d.level;if(d.newickLen>c)c=d.newickLen;d.children.length>0&&l(d,b)}return b},p=function(a,c){for(var d in a)d!="_children"&&d!="Text"&&(d=="rectangular"||d=="circular"?
p(a[d][0],d):(Smits.PhyloCanvas.Render.Parameters[d]||(Smits.PhyloCanvas.Render.Parameters[d]={}),Smits.PhyloCanvas.Render.Parameters.set(d,a[d][0].Text,c)))};return function(g){this.getRoot=function(){return b};this.getLevels=function(){return a};this.getNewickLen=function(){return c};this.getValidate=function(){return f};g.phylogeny&&g.phylogeny[0]&&g.phylogeny[0].clade&&(b=k(g.phylogeny[0].clade[0]));if(g.phylogeny&&g.phylogeny[0]&&g.phylogeny[0].render&&g.phylogeny[0].render[0]){if((g=g.phylogeny[0].render[0])&&
g.styles){var m=g.styles[0],d;for(d in m)if(d!="_children"&&d!="Text")if(m[d][0].type&&m[d][0].type=="radialGradient"&&Raphael.svg)m[d][0].name=d,Smits.PhyloCanvas.Render.Style[d]=m[d][0],Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList||(Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList=[]),Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList.push(d);else for(var j in Smits.PhyloCanvas.Render.Style[d]||(Smits.PhyloCanvas.Render.Style[d]={}),m[d][0])j!="_attributes"&&j!="_children"&&j!=
"type"&&(Smits.PhyloCanvas.Render.Style[d][j.replace("_","-")]=m[d][0][j])}g&&g.parameters&&p(g.parameters[0]);if(g&&g.charts)for(d in g=g.charts[0],g)if(d!="_children"&&d!="Text")for(j in g[d])if(g[d][j].type=="binary")g[d][j].chart=d,Smits.PhyloCanvas.Render.Parameters.binaryCharts.push(g[d][j]);else if(g[d][j].type=="integratedBinary")g[d][j].chart=d,Smits.PhyloCanvas.Render.Parameters.integratedBinaryCharts.push(g[d][j]);else if(g[d][j].type=="bar")g[d][j].chart=d,Smits.PhyloCanvas.Render.Parameters.barCharts.push(g[d][j])}b=
l(b)}}();Smits.PhyloCanvas.PhyloxmlParse.prototype={};
Smits.PhyloCanvas.NexmlParse=function(){var a=0,c=0,b,f,k,l,p=function(a,d,c){var i=new Smits.PhyloCanvas.Node;if(c)i.level=c.level+1;for(c=0;c<k.length;c++)if(k[c].source==a.id)for(var e=0;e<l.length;e++)k[c].target==l[e].id&&i.children.push(p(l[e],k[c].length,i));if(i&&i.level>0&&!i.len)i.len=1;if(d&&(i.len=Smits.Common.roundFloat(d,4),i.len==0))i.len=1.0E-4;if(a.label&&(i.type="label",i.name=a.label,a.style))i.style=a.style;return i},g=function(b){if(b.children&&b.children.length)for(var d=0;d<
b.children.length;d++){var j=b.children[d];j.newickLen=Math.round((j.len+b.newickLen)*1E4)/1E4;if(j.level>a)a=j.level;if(j.newickLen>c)c=j.newickLen;j.children.length>0&&g(j,b)}return b};return function(m,d){this.getRoot=function(){return b};this.getLevels=function(){return a};this.getNewickLen=function(){return c};this.getValidate=function(){return f};d.tree&&m.trees[0]&&m.trees[0].tree[d.tree-1]?(k=m.trees[0].tree[d.tree-1].edge,l=m.trees[0].tree[d.tree-1].node):(k=m.trees[0].tree[0].edge,l=m.trees[0].tree[0].node);
for(var j=0;j<l.length;j++){var i=0;if(l[j].root&&l[j].root=="true"){b=l[j];break}for(var e=0;e<k.length;e++)k[e].target==l[j].id&&i++;if(i==0){b=l[j];break}}b?(b=p(b),b=g(b)):f="Error. Currently, only rooted NeXML trees are supported."}}();Smits.PhyloCanvas.NexmlParse.prototype={};
Smits.PhyloCanvas.NexmlJsonParse=function(){var a=0,c=0,b,f,k=[],l=[],p=function(a,c,i){var e=new Smits.PhyloCanvas.Node;if(i)e.level=i.level+1;for(i=0;i<k.length;i++)if(k[i].source==a.id)for(var b=0;b<l.length;b++)k[i].target==l[b].id&&e.children.push(p(l[b],k[i].length,e));if(c&&(e.len=Smits.Common.roundFloat(c,4),e.len==0))e.len=1.0E-4;if(a.label){e.type="label";e.name=a.label;if(a.accession)e.accession=a.accession;if(a.style)e.style=a.style;if(a.bgStyle)e.bgStyle=a.bgStyle}if(a.chart)e.chart=
a.chart;e&&e.level>1&&(e.len||(f="Error. Please include Branch Lengths - we only draw rooted phylogenetic trees."));return e},g=function(d){if(d.children&&d.children.length)for(var b=0;b<d.children.length;b++){var i=d.children[b];i.newickLen=Math.round((i.len+d.newickLen)*1E4)/1E4;if(i.level>a)a=i.level;if(i.newickLen>c)c=i.newickLen;i.children.length>0&&g(i,d)}return d},m=function(a,c){for(var b in a)b!="_children"&&b!="Text"&&(b=="rectangular"||b=="circular"?m(a[b],b):(Smits.PhyloCanvas.Render.Parameters[b]||
(Smits.PhyloCanvas.Render.Parameters[b]={}),Smits.PhyloCanvas.Render.Parameters.set(b,a[b],c)))};return function(d){this.getRoot=function(){return b};this.getLevels=function(){return a};this.getNewickLen=function(){return c};this.getValidate=function(){return f};var j=d.nexmlJson.nexml,i=j.render;if(i&&i.styles){var e=i.styles,h;for(h in e)if(h!="_children"&&h!="Text")if(e[h]["@attributes"].type&&e[h]["@attributes"].type=="radialGradient"&&Raphael.svg)e[h].name=h,e[h].type=e[h]["@attributes"].type,
Smits.PhyloCanvas.Render.Style[h]=e[h],Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList||(Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList=[]),Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList.push(h);else for(var n in Smits.PhyloCanvas.Render.Style[h]||(Smits.PhyloCanvas.Render.Style[h]={}),e[h]["@attributes"])n!="_attributes"&&n!="_children"&&n!="type"&&(Smits.PhyloCanvas.Render.Style[h][n.replace("_","-")]=e[h]["@attributes"][n])}i&&i.parameters&&m(i.parameters);if(i&&i.charts)for(h in i=
i.charts,i)i[h]["@attributes"].chart=h,i[h]["@attributes"].type=="binary"?Smits.PhyloCanvas.Render.Parameters.binaryCharts.push(i[h]["@attributes"]):i[h]["@attributes"].type=="integratedBinary"?Smits.PhyloCanvas.Render.Parameters.integratedBinaryCharts.push(i[h]["@attributes"]):i[h]["@attributes"].type=="bar"&&Smits.PhyloCanvas.Render.Parameters.barCharts.push(i[h]["@attributes"]);if(d.tree&&j.trees[0]&&j.trees[0].tree[d.tree-1])k=j.trees[0].tree[d.tree-1].edge,l=j.trees[0].tree[d.tree-1].node;else{for(h=
0;h<j.trees.tree.edge.length;h++)k.push(j.trees.tree.edge[h]["@attributes"]);for(h=0;h<j.trees.tree.node.length;h++){d=j.trees.tree.node[h]["@attributes"];if(d.label)d.chart=j.trees.tree.node[h].chart;l.push(d)}}for(h=0;h<l.length;h++)l[h].root&&l[h].root=="true"&&(b=l[h]);b?(b=p(b),b=g(b)):f="Error. Currently, only rooted NeXML trees are supported."}}();Smits.PhyloCanvas.NexmlParse.prototype={};Smits.PhyloCanvas.Render={};
Smits.PhyloCanvas.Render.Style={line:{stroke:"rgb(0,0,0)","stroke-width":1},text:{"font-family":"Verdana","font-size":12,"text-anchor":"start"},path:{stroke:"rgb(0,0,0)","stroke-width":1},connectedDash:{stroke:"rgb(200,200,200)","stroke-dasharray":". "},textSecantBg:{fill:"#EEE",stroke:"#DDD"},highlightedEdgeCircle:{fill:"red"},barChart:{fill:"#003300",stroke:"#DDD"},getStyle:function(a,c){return this[a]?this[a]:this[c]}};
Smits.PhyloCanvas.Render.Parameters={jsOverride:0,Rectangular:{bufferX:200,paddingX:10,paddingY:20,bufferInnerLabels:10,bufferOuterLabels:5,minHeightBetweenLeaves:10,alignPadding:0,alignRight:!1,showScaleBar:!1},Circular:{bufferRadius:0.33,bufferAngle:20,initStartAngle:160,innerCircleRadius:0,minHeightBetweenLeaves:5,bufferInnerLabels:2,bufferOuterLabels:5},binaryCharts:[],integratedBinaryCharts:[],barCharts:[],binaryChartBufferInner:5,binaryChartBufferSiblings:0.01,binaryChartThickness:15,binaryChartDisjointed:!1,
barChartBufferInner:3,barChartHeight:50,barChartWidth:0.5,mouseRollOver:function(a){if(a.node.edgeCircleHighlight)a.node.edgeCircleHighlight.show();else{var c=a.svg.draw(new Smits.PhyloCanvas.Render.Circle(a.x,a.y,5,{attr:Smits.PhyloCanvas.Render.Style.highlightedEdgeCircle}));a.node.edgeCircleHighlight=c[0]}a.textEl.attr({fill:"red"})},mouseRollOut:function(a){a.node.edgeCircleHighlight.hide();a.textEl.attr({fill:"#000"})},set:function(a,c,b){this.jsOverride||(b?b=="circular"?this.Circular[a]=parseFloat(c):
b=="rectangular"&&(this.Rectangular[a]=parseFloat(c)):this[a]=parseFloat(c))}};Smits.PhyloCanvas.Render.Line=function(){return function(a,c,b,f,k){this.type="line";this.attr=Smits.PhyloCanvas.Render.Style.line;this.x1=a;this.x2=c;this.y1=b;this.y2=f;if(k&&(Smits.Common.apply(this,k),k.attr))this.attr=k.attr}}();
Smits.PhyloCanvas.Render.Text=function(){return function(a,c,b,f){this.type="text";this.attr=Smits.PhyloCanvas.Render.Style.text;this.x=a;this.y=c;this.text=b;if(f&&(Smits.Common.apply(this,f),f.attr))this.attr=f.attr}}();Smits.PhyloCanvas.Render.Path=function(){return function(a,c){this.type="path";this.attr=Smits.PhyloCanvas.Render.Style.path;this.path=a;if(c&&(Smits.Common.apply(this,c),c.attr))this.attr=c.attr}}();
Smits.PhyloCanvas.Render.Circle=function(){return function(a,c,b,f){this.type="circle";this.x=a;this.y=c;this.radius=b;if(f&&(Smits.Common.apply(this,f),f.attr))this.attr=f.attr}}();Smits.PhyloCanvas.Render.SVG=function(){return function(a,c,b){this.canvasSize=[c,b];this.svg=Raphael(a,this.canvasSize[0],this.canvasSize[1])}}();
Smits.PhyloCanvas.Render.SVG.prototype={render:function(){var a=this.phylogramObject.getDrawInstructs();console.log("render",this.phylogramObject.getDrawInstructs());for(var c=0;c<a.length;c++)if(a[c].type=="line")this.svg.path(["M",a[c].x1,a[c].y1,"L",a[c].x2,a[c].y2]).attr(Smits.PhyloCanvas.Render.Style.line);else if(a[c].type=="path")this.svg.path(a[c].path).attr(a[c].attr);else if(a[c].type=="circle")this.svg.circle(a[c].x,a[c].y,a[c].radius).attr({stroke:"red"});else{var b=this.svg.text(a[c].x,
a[c].y,a[c].text).attr(Smits.PhyloCanvas.Render.Style.text);a[c].attr&&b.attr(a[c].attr);a[c].rotate&&b.rotate(a[c].rotate);b.getBBox()}},draw:function(a){var c,b;a.type=="line"?c=this.svg.path(["M",a.x1,a.y1,"L",a.x2,a.y2]).attr(Smits.PhyloCanvas.Render.Style.line):a.type=="path"?c=this.svg.path(a.path).attr(a.attr):a.type=="circle"?c=this.svg.circle(a.x,a.y,a.radius).attr({stroke:"red"}):a.type=="text"&&(c=this.svg.text(a.x,a.y,a.text).attr(Smits.PhyloCanvas.Render.Style.text),a.attr&&c.attr(a.attr),
a.rotate&&c.rotate(a.rotate),a=c.getBBox(),b=Math.sqrt(a.height*a.height+a.width*a.width));return[c,b]}};
Smits.PhyloCanvas.Render.Phylogram=function(){var a,c=Smits.PhyloCanvas.Render.Parameters.Rectangular,b,f,k,l,p,g,m=!0,d=0,j=0,i,e,h,n,o,q=[],u=function(b,e){b.len&&m==!1&&b.children.length==0&&(d=Smits.Common.roundFloat(d+l,4));if(b.children.length>0){var i=[],h,f,o,n;b.len&&(h=e,f=e=Smits.Common.roundFloat(e+k*b.len,4),n=o=d+b.getMidbranchPosition(m)*l,a.draw(new Smits.PhyloCanvas.Render.Line(h,f,o,n)));if(b.name){h={};h=Smits.PhyloCanvas.Render.Style.getStyle("bootstrap","text");if(b.uri)h.href=
b.uri;if(b.description)h.title=b.description;var g=b.level==0?d+b.getMidbranchPosition(m)*l:n;a.draw(new Smits.PhyloCanvas.Render.Text((f||e)+5,g,b.name,{attr:h}))}if(b.children&&b.children.length)for(h=0;h<b.children.length;h++)i.push(u(b.children[h],e));f=[];for(h=0;h<i.length;h++)i[h][0]&&f.push(i[h][0]),i[h][1]&&f.push(i[h][1]);i=Math.min.apply(null,f);f=Math.max.apply(null,f);a.draw(new Smits.PhyloCanvas.Render.Path(["M",e+1.0E-4,i,"L",e,i,"L",e,f,"L",e+1.0E-4,f],{attr:Smits.PhyloCanvas.Render.Style.line}))}else{h=
e;f=Smits.Common.roundFloat(e+k*b.len,2);n=o=d;b.y=d;q.push(b);a.draw(new Smits.PhyloCanvas.Render.Line(h,f,o,n));c.alignRight&&a.draw(new Smits.PhyloCanvas.Render.Path(["M",f,o,"L",c.alignPadding+p,n],{attr:Smits.PhyloCanvas.Render.Style.connectedDash}));if(b.name){h={};b.style&&(h=Smits.PhyloCanvas.Render.Style.getStyle(b.style,"text"));h["text-anchor"]="start";if(b.uri)h.href=b.uri;if(b.description)h.title=b.description;i=a.draw(new Smits.PhyloCanvas.Render.Text(c.alignRight?p+c.bufferInnerLabels+
c.alignPadding:f+c.bufferInnerLabels,n,b.name,{attr:h}));j=Math.max(i[1],j);Smits.PhyloCanvas.Render.Parameters.mouseRollOver&&Smits.Common.addRaphEventHandler(i[0],"mouseover",Smits.PhyloCanvas.Render.Parameters.mouseRollOver,{svg:a,node:b,x:f,y:n,textEl:i[0]});Smits.PhyloCanvas.Render.Parameters.mouseRollOut&&Smits.Common.addRaphEventHandler(i[0],"mouseout",Smits.PhyloCanvas.Render.Parameters.mouseRollOut,{svg:a,node:b,x:f,y:n,textEl:i[0]});Smits.PhyloCanvas.Render.Parameters.onClickAction&&Smits.Common.addRaphEventHandler(i[0],
"click",Smits.PhyloCanvas.Render.Parameters.onClickAction,{svg:a,node:b,x:f,y:n,textEl:i[0]})}m&&(m=!1)}return[o,n]},z=function(d,c,b){for(var e=(b&&b.bufferInner?b.bufferInner:0)|Smits.PhyloCanvas.Render.Parameters.binaryChartBufferInner,i=(b&&b.bufferSiblings?b.bufferSiblings*l:0)|(Smits.PhyloCanvas.Render.Parameters.binaryChartBufferSiblings<1?l*Smits.PhyloCanvas.Render.Parameters.binaryChartBufferSiblings:Smits.PhyloCanvas.Render.Parameters.binaryChartBufferSiblings),b=(b&&b.thickness?b.thickness:
0)|Smits.PhyloCanvas.Render.Parameters.binaryChartThickness,h=0;h<q.length;h++){var j=q[h];a.draw(new Smits.PhyloCanvas.Render.Path(["M",d+e,j.y-l/2+i/2,"L",d+e+b,j.y-l/2+i/2,"L",d+e+b,j.y+l/2-i/2,"L",d+e,j.y+l/2-i/2,"Z"],{attr:Smits.PhyloCanvas.Render.Style.getStyle(j.chart[c],"textSecantBg")}))}return d+e+b},B=function(d,c,b){for(var e=[],i=b&&b.bufferInner?b.bufferInner:0|Smits.PhyloCanvas.Render.Parameters.barChartBufferInner,h=b&&b.height?b.height:0|Smits.PhyloCanvas.Render.Parameters.barChartHeight,
b=b&&b.width?b.width<1?l*b.width:b.width:0|(Smits.PhyloCanvas.Render.Parameters.barChartWidth<1?l*Smits.PhyloCanvas.Render.Parameters.barChartWidth:Smits.PhyloCanvas.Render.Parameters.barChartWidth),j=0,f=0;f<q.length;f++)e.push(q[f].chart[c]);e=Math.max.apply(null,e);j=Smits.Common.roundFloat(h/e,4);for(f=0;f<q.length;f++)e=q[f],a.draw(new Smits.PhyloCanvas.Render.Path(["M",d+i,e.y-b/2,"L",d+i+j*e.chart[c],e.y-b/2,"L",d+i+j*e.chart[c],e.y+b/2,"L",d+i,e.y+b/2,"Z"],{attr:Smits.PhyloCanvas.Render.Style.getStyle(e.chart[c],
"barChart")}));return d+i+h};return function(q,m){this.getCanvasSize=function(){return[b,f]};this.getRoot=function(){return m.getRoot()};m.getValidate()&&a.draw(0,0,m.getValidate());a=q;var r=m.getRoot(),v=m.getNewickLen();b=a.canvasSize[0];f=a.canvasSize[1];h=c.bufferX;n=c.paddingX;o=c.paddingY;g=c.minHeightBetweenLeaves;d=o;k=Math.round((b-h-n*2)/v);l=Math.round((f-o*2)/(c.showScaleBar?r.getCountAllChildren():r.getCountAllChildren()-1));l<g&&(l=g);p=Math.round(b-h-n*2);if(Smits.PhyloCanvas.Render.Parameters.binaryCharts.length||
Smits.PhyloCanvas.Render.Parameters.barCharts.length)c.alignRight=!0;u(r,n);c.showScaleBar&&(y=d+l,e=c.showScaleBar*k,a.draw(new Smits.PhyloCanvas.Render.Line(0,e,y,y)),a.draw(new Smits.PhyloCanvas.Render.Text((0+e)/2,y-8,c.showScaleBar)));i=p+j+c.bufferInnerLabels;if(Smits.PhyloCanvas.Render.Parameters.binaryCharts.length){var r=Smits.PhyloCanvas.Render.Parameters.binaryCharts,s;for(s in r)i=z(i,r[s].chart,r[s])}if(Smits.PhyloCanvas.Render.Parameters.barCharts.length)for(s in r=Smits.PhyloCanvas.Render.Parameters.barCharts,
r)B(i,r[s].chart,r[s])}}();Smits.PhyloCanvas.Render.Phylogram.prototype={};
Smits.PhyloCanvas.Render.CircularPhylogram=function(){function a(a,d){d+=D;return[Smits.Common.roundFloat(E+a*Math.sin(d*F),4),Smits.Common.roundFloat(r+a*Math.cos(d*F),4)]}function c(a){a=k(90-a-D);if(a>90&&a<270){a+=180;var d="end"}else d="start";return[a,d]}function b(d,b,c,e){var i=a(d,b),h=a(d,c),j=[],f=0,b=Math.abs(k(c-b))>180?1:-1;e&&e.invertSecant&&(b*=-1,f=1);(!e||!e.noMove)&&j.push("M");j.push(i[0],i[1],"A",d,d,0,b<1?0:1,f,h[0],h[1]);return j}function f(d,b,c,e){var i=[],b=a(b,d),d=a(c,
d);(!e||!e.noMove)&&i.push("M");i.push(b[0],b[1],"L",d[0],d[1]);return i}function k(a){for(;a>360||a<0;)a>360?a-=360:a<0&&(a+=360);return a}function l(a,d,c,e){!d&&a.length>1&&(e=a[3],c=a[2],d=a[1],a=a[0]);return g("M",b(a,c,e,{noMove:1,invertSecant:0}),"L",b(d,e,c,{noMove:1,invertSecant:1}),"Z")}function p(d,h){d.len&&(B?A=C||1:d.children.length==0&&(A=Smits.Common.roundFloat(A+u,4)));if(d.children.length>0){var j=[],o,n,k;o=h;n=h+=Smits.Common.roundFloat(q*d.len,4);if(d.children&&d.children.length)for(var l=
0;l<d.children.length;l++){var m=p(d.children[l],h);m>0&&j.push(m)}l=Smits.Common.roundFloat(Math.min.apply(null,j),4);j=Smits.Common.roundFloat(Math.max.apply(null,j),4);d.level!=0&&i.draw(new Smits.PhyloCanvas.Render.Path(g("M",a(h+0.01,l),"L",b(h,l,j,{noMove:!0}),"L",a(h+0.01,j))));d.len&&(k=Smits.Common.roundFloat(l+(j-l)/2,4),i.draw(new Smits.PhyloCanvas.Render.Path(f(k,o,n))))}else if(d.y=A,s.push(d),o=h,n=Smits.Common.roundFloat(h+q*d.len),k=A,i.draw(new Smits.PhyloCanvas.Render.Path(f(k,o,
n))),i.draw(new Smits.PhyloCanvas.Render.Path(f(k,n,v),{attr:Smits.PhyloCanvas.Render.Style.connectedDash})),d.name){o=a(v+e.bufferInnerLabels,k);l=c(k);j=l[0];l=l[1];m={};d.style&&Smits.Common.apply(m,Smits.PhyloCanvas.Render.Style.getStyle(d.style,"text"));m["text-anchor"]=l;if(d.uri)m.href=d.uri;if(d.description)m.title=d.description;j=i.draw(new Smits.PhyloCanvas.Render.Text(o[0],o[1],d.name,{attr:m,rotate:[j,o[0],o[1]]}));d.bgStyle&&t.push([d.bgStyle,k]);o=a(n,k);Smits.PhyloCanvas.Render.Parameters.mouseRollOver&&
Smits.Common.addRaphEventHandler(j[0],"mouseover",Smits.PhyloCanvas.Render.Parameters.mouseRollOver,{svg:i,node:d,x:o[0],y:o[1],textEl:j[0]});Smits.PhyloCanvas.Render.Parameters.mouseRollOut&&Smits.Common.addRaphEventHandler(j[0],"mouseout",Smits.PhyloCanvas.Render.Parameters.mouseRollOut,{svg:i,node:d,x:o[0],y:o[1],textEl:j[0]});Smits.PhyloCanvas.Render.Parameters.onClickAction&&Smits.Common.addRaphEventHandler(j[0],"click",Smits.PhyloCanvas.Render.Parameters.onClickAction,{svg:i,node:d,x:o[0],y:o[1],
textEl:j[0]});x=Math.max(j[1],x)}B&&(B=!1);return k}function g(a){for(var d=a,b=1;b<arguments.length;b++)d=d.concat(arguments[b]);return d}function m(){var a=[];if(t.length>0){if(Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList)for(var d=0;d<Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList.length;d++){var b=Smits.PhyloCanvas.Render.Style.jsphylosvgGradientList[d],b=Smits.Common.createGradientEl(b,Smits.PhyloCanvas.Render.Style[b],[E,r,v+x+e.bufferOuterLabels]);i.svg.defs.appendChild(b)}for(d=
0;d<t.length;d++)d!=t.length-1&&t[d][0]==t[d+1][0]?t[d+1][2]=t[d][2]?t[d][2]:t[d][1]:(a=l(v,v+x+e.bufferOuterLabels,t[d][2]?t[d][2]-u/2:t[d][1]-u/2,t[d][1]+u/2),b=Smits.PhyloCanvas.Render.Style.getStyle(t[d][0],"textSecantBg"),a=i.draw(new Smits.PhyloCanvas.Render.Path(a,{attr:b.type?{}:b})),b.type&&b.type=="radialGradient"&&a[0].node.setAttribute("fill","url(#"+b.name+")"),b.type&&b.type=="radialGradient"&&a[0].node.setAttribute("stroke","none"),a[0].toBack())}a=l(v,v+x+e.bufferOuterLabels,(C||1)-
u/2,360-u/2);a=i.draw(new Smits.PhyloCanvas.Render.Path(a,{attr:Smits.PhyloCanvas.Render.Style.textSecantBg}));a[0].toBack();return v+x+e.bufferOuterLabels}function d(d,b,e){for(var j=e&&e.bufferInner?parseFloat(e.bufferInner):Smits.PhyloCanvas.Render.Parameters.binaryChartBufferInner,h=(e&&e.bufferSiblings?e.bufferSiblings*u:0)|(Smits.PhyloCanvas.Render.Parameters.binaryChartBufferSiblings<1?u*Smits.PhyloCanvas.Render.Parameters.binaryChartBufferSiblings:Smits.PhyloCanvas.Render.Parameters.binaryChartBufferSiblings),
f=e&&e.thickness?parseFloat(e.thickness):Smits.PhyloCanvas.Render.Parameters.binaryChartThickness,o=(e&&e.disjointed?e.disjointed:0)|Smits.PhyloCanvas.Render.Parameters.binaryChartDisjointed,e=e&&e.isInternal?e.isInternal:!1,n=!0,g,m=0;m<s.length;m++){var q=s[m];if((!s[m+1]||q.chart[b]!==s[m+1].chart[b]||o)&&q.chart[b]!="none"){var p=Smits.PhyloCanvas.Render.Style.getStyle(q.chart[b],"textSecantBg");g=e?[v-j-f,v-j,(g?g:q.y)-u/2+(n&&!o?0:h/2),q.y+u/2-(m==s.length-1&&!o?0:h/2)]:[d+j,d+j+f,(g?g:q.y)-
u/2+(n&&!o?0:h/2),q.y+u/2-(m==s.length-1&&!o?0:h/2)];if(p.label){var n=Smits.PhyloCanvas.Render.Style.getStyle(p.labelStyle,"text"),q=a((g[0]+g[1])/2,(g[2]+g[3])/2),r=c((g[2]+g[3])/2),r=k(r[0]+(n.rotate?parseFloat(n.rotate):0)),t=k(90-(g[2]+g[3])/2-D);t>90&&t<270&&(r+=180);n["text-anchor"]||(n["text-anchor"]="middle");i.draw(new Smits.PhyloCanvas.Render.Text(q[0],q[1],p.label,{attr:n,rotate:r}))[0].toBack()}p.borderStyle&&(n=Smits.PhyloCanvas.Render.Style.getStyle(p.borderStyle,"textSecantBg"),i.draw(new Smits.PhyloCanvas.Render.Path(l([v,
n.fullsize?g[1]:g[0],g[2],g[3]]),{attr:n}))[0].toBack());i.draw(new Smits.PhyloCanvas.Render.Path(l(g),{attr:p}))[0].toBack();g=0}else{if(!g)g=q.y;q.chart[b]=="none"&&(g=0)}n=!1}return e?d:d+j+f}function j(d,a,b){for(var c=[],e=b&&b.bufferInner?parseFloat(b.bufferInner):Smits.PhyloCanvas.Render.Parameters.barChartBufferInner,j=b&&b.height?parseFloat(b.height):Smits.PhyloCanvas.Render.Parameters.barChartHeight?Smits.PhyloCanvas.Render.Parameters.barChartHeight:0,b=b&&b.width?parseFloat(b.width)<1?
u*parseFloat(b.width):parseFloat(b.width):0|(Smits.PhyloCanvas.Render.Parameters.barChartWidth<1?u*Smits.PhyloCanvas.Render.Parameters.barChartWidth:Smits.PhyloCanvas.Render.Parameters.barChartWidth),h=0,f=0;f<s.length;f++)c.push(s[f].chart[a]);c=Math.max.apply(null,c);h=Smits.Common.roundFloat(j/c,4);for(f=0;f<s.length;f++)c=s[f],c.chart[a]>0&&i.draw(new Smits.PhyloCanvas.Render.Path(l(d+e,d+e+h*c.chart[a],c.y-b/2,c.y+b/2),{attr:Smits.PhyloCanvas.Render.Style.getStyle(c.chart[a],"barChart")}));return d+
e+j}var i,e=Smits.PhyloCanvas.Render.Parameters.Circular,h,n,o,q,u,z,B=!0,A=0,E,r,v,s=[],t=[],C,w,x=0,D,F=Math.PI/180;return function(a,b,c){this.getCanvasSize=function(){return[h,n]};this.getRoot=function(){return b.getRoot()};if(b.getValidate())a.draw({type:"text",x:0,y:a.canvasSize[1]/3,text:b.getValidate()});else{i=a;var a=b.getRoot(),f=b.getNewickLen();h=i.canvasSize[0];n=i.canvasSize[1];E=h/2;r=n/2;o=Math.min.apply(null,[h,n]);c=e.bufferRadius>1?e.bufferRadius:Smits.Common.roundFloat(o*e.bufferRadius,
4);C=e.bufferAngle;z=e.innerCircleRadius;D=e.initStartAngle;v=Math.round((o-c-z)/2);q=(v-z)/f;u=Smits.Common.roundFloat((360-C)/a.getCountAllChildren(),4);p(a,z);w=v+x+e.bufferOuterLabels;if(Smits.PhyloCanvas.Render.Parameters.integratedBinaryCharts.length){var c=Smits.PhyloCanvas.Render.Parameters.integratedBinaryCharts,g;for(g in c)w=d(w-(c[g].thickness?c[g].thickness:Smits.PhyloCanvas.Render.Parameters.binaryChartThickness)-(c[g].bufferInner?c[g].bufferInner:Smits.PhyloCanvas.Render.Parameters.binaryChartBufferInner),
c[g].chart,c[g])}w=m();if(Smits.PhyloCanvas.Render.Parameters.binaryCharts.length)for(g in c=Smits.PhyloCanvas.Render.Parameters.binaryCharts,c)w=d(w,c[g].chart,c[g]);if(Smits.PhyloCanvas.Render.Parameters.barCharts.length)for(g in c=Smits.PhyloCanvas.Render.Parameters.barCharts,c)w=j(w,c[g].chart,c[g])}}}();Smits.PhyloCanvas.Render.CircularPhylogram.prototype={};
var XMLObjectifier=function(){var a=function(a){var b="";a&&typeof a==="string"&&(b=a);return/^((-)?([0-9]*)((\.{0,1})([0-9]+))?$)/.test(b)};return{xmlToJSON:function(c){try{if(!c)return null;var b={typeOf:"JSXBObject"},f=c.nodeType==9?c.documentElement:c;b.RootName=f.nodeName||"";if(c.nodeType==3||c.nodeType==4)return c.nodeValue;var k=function(a){return a.replace(/^\s+|\s+$/gm,"")},l=function(a,b){if(b.attributes.length>0){var c=b.attributes.length-1,e;a._attributes=[];do e=String(String(b.attributes[c].name).replace(/-/g,
"_")),a._attributes.push(e),a[e]=k(b.attributes[c].value);while(c--)}};(function(){return{activate:function(){var a=[];a.getNodesByAttribute=function(b,c){if(a&&a.length>0){var e=[],h,f=a.length-1;try{do h=a[f],h[b]===c&&e.push(h);while(f--);e.reverse();return e}catch(o){}return null}};a.getNodeByAttribute=function(b,c){if(a&&a.length>0){var e,h=a.length-1;try{do if(e=a[h],e[b]===c)return e;while(h--)}catch(f){}return null}};a.getNodesByValue=function(b){if(a&&a.length>0){var c=[],e,h=a.length-1;
try{do e=a[h],e.Text&&e.Text===b&&c.push(e);while(h--);return c}catch(f){}return null}};a.contains=function(b,c){if(a&&a.length>0){var e=a.length-1;try{do if(a[e][b]===c)return!0;while(e--)}catch(h){}return!1}};a.indexOf=function(b,c){var e=-1;if(a&&a.length>0){var h=a.length-1;try{do a[h][b]===c&&(e=h);while(h--)}catch(f){return-1}return e}};a.SortByAttribute=function(b,c){if(a&&a.length>0){var e=function(a,b){var d=a[b];return d=bam.validation.isNumeric(d)?parseFloat(d):d};a.sort(function(a,d){var f,
g;f=e(a,b);g=e(d,b);f=f<g?-1:g<f?1:0;c&&(f=c.toUpperCase()==="DESC"?0-f:f);return f})}};a.SortByValue=function(b){if(a&&a.length>0){var c=function(a){a=a.Text;return a=bam.validation.isNumeric(a)?parseFloat(a):a};a.sort(function(a,d){var f,g;f=c(a);g=c(d);f=f<g?-1:g<f?1:0;b&&(f=b.toUpperCase()==="DESC"?0-f:f);return f})}};a.SortByNode=function(b,c){if(a&&a.length>0){var e=function(a,b){var d=a[b][0].Text;return d=bam.validation.isNumeric(d)?parseFloat(d):d};a.sort(function(a,d){var f,g;f=e(a,b);g=
e(d,b);f=f<g?-1:g<f?1:0;c&&(f=c.toUpperCase()==="DESC"?0-f:f);return f})}};return a}}})();var p=function(b){b.getNodeByAttribute=function(a,b){if(this.length>0){var d,c=this.length-1;try{do if(d=this[c],d[a]==b)return d;while(c--)}catch(f){}return!1}};b.contains=function(a,b){if(this.length>0){var d=this.length-1;try{do if(this[d][a]==b)return!0;while(d--)}catch(c){}return!1}};b.indexOf=function(a,b){var d=-1;if(this.length>0){var c=this.length-1;try{do this[c][a]==b&&(d=c);while(c--)}catch(f){return-1}return d}};
b.SortByAttribute=function(b,d){if(this.length){var c=function(b,d){var c=b[d];return c=a(c)?parseFloat(c):c};this.sort(function(a,f){var g=0,k,l;k=c(a,b);l=c(f,b);k<l?g=-1:l<k&&(g=1);d&&(g=d.toUpperCase()=="DESC"?0-g:g);return g})}};b.SortByValue=function(b){if(this.length){var d=function(b){b=b.Text;return b=a(b)?parseFloat(b):b};this.sort(function(a,c){var f=0,g,k;g=d(a);k=d(c);g<k?f=-1:k<g&&(f=1);b&&(f=b.toUpperCase()=="DESC"?0-f:f);return f})}};b.SortByNode=function(b,d){if(this.length){var c=
function(b,d){var c=b[d][0].Text;return c=a(c)?parseFloat(c):c};this.sort(function(a,f){var g=0,k,l;k=c(a,b);l=c(f,b);k<l?g=-1:l<k&&(g=1);d&&(g=d.toUpperCase()=="DESC"?0-g:g);return g})}}},g=function(a,b){var c,e,f,m="";if(!b)return null;b.attributes.length>0&&l(a,b);a.Text="";if(b.hasChildNodes()){var o=b.childNodes.length-1,q=0;do switch(e=b.childNodes[q],e.nodeType){case 1:a._children=[];c=e.localName?e.localName:e.baseName;c=String(c).replace(/-/g,"_");m!=c&&a._children.push(c);a[c]||(a[c]=[]);
f={};a[c].push(f);e.attributes.length>0&&l(f,e);a[c].contains||p(a[c]);m=c;e.hasChildNodes()&&g(f,e);break;case 3:a.Text+=k(e.nodeValue);break;case 4:a.Text+=e.text?k(e.text):k(e.nodeValue)}while(q++<o)}};g(b,f);f=c=null;return b}catch(m){return null}},textToXML:function(a){var b=null;try{b=document.all?new ActiveXObject("Microsoft.XMLDOM"):new DOMParser,b.async=!1}catch(f){throw Error("XML Parser could not be instantiated");}var k;try{k=document.all?b.loadXML(a)?b:!1:b.parseFromString(a,"text/xml")}catch(l){throw Error("Error parsing XML string");
}return k}}}();


// http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js
// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;
g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,
c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&
a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,
c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,
a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&
(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};
j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,
0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,
e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=
i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=
i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=
g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));
return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&
c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=
function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};
b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,
b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=
function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||
u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};
b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);


// http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js
// Backbone.js 0.9.2

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var l=this,y=l.Backbone,z=Array.prototype.slice,A=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:l.Backbone={};g.VERSION="0.9.2";var f=l._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var i=l.jQuery||l.Zepto||l.ender;g.setDomLibrary=function(a){i=a};g.noConflict=function(){l.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var p=/\s+/,k=g.Events={on:function(a,b,c){var d,e,f,g,j;if(!b)return this;a=a.split(p);for(d=this._callbacks||(this._callbacks=
{});e=a.shift();)f=(j=d[e])?j.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:j?j.next:f};return this},off:function(a,b,c){var d,e,h,g,j,q;if(e=this._callbacks){if(!a&&!b&&!c)return delete this._callbacks,this;for(a=a?a.split(p):f.keys(e);d=a.shift();)if(h=e[d],delete e[d],h&&(b||c))for(g=h.tail;(h=h.next)!==g;)if(j=h.callback,q=h.context,b&&j!==b||c&&q!==c)this.on(d,j,q);return this}},trigger:function(a){var b,c,d,e,f,g;if(!(d=this._callbacks))return this;f=d.all;a=a.split(p);for(g=
z.call(arguments,1);b=a.shift();){if(c=d[b])for(e=c.tail;(c=c.next)!==e;)c.callback.apply(c.context||this,g);if(c=f){e=c.tail;for(b=[b].concat(g);(c=c.next)!==e;)c.callback.apply(c.context||this,b)}}return this}};k.bind=k.on;k.unbind=k.off;var o=g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=n(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.changed={};this._silent=
{};this._pending={};this.set(a,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(o.prototype,k,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.get(a);return this._escapedAttributes[a]=f.escape(null==
b?"":""+b)},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof o&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=c.changes={},h=this.attributes,g=this._escapedAttributes,j=this._previousAttributes||{};for(e in d){a=d[e];if(!f.isEqual(h[e],a)||c.unset&&f.has(h,e))delete g[e],(c.silent?this._silent:
b)[e]=!0;c.unset?delete h[e]:h[e]=a;!f.isEqual(j[e],a)||f.has(h,e)!=f.has(j,e)?(this.changed[e]=a,c.silent||(this._pending[e]=!0)):(delete this.changed[e],delete this._pending[e])}c.silent||this.change(c);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};
a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};if(c.wait){if(!this._validate(d,c))return!1;e=f.clone(this.attributes)}a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var h=this,i=c.success;c.success=function(a,b,e){b=h.parse(a,e);if(c.wait){delete c.wait;b=f.extend(d||{},b)}if(!h.set(b,c))return false;i?i(h,a):h.trigger("sync",h,a,c)};c.error=g.wrapError(c.error,
h,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d(),!1;a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=n(this,"urlRoot")||n(this.collection,"url")||t();
return this.isNew()?a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var c in this._silent)this._pending[c]=!0;var d=f.extend({},a.changes,this._silent);this._silent={};for(c in d)this.trigger("change:"+c,this,this.get(c),a);if(b)return this;for(;!f.isEmpty(this._pending);){this._pending=
{};this.trigger("change",this,a);for(c in this.changed)!this._pending[c]&&!this._silent[c]&&delete this.changed[c];this._previousAttributes=f.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||
!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});var r=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);b.comparator&&(this.comparator=b.comparator);
this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(r.prototype,k,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var c,d,e,g,i,j={},k={},l=[];b||(b={});a=f.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");g=e.cid;i=e.id;j[g]||this._byCid[g]||null!=i&&(k[i]||this._byId[i])?
l.push(c):j[g]=k[i]=e}for(c=l.length;c--;)a.splice(l[c],1);c=0;for(d=a.length;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=e.id&&(this._byId[e.id]=e);this.length+=d;A.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=this.models.length;c<d;c++)if(j[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?
a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,b);return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},b));return a},
shift:function(a){var b=this.at(0);this.remove(b,a);return b},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?
this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,
e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId=
{};this._byCid={}},_prepareModel:function(a,b){b||(b={});a instanceof o?a.collection||(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,
arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(a){r.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});var u=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/:\w+/g,
C=/\*\w+/g,D=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(u.prototype,k,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new m);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,
this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(D,"\\$&").replace(B,"([^/]+)").replace(C,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")},s=/^[#\/]/,E=/msie [\w.]+/;m.started=!1;f.extend(m.prototype,k,{interval:50,getHash:function(a){return(a=(a?a.location:window.location).href.match(/#(.*)$/))?a[1]:
""},getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=this.getHash();a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(s,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=
!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=E.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?i(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?i(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,
this.interval));this.fragment=a;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&(this.fragment=this.getHash().replace(s,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},
stop:function(){i(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a==this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,
function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(s,"");this.fragment!=c&&(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||
this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var v=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},F=/^(\S+)\s*(.*)$/,w="model,collection,el,id,attributes,className,tagName".split(",");
f.extend(v.prototype,k,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);b&&i(a).attr(b);c&&i(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof i?a:i(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=n(this,"events"))){this.undelegateEvents();
for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(F),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=w.length;b<c;b++){var d=w[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,
!1);else{var a=n(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});o.extend=r.extend=u.extend=v.extend=function(a,b){var c=G(this,a,b);c.extend=this.extend;return c};var H={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=H[a];c||(c={});var e={type:d,dataType:"json"};c.url||(e.url=n(b,"url")||t());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",
e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return i.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var x=function(){},G=function(a,
b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);x.prototype=a.prototype;d.prototype=new x;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},n=function(a,b){return!a||!a[b]?null:f.isFunction(a[b])?a[b]():a[b]},t=function(){throw Error('A "url" property or function must be specified');}}).call(this);


// trees_characters/SimpleParams_PhyloJIVE.js
    function init() {

        phylogenyExplorer_init({
        
        
// params
			codeBase:'../..', 		//  the location where js code
            width: 550,				//  visualisation window width
            height:800,   			//  visualisation window depth    
        	alignName:true,			//  place the taxon names into a column
        	lateralise:false, 		// order the phylogeny by branches
       		levelsToShow:10,		// depth of the tree
        	branchMultiplier:1,
            

        	
//  Tree and Characters 
// trees are in newick form. quotes and other special web characters should be avoided or escaped in the usual way for the web. Should a large newick tree fail to display then the first thing to check for is escape characters such as quotes for informal names or unnamed specimens.

			tree: '((Replace:0.007667365048364433,(this:0.005369261896034483,(with:0.011621228506591308,your:2.100100506802205E-6):0.0027929350821030707):0.012281999999150084):0.0400709772514759,(((own:0.0012025949078822151,phylogeny:0.0024332420478173633):0.006421131153429474,(in:0.008984623535641459,(newick:0.0012074724370825796,form:0.004013224017395373):0.003744210327868966):0.00542385295016945):0.023689622298502563,(tree:0.036702751435909745,((take:0.002448206437464337,care:0.0024347868455663196):0.001504447318880206,(to:0.0023787045835393372,(remove:2.100100506802205E-6,quotes_and_other_html_special_characters:0.01728824049672087):0.010690121488212884):6.006911375427831E-4):0.005347250770554118):0.014788598652250115):0.0400709772514759);',
            			
// a list of characters in CharJSON form ie an array of taxa each which has an array of character attributes. Characters can be qualitative or quantitative
            			
		character: {
    "Replace": {
        "modelled annual mean moisture index": [
            0.6837124164
        ],
        "modelled annual mean rad": [
            17.1466667213
        ],
        "modelled annual mean temp": [
            16.0416993341
        ],
        "modelled annual precipitation": [
            1039.2849673203
        ],
        "modelled clpk 1 1000 g clay": [
            18998.3660130718
        ],
        "modelled erosional": [
            85.9191176471
        ],
        "modelled highest period moisture index": [
            0.8894836614
        ],
        "modelled highest period radiation": [
            25.3393464394
        ],
        "modelled hydraulic conductivity ksat": [
            157.4640522876
        ],
        "modelled isothermality": [
            0.4932352942
        ],
        "modelled lowest period moisture index": [
            0.3231372576
        ],
        "modelled lowest period radiation": [
            9.081829987
        ],
        "modelled max temp warmest period": [
            28.0827450671
        ],
        "modelled mean diurnal range": [
            11.3729411867
        ],
        "modelled mean moisture index coldest quarter": [
            0.8600326849
        ],
        "modelled mean moisture index highest quarter MI": [
            0.8941764697
        ],
        "modelled mean moisture index lowest quater MI": [
            0.3734836587
        ],
        "modelled mean moisture index warmest quarter": [
            0.4585424874
        ],
        "modelled mean temp coldest quarter": [
            10.5782352927
        ],
        "modelled mean temp driest quater": [
            15.4166012935
        ],
        "modelled mean temp warmer quarter": [
            20.968431512
        ],
        "modelled mean temp wettest quarter": [
            15.8052941168
        ],
        "modelled min temp coldest period": [
            4.1385621225
        ],
        "modelled moisture index seasonality": [
            33.0339869281
        ],
        "modelled phos": [
            0.0438125788
        ],
        "modelled precipitation coldets quarter": [
            255.5509803922
        ],
        "modelled precipitation driest period": [
            5.322875817
        ],
        "modelled precipitation driest quarter": [
            143.0516339869
        ],
        "modelled precipitation seasonality": [
            39.0823529412
        ],
        "modelled precipitation warmest quarter": [
            292.9124183007
        ],
        "modelled precipitation wettest period": [
            36.9261437908
        ],
        "modelled precipitation wettest quarter": [
            423.4202614379
        ],
        "modelled radiation coldest quarter": [
            10.6616340562
        ],
        "modelled radiation driest quarter": [
            17.4772549498
        ],
        "modelled radiation seasonality": [
            33.0607843137
        ],
        "modelled radiation warmest quarter": [
            22.9215031792
        ],
        "modelled radiation wettest quarter": [
            15.7764050234
        ],
        "modelled relief": [
            64.9002548406
        ],
        "modelled ridgetopflat": [
            1.964869281
        ],
        "modelled rockalklty": [
            4.9215686275
        ],
        "modelled rockgrainsz": [
            4.1215686275
        ],
        "modelled rockhardness": [
            5.8725490196
        ],
        "modelled rocknutrnt": [
            4.7078431373
        ],
        "modelled roughness": [
            19.0273797546
        ],
        "modelled sapk 1 1000 g sand": [
            64840.3594771241
        ],
        "modelled slope": [
            4.4690577426
        ],
        "modelled soildepth": [
            0.9153594758
        ],
        "modelled solpawhc": [
            107.6281045752
        ],
        "modelled temperature annual range": [
            23.24398698
        ],
        "modelled temperature seasonality": [
            1.4140000156
        ],
        "modelled thpk 1 1000 g thickness": [
            292.831372549
        ],
        "modelled twi": [
            5.5785338397
        ],
        "modelled valleybottom": [
            8.4109477124
        ],
        "modelled whpk 1 1000 g water cap": [
            44557.6633986928
        ],
        "raw annual mean moisture index": [
            1e-7
        ],
        "raw annual mean rad": [
            19
        ],
        "raw annual mean temp": [
            21.5
        ],
        "raw annual precipitation": [
            1111
        ],
        "raw clpk 1 1000 g clay": [
            18000
        ],
        "raw erosional": [
            100
        ],
        "raw highest period moisture index": [
            1
        ],
        "raw highest period radiation": [
            25.5
        ],
        "raw hydraulic conductivity ksat": [
            200
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            14
        ],
        "raw max temp warmest period": [
            30
        ],
        "raw mean diurnal range": [
            9
        ],
        "raw mean moisture index coldest quarter": [
            0
        ],
        "raw mean moisture index highest quarter MI": [
            0.5
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0
        ],
        "raw mean temp coldest quarter": [
            17
        ],
        "raw mean temp driest quater": [
            18.5
        ],
        "raw mean temp warmer quarter": [
            24.5
        ],
        "raw mean temp wettest quarter": [
            24.5
        ],
        "raw min temp coldest period": [
            11
        ],
        "raw moisture index seasonality": [
            57
        ],
        "raw precipitation coldets quarter": [
            82
        ],
        "raw precipitation driest period": [
            0
        ],
        "raw precipitation driest quarter": [
            61
        ],
        "raw precipitation seasonality": [
            99.5
        ],
        "raw precipitation warmest quarter": [
            574.5
        ],
        "raw precipitation wettest period": [
            72.5
        ],
        "raw precipitation wettest quarter": [
            716
        ],
        "raw radiation coldest quarter": [
            15.5
        ],
        "raw radiation driest quarter": [
            19
        ],
        "raw radiation seasonality": [
            18.5
        ],
        "raw radiation warmest quarter": [
            22
        ],
        "raw radiation wettest quarter": [
            19
        ],
        "raw relief": [
            125
        ],
        "raw ridgetopflat": [
            0
        ],
        "raw rockalklty": [
            4
        ],
        "raw rockgrainsz": [
            8
        ],
        "raw rockhardness": [
            7
        ],
        "raw rocknutrnt": [
            4
        ],
        "raw roughness": [
            11
        ],
        "raw sapk 1 1000 g sand": [
            63000
        ],
        "raw slope": [
            6
        ],
        "raw soildepth": [
            1
        ],
        "raw solpawhc": [
            177
        ],
        "raw temperature annual range": [
            18
        ],
        "raw temperature seasonality": [
            1
        ],
        "raw thpk 1 1000 g thickness": [
            295.5
        ],
        "raw twi": [
            5.5
        ],
        "raw valleybottom": [
            0
        ]
    },
    "this": {
        "modelled annual mean moisture index": [
            0.6050000191
        ],
        "modelled annual mean rad": [
            19.6500005722
        ],
        "modelled annual mean temp": [
            21.75
        ],
        "modelled annual precipitation": [
            1111
        ],
        "modelled clpk 1 1000 g clay": [
            18000
        ],
        "modelled erosional": [
            100
        ],
        "modelled highest period moisture index": [
            1
        ],
        "modelled highest period radiation": [
            26.1500005722
        ],
        "modelled hydraulic conductivity ksat": [
            200
        ],
        "modelled isothermality": [
            0.5150000155
        ],
        "modelled lowest period moisture index": [
            0.1199999973
        ],
        "modelled lowest period radiation": [
            14.3499999046
        ],
        "modelled max temp warmest period": [
            30.1999998093
        ],
        "modelled mean diurnal range": [
            9.6500000954
        ],
        "modelled mean moisture index coldest quarter": [
            0.5400000066
        ],
        "modelled mean moisture index highest quarter MI": [
            0.9950000048
        ],
        "modelled mean moisture index lowest quater MI": [
            0.1750000007
        ],
        "modelled mean moisture index warmest quarter": [
            0.7150000036
        ],
        "modelled mean temp coldest quarter": [
            17.4500007629
        ],
        "modelled mean temp driest quater": [
            18.8999996185
        ],
        "modelled mean temp warmer quarter": [
            25.1499996185
        ],
        "modelled mean temp wettest quarter": [
            24.8500003815
        ],
        "modelled min temp coldest period": [
            11.5999999046
        ],
        "modelled moisture index seasonality": [
            57
        ],
        "modelled phos": [
            0.0198370004
        ],
        "modelled precipitation coldets quarter": [
            82
        ],
        "modelled precipitation driest period": [
            0
        ],
        "modelled precipitation driest quarter": [
            61
        ],
        "modelled precipitation seasonality": [
            99.5
        ],
        "modelled precipitation warmest quarter": [
            574.5
        ],
        "modelled precipitation wettest period": [
            72.5
        ],
        "modelled precipitation wettest quarter": [
            716
        ],
        "modelled radiation coldest quarter": [
            15.9499998093
        ],
        "modelled radiation driest quarter": [
            19.1999998093
        ],
        "modelled radiation seasonality": [
            18.5
        ],
        "modelled radiation warmest quarter": [
            22.3999996185
        ],
        "modelled radiation wettest quarter": [
            19.6000003815
        ],
        "modelled relief": [
            125.4036026001
        ],
        "modelled ridgetopflat": [
            0
        ],
        "modelled rockalklty": [
            4
        ],
        "modelled rockgrainsz": [
            8
        ],
        "modelled rockhardness": [
            7
        ],
        "modelled rocknutrnt": [
            4
        ],
        "modelled roughness": [
            11.5456476212
        ],
        "modelled sapk 1 1000 g sand": [
            63000
        ],
        "modelled slope": [
            6.512172699
        ],
        "modelled soildepth": [
            1.25
        ],
        "modelled solpawhc": [
            177
        ],
        "modelled temperature annual range": [
            18.6500005722
        ],
        "modelled temperature seasonality": [
            1.0499999523
        ],
        "modelled thpk 1 1000 g thickness": [
            295.5
        ],
        "modelled twi": [
            5.6324121952
        ],
        "modelled valleybottom": [
            0
        ],
        "modelled whpk 1 1000 g water cap": [
            50000
        ],
        "raw annual mean moisture index": [
            0
        ],
        "raw annual mean rad": [
            19
        ],
        "raw annual mean temp": [
            21.75
        ],
        "raw annual precipitation": [
            1107
        ],
        "raw clpk 1 1000 g clay": [
            19000
        ],
        "raw erosional": [
            100
        ],
        "raw highest period moisture index": [
            1
        ],
        "raw highest period radiation": [
            25.25
        ],
        "raw hydraulic conductivity ksat": [
            250
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            14
        ],
        "raw max temp warmest period": [
            30
        ],
        "raw mean diurnal range": [
            8.5
        ],
        "raw mean moisture index coldest quarter": [
            0
        ],
        "raw mean moisture index highest quarter MI": [
            0.25
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0
        ],
        "raw mean temp coldest quarter": [
            17.5
        ],
        "raw mean temp driest quater": [
            18.75
        ],
        "raw mean temp warmer quarter": [
            24.75
        ],
        "raw mean temp wettest quarter": [
            24.75
        ],
        "raw min temp coldest period": [
            11.5
        ],
        "raw moisture index seasonality": [
            61.5
        ],
        "raw precipitation coldets quarter": [
            74.5
        ],
        "raw precipitation driest period": [
            0
        ],
        "raw precipitation driest quarter": [
            55
        ],
        "raw precipitation seasonality": [
            103.75
        ],
        "raw precipitation warmest quarter": [
            608.75
        ],
        "raw precipitation wettest period": [
            75.75
        ],
        "raw precipitation wettest quarter": [
            731.5
        ],
        "raw radiation coldest quarter": [
            15.25
        ],
        "raw radiation driest quarter": [
            19
        ],
        "raw radiation seasonality": [
            18.25
        ],
        "raw radiation warmest quarter": [
            21.5
        ],
        "raw radiation wettest quarter": [
            19
        ],
        "raw relief": [
            162
        ],
        "raw ridgetopflat": [
            0
        ],
        "raw rockalklty": [
            4
        ],
        "raw rockgrainsz": [
            8
        ],
        "raw rockhardness": [
            7
        ],
        "raw rocknutrnt": [
            4
        ],
        "raw roughness": [
            15.5
        ],
        "raw sapk 1 1000 g sand": [
            61500
        ],
        "raw slope": [
            7.5
        ],
        "raw soildepth": [
            1
        ],
        "raw solpawhc": [
            183
        ],
        "raw temperature annual range": [
            17.5
        ],
        "raw temperature seasonality": [
            1
        ],
        "raw thpk 1 1000 g thickness": [
            285.25
        ],
        "raw twi": [
            4.75
        ],
        "raw valleybottom": [
            0
        ]
    },
    "with": {
        "modelled annual mean moisture index": [
            0.9200000167
        ],
        "modelled annual mean rad": [
            16.8999996185
        ],
        "modelled annual mean temp": [
            19.3999996185
        ],
        "modelled annual precipitation": [
            1778
        ],
        "modelled clpk 1 1000 g clay": [
            14000
        ],
        "modelled erosional": [
            100
        ],
        "modelled highest period moisture index": [
            1
        ],
        "modelled highest period radiation": [
            22.8999996185
        ],
        "modelled hydraulic conductivity ksat": [
            300
        ],
        "modelled isothermality": [
            0.4900000095
        ],
        "modelled lowest period moisture index": [
            0.7300000191
        ],
        "modelled lowest period radiation": [
            10.8000001907
        ],
        "modelled max temp warmest period": [
            27.7999992371
        ],
        "modelled mean diurnal range": [
            9.5
        ],
        "modelled mean moisture index coldest quarter": [
            1
        ],
        "modelled mean moisture index highest quarter MI": [
            1
        ],
        "modelled mean moisture index lowest quater MI": [
            0.75
        ],
        "modelled mean moisture index warmest quarter": [
            0.9200000167
        ],
        "modelled mean temp coldest quarter": [
            14.6000003815
        ],
        "modelled mean temp driest quater": [
            16.1000003815
        ],
        "modelled mean temp warmer quarter": [
            23.5
        ],
        "modelled mean temp wettest quarter": [
            23.1000003815
        ],
        "modelled min temp coldest period": [
            8.1999998093
        ],
        "modelled moisture index seasonality": [
            12
        ],
        "modelled phos": [
            0.0327499993
        ],
        "modelled precipitation coldets quarter": [
            258
        ],
        "modelled precipitation driest period": [
            11
        ],
        "modelled precipitation driest quarter": [
            211
        ],
        "modelled precipitation seasonality": [
            46
        ],
        "modelled precipitation warmest quarter": [
            670
        ],
        "modelled precipitation wettest period": [
            66
        ],
        "modelled precipitation wettest quarter": [
            730
        ],
        "modelled radiation coldest quarter": [
            12.8999996185
        ],
        "modelled radiation driest quarter": [
            16.2999992371
        ],
        "modelled radiation seasonality": [
            24
        ],
        "modelled radiation warmest quarter": [
            20.1000003815
        ],
        "modelled radiation wettest quarter": [
            18.2999992371
        ],
        "modelled relief": [
            178.5762023926
        ],
        "modelled ridgetopflat": [
            0
        ],
        "modelled rockalklty": [
            5
        ],
        "modelled rockgrainsz": [
            3
        ],
        "modelled rockhardness": [
            4
        ],
        "modelled rocknutrnt": [
            4
        ],
        "modelled roughness": [
            72.862159729
        ],
        "modelled sapk 1 1000 g sand": [
            69000
        ],
        "modelled slope": [
            10.0389699936
        ],
        "modelled soildepth": [
            1
        ],
        "modelled solpawhc": [
            169
        ],
        "modelled temperature annual range": [
            19.5
        ],
        "modelled temperature seasonality": [
            1.2000000477
        ],
        "modelled thpk 1 1000 g thickness": [
            599
        ],
        "modelled twi": [
            2.5513501167
        ],
        "modelled valleybottom": [
            0
        ],
        "modelled whpk 1 1000 g water cap": [
            117000
        ],
        "raw annual mean moisture index": [
            0
        ],
        "raw annual mean rad": [
            16
        ],
        "raw annual mean temp": [
            19
        ],
        "raw annual precipitation": [
            1778
        ],
        "raw clpk 1 1000 g clay": [
            14000
        ],
        "raw erosional": [
            100
        ],
        "raw highest period moisture index": [
            1
        ],
        "raw highest period radiation": [
            22
        ],
        "raw hydraulic conductivity ksat": [
            300
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            10
        ],
        "raw max temp warmest period": [
            27
        ],
        "raw mean diurnal range": [
            9
        ],
        "raw mean moisture index coldest quarter": [
            1
        ],
        "raw mean moisture index highest quarter MI": [
            1
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0
        ],
        "raw mean temp coldest quarter": [
            14
        ],
        "raw mean temp driest quater": [
            16
        ],
        "raw mean temp warmer quarter": [
            23
        ],
        "raw mean temp wettest quarter": [
            23
        ],
        "raw min temp coldest period": [
            8
        ],
        "raw moisture index seasonality": [
            12
        ],
        "raw precipitation coldets quarter": [
            258
        ],
        "raw precipitation driest period": [
            11
        ],
        "raw precipitation driest quarter": [
            211
        ],
        "raw precipitation seasonality": [
            46
        ],
        "raw precipitation warmest quarter": [
            670
        ],
        "raw precipitation wettest period": [
            66
        ],
        "raw precipitation wettest quarter": [
            730
        ],
        "raw radiation coldest quarter": [
            12
        ],
        "raw radiation driest quarter": [
            16
        ],
        "raw radiation seasonality": [
            24
        ],
        "raw radiation warmest quarter": [
            20
        ],
        "raw radiation wettest quarter": [
            18
        ],
        "raw relief": [
            178
        ],
        "raw ridgetopflat": [
            0
        ],
        "raw rockalklty": [
            5
        ],
        "raw rockgrainsz": [
            3
        ],
        "raw rockhardness": [
            4
        ],
        "raw rocknutrnt": [
            4
        ],
        "raw roughness": [
            72
        ],
        "raw sapk 1 1000 g sand": [
            69000
        ],
        "raw slope": [
            10
        ],
        "raw soildepth": [
            1
        ],
        "raw solpawhc": [
            169
        ],
        "raw temperature annual range": [
            19
        ],
        "raw temperature seasonality": [
            1
        ],
        "raw thpk 1 1000 g thickness": [
            599
        ],
        "raw twi": [
            2
        ],
        "raw valleybottom": [
            0
        ]
    },
    "your": {
        "modelled annual mean moisture index": [
            0.8323181818
        ],
        "modelled annual mean rad": [
            17.9524242387
        ],
        "modelled annual mean temp": [
            19.2898482727
        ],
        "modelled annual precipitation": [
            1888.3636363636
        ],
        "modelled clpk 1 1000 g clay": [
            25214.7727272727
        ],
        "modelled erosional": [
            92.8787878788
        ],
        "modelled highest period moisture index": [
            0.998939395
        ],
        "modelled highest period radiation": [
            24.5178788503
        ],
        "modelled hydraulic conductivity ksat": [
            205.6212121212
        ],
        "modelled isothermality": [
            0.5086363656
        ],
        "modelled lowest period moisture index": [
            0.4447727201
        ],
        "modelled lowest period radiation": [
            12.1872727221
        ],
        "modelled max temp warmest period": [
            28.0525757327
        ],
        "modelled mean diurnal range": [
            9.485757533
        ],
        "modelled mean moisture index coldest quarter": [
            0.8951666693
        ],
        "modelled mean moisture index highest quarter MI": [
            0.9978787867
        ],
        "modelled mean moisture index lowest quater MI": [
            0.5378636367
        ],
        "modelled mean moisture index warmest quarter": [
            0.8636969721
        ],
        "modelled mean temp coldest quarter": [
            14.951212141
        ],
        "modelled mean temp driest quater": [
            16.7531818144
        ],
        "modelled mean temp warmer quarter": [
            22.9656060132
        ],
        "modelled mean temp wettest quarter": [
            22.5318182165
        ],
        "modelled min temp coldest period": [
            9.4287879063
        ],
        "modelled moisture index seasonality": [
            25.9621212121
        ],
        "modelled phos": [
            0.0453631317
        ],
        "modelled precipitation coldets quarter": [
            235.6090909091
        ],
        "modelled precipitation driest period": [
            6.7242424242
        ],
        "modelled precipitation driest quarter": [
            167.2409090909
        ],
        "modelled precipitation seasonality": [
            68.203030303
        ],
        "modelled precipitation warmest quarter": [
            790.2136363636
        ],
        "modelled precipitation wettest period": [
            88.2606060606
        ],
        "modelled precipitation wettest quarter": [
            970.5196969697
        ],
        "modelled radiation coldest quarter": [
            14.1262121605
        ],
        "modelled radiation driest quarter": [
            17.7987878742
        ],
        "modelled radiation seasonality": [
            21.6636363636
        ],
        "modelled radiation warmest quarter": [
            20.8286361521
        ],
        "modelled radiation wettest quarter": [
            18.6671213323
        ],
        "modelled relief": [
            151.1616860035
        ],
        "modelled ridgetopflat": [
            0
        ],
        "modelled rockalklty": [
            4.7151515152
        ],
        "modelled rockgrainsz": [
            5.5742424242
        ],
        "modelled rockhardness": [
            6.2560606061
        ],
        "modelled rocknutrnt": [
            4.5742424242
        ],
        "modelled roughness": [
            14.6029429806
        ],
        "modelled sapk 1 1000 g sand": [
            54667.803030303
        ],
        "modelled slope": [
            8.4508264353
        ],
        "modelled soildepth": [
            1.1122727402
        ],
        "modelled solpawhc": [
            155.3090909091
        ],
        "modelled temperature annual range": [
            18.6489395503
        ],
        "modelled temperature seasonality": [
            1.0938939283
        ],
        "modelled thpk 1 1000 g thickness": [
            301.3257575758
        ],
        "modelled twi": [
            5.6370893103
        ],
        "modelled valleybottom": [
            7.1212121212
        ],
        "modelled whpk 1 1000 g water cap": [
            51557.1969696969
        ],
        "raw annual mean moisture index": [
            0
        ],
        "raw annual mean rad": [
            17.6111111111
        ],
        "raw annual mean temp": [
            18.5
        ],
        "raw annual precipitation": [
            1925.8333333333
        ],
        "raw clpk 1 1000 g clay": [
            26833.3333333333
        ],
        "raw erosional": [
            94.4444444444
        ],
        "raw highest period moisture index": [
            0.9444444444
        ],
        "raw highest period radiation": [
            24.1111111111
        ],
        "raw hydraulic conductivity ksat": [
            196.1111111111
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            11.8333333333
        ],
        "raw max temp warmest period": [
            27.4444444444
        ],
        "raw mean diurnal range": [
            9.2777777778
        ],
        "raw mean moisture index coldest quarter": [
            0.3888888889
        ],
        "raw mean moisture index highest quarter MI": [
            0.9444444444
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0.0555555556
        ],
        "raw mean temp coldest quarter": [
            14.1111111111
        ],
        "raw mean temp driest quater": [
            15.8888888889
        ],
        "raw mean temp warmer quarter": [
            22.1666666667
        ],
        "raw mean temp wettest quarter": [
            21.7222222222
        ],
        "raw min temp coldest period": [
            8.5555555556
        ],
        "raw moisture index seasonality": [
            24.3333333333
        ],
        "raw precipitation coldets quarter": [
            238.8888888889
        ],
        "raw precipitation driest period": [
            6.5
        ],
        "raw precipitation driest quarter": [
            169.1666666667
        ],
        "raw precipitation seasonality": [
            69.4444444444
        ],
        "raw precipitation warmest quarter": [
            812.7222222222
        ],
        "raw precipitation wettest period": [
            91.2777777778
        ],
        "raw precipitation wettest quarter": [
            998.7222222222
        ],
        "raw radiation coldest quarter": [
            13.6666666667
        ],
        "raw radiation driest quarter": [
            17.1666666667
        ],
        "raw radiation seasonality": [
            21.3333333333
        ],
        "raw radiation warmest quarter": [
            20.3333333333
        ],
        "raw radiation wettest quarter": [
            18.2777777778
        ],
        "raw relief": [
            163.1111111111
        ],
        "raw ridgetopflat": [
            0
        ],
        "raw rockalklty": [
            4.3888888889
        ],
        "raw rockgrainsz": [
            5.5
        ],
        "raw rockhardness": [
            6.0555555556
        ],
        "raw rocknutrnt": [
            4.4444444444
        ],
        "raw roughness": [
            11.8888888889
        ],
        "raw sapk 1 1000 g sand": [
            52583.3333333333
        ],
        "raw slope": [
            8.5
        ],
        "raw soildepth": [
            0.8333333333
        ],
        "raw solpawhc": [
            156.6666666667
        ],
        "raw temperature annual range": [
            18.6111111111
        ],
        "raw temperature seasonality": [
            0.6111111111
        ],
        "raw thpk 1 1000 g thickness": [
            272.0555555556
        ],
        "raw twi": [
            5.0555555556
        ],
        "raw valleybottom": [
            5.5555555556
        ]
    },
    "own": {
        "modelled annual mean moisture index": [
            0.9350000024
        ],
        "modelled annual mean rad": [
            18.0500001907
        ],
        "modelled annual mean temp": [
            20.1999998093
        ],
        "modelled annual precipitation": [
            2948
        ],
        "modelled clpk 1 1000 g clay": [
            42000
        ],
        "modelled erosional": [
            100
        ],
        "modelled highest period moisture index": [
            1
        ],
        "modelled highest period radiation": [
            25.0500001907
        ],
        "modelled hydraulic conductivity ksat": [
            300
        ],
        "modelled isothermality": [
            0.5400000215
        ],
        "modelled lowest period moisture index": [
            0.5549999774
        ],
        "modelled lowest period radiation": [
            12.4000000954
        ],
        "modelled max temp warmest period": [
            28.6499996185
        ],
        "modelled mean diurnal range": [
            9.4500002861
        ],
        "modelled mean moisture index coldest quarter": [
            1
        ],
        "modelled mean moisture index highest quarter MI": [
            1
        ],
        "modelled mean moisture index lowest quater MI": [
            0.7350000143
        ],
        "modelled mean moisture index warmest quarter": [
            0.9200000167
        ],
        "modelled mean temp coldest quarter": [
            16.4500007629
        ],
        "modelled mean temp driest quater": [
            19.4000005722
        ],
        "modelled mean temp warmer quarter": [
            23.4000005722
        ],
        "modelled mean temp wettest quarter": [
            22.6499996185
        ],
        "modelled min temp coldest period": [
            11.3000001907
        ],
        "modelled moisture index seasonality": [
            14
        ],
        "modelled phos": [
            0.0769999996
        ],
        "modelled precipitation coldets quarter": [
            428.5
        ],
        "modelled precipitation driest period": [
            12.5
        ],
        "modelled precipitation driest quarter": [
            247
        ],
        "modelled precipitation seasonality": [
            68.5
        ],
        "modelled precipitation warmest quarter": [
            1054
        ],
        "modelled precipitation wettest period": [
            131
        ],
        "modelled precipitation wettest quarter": [
            1492
        ],
        "modelled radiation coldest quarter": [
            14.75
        ],
        "modelled radiation driest quarter": [
            19.6499996185
        ],
        "modelled radiation seasonality": [
            20
        ],
        "modelled radiation warmest quarter": [
            20.75
        ],
        "modelled radiation wettest quarter": [
            18.0500001907
        ],
        "modelled relief": [
            93.9310970306
        ],
        "modelled ridgetopflat": [
            0
        ],
        "modelled rockalklty": [
            6
        ],
        "modelled rockgrainsz": [
            4
        ],
        "modelled rockhardness": [
            7
        ],
        "modelled rocknutrnt": [
            6
        ],
        "modelled roughness": [
            4.0198574662
        ],
        "modelled sapk 1 1000 g sand": [
            44000
        ],
        "modelled slope": [
            5.4142469168
        ],
        "modelled soildepth": [
            1.1000000238
        ],
        "modelled solpawhc": [
            171
        ],
        "modelled temperature annual range": [
            17.4000005722
        ],
        "modelled temperature seasonality": [
            0.9499999881
        ],
        "modelled thpk 1 1000 g thickness": [
            150
        ],
        "modelled twi": [
            5.4885058403
        ],
        "modelled valleybottom": [
            0
        ],
        "modelled whpk 1 1000 g water cap": [
            33000
        ],
        "raw annual mean moisture index": [
            0
        ],
        "raw annual mean rad": [
            18
        ],
        "raw annual mean temp": [
            20
        ],
        "raw annual precipitation": [
            3017.6666666667
        ],
        "raw clpk 1 1000 g clay": [
            42000
        ],
        "raw erosional": [
            100
        ],
        "raw highest period moisture index": [
            1
        ],
        "raw highest period radiation": [
            25
        ],
        "raw hydraulic conductivity ksat": [
            300
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            12
        ],
        "raw max temp warmest period": [
            28
        ],
        "raw mean diurnal range": [
            9
        ],
        "raw mean moisture index coldest quarter": [
            1
        ],
        "raw mean moisture index highest quarter MI": [
            1
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0
        ],
        "raw mean temp coldest quarter": [
            16
        ],
        "raw mean temp driest quater": [
            19
        ],
        "raw mean temp warmer quarter": [
            23
        ],
        "raw mean temp wettest quarter": [
            22
        ],
        "raw min temp coldest period": [
            11
        ],
        "raw moisture index seasonality": [
            13.6666666667
        ],
        "raw precipitation coldets quarter": [
            437
        ],
        "raw precipitation driest period": [
            12.6666666667
        ],
        "raw precipitation driest quarter": [
            252.3333333333
        ],
        "raw precipitation seasonality": [
            68.6666666667
        ],
        "raw precipitation warmest quarter": [
            1077.3333333333
        ],
        "raw precipitation wettest period": [
            134.3333333333
        ],
        "raw precipitation wettest quarter": [
            1531
        ],
        "raw radiation coldest quarter": [
            14
        ],
        "raw radiation driest quarter": [
            19
        ],
        "raw radiation seasonality": [
            20
        ],
        "raw radiation warmest quarter": [
            20
        ],
        "raw radiation wettest quarter": [
            18
        ],
        "raw relief": [
            113
        ],
        "raw ridgetopflat": [
            0
        ],
        "raw rockalklty": [
            6
        ],
        "raw rockgrainsz": [
            4
        ],
        "raw rockhardness": [
            7
        ],
        "raw rocknutrnt": [
            6
        ],
        "raw roughness": [
            4.6666666667
        ],
        "raw sapk 1 1000 g sand": [
            44000
        ],
        "raw slope": [
            6.3333333333
        ],
        "raw soildepth": [
            1
        ],
        "raw solpawhc": [
            165.6666666667
        ],
        "raw temperature annual range": [
            17
        ],
        "raw temperature seasonality": [
            0
        ],
        "raw thpk 1 1000 g thickness": [
            150
        ],
        "raw twi": [
            5.3333333333
        ],
        "raw valleybottom": [
            0
        ]
    },
    "phylogeny": {
        "modelled annual mean moisture index": [
            0.8325000107
        ],
        "modelled annual mean rad": [
            18.5249996185
        ],
        "modelled annual mean temp": [
            20.9250001907
        ],
        "modelled annual precipitation": [
            2179.25
        ],
        "modelled clpk 1 1000 g clay": [
            35250
        ],
        "modelled erosional": [
            100
        ],
        "modelled highest period moisture index": [
            1
        ],
        "modelled highest period radiation": [
            25.2750000954
        ],
        "modelled hydraulic conductivity ksat": [
            250
        ],
        "modelled isothermality": [
            0.5450000167
        ],
        "modelled lowest period moisture index": [
            0.3475000001
        ],
        "modelled lowest period radiation": [
            13.3499999046
        ],
        "modelled max temp warmest period": [
            29.2249999046
        ],
        "modelled mean diurnal range": [
            9.5
        ],
        "modelled mean moisture index coldest quarter": [
            0.8774999976
        ],
        "modelled mean moisture index highest quarter MI": [
            1
        ],
        "modelled mean moisture index lowest quater MI": [
            0.4975000024
        ],
        "modelled mean moisture index warmest quarter": [
            0.8824999928
        ],
        "modelled mean temp coldest quarter": [
            17.125
        ],
        "modelled mean temp driest quater": [
            19.0499997139
        ],
        "modelled mean temp warmer quarter": [
            24.0749998093
        ],
        "modelled mean temp wettest quarter": [
            23.5500001907
        ],
        "modelled min temp coldest period": [
            11.75
        ],
        "modelled moisture index seasonality": [
            28.5
        ],
        "modelled phos": [
            0.0491249994
        ],
        "modelled precipitation coldets quarter": [
            234.25
        ],
        "modelled precipitation driest period": [
            5.5
        ],
        "modelled precipitation driest quarter": [
            157.75
        ],
        "modelled precipitation seasonality": [
            79
        ],
        "modelled precipitation warmest quarter": [
            919.25
        ],
        "modelled precipitation wettest period": [
            108.75
        ],
        "modelled precipitation wettest quarter": [
            1209.25
        ],
        "modelled radiation coldest quarter": [
            15.4999997616
        ],
        "modelled radiation driest quarter": [
            18.9500002861
        ],
        "modelled radiation seasonality": [
            18.75
        ],
        "modelled radiation warmest quarter": [
            21
        ],
        "modelled radiation wettest quarter": [
            18.4499998093
        ],
        "modelled relief": [
            191.561460495
        ],
        "modelled ridgetopflat": [
            0
        ],
        "modelled rockalklty": [
            4.5
        ],
        "modelled rockgrainsz": [
            4.5
        ],
        "modelled rockhardness": [
            6.5
        ],
        "modelled rocknutrnt": [
            5.5
        ],
        "modelled roughness": [
            11.7312440872
        ],
        "modelled sapk 1 1000 g sand": [
            46500
        ],
        "modelled slope": [
            10.01773417
        ],
        "modelled soildepth": [
            1.2000000179
        ],
        "modelled solpawhc": [
            164.5
        ],
        "modelled temperature annual range": [
            17.4500000477
        ],
        "modelled temperature seasonality": [
            0.9424999952
        ],
        "modelled thpk 1 1000 g thickness": [
            195.25
        ],
        "modelled twi": [
            7.2423673272
        ],
        "modelled valleybottom": [
            0
        ],
        "modelled whpk 1 1000 g water cap": [
            35500
        ],
        "raw annual mean moisture index": [
            0
        ],
        "raw annual mean rad": [
            18
        ],
        "raw annual mean temp": [
            20.5
        ],
        "raw annual precipitation": [
            2179.25
        ],
        "raw clpk 1 1000 g clay": [
            35250
        ],
        "raw erosional": [
            100
        ],
        "raw highest period moisture index": [
            1
        ],
        "raw highest period radiation": [
            25
        ],
        "raw hydraulic conductivity ksat": [
            250
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            13
        ],
        "raw max temp warmest period": [
            28.5
        ],
        "raw mean diurnal range": [
            9
        ],
        "raw mean moisture index coldest quarter": [
            0.75
        ],
        "raw mean moisture index highest quarter MI": [
            1
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0
        ],
        "raw mean temp coldest quarter": [
            16.75
        ],
        "raw mean temp driest quater": [
            18.75
        ],
        "raw mean temp warmer quarter": [
            23.75
        ],
        "raw mean temp wettest quarter": [
            23
        ],
        "raw min temp coldest period": [
            11
        ],
        "raw moisture index seasonality": [
            28.5
        ],
        "raw precipitation coldets quarter": [
            234.25
        ],
        "raw precipitation driest period": [
            5.5
        ],
        "raw precipitation driest quarter": [
            157.75
        ],
        "raw precipitation seasonality": [
            79
        ],
        "raw precipitation warmest quarter": [
            919.25
        ],
        "raw precipitation wettest period": [
            108.75
        ],
        "raw precipitation wettest quarter": [
            1209.25
        ],
        "raw radiation coldest quarter": [
            15.25
        ],
        "raw radiation driest quarter": [
            18.75
        ],
        "raw radiation seasonality": [
            18.75
        ],
        "raw radiation warmest quarter": [
            20.75
        ],
        "raw radiation wettest quarter": [
            18
        ],
        "raw relief": [
            191
        ],
        "raw ridgetopflat": [
            0
        ],
        "raw rockalklty": [
            4.5
        ],
        "raw rockgrainsz": [
            4.5
        ],
        "raw rockhardness": [
            6.5
        ],
        "raw rocknutrnt": [
            5.5
        ],
        "raw roughness": [
            11.25
        ],
        "raw sapk 1 1000 g sand": [
            46500
        ],
        "raw slope": [
            9.5
        ],
        "raw soildepth": [
            1
        ],
        "raw solpawhc": [
            164.5
        ],
        "raw temperature annual range": [
            17
        ],
        "raw temperature seasonality": [
            0.25
        ],
        "raw thpk 1 1000 g thickness": [
            195.25
        ],
        "raw twi": [
            6.75
        ],
        "raw valleybottom": [
            0
        ]
    },
    "in": {
        "modelled annual mean moisture index": [
            0.8511999941
        ],
        "modelled annual mean rad": [
            17.7549997139
        ],
        "modelled annual mean temp": [
            20.1320000076
        ],
        "modelled annual precipitation": [
            2004.6
        ],
        "modelled clpk 1 1000 g clay": [
            24337.5
        ],
        "modelled erosional": [
            100
        ],
        "modelled highest period moisture index": [
            1
        ],
        "modelled highest period radiation": [
            24.4609998512
        ],
        "modelled hydraulic conductivity ksat": [
            230
        ],
        "modelled isothermality": [
            0.519799999
        ],
        "modelled lowest period moisture index": [
            0.4349999921
        ],
        "modelled lowest period radiation": [
            11.9399999428
        ],
        "modelled max temp warmest period": [
            28.5809999847
        ],
        "modelled mean diurnal range": [
            9.3529999971
        ],
        "modelled mean moisture index coldest quarter": [
            0.9477999979
        ],
        "modelled mean moisture index highest quarter MI": [
            1
        ],
        "modelled mean moisture index lowest quater MI": [
            0.5399000007
        ],
        "modelled mean moisture index warmest quarter": [
            0.8883000004
        ],
        "modelled mean temp coldest quarter": [
            16.0029999352
        ],
        "modelled mean temp driest quater": [
            17.4470001602
        ],
        "modelled mean temp warmer quarter": [
            23.6520002556
        ],
        "modelled mean temp wettest quarter": [
            23.2579998207
        ],
        "modelled min temp coldest period": [
            10.5970001769
        ],
        "modelled moisture index seasonality": [
            24.44
        ],
        "modelled phos": [
            0.0236599989
        ],
        "modelled precipitation coldets quarter": [
            229.2
        ],
        "modelled precipitation driest period": [
            8.44
        ],
        "modelled precipitation driest quarter": [
            170.66
        ],
        "modelled precipitation seasonality": [
            66.77
        ],
        "modelled precipitation warmest quarter": [
            871.37
        ],
        "modelled precipitation wettest period": [
            92.64
        ],
        "modelled precipitation wettest quarter": [
            1050.83
        ],
        "modelled radiation coldest quarter": [
            14.0290001678
        ],
        "modelled radiation driest quarter": [
            17.2499999809
        ],
        "modelled radiation seasonality": [
            21.92
        ],
        "modelled radiation warmest quarter": [
            20.4790001106
        ],
        "modelled radiation wettest quarter": [
            18.3959999466
        ],
        "modelled relief": [
            180.825651741
        ],
        "modelled ridgetopflat": [
            0
        ],
        "modelled rockalklty": [
            4.92
        ],
        "modelled rockgrainsz": [
            6.22
        ],
        "modelled rockhardness": [
            6.34
        ],
        "modelled rocknutrnt": [
            4.34
        ],
        "modelled roughness": [
            41.1613443279
        ],
        "modelled sapk 1 1000 g sand": [
            52267.5
        ],
        "modelled slope": [
            10.5619576693
        ],
        "modelled soildepth": [
            1.3479999959
        ],
        "modelled solpawhc": [
            183.33
        ],
        "modelled temperature annual range": [
            17.9670000267
        ],
        "modelled temperature seasonality": [
            1.0439999992
        ],
        "modelled thpk 1 1000 g thickness": [
            226.16
        ],
        "modelled twi": [
            5.7365186501
        ],
        "modelled valleybottom": [
            1.0625
        ],
        "modelled whpk 1 1000 g water cap": [
            35632.5
        ],
        "raw annual mean moisture index": [
            0
        ],
        "raw annual mean rad": [
            17
        ],
        "raw annual mean temp": [
            18.8571428571
        ],
        "raw annual precipitation": [
            1932.7142857143
        ],
        "raw clpk 1 1000 g clay": [
            23678.5714285714
        ],
        "raw erosional": [
            100
        ],
        "raw highest period moisture index": [
            1
        ],
        "raw highest period radiation": [
            24.1428571429
        ],
        "raw hydraulic conductivity ksat": [
            242.8571428571
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            11
        ],
        "raw max temp warmest period": [
            27.4285714286
        ],
        "raw mean diurnal range": [
            9
        ],
        "raw mean moisture index coldest quarter": [
            0.4285714286
        ],
        "raw mean moisture index highest quarter MI": [
            1
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0
        ],
        "raw mean temp coldest quarter": [
            14.5714285714
        ],
        "raw mean temp driest quater": [
            16
        ],
        "raw mean temp warmer quarter": [
            22.5714285714
        ],
        "raw mean temp wettest quarter": [
            22.1428571429
        ],
        "raw min temp coldest period": [
            9.2857142857
        ],
        "raw moisture index seasonality": [
            23.5714285714
        ],
        "raw precipitation coldets quarter": [
            226.2857142857
        ],
        "raw precipitation driest period": [
            8.4285714286
        ],
        "raw precipitation driest quarter": [
            171.4285714286
        ],
        "raw precipitation seasonality": [
            64.8571428571
        ],
        "raw precipitation warmest quarter": [
            833.5714285714
        ],
        "raw precipitation wettest period": [
            89
        ],
        "raw precipitation wettest quarter": [
            1003.5714285714
        ],
        "raw radiation coldest quarter": [
            13.1428571429
        ],
        "raw radiation driest quarter": [
            16.4285714286
        ],
        "raw radiation seasonality": [
            22.8571428571
        ],
        "raw radiation warmest quarter": [
            20.2857142857
        ],
        "raw radiation wettest quarter": [
            17.8571428571
        ],
        "raw relief": [
            182.5714285714
        ],
        "raw ridgetopflat": [
            0
        ],
        "raw rockalklty": [
            4
        ],
        "raw rockgrainsz": [
            4.8571428571
        ],
        "raw rockhardness": [
            5.1428571429
        ],
        "raw rocknutrnt": [
            3.7142857143
        ],
        "raw roughness": [
            29.7142857143
        ],
        "raw sapk 1 1000 g sand": [
            54535.7142857143
        ],
        "raw slope": [
            10.1428571429
        ],
        "raw soildepth": [
            1
        ],
        "raw solpawhc": [
            188.7142857143
        ],
        "raw temperature annual range": [
            18
        ],
        "raw temperature seasonality": [
            0.4285714286
        ],
        "raw thpk 1 1000 g thickness": [
            253.4285714286
        ],
        "raw twi": [
            4.8571428571
        ],
        "raw valleybottom": [
            0
        ]
    },
    "newick": {
        "modelled annual mean moisture index": [
            0.8419692351
        ],
        "modelled annual mean rad": [
            15.4089230904
        ],
        "modelled annual mean temp": [
            11.7830769011
        ],
        "modelled annual precipitation": [
            1282.2246153846
        ],
        "modelled clpk 1 1000 g clay": [
            21682.3076923077
        ],
        "modelled erosional": [
            98.4807692308
        ],
        "modelled highest period moisture index": [
            0.9973846157
        ],
        "modelled highest period radiation": [
            24.0646153729
        ],
        "modelled hydraulic conductivity ksat": [
            180.3692307692
        ],
        "modelled isothermality": [
            0.4703076909
        ],
        "modelled lowest period moisture index": [
            0.48273846
        ],
        "modelled lowest period radiation": [
            7.0495384554
        ],
        "modelled max temp warmest period": [
            23.5836921927
        ],
        "modelled mean diurnal range": [
            10.2701538335
        ],
        "modelled mean moisture index coldest quarter": [
            0.9867076942
        ],
        "modelled mean moisture index highest quarter MI": [
            0.9953846163
        ],
        "modelled mean moisture index lowest quater MI": [
            0.5702769235
        ],
        "modelled mean moisture index warmest quarter": [
            0.6286461528
        ],
        "modelled mean temp coldest quarter": [
            6.664307713
        ],
        "modelled mean temp driest quater": [
            12.2307692
        ],
        "modelled mean temp warmer quarter": [
            16.8929231204
        ],
        "modelled mean temp wettest quarter": [
            11.9966153483
        ],
        "modelled min temp coldest period": [
            1.7335384761
        ],
        "modelled moisture index seasonality": [
            22.3753846154
        ],
        "modelled phos": [
            0.0354398355
        ],
        "modelled precipitation coldets quarter": [
            316.5815384615
        ],
        "modelled precipitation driest period": [
            13.1261538462
        ],
        "modelled precipitation driest quarter": [
            212.48
        ],
        "modelled precipitation seasonality": [
            25.9846153846
        ],
        "modelled precipitation warmest quarter": [
            333.4307692308
        ],
        "modelled precipitation wettest period": [
            39.5076923077
        ],
        "modelled precipitation wettest quarter": [
            446.7507692308
        ],
        "modelled radiation coldest quarter": [
            8.8353845684
        ],
        "modelled radiation driest quarter": [
            17.0212307989
        ],
        "modelled radiation seasonality": [
            39.0307692308
        ],
        "modelled radiation warmest quarter": [
            21.3784615619
        ],
        "modelled radiation wettest quarter": [
            14.3270768371
        ],
        "modelled relief": [
            156.8749819389
        ],
        "modelled ridgetopflat": [
            0.2884615385
        ],
        "modelled rockalklty": [
            4.6646153846
        ],
        "modelled rockgrainsz": [
            4.6615384615
        ],
        "modelled rockhardness": [
            5.8615384615
        ],
        "modelled rocknutrnt": [
            4.5569230769
        ],
        "modelled roughness": [
            9.5328148233
        ],
        "modelled sapk 1 1000 g sand": [
            58780.7692307692
        ],
        "modelled slope": [
            9.5631930516
        ],
        "modelled soildepth": [
            1.0756923059
        ],
        "modelled solpawhc": [
            151.4553846154
        ],
        "modelled temperature annual range": [
            21.8473846553
        ],
        "modelled temperature seasonality": [
            1.4144307659
        ],
        "modelled thpk 1 1000 g thickness": [
            278.2092307692
        ],
        "modelled twi": [
            4.8256355231
        ],
        "modelled valleybottom": [
            0.4807692308
        ],
        "modelled whpk 1 1000 g water cap": [
            45223.0769230769
        ],
        "raw annual mean moisture index": [
            0.0083333333
        ],
        "raw annual mean rad": [
            15
        ],
        "raw annual mean temp": [
            11.5
        ],
        "raw annual precipitation": [
            1295.7833333333
        ],
        "raw clpk 1 1000 g clay": [
            22614.5833333333
        ],
        "raw erosional": [
            98.5166666667
        ],
        "raw highest period moisture index": [
            0.9583333333
        ],
        "raw highest period radiation": [
            23.625
        ],
        "raw hydraulic conductivity ksat": [
            181.4166666667
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            6.7916666667
        ],
        "raw max temp warmest period": [
            23.2833333333
        ],
        "raw mean diurnal range": [
            9.8083333333
        ],
        "raw mean moisture index coldest quarter": [
            0.6333333333
        ],
        "raw mean moisture index highest quarter MI": [
            0.8583333333
        ],
        "raw mean moisture index lowest quater MI": [
            0.0083333333
        ],
        "raw mean moisture index warmest quarter": [
            0.0083333333
        ],
        "raw mean temp coldest quarter": [
            6.4
        ],
        "raw mean temp driest quater": [
            11.8333333333
        ],
        "raw mean temp warmer quarter": [
            16.6
        ],
        "raw mean temp wettest quarter": [
            11.9
        ],
        "raw min temp coldest period": [
            1.75
        ],
        "raw moisture index seasonality": [
            22.375
        ],
        "raw precipitation coldets quarter": [
            312.6666666667
        ],
        "raw precipitation driest period": [
            13.0083333333
        ],
        "raw precipitation driest quarter": [
            212.0583333333
        ],
        "raw precipitation seasonality": [
            26.6833333333
        ],
        "raw precipitation warmest quarter": [
            347.1833333333
        ],
        "raw precipitation wettest period": [
            40.8166666667
        ],
        "raw precipitation wettest quarter": [
            460.0583333333
        ],
        "raw radiation coldest quarter": [
            8.4333333333
        ],
        "raw radiation driest quarter": [
            16.5416666667
        ],
        "raw radiation seasonality": [
            38.6916666667
        ],
        "raw radiation warmest quarter": [
            20.8916666667
        ],
        "raw radiation wettest quarter": [
            13.8916666667
        ],
        "raw relief": [
            157
        ],
        "raw ridgetopflat": [
            0.1
        ],
        "raw rockalklty": [
            4.4083333333
        ],
        "raw rockgrainsz": [
            4.6083333333
        ],
        "raw rockhardness": [
            5.8
        ],
        "raw rocknutrnt": [
            4.35
        ],
        "raw roughness": [
            9.5166666667
        ],
        "raw sapk 1 1000 g sand": [
            57129.1666666667
        ],
        "raw slope": [
            9.1583333333
        ],
        "raw soildepth": [
            0.6083333333
        ],
        "raw solpawhc": [
            151.35
        ],
        "raw temperature annual range": [
            21.4333333333
        ],
        "raw temperature seasonality": [
            0.9416666667
        ],
        "raw thpk 1 1000 g thickness": [
            279.0416666667
        ],
        "raw twi": [
            4.5416666667
        ],
        "raw valleybottom": [
            0.6083333333
        ]
    },
    "form": {
        "modelled annual mean moisture index": [
            0.9756666799
        ],
        "modelled annual mean rad": [
            12.0000000954
        ],
        "modelled annual mean temp": [
            8.4266665936
        ],
        "modelled annual precipitation": [
            1407.3333333333
        ],
        "modelled clpk 1 1000 g clay": [
            24058.3333333333
        ],
        "modelled erosional": [
            99.1666666667
        ],
        "modelled highest period moisture index": [
            1
        ],
        "modelled highest period radiation": [
            20.980000178
        ],
        "modelled hydraulic conductivity ksat": [
            166.6666666667
        ],
        "modelled isothermality": [
            0.4939999938
        ],
        "modelled lowest period moisture index": [
            0.8756666621
        ],
        "modelled lowest period radiation": [
            3.9166666349
        ],
        "modelled max temp warmest period": [
            18.3566667557
        ],
        "modelled mean diurnal range": [
            8.6166667461
        ],
        "modelled mean moisture index coldest quarter": [
            1
        ],
        "modelled mean moisture index highest quarter MI": [
            1
        ],
        "modelled mean moisture index lowest quater MI": [
            0.9139999986
        ],
        "modelled mean moisture index warmest quarter": [
            0.9393333415
        ],
        "modelled mean temp coldest quarter": [
            4.6199999571
        ],
        "modelled mean temp driest quater": [
            12.2033334096
        ],
        "modelled mean temp warmer quarter": [
            12.313333416
        ],
        "modelled mean temp wettest quarter": [
            6.9966665745
        ],
        "modelled min temp coldest period": [
            1.009999985
        ],
        "modelled moisture index seasonality": [
            4.4
        ],
        "modelled phos": [
            0.0296393858
        ],
        "modelled precipitation coldets quarter": [
            405
        ],
        "modelled precipitation driest period": [
            18.4333333333
        ],
        "modelled precipitation driest quarter": [
            267.1666666667
        ],
        "modelled precipitation seasonality": [
            17.3666666667
        ],
        "modelled precipitation warmest quarter": [
            272.2
        ],
        "modelled precipitation wettest period": [
            36.7
        ],
        "modelled precipitation wettest quarter": [
            425.8333333333
        ],
        "modelled radiation coldest quarter": [
            5.6500000318
        ],
        "modelled radiation driest quarter": [
            17.3266669591
        ],
        "modelled radiation seasonality": [
            50.7666666667
        ],
        "modelled radiation warmest quarter": [
            18.4133333206
        ],
        "modelled radiation wettest quarter": [
            11.630000035
        ],
        "modelled relief": [
            187.601335907
        ],
        "modelled ridgetopflat": [
            0
        ],
        "modelled rockalklty": [
            5.8
        ],
        "modelled rockgrainsz": [
            5.0333333333
        ],
        "modelled rockhardness": [
            5.7666666667
        ],
        "modelled rocknutrnt": [
            5.7666666667
        ],
        "modelled roughness": [
            11.1428800742
        ],
        "modelled sapk 1 1000 g sand": [
            54641.6666666666
        ],
        "modelled slope": [
            12.2245521386
        ],
        "modelled soildepth": [
            1.0466666738
        ],
        "modelled solpawhc": [
            160.1666666667
        ],
        "modelled temperature annual range": [
            17.3433331172
        ],
        "modelled temperature seasonality": [
            1.0673333148
        ],
        "modelled thpk 1 1000 g thickness": [
            322.6333333333
        ],
        "modelled twi": [
            5.1204978943
        ],
        "modelled valleybottom": [
            0.8333333333
        ],
        "modelled whpk 1 1000 g water cap": [
            53558.3333333333
        ],
        "raw annual mean moisture index": [
            0.0909090909
        ],
        "raw annual mean rad": [
            11.7272727273
        ],
        "raw annual mean temp": [
            7.9090909091
        ],
        "raw annual precipitation": [
            1400
        ],
        "raw clpk 1 1000 g clay": [
            25386.3636363636
        ],
        "raw erosional": [
            99.3636363636
        ],
        "raw highest period moisture index": [
            1
        ],
        "raw highest period radiation": [
            20.8181818182
        ],
        "raw hydraulic conductivity ksat": [
            172.7272727273
        ],
        "raw lowest period moisture index": [
            0.0909090909
        ],
        "raw lowest period radiation": [
            3.8181818182
        ],
        "raw max temp warmest period": [
            18.0909090909
        ],
        "raw mean diurnal range": [
            8.2727272727
        ],
        "raw mean moisture index coldest quarter": [
            1
        ],
        "raw mean moisture index highest quarter MI": [
            1
        ],
        "raw mean moisture index lowest quater MI": [
            0.0909090909
        ],
        "raw mean moisture index warmest quarter": [
            0.0909090909
        ],
        "raw mean temp coldest quarter": [
            4.2727272727
        ],
        "raw mean temp driest quater": [
            11.9090909091
        ],
        "raw mean temp warmer quarter": [
            11.9090909091
        ],
        "raw mean temp wettest quarter": [
            6.2727272727
        ],
        "raw min temp coldest period": [
            0.6363636364
        ],
        "raw moisture index seasonality": [
            4.5454545455
        ],
        "raw precipitation coldets quarter": [
            404.1818181818
        ],
        "raw precipitation driest period": [
            18
        ],
        "raw precipitation driest quarter": [
            264.1818181818
        ],
        "raw precipitation seasonality": [
            17.6363636364
        ],
        "raw precipitation warmest quarter": [
            269
        ],
        "raw precipitation wettest period": [
            36.3636363636
        ],
        "raw precipitation wettest quarter": [
            423.1818181818
        ],
        "raw radiation coldest quarter": [
            5.0909090909
        ],
        "raw radiation driest quarter": [
            17.1818181818
        ],
        "raw radiation seasonality": [
            50.5454545455
        ],
        "raw radiation warmest quarter": [
            18.0909090909
        ],
        "raw radiation wettest quarter": [
            11
        ],
        "raw relief": [
            214.8181818182
        ],
        "raw ridgetopflat": [
            0
        ],
        "raw rockalklty": [
            5.8181818182
        ],
        "raw rockgrainsz": [
            4.9090909091
        ],
        "raw rockhardness": [
            5.8181818182
        ],
        "raw rocknutrnt": [
            5.8181818182
        ],
        "raw roughness": [
            11.5454545455
        ],
        "raw sapk 1 1000 g sand": [
            52431.8181818182
        ],
        "raw slope": [
            13
        ],
        "raw soildepth": [
            0.7272727273
        ],
        "raw solpawhc": [
            167.5454545455
        ],
        "raw temperature annual range": [
            16.9090909091
        ],
        "raw temperature seasonality": [
            0.8181818182
        ],
        "raw thpk 1 1000 g thickness": [
            308.6363636364
        ],
        "raw twi": [
            4.3636363636
        ],
        "raw valleybottom": [
            0.5454545455
        ]
    },
    "tree": {
        "modelled annual mean moisture index": [
            0.2800000012
        ],
        "modelled annual mean rad": [
            22.1500005722
        ],
        "modelled annual mean temp": [
            26.4499998093
        ],
        "modelled annual precipitation": [
            732
        ],
        "modelled clpk 1 1000 g clay": [
            41500
        ],
        "modelled erosional": [
            100
        ],
        "modelled highest period moisture index": [
            0.9199999869
        ],
        "modelled highest period radiation": [
            26.8000001907
        ],
        "modelled hydraulic conductivity ksat": [
            65
        ],
        "modelled isothermality": [
            0.5400000215
        ],
        "modelled lowest period moisture index": [
            0.0049999999
        ],
        "modelled lowest period radiation": [
            17
        ],
        "modelled max temp warmest period": [
            38.5
        ],
        "modelled mean diurnal range": [
            14.9500002861
        ],
        "modelled mean moisture index coldest quarter": [
            0.0299999993
        ],
        "modelled mean moisture index highest quarter MI": [
            0.8199999928
        ],
        "modelled mean moisture index lowest quater MI": [
            0.0099999998
        ],
        "modelled mean moisture index warmest quarter": [
            0.2599999979
        ],
        "modelled mean temp coldest quarter": [
            21
        ],
        "modelled mean temp driest quater": [
            23.25
        ],
        "modelled mean temp warmer quarter": [
            30.5
        ],
        "modelled mean temp wettest quarter": [
            29.3500003815
        ],
        "modelled min temp coldest period": [
            10.7999997139
        ],
        "modelled moisture index seasonality": [
            120
        ],
        "modelled phos": [
            0.0149999997
        ],
        "modelled precipitation coldets quarter": [
            14
        ],
        "modelled precipitation driest period": [
            0
        ],
        "modelled precipitation driest quarter": [
            0
        ],
        "modelled precipitation seasonality": [
            126
        ],
        "modelled precipitation warmest quarter": [
            239.5
        ],
        "modelled precipitation wettest period": [
            52
        ],
        "modelled precipitation wettest quarter": [
            546
        ],
        "modelled radiation coldest quarter": [
            18.8500003815
        ],
        "modelled radiation driest quarter": [
            21.9499998093
        ],
        "modelled radiation seasonality": [
            13.5
        ],
        "modelled radiation warmest quarter": [
            25.25
        ],
        "modelled radiation wettest quarter": [
            22.4000005722
        ],
        "modelled relief": [
            98.6766052246
        ],
        "modelled ridgetopflat": [
            0
        ],
        "modelled rockalklty": [
            5.5
        ],
        "modelled rockgrainsz": [
            4.5
        ],
        "modelled rockhardness": [
            4.5
        ],
        "modelled rocknutrnt": [
            5
        ],
        "modelled roughness": [
            17.0805878639
        ],
        "modelled sapk 1 1000 g sand": [
            37000
        ],
        "modelled slope": [
            5.9404842854
        ],
        "modelled soildepth": [
            1.0000000298
        ],
        "modelled solpawhc": [
            117.5
        ],
        "modelled temperature annual range": [
            27.75
        ],
        "modelled temperature seasonality": [
            1.2549999952
        ],
        "modelled thpk 1 1000 g thickness": [
            150
        ],
        "modelled twi": [
            8.5943181515
        ],
        "modelled valleybottom": [
            0
        ],
        "modelled whpk 1 1000 g water cap": [
            20500
        ],
        "raw annual mean moisture index": [
            0
        ],
        "raw annual mean rad": [
            22
        ],
        "raw annual mean temp": [
            26
        ],
        "raw annual precipitation": [
            732
        ],
        "raw clpk 1 1000 g clay": [
            41500
        ],
        "raw erosional": [
            100
        ],
        "raw highest period moisture index": [
            0
        ],
        "raw highest period radiation": [
            26
        ],
        "raw hydraulic conductivity ksat": [
            65
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            16.5
        ],
        "raw max temp warmest period": [
            38
        ],
        "raw mean diurnal range": [
            14.5
        ],
        "raw mean moisture index coldest quarter": [
            0
        ],
        "raw mean moisture index highest quarter MI": [
            0
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0
        ],
        "raw mean temp coldest quarter": [
            20.5
        ],
        "raw mean temp driest quater": [
            22.5
        ],
        "raw mean temp warmer quarter": [
            30
        ],
        "raw mean temp wettest quarter": [
            29
        ],
        "raw min temp coldest period": [
            10.5
        ],
        "raw moisture index seasonality": [
            120
        ],
        "raw precipitation coldets quarter": [
            14
        ],
        "raw precipitation driest period": [
            0
        ],
        "raw precipitation driest quarter": [
            0
        ],
        "raw precipitation seasonality": [
            126
        ],
        "raw precipitation warmest quarter": [
            239.5
        ],
        "raw precipitation wettest period": [
            52
        ],
        "raw precipitation wettest quarter": [
            546
        ],
        "raw radiation coldest quarter": [
            18.5
        ],
        "raw radiation driest quarter": [
            21.5
        ],
        "raw radiation seasonality": [
            13.5
        ],
        "raw radiation warmest quarter": [
            25
        ],
        "raw radiation wettest quarter": [
            22
        ],
        "raw relief": [
            98
        ],
        "raw ridgetopflat": [
            0
        ],
        "raw rockalklty": [
            5.5
        ],
        "raw rockgrainsz": [
            4.5
        ],
        "raw rockhardness": [
            4.5
        ],
        "raw rocknutrnt": [
            5
        ],
        "raw roughness": [
            16.5
        ],
        "raw sapk 1 1000 g sand": [
            37000
        ],
        "raw slope": [
            5.5
        ],
        "raw soildepth": [
            0.5
        ],
        "raw solpawhc": [
            117.5
        ],
        "raw temperature annual range": [
            27
        ],
        "raw temperature seasonality": [
            1
        ],
        "raw thpk 1 1000 g thickness": [
            150
        ],
        "raw twi": [
            8
        ],
        "raw valleybottom": [
            0
        ]
    },
    "take": {
        "modelled annual mean moisture index": [
            0.7365444446
        ],
        "modelled annual mean rad": [
            17.1275078493
        ],
        "modelled annual mean temp": [
            16.1311112493
        ],
        "modelled annual precipitation": [
            1255.8687301587
        ],
        "modelled clpk 1 1000 g clay": [
            21822.0634920634
        ],
        "modelled erosional": [
            91.9027777778
        ],
        "modelled highest period moisture index": [
            0.9502539679
        ],
        "modelled highest period radiation": [
            24.715031606
        ],
        "modelled hydraulic conductivity ksat": [
            152.3
        ],
        "modelled isothermality": [
            0.4938333283
        ],
        "modelled lowest period moisture index": [
            0.3612952372
        ],
        "modelled lowest period radiation": [
            9.6579523886
        ],
        "modelled max temp warmest period": [
            27.2970475527
        ],
        "modelled mean diurnal range": [
            10.9151110977
        ],
        "modelled mean moisture index coldest quarter": [
            0.8659396845
        ],
        "modelled mean moisture index highest quarter MI": [
            0.9381000012
        ],
        "modelled mean moisture index lowest quater MI": [
            0.4386444416
        ],
        "modelled mean moisture index warmest quarter": [
            0.5990571438
        ],
        "modelled mean temp coldest quarter": [
            11.0153809807
        ],
        "modelled mean temp driest quater": [
            14.1643810366
        ],
        "modelled mean temp warmer quarter": [
            21.0059206676
        ],
        "modelled mean temp wettest quarter": [
            18.1127459956
        ],
        "modelled min temp coldest period": [
            5.1418412599
        ],
        "modelled moisture index seasonality": [
            31.663015873
        ],
        "modelled phos": [
            0.0397253511
        ],
        "modelled precipitation coldets quarter": [
            243.0065079365
        ],
        "modelled precipitation driest period": [
            7.4119047619
        ],
        "modelled precipitation driest quarter": [
            158.4253968254
        ],
        "modelled precipitation seasonality": [
            45.0196825397
        ],
        "modelled precipitation warmest quarter": [
            418.6682539683
        ],
        "modelled precipitation wettest period": [
            49.3933333333
        ],
        "modelled precipitation wettest quarter": [
            535.4804761905
        ],
        "modelled radiation coldest quarter": [
            11.5418730642
        ],
        "modelled radiation driest quarter": [
            16.7123016274
        ],
        "modelled radiation seasonality": [
            30.5920634921
        ],
        "modelled radiation warmest quarter": [
            21.9849682202
        ],
        "modelled radiation wettest quarter": [
            17.2387459149
        ],
        "modelled relief": [
            97.2765801426
        ],
        "modelled ridgetopflat": [
            0.6339285714
        ],
        "modelled rockalklty": [
            4.7514285714
        ],
        "modelled rockgrainsz": [
            4.3793650794
        ],
        "modelled rockhardness": [
            5.7
        ],
        "modelled rocknutrnt": [
            4.7347619048
        ],
        "modelled roughness": [
            13.9966933051
        ],
        "modelled sapk 1 1000 g sand": [
            61094.5238095238
        ],
        "modelled slope": [
            6.4187526792
        ],
        "modelled soildepth": [
            0.9957460357
        ],
        "modelled solpawhc": [
            125.65
        ],
        "modelled temperature annual range": [
            22.1440794706
        ],
        "modelled temperature seasonality": [
            1.3577285743
        ],
        "modelled thpk 1 1000 g thickness": [
            276.8314285714
        ],
        "modelled twi": [
            6.0713178382
        ],
        "modelled valleybottom": [
            5.5426587302
        ],
        "modelled whpk 1 1000 g water cap": [
            41211.3919047619
        ],
        "raw annual mean moisture index": [
            0
        ],
        "raw annual mean rad": [
            16.0625
        ],
        "raw annual mean temp": [
            15.203125
        ],
        "raw annual precipitation": [
            1208.296875
        ],
        "raw clpk 1 1000 g clay": [
            20792.96875
        ],
        "raw erosional": [
            90.5625
        ],
        "raw highest period moisture index": [
            0.703125
        ],
        "raw highest period radiation": [
            23.421875
        ],
        "raw hydraulic conductivity ksat": [
            141.09375
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            8.8125
        ],
        "raw max temp warmest period": [
            25.828125
        ],
        "raw mean diurnal range": [
            10.046875
        ],
        "raw mean moisture index coldest quarter": [
            0.40625
        ],
        "raw mean moisture index highest quarter MI": [
            0.640625
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0.015625
        ],
        "raw mean temp coldest quarter": [
            10.265625
        ],
        "raw mean temp driest quater": [
            13.1875
        ],
        "raw mean temp warmer quarter": [
            19.796875
        ],
        "raw mean temp wettest quarter": [
            16.9375
        ],
        "raw min temp coldest period": [
            4.53125
        ],
        "raw moisture index seasonality": [
            29.625
        ],
        "raw precipitation coldets quarter": [
            232.109375
        ],
        "raw precipitation driest period": [
            7.28125
        ],
        "raw precipitation driest quarter": [
            157.328125
        ],
        "raw precipitation seasonality": [
            42.140625
        ],
        "raw precipitation warmest quarter": [
            401.015625
        ],
        "raw precipitation wettest period": [
            45.546875
        ],
        "raw precipitation wettest quarter": [
            506.40625
        ],
        "raw radiation coldest quarter": [
            10.625
        ],
        "raw radiation driest quarter": [
            15.6875
        ],
        "raw radiation seasonality": [
            29.78125
        ],
        "raw radiation warmest quarter": [
            20.71875
        ],
        "raw radiation wettest quarter": [
            16.421875
        ],
        "raw relief": [
            100.15625
        ],
        "raw ridgetopflat": [
            0.484375
        ],
        "raw rockalklty": [
            4.109375
        ],
        "raw rockgrainsz": [
            3.84375
        ],
        "raw rockhardness": [
            5.1875
        ],
        "raw rocknutrnt": [
            4
        ],
        "raw roughness": [
            13.9375
        ],
        "raw sapk 1 1000 g sand": [
            57734.375
        ],
        "raw slope": [
            6.078125
        ],
        "raw soildepth": [
            0.5
        ],
        "raw solpawhc": [
            116.21875
        ],
        "raw temperature annual range": [
            21.03125
        ],
        "raw temperature seasonality": [
            0.90625
        ],
        "raw thpk 1 1000 g thickness": [
            267.40625
        ],
        "raw twi": [
            5.46875
        ],
        "raw valleybottom": [
            4.953125
        ]
    },
    "care": {
        "modelled annual mean moisture index": [
            0.7523631571
        ],
        "modelled annual mean rad": [
            15.7872632313
        ],
        "modelled annual mean temp": [
            14.148368388
        ],
        "modelled annual precipitation": [
            1072.0410526316
        ],
        "modelled clpk 1 1000 g clay": [
            20124.6052631579
        ],
        "modelled erosional": [
            85.6052631579
        ],
        "modelled highest period moisture index": [
            0.9810842105
        ],
        "modelled highest period radiation": [
            24.9694211327
        ],
        "modelled hydraulic conductivity ksat": [
            130.0578947368
        ],
        "modelled isothermality": [
            0.4845000008
        ],
        "modelled lowest period moisture index": [
            0.323263157
        ],
        "modelled lowest period radiation": [
            7.2001579207
        ],
        "modelled max temp warmest period": [
            25.3658948326
        ],
        "modelled mean diurnal range": [
            10.2003158394
        ],
        "modelled mean moisture index coldest quarter": [
            0.9645894769
        ],
        "modelled mean moisture index highest quarter MI": [
            0.9754421075
        ],
        "modelled mean moisture index lowest quater MI": [
            0.4105263146
        ],
        "modelled mean moisture index warmest quarter": [
            0.4492105245
        ],
        "modelled mean temp coldest quarter": [
            9.284631582
        ],
        "modelled mean temp driest quater": [
            15.7744210745
        ],
        "modelled mean temp warmer quarter": [
            18.8259999486
        ],
        "modelled mean temp wettest quarter": [
            13.4179999638
        ],
        "modelled min temp coldest period": [
            4.3915789415
        ],
        "modelled moisture index seasonality": [
            34.51
        ],
        "modelled phos": [
            0.0319927152
        ],
        "modelled precipitation coldets quarter": [
            293.6242105263
        ],
        "modelled precipitation driest period": [
            7.7615789474
        ],
        "modelled precipitation driest quarter": [
            158.1031578947
        ],
        "modelled precipitation seasonality": [
            32.4805263158
        ],
        "modelled precipitation warmest quarter": [
            240.0526315789
        ],
        "modelled precipitation wettest period": [
            34.3584210526
        ],
        "modelled precipitation wettest quarter": [
            384.7031578947
        ],
        "modelled radiation coldest quarter": [
            9.1081578742
        ],
        "modelled radiation driest quarter": [
            19.6293685346
        ],
        "modelled radiation seasonality": [
            39.0931578947
        ],
        "modelled radiation warmest quarter": [
            22.166210543
        ],
        "modelled radiation wettest quarter": [
            13.3475263033
        ],
        "modelled relief": [
            74.8392543699
        ],
        "modelled ridgetopflat": [
            4.1447368421
        ],
        "modelled rockalklty": [
            4.9478947368
        ],
        "modelled rockgrainsz": [
            4.0494736842
        ],
        "modelled rockhardness": [
            5.6621052632
        ],
        "modelled rocknutrnt": [
            4.4805263158
        ],
        "modelled roughness": [
            17.1395764974
        ],
        "modelled sapk 1 1000 g sand": [
            60505.3947368421
        ],
        "modelled slope": [
            4.8369444082
        ],
        "modelled soildepth": [
            0.9438947287
        ],
        "modelled solpawhc": [
            110.2721052632
        ],
        "modelled temperature annual range": [
            20.8948948519
        ],
        "modelled temperature seasonality": [
            1.3039000004
        ],
        "modelled thpk 1 1000 g thickness": [
            270.7410526316
        ],
        "modelled twi": [
            5.8377228775
        ],
        "modelled valleybottom": [
            11.2171052632
        ],
        "modelled whpk 1 1000 g water cap": [
            38992.5510526315
        ],
        "raw annual mean moisture index": [
            0
        ],
        "raw annual mean rad": [
            14.5428571429
        ],
        "raw annual mean temp": [
            12.8285714286
        ],
        "raw annual precipitation": [
            1000.6
        ],
        "raw clpk 1 1000 g clay": [
            18821.4285714286
        ],
        "raw erosional": [
            77.6
        ],
        "raw highest period moisture index": [
            0.7714285714
        ],
        "raw highest period radiation": [
            23.1428571429
        ],
        "raw hydraulic conductivity ksat": [
            122.2857142857
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            6.4571428571
        ],
        "raw max temp warmest period": [
            23.5142857143
        ],
        "raw mean diurnal range": [
            9.2
        ],
        "raw mean moisture index coldest quarter": [
            0.4285714286
        ],
        "raw mean moisture index highest quarter MI": [
            0.7428571429
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0
        ],
        "raw mean temp coldest quarter": [
            8.3714285714
        ],
        "raw mean temp driest quater": [
            14.3428571429
        ],
        "raw mean temp warmer quarter": [
            17.3428571429
        ],
        "raw mean temp wettest quarter": [
            12.3428571429
        ],
        "raw min temp coldest period": [
            3.6
        ],
        "raw moisture index seasonality": [
            32.3428571429
        ],
        "raw precipitation coldets quarter": [
            272.2571428571
        ],
        "raw precipitation driest period": [
            7.2285714286
        ],
        "raw precipitation driest quarter": [
            149.8
        ],
        "raw precipitation seasonality": [
            30.2857142857
        ],
        "raw precipitation warmest quarter": [
            235.7714285714
        ],
        "raw precipitation wettest period": [
            32.0857142857
        ],
        "raw precipitation wettest quarter": [
            363.1714285714
        ],
        "raw radiation coldest quarter": [
            8.2571428571
        ],
        "raw radiation driest quarter": [
            18
        ],
        "raw radiation seasonality": [
            37
        ],
        "raw radiation warmest quarter": [
            20.4285714286
        ],
        "raw radiation wettest quarter": [
            12.1714285714
        ],
        "raw relief": [
            73.2285714286
        ],
        "raw ridgetopflat": [
            4.2571428571
        ],
        "raw rockalklty": [
            4.2
        ],
        "raw rockgrainsz": [
            3.6571428571
        ],
        "raw rockhardness": [
            4.6
        ],
        "raw rocknutrnt": [
            3.8
        ],
        "raw roughness": [
            15.9714285714
        ],
        "raw sapk 1 1000 g sand": [
            55707.1428571429
        ],
        "raw slope": [
            4.4
        ],
        "raw soildepth": [
            0.3142857143
        ],
        "raw solpawhc": [
            99.3714285714
        ],
        "raw temperature annual range": [
            19.4857142857
        ],
        "raw temperature seasonality": [
            0.8857142857
        ],
        "raw thpk 1 1000 g thickness": [
            256.2285714286
        ],
        "raw twi": [
            5.7428571429
        ],
        "raw valleybottom": [
            9.3714285714
        ]
    },
    "to": {
        "modelled annual mean moisture index": [
            0.3124999981
        ],
        "modelled annual mean rad": [
            19.4000000954
        ],
        "modelled annual mean temp": [
            17.6749999523
        ],
        "modelled annual precipitation": [
            369.5
        ],
        "modelled clpk 1 1000 g clay": [
            16375
        ],
        "modelled erosional": [
            57.8125
        ],
        "modelled highest period moisture index": [
            0.7574999928
        ],
        "modelled highest period radiation": [
            28.8750004768
        ],
        "modelled hydraulic conductivity ksat": [
            200
        ],
        "modelled isothermality": [
            0.484999992
        ],
        "modelled lowest period moisture index": [
            0.0299999993
        ],
        "modelled lowest period radiation": [
            9.7249999046
        ],
        "modelled max temp warmest period": [
            33.1500005722
        ],
        "modelled mean diurnal range": [
            13.2000000477
        ],
        "modelled mean moisture index coldest quarter": [
            0.7025000006
        ],
        "modelled mean moisture index highest quarter MI": [
            0.7099999934
        ],
        "modelled mean moisture index lowest quater MI": [
            0.044999999
        ],
        "modelled mean moisture index warmest quarter": [
            0.0574999992
        ],
        "modelled mean temp coldest quarter": [
            11.5250000954
        ],
        "modelled mean temp driest quater": [
            21.6499996185
        ],
        "modelled mean temp warmer quarter": [
            24.25
        ],
        "modelled mean temp wettest quarter": [
            12.1749999523
        ],
        "modelled min temp coldest period": [
            5.6000000238
        ],
        "modelled moisture index seasonality": [
            90.25
        ],
        "modelled phos": [
            0.0180416674
        ],
        "modelled precipitation coldets quarter": [
            160.25
        ],
        "modelled precipitation driest period": [
            0
        ],
        "modelled precipitation driest quarter": [
            28.75
        ],
        "modelled precipitation seasonality": [
            59.75
        ],
        "modelled precipitation warmest quarter": [
            48.75
        ],
        "modelled precipitation wettest period": [
            15
        ],
        "modelled precipitation wettest quarter": [
            174.5
        ],
        "modelled radiation coldest quarter": [
            12.2000000477
        ],
        "modelled radiation driest quarter": [
            27.0499997139
        ],
        "modelled radiation seasonality": [
            34.75
        ],
        "modelled radiation warmest quarter": [
            26.0750002861
        ],
        "modelled radiation wettest quarter": [
            11.0250000954
        ],
        "modelled relief": [
            10.535130471
        ],
        "modelled ridgetopflat": [
            0
        ],
        "modelled rockalklty": [
            5
        ],
        "modelled rockgrainsz": [
            5.5
        ],
        "modelled rockhardness": [
            5.5
        ],
        "modelled rocknutrnt": [
            3.75
        ],
        "modelled roughness": [
            1.172922425
        ],
        "modelled sapk 1 1000 g sand": [
            68250
        ],
        "modelled slope": [
            0.6775645409
        ],
        "modelled soildepth": [
            0.875
        ],
        "modelled solpawhc": [
            120
        ],
        "modelled temperature annual range": [
            27.5250000954
        ],
        "modelled temperature seasonality": [
            1.7350000143
        ],
        "modelled thpk 1 1000 g thickness": [
            277.75
        ],
        "modelled twi": [
            7.6787025928
        ],
        "modelled valleybottom": [
            35.9375
        ],
        "modelled whpk 1 1000 g water cap": [
            23578.75
        ],
        "raw annual mean moisture index": [
            0
        ],
        "raw annual mean rad": [
            18.6666666667
        ],
        "raw annual mean temp": [
            16.5
        ],
        "raw annual precipitation": [
            378
        ],
        "raw clpk 1 1000 g clay": [
            14916.6666666667
        ],
        "raw erosional": [
            69.5
        ],
        "raw highest period moisture index": [
            0
        ],
        "raw highest period radiation": [
            28.5
        ],
        "raw hydraulic conductivity ksat": [
            233.3333333333
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            9.1666666667
        ],
        "raw max temp warmest period": [
            31.6666666667
        ],
        "raw mean diurnal range": [
            12.5
        ],
        "raw mean moisture index coldest quarter": [
            0
        ],
        "raw mean moisture index highest quarter MI": [
            0
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0
        ],
        "raw mean temp coldest quarter": [
            10.8333333333
        ],
        "raw mean temp driest quater": [
            21.1666666667
        ],
        "raw mean temp warmer quarter": [
            23
        ],
        "raw mean temp wettest quarter": [
            11.6666666667
        ],
        "raw min temp coldest period": [
            5
        ],
        "raw moisture index seasonality": [
            89.1666666667
        ],
        "raw precipitation coldets quarter": [
            161.6666666667
        ],
        "raw precipitation driest period": [
            0
        ],
        "raw precipitation driest quarter": [
            33.1666666667
        ],
        "raw precipitation seasonality": [
            59
        ],
        "raw precipitation warmest quarter": [
            47.8333333333
        ],
        "raw precipitation wettest period": [
            15
        ],
        "raw precipitation wettest quarter": [
            176.3333333333
        ],
        "raw radiation coldest quarter": [
            11.5
        ],
        "raw radiation driest quarter": [
            26.5
        ],
        "raw radiation seasonality": [
            35.1666666667
        ],
        "raw radiation warmest quarter": [
            25.6666666667
        ],
        "raw radiation wettest quarter": [
            10.3333333333
        ],
        "raw relief": [
            12.3333333333
        ],
        "raw ridgetopflat": [
            0
        ],
        "raw rockalklty": [
            4.1666666667
        ],
        "raw rockgrainsz": [
            5
        ],
        "raw rockhardness": [
            6
        ],
        "raw rocknutrnt": [
            3.8333333333
        ],
        "raw roughness": [
            1
        ],
        "raw sapk 1 1000 g sand": [
            71500
        ],
        "raw slope": [
            0.3333333333
        ],
        "raw soildepth": [
            0.5
        ],
        "raw solpawhc": [
            122.6666666667
        ],
        "raw temperature annual range": [
            26.3333333333
        ],
        "raw temperature seasonality": [
            1.1666666667
        ],
        "raw thpk 1 1000 g thickness": [
            315.8333333333
        ],
        "raw twi": [
            6.6666666667
        ],
        "raw valleybottom": [
            29
        ]
    },
    "remove": {
        "modelled annual mean moisture index": [],
        "modelled annual mean rad": [],
        "modelled annual mean temp": [],
        "modelled annual precipitation": [],
        "modelled clpk 1 1000 g clay": [],
        "modelled erosional": [],
        "modelled highest period moisture index": [],
        "modelled highest period radiation": [],
        "modelled hydraulic conductivity ksat": [],
        "modelled isothermality": [],
        "modelled lowest period moisture index": [],
        "modelled lowest period radiation": [],
        "modelled max temp warmest period": [],
        "modelled mean diurnal range": [],
        "modelled mean moisture index coldest quarter": [],
        "modelled mean moisture index highest quarter MI": [],
        "modelled mean moisture index lowest quater MI": [],
        "modelled mean moisture index warmest quarter": [],
        "modelled mean temp coldest quarter": [],
        "modelled mean temp driest quater": [],
        "modelled mean temp warmer quarter": [],
        "modelled mean temp wettest quarter": [],
        "modelled min temp coldest period": [],
        "modelled moisture index seasonality": [],
        "modelled phos": [],
        "modelled precipitation coldets quarter": [],
        "modelled precipitation driest period": [],
        "modelled precipitation driest quarter": [],
        "modelled precipitation seasonality": [],
        "modelled precipitation warmest quarter": [],
        "modelled precipitation wettest period": [],
        "modelled precipitation wettest quarter": [],
        "modelled radiation coldest quarter": [],
        "modelled radiation driest quarter": [],
        "modelled radiation seasonality": [],
        "modelled radiation warmest quarter": [],
        "modelled radiation wettest quarter": [],
        "modelled relief": [],
        "modelled ridgetopflat": [],
        "modelled rockalklty": [],
        "modelled rockgrainsz": [],
        "modelled rockhardness": [],
        "modelled rocknutrnt": [],
        "modelled roughness": [],
        "modelled sapk 1 1000 g sand": [],
        "modelled slope": [],
        "modelled soildepth": [],
        "modelled solpawhc": [],
        "modelled temperature annual range": [],
        "modelled temperature seasonality": [],
        "modelled thpk 1 1000 g thickness": [],
        "modelled twi": [],
        "modelled valleybottom": [],
        "modelled whpk 1 1000 g water cap": [],
        "raw annual mean moisture index": [
            0
        ],
        "raw annual mean rad": [
            16
        ],
        "raw annual mean temp": [
            13.8333333333
        ],
        "raw annual precipitation": [
            683.8333333333
        ],
        "raw clpk 1 1000 g clay": [
            9833.3333333333
        ],
        "raw erosional": [
            67.1666666667
        ],
        "raw highest period moisture index": [
            0.6666666667
        ],
        "raw highest period radiation": [
            26
        ],
        "raw hydraulic conductivity ksat": [
            266.6666666667
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            6.1666666667
        ],
        "raw max temp warmest period": [
            25.1666666667
        ],
        "raw mean diurnal range": [
            10
        ],
        "raw mean moisture index coldest quarter": [
            0
        ],
        "raw mean moisture index highest quarter MI": [
            0.6666666667
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0
        ],
        "raw mean temp coldest quarter": [
            9.5
        ],
        "raw mean temp driest quater": [
            18.1666666667
        ],
        "raw mean temp warmer quarter": [
            18.5
        ],
        "raw mean temp wettest quarter": [
            9.6666666667
        ],
        "raw min temp coldest period": [
            5
        ],
        "raw moisture index seasonality": [
            61.3333333333
        ],
        "raw precipitation coldets quarter": [
            267.8333333333
        ],
        "raw precipitation driest period": [
            0
        ],
        "raw precipitation driest quarter": [
            84.1666666667
        ],
        "raw precipitation seasonality": [
            46
        ],
        "raw precipitation warmest quarter": [
            85.6666666667
        ],
        "raw precipitation wettest period": [
            24.5
        ],
        "raw precipitation wettest quarter": [
            272.8333333333
        ],
        "raw radiation coldest quarter": [
            8.3333333333
        ],
        "raw radiation driest quarter": [
            24
        ],
        "raw radiation seasonality": [
            43.6666666667
        ],
        "raw radiation warmest quarter": [
            23.6666666667
        ],
        "raw radiation wettest quarter": [
            7.8333333333
        ],
        "raw relief": [
            29.6666666667
        ],
        "raw ridgetopflat": [
            0
        ],
        "raw rockalklty": [
            4.3333333333
        ],
        "raw rockgrainsz": [
            4.3333333333
        ],
        "raw rockhardness": [
            2.1666666667
        ],
        "raw rocknutrnt": [
            2.1666666667
        ],
        "raw roughness": [
            21.6666666667
        ],
        "raw sapk 1 1000 g sand": [
            81666.6666666667
        ],
        "raw slope": [
            1.5
        ],
        "raw soildepth": [
            0.6666666667
        ],
        "raw solpawhc": [
            124.8333333333
        ],
        "raw temperature annual range": [
            20.1666666667
        ],
        "raw temperature seasonality": [
            1
        ],
        "raw thpk 1 1000 g thickness": [
            597.3333333333
        ],
        "raw twi": [
            8.8333333333
        ],
        "raw valleybottom": [
            6.1666666667
        ]
    },
    "quotes_and_other_html_special_characters": {
        "modelled annual mean moisture index": [
            0.7600000054
        ],
        "modelled annual mean rad": [
            17.4749999046
        ],
        "modelled annual mean temp": [
            17.6499996185
        ],
        "modelled annual precipitation": [
            1174
        ],
        "modelled clpk 1 1000 g clay": [
            36312.5
        ],
        "modelled erosional": [
            75
        ],
        "modelled highest period moisture index": [
            0.962500006
        ],
        "modelled highest period radiation": [
            24.5249996185
        ],
        "modelled hydraulic conductivity ksat": [
            200
        ],
        "modelled isothermality": [
            0.5150000006
        ],
        "modelled lowest period moisture index": [
            0.400000006
        ],
        "modelled lowest period radiation": [
            10.2999997139
        ],
        "modelled max temp warmest period": [
            28.25
        ],
        "modelled mean diurnal range": [
            11.6499998569
        ],
        "modelled mean moisture index coldest quarter": [
            0.9274999946
        ],
        "modelled mean moisture index highest quarter MI": [
            0.9399999976
        ],
        "modelled mean moisture index lowest quater MI": [
            0.4825000018
        ],
        "modelled mean moisture index warmest quarter": [
            0.6875
        ],
        "modelled mean temp coldest quarter": [
            12.5
        ],
        "modelled mean temp driest quater": [
            13.875
        ],
        "modelled mean temp warmer quarter": [
            22.2500004768
        ],
        "modelled mean temp wettest quarter": [
            21.8999996185
        ],
        "modelled min temp coldest period": [
            5.5750000477
        ],
        "modelled moisture index seasonality": [
            25.25
        ],
        "modelled phos": [
            0.0735000009
        ],
        "modelled precipitation coldets quarter": [
            186.5
        ],
        "modelled precipitation driest period": [
            5.75
        ],
        "modelled precipitation driest quarter": [
            144.5
        ],
        "modelled precipitation seasonality": [
            45.5
        ],
        "modelled precipitation warmest quarter": [
            452
        ],
        "modelled precipitation wettest period": [
            45.75
        ],
        "modelled precipitation wettest quarter": [
            509.5
        ],
        "modelled radiation coldest quarter": [
            12.1000001431
        ],
        "modelled radiation driest quarter": [
            15.5250000954
        ],
        "modelled radiation seasonality": [
            27.5
        ],
        "modelled radiation warmest quarter": [
            21.7000002861
        ],
        "modelled radiation wettest quarter": [
            19.7750000954
        ],
        "modelled relief": [
            77.4553109407
        ],
        "modelled ridgetopflat": [
            0
        ],
        "modelled rockalklty": [
            4.75
        ],
        "modelled rockgrainsz": [
            3
        ],
        "modelled rockhardness": [
            4.5
        ],
        "modelled rocknutrnt": [
            4.75
        ],
        "modelled roughness": [
            16.6225522161
        ],
        "modelled sapk 1 1000 g sand": [
            43625
        ],
        "modelled slope": [
            4.8600849956
        ],
        "modelled soildepth": [
            1.1749999821
        ],
        "modelled solpawhc": [
            159.5
        ],
        "modelled temperature annual range": [
            22.6749997139
        ],
        "modelled temperature seasonality": [
            1.3325000107
        ],
        "modelled thpk 1 1000 g thickness": [
            219
        ],
        "modelled twi": [
            10.4112542868
        ],
        "modelled valleybottom": [
            28.125
        ],
        "modelled whpk 1 1000 g water cap": [
            35500
        ],
        "raw annual mean moisture index": [
            0
        ],
        "raw annual mean rad": [
            17.4
        ],
        "raw annual mean temp": [
            17.4
        ],
        "raw annual precipitation": [
            1239.4
        ],
        "raw clpk 1 1000 g clay": [
            37300
        ],
        "raw erosional": [
            90
        ],
        "raw highest period moisture index": [
            0.6
        ],
        "raw highest period radiation": [
            24.2
        ],
        "raw hydraulic conductivity ksat": [
            220
        ],
        "raw lowest period moisture index": [
            0
        ],
        "raw lowest period radiation": [
            10.6
        ],
        "raw max temp warmest period": [
            28
        ],
        "raw mean diurnal range": [
            11
        ],
        "raw mean moisture index coldest quarter": [
            0
        ],
        "raw mean moisture index highest quarter MI": [
            0.6
        ],
        "raw mean moisture index lowest quater MI": [
            0
        ],
        "raw mean moisture index warmest quarter": [
            0
        ],
        "raw mean temp coldest quarter": [
            12.8
        ],
        "raw mean temp driest quater": [
            14.2
        ],
        "raw mean temp warmer quarter": [
            22
        ],
        "raw mean temp wettest quarter": [
            21.6
        ],
        "raw min temp coldest period": [
            5.8
        ],
        "raw moisture index seasonality": [
            26.6
        ],
        "raw precipitation coldets quarter": [
            177.4
        ],
        "raw precipitation driest period": [
            4.6
        ],
        "raw precipitation driest quarter": [
            135.6
        ],
        "raw precipitation seasonality": [
            52.8
        ],
        "raw precipitation warmest quarter": [
            497.4
        ],
        "raw precipitation wettest period": [
            52.4
        ],
        "raw precipitation wettest quarter": [
            579.6
        ],
        "raw radiation coldest quarter": [
            12.2
        ],
        "raw radiation driest quarter": [
            15.8
        ],
        "raw radiation seasonality": [
            25.8
        ],
        "raw radiation warmest quarter": [
            21.2
        ],
        "raw radiation wettest quarter": [
            19.2
        ],
        "raw relief": [
            81.6
        ],
        "raw ridgetopflat": [
            0
        ],
        "raw rockalklty": [
            4.6
        ],
        "raw rockgrainsz": [
            3
        ],
        "raw rockhardness": [
            4.8
        ],
        "raw rocknutrnt": [
            5
        ],
        "raw roughness": [
            15.4
        ],
        "raw sapk 1 1000 g sand": [
            42950
        ],
        "raw slope": [
            4.6
        ],
        "raw soildepth": [
            0.8
        ],
        "raw solpawhc": [
            160.8
        ],
        "raw temperature annual range": [
            21.6
        ],
        "raw temperature seasonality": [
            1
        ],
        "raw thpk 1 1000 g thickness": [
            227.8
        ],
        "raw twi": [
            10.4
        ],
        "raw valleybottom": [
            13.6
        ]
    }
} 

        }); 
    } 


// SimpleTemplate_webApp.html
document.body.onload = init;

 




