var size = 0;
var placement = 'point';
function categories_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Ponte (Conexão)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,176,42,0.766)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.699999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rio (Barreira)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(55,145,237,0.766)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.56}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rodovia Expressa (Barreira)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(103,102,120,0.766)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Via Rápida (Barreira)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(103,102,120,0.766)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(121,95,208,0.766)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("tipo_barreira");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
