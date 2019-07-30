var canvas;
var bgcolor;
var slider;
var P;
var img;

var ellipsearray = [];

function setup() {
    canvas = createCanvas(3000, 820);
    bgcolor = color(34, 139, 34);
	imageMode(CENTER);
	img = loadImage("Images/.png");
	P = createP("This is the climate change data logged from a tree ring from Regents Park. Regents Park is currently classified as an illegal green space due to the nitrogen oxide levels being more than double the legal limit for safe air set by the European Union. Scroll right to read more.")
    P.position(20, 30)
	P = createP("Nitrogen Oxide is a greenhouse gas that contributes to climate change. The Regents Park area including Marylebourne Road has the highest reading for air pollution in London.")
	P.position(2300, 30)
	P = createP("This is an investigation into looking at climate data recorded and stored within tree rings. This will consider whether there is a correlation between the high levels of nitrogen oxide in the area and whether the effects of this can be seen in organic living data such as a tree ring.")
	P.position(2300, 150)
	P = createP("Regents Park Nitrogen Oxide Reading : 92.5")
	P.position(2300, 400)
	P = createP("European Legal Limit for Safe Air Pollution : 40")
	P.position(2300, 700)
	

    
    
    
    
    
   slider = createSlider(10, 1000, 1000);
    slider.position(65, 180)
    slider.style('width', '130px');
	
	slider = createSlider(10, 1000, 1000);
    slider.position(2300, 180)
    slider.style('width', '130px');
	
	
   
}
    
        function changeColor() {
        bgcolor = color(200(34, 139, 34));
    }

function draw() {
    clear();
background(bgcolor);
	//nofill();
	image(img, 700, 450,slider.value(),slider.value());
	
		//fill(255,255,255,50);
	if(ellipsearray.length>=100){
	ellipsearray.shift;}
	append(ellipsearray,slider.value());
	if(ellipsearray.length>=15000){}
	for (i=0;i<ellipsearray.length;i++){
		ellipse(1700, height/2, ellipsearray[i],ellipsearray[i]);}
	
   fill(255, 255, 255);
    ellipse(1700, height/2, slider.value(),slider.value());
	
    ellipseMode(CENTER);
    ellipse(1700, height/2, 5, 5);
    
   
    
  
    
    
   
    
    console.log(frameCount);
}



