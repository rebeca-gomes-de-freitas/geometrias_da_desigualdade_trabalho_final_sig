var size = 0;
var placement = 'point';

var style_Tempo1HoraVermelho_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Tabela_10330_Processada_Pct_Mais_de_1hora");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 4.650000 && value <= 7.220000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(230,118,112,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 7.220000 && value <= 11.030000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(228,89,86,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 11.030000 && value <= 15.230000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(227,61,60,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 15.230000 && value <= 21.520000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(225,33,34,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 21.520000 && value <= 29.300000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(224,5,8,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
