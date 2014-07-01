# Grabbed from Aaron, here:
# http://glorious-symbols.blogspot.com/2012/01/customized-boxplots-with-matplotlib.html

# Modified a bit to plot outliers, and to not use scipy. (Matt Elder: elder@cs.wisc.edu)

from matplotlib.mlab import prctile

class boxplotter(object):
    def __init__(self, median, top, bottom, whisk_top=None, 
                 whisk_bottom=None):
        self.median = median
        self.top = top
        self.bott = bottom
        self.whisk_top = whisk_top
        self.whisk_bott = whisk_bottom

    def draw_on(self, ax, index, box_color = "blue", 
                median_color = "red", whisker_color = "black", data=None):
        width = .7
        w2 = width / 2
        center = index - width/4.0
        
        ax.broken_barh([(index - w2, width)],
                       (self.bott,self.top - self.bott), 
                       facecolor="white",edgecolor=box_color)
        ax.broken_barh([(index - w2, width)],
                       (self.median,0), 
                       facecolor="white", edgecolor=median_color)
        if self.whisk_top is not None:
            ax.broken_barh([(index - w2, width)],
                           (self.whisk_top,0), 
                           facecolor="white", edgecolor=whisker_color)
            ax.broken_barh([(index , 0)], 
                           (self.whisk_top, self.top-self.whisk_top),
                           edgecolor=box_color,linestyle="dashed")
        if self.whisk_bott is not None:
            ax.broken_barh([(index - w2, width)],
                           (self.whisk_bott,0), 
                           facecolor="white", edgecolor=whisker_color)
            ax.broken_barh([(index , 0)], 
                           (self.whisk_bott,self.bott-self.whisk_bott),
                           edgecolor=box_color,linestyle="dashed")

        if data != None:
            # plot outliers
            outliers = [y for y in data if y < self.whisk_bott or y > self.whisk_top]
            x = [index]*len(outliers)
            ax.scatter(x, outliers, marker='+' )
            
def percentile_box_plot(ax, data, indexer=None, box_top=75, 
                        box_bottom=25,whisker_top=98,whisker_bottom=2):
    if indexer is None:
        indexed_data = zip(range(1,len(data)+1), data)
    else:
        indexed_data = [(indexer(datum), datum) for datum in data]

    for index, x in indexed_data:
        if whisker_top != None and whisker_bottom != None:
            bp = boxplotter(*(prctile(x,(50,box_top,box_bottom,whisker_top,whisker_bottom))))
            bp.draw_on(ax, index, data=x)

        elif whisker_top == None and whisker_bottom == None:
            bp = boxplotter(*(prctile(x,(50,box_top,box_bottom))))
            bp.draw_on(ax, index)
        else:
            raise Exception("Just one whisker? That's silly.")
        
        
