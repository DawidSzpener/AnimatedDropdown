# ANIMATED DROPDOWN

## DEMO 

![demo](https://github.com/DawidSzpener/AnimatedDropdown/blob/main/src/assets/images/demo.gif)

## INSTALLATION 

- clone this repo
- extract ```AnimatedDropdown``` folder to your projects directory
- import ```AnimatedDropdown``` file wherever you want to use it ```import AnimatedDropdown from '*path'```
- you need to have sass installed as one of your projects dependency ```npm install sass```
- if using webpack make sure your loader can preprocess scss files

## USAGE

#### MANDATORY PROPS:
- ```list``` this prop takes an array of objects eg.```[{value: 'first item', id: 1}, ...]```
- ```shape='rectangle'``` or ```shape='circle'``` self explanatory

#### Usable props change depending on ```shape``` prop

If ```shape='circle'``` :
- ```picture``` this prop takes path to your image
![demo](https://github.com/DawidSzpener/AnimatedDropdown/blob/main/src/assets/images/circle.png)

If ```shape='rectangle'```:
- ```headerPosition="right"``` default is left, if shape === ```circle``` this does nothing
- ```title="MENU"``` text displayed in the header
![demo](https://github.com/DawidSzpener/AnimatedDropdown/blob/main/src/assets/images/rectangle.png)

- theme ```black``` is default, ```red```, ```green```, ```blue```
![demo]()
![demo]()
![demo]()
![demo]()
