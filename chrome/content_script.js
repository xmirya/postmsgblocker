var script = document.createElement("script");
script.setAttribute('type', 'text/javascript')
script.appendChild(document.createTextNode('window.postMessage=function(){};'));
document.documentElement.appendChild(script);
