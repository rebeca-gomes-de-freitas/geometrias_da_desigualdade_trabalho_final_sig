var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_ConcentraodePessoas_1 = new ol.format.GeoJSON();
var features_ConcentraodePessoas_1 = format_ConcentraodePessoas_1.readFeatures(json_ConcentraodePessoas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConcentraodePessoas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConcentraodePessoas_1.addFeatures(features_ConcentraodePessoas_1);
var lyr_ConcentraodePessoas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConcentraodePessoas_1, 
                style: style_ConcentraodePessoas_1,
                popuplayertitle: 'Concentração de Pessoas',
                interactive: true,
    title: 'Concentração de Pessoas<br />\
    <img src="styles/legend/ConcentraodePessoas_1_0.png" /> 1 % - 2 %<br />\
    <img src="styles/legend/ConcentraodePessoas_1_1.png" /> 1 % - 2 %<br />\
    <img src="styles/legend/ConcentraodePessoas_1_2.png" /> 1 % - 2 %<br />\
    <img src="styles/legend/ConcentraodePessoas_1_3.png" /> 1 % - 2 %<br />\
    <img src="styles/legend/ConcentraodePessoas_1_4.png" /> 1 % - 2 %<br />' });
var format_Tempo30MinVerde_2 = new ol.format.GeoJSON();
var features_Tempo30MinVerde_2 = format_Tempo30MinVerde_2.readFeatures(json_Tempo30MinVerde_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempo30MinVerde_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempo30MinVerde_2.addFeatures(features_Tempo30MinVerde_2);
var lyr_Tempo30MinVerde_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempo30MinVerde_2, 
                style: style_Tempo30MinVerde_2,
                popuplayertitle: 'Tempo < 30 Min (Verde)',
                interactive: true,
    title: 'Tempo < 30 Min (Verde)<br />\
    <img src="styles/legend/Tempo30MinVerde_2_0.png" /> 37,8 - 40<br />\
    <img src="styles/legend/Tempo30MinVerde_2_1.png" /> 40 - 49,9<br />\
    <img src="styles/legend/Tempo30MinVerde_2_2.png" /> 49,9 - 62<br />\
    <img src="styles/legend/Tempo30MinVerde_2_3.png" /> 62 - 72,8<br />\
    <img src="styles/legend/Tempo30MinVerde_2_4.png" /> 72,8 - 82<br />' });
var format_Tempo30min1HoraAmarelo_3 = new ol.format.GeoJSON();
var features_Tempo30min1HoraAmarelo_3 = format_Tempo30min1HoraAmarelo_3.readFeatures(json_Tempo30min1HoraAmarelo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempo30min1HoraAmarelo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempo30min1HoraAmarelo_3.addFeatures(features_Tempo30min1HoraAmarelo_3);
var lyr_Tempo30min1HoraAmarelo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempo30min1HoraAmarelo_3, 
                style: style_Tempo30min1HoraAmarelo_3,
                popuplayertitle: 'Tempo 30min - 1 Hora (Amarelo)',
                interactive: true,
    title: 'Tempo 30min - 1 Hora (Amarelo)<br />\
    <img src="styles/legend/Tempo30min1HoraAmarelo_3_0.png" /> 13,4 - 16,1<br />\
    <img src="styles/legend/Tempo30min1HoraAmarelo_3_1.png" /> 16,1 - 23,5<br />\
    <img src="styles/legend/Tempo30min1HoraAmarelo_3_2.png" /> 23,5 - 27,6<br />\
    <img src="styles/legend/Tempo30min1HoraAmarelo_3_3.png" /> 27,6 - 31<br />\
    <img src="styles/legend/Tempo30min1HoraAmarelo_3_4.png" /> 31 - 34,9<br />' });
var format_Tempo1HoraVermelho_4 = new ol.format.GeoJSON();
var features_Tempo1HoraVermelho_4 = format_Tempo1HoraVermelho_4.readFeatures(json_Tempo1HoraVermelho_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempo1HoraVermelho_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempo1HoraVermelho_4.addFeatures(features_Tempo1HoraVermelho_4);
var lyr_Tempo1HoraVermelho_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempo1HoraVermelho_4, 
                style: style_Tempo1HoraVermelho_4,
                popuplayertitle: 'Tempo > 1 Hora (Vermelho)',
                interactive: true,
    title: 'Tempo > 1 Hora (Vermelho)<br />\
    <img src="styles/legend/Tempo1HoraVermelho_4_0.png" /> 4,7 - 7,2<br />\
    <img src="styles/legend/Tempo1HoraVermelho_4_1.png" /> 7,2 - 11<br />\
    <img src="styles/legend/Tempo1HoraVermelho_4_2.png" /> 11 - 15,2<br />\
    <img src="styles/legend/Tempo1HoraVermelho_4_3.png" /> 15,2 - 21,5<br />\
    <img src="styles/legend/Tempo1HoraVermelho_4_4.png" /> 21,5 - 29,3<br />' });
var format_TransportePbliconibus_5 = new ol.format.GeoJSON();
var features_TransportePbliconibus_5 = format_TransportePbliconibus_5.readFeatures(json_TransportePbliconibus_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransportePbliconibus_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransportePbliconibus_5.addFeatures(features_TransportePbliconibus_5);
var lyr_TransportePbliconibus_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransportePbliconibus_5, 
                style: style_TransportePbliconibus_5,
                popuplayertitle: 'Transporte Público (Ônibus)',
                interactive: true,
    title: 'Transporte Público (Ônibus)<br />\
    <img src="styles/legend/TransportePbliconibus_5_0.png" /> 7,4 - 11<br />\
    <img src="styles/legend/TransportePbliconibus_5_1.png" /> 11 - 20,9<br />\
    <img src="styles/legend/TransportePbliconibus_5_2.png" /> 20,9 - 33,3<br />\
    <img src="styles/legend/TransportePbliconibus_5_3.png" /> 33,3 - 40,7<br />\
    <img src="styles/legend/TransportePbliconibus_5_4.png" /> 40,7 - 52,2<br />' });
var format_TransportePrivadoCarro_6 = new ol.format.GeoJSON();
var features_TransportePrivadoCarro_6 = format_TransportePrivadoCarro_6.readFeatures(json_TransportePrivadoCarro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransportePrivadoCarro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransportePrivadoCarro_6.addFeatures(features_TransportePrivadoCarro_6);
var lyr_TransportePrivadoCarro_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransportePrivadoCarro_6, 
                style: style_TransportePrivadoCarro_6,
                popuplayertitle: 'Transporte Privado (Carro)',
                interactive: true,
    title: 'Transporte Privado (Carro)<br />\
    <img src="styles/legend/TransportePrivadoCarro_6_0.png" /> 31,3 - 37,1<br />\
    <img src="styles/legend/TransportePrivadoCarro_6_1.png" /> 37,1 - 45,9<br />\
    <img src="styles/legend/TransportePrivadoCarro_6_2.png" /> 45,9 - 51,6<br />\
    <img src="styles/legend/TransportePrivadoCarro_6_3.png" /> 51,6 - 61<br />\
    <img src="styles/legend/TransportePrivadoCarro_6_4.png" /> 61 - 72<br />' });
var format_TransporteAtivoBicicleta_7 = new ol.format.GeoJSON();
var features_TransporteAtivoBicicleta_7 = format_TransporteAtivoBicicleta_7.readFeatures(json_TransporteAtivoBicicleta_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransporteAtivoBicicleta_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransporteAtivoBicicleta_7.addFeatures(features_TransporteAtivoBicicleta_7);
var lyr_TransporteAtivoBicicleta_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransporteAtivoBicicleta_7, 
                style: style_TransporteAtivoBicicleta_7,
                popuplayertitle: 'Transporte Ativo (Bicicleta)',
                interactive: true,
    title: 'Transporte Ativo (Bicicleta)<br />\
    <img src="styles/legend/TransporteAtivoBicicleta_7_0.png" /> 10,9 - 12,4<br />\
    <img src="styles/legend/TransporteAtivoBicicleta_7_1.png" /> 12,4 - 15,1<br />\
    <img src="styles/legend/TransporteAtivoBicicleta_7_2.png" /> 15,1 - 18,3<br />\
    <img src="styles/legend/TransporteAtivoBicicleta_7_3.png" /> 18,3 - 22,1<br />\
    <img src="styles/legend/TransporteAtivoBicicleta_7_4.png" /> 22,1 - 26,4<br />' });
var format_TransporteAtivotransporteativo_8 = new ol.format.GeoJSON();
var features_TransporteAtivotransporteativo_8 = format_TransporteAtivotransporteativo_8.readFeatures(json_TransporteAtivotransporteativo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransporteAtivotransporteativo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransporteAtivotransporteativo_8.addFeatures(features_TransporteAtivotransporteativo_8);
var lyr_TransporteAtivotransporteativo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransporteAtivotransporteativo_8, 
                style: style_TransporteAtivotransporteativo_8,
                popuplayertitle: 'TransporteAtivo — transporteativo',
                interactive: true,
    title: 'TransporteAtivo — transporteativo<br />\
    <img src="styles/legend/TransporteAtivotransporteativo_8_0.png" /> 10,9 - 12,4<br />\
    <img src="styles/legend/TransporteAtivotransporteativo_8_1.png" /> 12,4 - 15,1<br />\
    <img src="styles/legend/TransporteAtivotransporteativo_8_2.png" /> 15,1 - 18,3<br />\
    <img src="styles/legend/TransporteAtivotransporteativo_8_3.png" /> 18,3 - 22,1<br />\
    <img src="styles/legend/TransporteAtivotransporteativo_8_4.png" /> 22,1 - 26,4<br />' });
var format_Perc_Ate30minperc_ate30min_9 = new ol.format.GeoJSON();
var features_Perc_Ate30minperc_ate30min_9 = format_Perc_Ate30minperc_ate30min_9.readFeatures(json_Perc_Ate30minperc_ate30min_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perc_Ate30minperc_ate30min_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perc_Ate30minperc_ate30min_9.addFeatures(features_Perc_Ate30minperc_ate30min_9);
var lyr_Perc_Ate30minperc_ate30min_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perc_Ate30minperc_ate30min_9, 
                style: style_Perc_Ate30minperc_ate30min_9,
                popuplayertitle: 'Perc_Ate30min — perc_ate30min',
                interactive: true,
    title: 'Perc_Ate30min — perc_ate30min<br />\
    <img src="styles/legend/Perc_Ate30minperc_ate30min_9_0.png" /> 37,8 - 40<br />\
    <img src="styles/legend/Perc_Ate30minperc_ate30min_9_1.png" /> 40 - 49,9<br />\
    <img src="styles/legend/Perc_Ate30minperc_ate30min_9_2.png" /> 49,9 - 62<br />\
    <img src="styles/legend/Perc_Ate30minperc_ate30min_9_3.png" /> 62 - 72,8<br />\
    <img src="styles/legend/Perc_Ate30minperc_ate30min_9_4.png" /> 72,8 - 82<br />' });
var format_mapa_ciclovia_por_toda_cidade_10 = new ol.format.GeoJSON();
var features_mapa_ciclovia_por_toda_cidade_10 = format_mapa_ciclovia_por_toda_cidade_10.readFeatures(json_mapa_ciclovia_por_toda_cidade_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapa_ciclovia_por_toda_cidade_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapa_ciclovia_por_toda_cidade_10.addFeatures(features_mapa_ciclovia_por_toda_cidade_10);
var lyr_mapa_ciclovia_por_toda_cidade_10 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_mapa_ciclovia_por_toda_cidade_10, 
                radius: 0 * 2,
                gradient: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
                blur: 15,
                shadow: 250,
                title: 'mapa_ciclovia_por_toda_cidade'
            });
var format_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11 = new ol.format.GeoJSON();
var features_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11 = format_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11.readFeatures(json_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11.addFeatures(features_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11);
var lyr_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11, 
                style: style_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11,
                popuplayertitle: 'barreiras_PortoVelho — barreiras_portovelho__barreiras_portovelho',
                interactive: true,
    title: 'barreiras_PortoVelho — barreiras_portovelho__barreiras_portovelho<br />\
    <img src="styles/legend/barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11_0.png" /> Ponte (Conexão)<br />\
    <img src="styles/legend/barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11_1.png" /> Rio (Barreira)<br />\
    <img src="styles/legend/barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11_2.png" /> Rodovia Expressa (Barreira)<br />\
    <img src="styles/legend/barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11_3.png" /> Via Rápida (Barreira)<br />\
    <img src="styles/legend/barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11_4.png" /> <br />' });
var format_mapa_PortoVelhomapa_portovelho_12 = new ol.format.GeoJSON();
var features_mapa_PortoVelhomapa_portovelho_12 = format_mapa_PortoVelhomapa_portovelho_12.readFeatures(json_mapa_PortoVelhomapa_portovelho_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapa_PortoVelhomapa_portovelho_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapa_PortoVelhomapa_portovelho_12.addFeatures(features_mapa_PortoVelhomapa_portovelho_12);
var lyr_mapa_PortoVelhomapa_portovelho_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapa_PortoVelhomapa_portovelho_12, 
                style: style_mapa_PortoVelhomapa_portovelho_12,
                popuplayertitle: 'mapa_PortoVelho — mapa_portovelho',
                interactive: true,
                title: '<img src="styles/legend/mapa_PortoVelhomapa_portovelho_12.png" /> mapa_PortoVelho — mapa_portovelho'
            });
var format_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13 = new ol.format.GeoJSON();
var features_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13 = format_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13.readFeatures(json_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13.addFeatures(features_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13);
var lyr_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13, 
                style: style_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13,
                popuplayertitle: 'alcance_carro_PV — alcance_carro_pv__alcance_carro_pv',
                interactive: true,
                title: '<img src="styles/legend/alcance_carro_PValcance_carro_pv__alcance_carro_pv_13.png" /> alcance_carro_PV — alcance_carro_pv__alcance_carro_pv'
            });
var format_locais_trabalho_PortoVelholocais_trabalho_portovelho__locais_trabalho_portovelho_14 = new ol.format.GeoJSON();
var features_locais_trabalho_PortoVelholocais_trabalho_portovelho__locais_trabalho_portovelho_14 = format_locais_trabalho_PortoVelholocais_trabalho_portovelho__locais_trabalho_portovelho_14.readFeatures(json_locais_trabalho_PortoVelholocais_trabalho_portovelho__locais_trabalho_portovelho_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_locais_trabalho_PortoVelholocais_trabalho_portovelho__locais_trabalho_portovelho_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_locais_trabalho_PortoVelholocais_trabalho_portovelho__locais_trabalho_portovelho_14.addFeatures(features_locais_trabalho_PortoVelholocais_trabalho_portovelho__locais_trabalho_portovelho_14);
var lyr_locais_trabalho_PortoVelholocais_trabalho_portovelho__locais_trabalho_portovelho_14 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_locais_trabalho_PortoVelholocais_trabalho_portovelho__locais_trabalho_portovelho_14, 
                radius: 10 * 2,
                gradient: ['#fcfdbf', '#fcf4b6', '#fdebac', '#fde2a3', '#fed89a', '#fecf92', '#fec68a', '#febd82', '#feb47b', '#feaa74', '#fea16e', '#fd9869', '#fc8e64', '#fb8560', '#f97b5d', '#f7725c', '#f4695c', '#f1605d', '#ec5860', '#e75263', '#e04c67', '#d9466b', '#d2426f', '#ca3e72', '#c23b75', '#ba3878', '#b2357b', '#aa337d', '#a1307e', '#992d80', '#912b81', '#892881', '#812581', '#792282', '#721f81', '#6a1c81', '#621980', '#5a167e', '#52137c', '#4a1079', '#420f75', '#390f6e', '#311165', '#29115a', '#21114e', '#1a1042', '#140e36', '#0e0b2b', '#090720', '#050416', '#02020b', '#000004'],
                blur: 15,
                shadow: 250,
                title: 'locais_trabalho_PortoVelho — locais_trabalho_portovelho__locais_trabalho_portovelho'
            });
var format_locais_moradia_PortoVelholocais_moradia_portovelho__locais_moradia_portovelho_15 = new ol.format.GeoJSON();
var features_locais_moradia_PortoVelholocais_moradia_portovelho__locais_moradia_portovelho_15 = format_locais_moradia_PortoVelholocais_moradia_portovelho__locais_moradia_portovelho_15.readFeatures(json_locais_moradia_PortoVelholocais_moradia_portovelho__locais_moradia_portovelho_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_locais_moradia_PortoVelholocais_moradia_portovelho__locais_moradia_portovelho_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_locais_moradia_PortoVelholocais_moradia_portovelho__locais_moradia_portovelho_15.addFeatures(features_locais_moradia_PortoVelholocais_moradia_portovelho__locais_moradia_portovelho_15);
var lyr_locais_moradia_PortoVelholocais_moradia_portovelho__locais_moradia_portovelho_15 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_locais_moradia_PortoVelholocais_moradia_portovelho__locais_moradia_portovelho_15, 
                radius: 10 * 2,
                gradient: ['#fffff0', '#ffffe1', '#ffffb6', '#ffff96', '#ffff7c', '#ffff64', '#ffff3f', '#ffff19', '#ffdb00'],
                blur: 15,
                shadow: 250,
                title: 'locais_moradia_PortoVelho — locais_moradia_portovelho__locais_moradia_portovelho'
            });
var format_alcance_bicicleta_PValcance_bicicleta_pv_16 = new ol.format.GeoJSON();
var features_alcance_bicicleta_PValcance_bicicleta_pv_16 = format_alcance_bicicleta_PValcance_bicicleta_pv_16.readFeatures(json_alcance_bicicleta_PValcance_bicicleta_pv_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alcance_bicicleta_PValcance_bicicleta_pv_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alcance_bicicleta_PValcance_bicicleta_pv_16.addFeatures(features_alcance_bicicleta_PValcance_bicicleta_pv_16);
var lyr_alcance_bicicleta_PValcance_bicicleta_pv_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alcance_bicicleta_PValcance_bicicleta_pv_16, 
                style: style_alcance_bicicleta_PValcance_bicicleta_pv_16,
                popuplayertitle: 'alcance_bicicleta_PV — alcance_bicicleta_pv',
                interactive: true,
                title: '<img src="styles/legend/alcance_bicicleta_PValcance_bicicleta_pv_16.png" /> alcance_bicicleta_PV — alcance_bicicleta_pv'
            });
var format_diferenca_bicicleta_onibus_17 = new ol.format.GeoJSON();
var features_diferenca_bicicleta_onibus_17 = format_diferenca_bicicleta_onibus_17.readFeatures(json_diferenca_bicicleta_onibus_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_diferenca_bicicleta_onibus_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_diferenca_bicicleta_onibus_17.addFeatures(features_diferenca_bicicleta_onibus_17);
var lyr_diferenca_bicicleta_onibus_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_diferenca_bicicleta_onibus_17, 
                style: style_diferenca_bicicleta_onibus_17,
                popuplayertitle: 'diferenca_bicicleta_onibus',
                interactive: true,
                title: '<img src="styles/legend/diferenca_bicicleta_onibus_17.png" /> diferenca_bicicleta_onibus'
            });
var format_alcance_caminhando_PValcance_caminhando_pv_18 = new ol.format.GeoJSON();
var features_alcance_caminhando_PValcance_caminhando_pv_18 = format_alcance_caminhando_PValcance_caminhando_pv_18.readFeatures(json_alcance_caminhando_PValcance_caminhando_pv_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alcance_caminhando_PValcance_caminhando_pv_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alcance_caminhando_PValcance_caminhando_pv_18.addFeatures(features_alcance_caminhando_PValcance_caminhando_pv_18);
var lyr_alcance_caminhando_PValcance_caminhando_pv_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alcance_caminhando_PValcance_caminhando_pv_18, 
                style: style_alcance_caminhando_PValcance_caminhando_pv_18,
                popuplayertitle: 'alcance_caminhando_PV — alcance_caminhando_pv',
                interactive: true,
                title: '<img src="styles/legend/alcance_caminhando_PValcance_caminhando_pv_18.png" /> alcance_caminhando_PV — alcance_caminhando_pv'
            });
var format_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19 = new ol.format.GeoJSON();
var features_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19 = format_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19.readFeatures(json_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19.addFeatures(features_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19);
var lyr_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19, 
                style: style_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19,
                popuplayertitle: 'alcance_transpPublic_PV — alcance_transppublic_pv__alcance_transppublic_pv',
                interactive: true,
                title: '<img src="styles/legend/alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19.png" /> alcance_transpPublic_PV — alcance_transppublic_pv__alcance_transppublic_pv'
            });
var format_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20 = new ol.format.GeoJSON();
var features_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20 = format_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20.readFeatures(json_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20.addFeatures(features_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20);
var lyr_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20, 
                style: style_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20,
                popuplayertitle: 'paradas_onibus_PV — paradas_onibus_pv__paradas_onibus_pv',
                interactive: true,
                title: '<img src="styles/legend/paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20.png" /> paradas_onibus_PV — paradas_onibus_pv__paradas_onibus_pv'
            });
var format_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21 = new ol.format.GeoJSON();
var features_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21 = format_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21.readFeatures(json_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21.addFeatures(features_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21);
var lyr_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21, 
                style: style_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21,
                popuplayertitle: 'TempoDesloc_Perc_MaisDe1hora — tempodesloc_perc_maisde1hora',
                interactive: true,
    title: 'TempoDesloc_Perc_MaisDe1hora — tempodesloc_perc_maisde1hora<br />\
    <img src="styles/legend/TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21_0.png" /> 4,7 - 7,2<br />\
    <img src="styles/legend/TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21_1.png" /> 7,2 - 11<br />\
    <img src="styles/legend/TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21_2.png" /> 11 - 15,2<br />\
    <img src="styles/legend/TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21_3.png" /> 15,2 - 21,5<br />\
    <img src="styles/legend/TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21_4.png" /> 21,5 - 29,3<br />' });
var format_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22 = new ol.format.GeoJSON();
var features_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22 = format_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22.readFeatures(json_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22.addFeatures(features_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22);
var lyr_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22, 
                style: style_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22,
                popuplayertitle: 'barreiras_SP — barreiras_analise — barreiras_sp__barreiras_analise',
                interactive: true,
    title: 'barreiras_SP — barreiras_analise — barreiras_sp__barreiras_analise<br />\
    <img src="styles/legend/barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22_0.png" /> Ponte (Conexão)<br />\
    <img src="styles/legend/barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22_1.png" /> Rio (Barreira)<br />\
    <img src="styles/legend/barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22_2.png" /> Rodovia Expressa (Barreira)<br />\
    <img src="styles/legend/barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22_3.png" /> Via Rápida (Barreira)<br />\
    <img src="styles/legend/barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22_4.png" /> <br />' });
var format_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23 = new ol.format.GeoJSON();
var features_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23 = format_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23.readFeatures(json_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23.addFeatures(features_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23);
var lyr_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23, 
                style: style_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23,
                popuplayertitle: 'mapaSP — sp_municipios_2024 — mapasp__sp_municipios_2024',
                interactive: true,
                title: '<img src="styles/legend/mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23.png" /> mapaSP — sp_municipios_2024 — mapasp__sp_municipios_2024'
            });
var format_locais_trabalho_SPCapitalcentroidslocais_trabalho_spcapital__centroids_24 = new ol.format.GeoJSON();
var features_locais_trabalho_SPCapitalcentroidslocais_trabalho_spcapital__centroids_24 = format_locais_trabalho_SPCapitalcentroidslocais_trabalho_spcapital__centroids_24.readFeatures(json_locais_trabalho_SPCapitalcentroidslocais_trabalho_spcapital__centroids_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_locais_trabalho_SPCapitalcentroidslocais_trabalho_spcapital__centroids_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_locais_trabalho_SPCapitalcentroidslocais_trabalho_spcapital__centroids_24.addFeatures(features_locais_trabalho_SPCapitalcentroidslocais_trabalho_spcapital__centroids_24);
var lyr_locais_trabalho_SPCapitalcentroidslocais_trabalho_spcapital__centroids_24 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_locais_trabalho_SPCapitalcentroidslocais_trabalho_spcapital__centroids_24, 
                radius: 500 * 2,
                gradient: ['#fcfdbf', '#fcf4b6', '#fdebac', '#fde2a3', '#fed89a', '#fecf92', '#fec68a', '#febd82', '#feb47b', '#feaa74', '#fea16e', '#fd9869', '#fc8e64', '#fb8560', '#f97b5d', '#f7725c', '#f4695c', '#f1605d', '#ec5860', '#e75263', '#e04c67', '#d9466b', '#d2426f', '#ca3e72', '#c23b75', '#ba3878', '#b2357b', '#aa337d', '#a1307e', '#992d80', '#912b81', '#892881', '#812581', '#792282', '#721f81', '#6a1c81', '#621980', '#5a167e', '#52137c', '#4a1079', '#420f75', '#390f6e', '#311165', '#29115a', '#21114e', '#1a1042', '#140e36', '#0e0b2b', '#090720', '#050416', '#02020b', '#000004'],
                blur: 15,
                shadow: 250,
                title: 'locais_trabalho_SPCapital — centroids — locais_trabalho_spcapital__centroids'
            });
var format_locais_moradia_SPlocais_moradia_capitalocais_moradia_sp__locais_moradia_capitais_25 = new ol.format.GeoJSON();
var features_locais_moradia_SPlocais_moradia_capitalocais_moradia_sp__locais_moradia_capitais_25 = format_locais_moradia_SPlocais_moradia_capitalocais_moradia_sp__locais_moradia_capitais_25.readFeatures(json_locais_moradia_SPlocais_moradia_capitalocais_moradia_sp__locais_moradia_capitais_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_locais_moradia_SPlocais_moradia_capitalocais_moradia_sp__locais_moradia_capitais_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_locais_moradia_SPlocais_moradia_capitalocais_moradia_sp__locais_moradia_capitais_25.addFeatures(features_locais_moradia_SPlocais_moradia_capitalocais_moradia_sp__locais_moradia_capitais_25);
var lyr_locais_moradia_SPlocais_moradia_capitalocais_moradia_sp__locais_moradia_capitais_25 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_locais_moradia_SPlocais_moradia_capitalocais_moradia_sp__locais_moradia_capitais_25, 
                radius: 900 * 2,
                gradient: ['#fee977', '#fbba00', '#fbba00'],
                blur: 15,
                shadow: 250,
                title: 'locais_moradia_SP — locais_moradia_capita — locais_moradia_sp__locais_moradia_capitais'
            });
var format_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26 = new ol.format.GeoJSON();
var features_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26 = format_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26.readFeatures(json_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26.addFeatures(features_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26);
var lyr_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26, 
                style: style_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26,
                popuplayertitle: 'alcance_carro_SP — alcance_carro_sp__output — alcance_carro_sp__alcance_carro_sp__output',
                interactive: true,
                title: '<img src="styles/legend/alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26.png" /> alcance_carro_SP — alcance_carro_sp__output — alcance_carro_sp__alcance_carro_sp__output'
            });
var format_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27 = new ol.format.GeoJSON();
var features_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27 = format_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27.readFeatures(json_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27.addFeatures(features_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27);
var lyr_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27, 
                style: style_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27,
                popuplayertitle: 'diferença_carro_onibus_alcanceKm — diferena_carro_onibus_alcancekm__difference',
                interactive: true,
                title: '<img src="styles/legend/diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27.png" /> diferença_carro_onibus_alcanceKm — diferena_carro_onibus_alcancekm__difference'
            });
var format_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28 = new ol.format.GeoJSON();
var features_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28 = format_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28.readFeatures(json_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28.addFeatures(features_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28);
var lyr_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28, 
                style: style_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28,
                popuplayertitle: 'alcance_transportePublico_SP — output — alcance_transportepublico_sp__output',
                interactive: true,
                title: '<img src="styles/legend/alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28.png" /> alcance_transportePublico_SP — output — alcance_transportepublico_sp__output'
            });
var format_paradas_transp_SPparadastransportepublicoparadas_transp_sp__paradastransportepubliccapitais__infraestrutura_paradas_29 = new ol.format.GeoJSON();
var features_paradas_transp_SPparadastransportepublicoparadas_transp_sp__paradastransportepubliccapitais__infraestrutura_paradas_29 = format_paradas_transp_SPparadastransportepublicoparadas_transp_sp__paradastransportepubliccapitais__infraestrutura_paradas_29.readFeatures(json_paradas_transp_SPparadastransportepublicoparadas_transp_sp__paradastransportepubliccapitais__infraestrutura_paradas_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paradas_transp_SPparadastransportepublicoparadas_transp_sp__paradastransportepubliccapitais__infraestrutura_paradas_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paradas_transp_SPparadastransportepublicoparadas_transp_sp__paradastransportepubliccapitais__infraestrutura_paradas_29.addFeatures(features_paradas_transp_SPparadastransportepublicoparadas_transp_sp__paradastransportepubliccapitais__infraestrutura_paradas_29);
var lyr_paradas_transp_SPparadastransportepublicoparadas_transp_sp__paradastransportepubliccapitais__infraestrutura_paradas_29 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_paradas_transp_SPparadastransportepublicoparadas_transp_sp__paradastransportepubliccapitais__infraestrutura_paradas_29, 
                radius: 1000 * 2,
                gradient: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
                blur: 15,
                shadow: 250,
                title: 'paradas_transp_SP — paradastransportepublico — paradas_transp_sp__paradastransportepubliccapitais__infraestrutura_paradas'
            });
var format_PrincipalTransportePublicoprincipaltransportepublico_copy_30 = new ol.format.GeoJSON();
var features_PrincipalTransportePublicoprincipaltransportepublico_copy_30 = format_PrincipalTransportePublicoprincipaltransportepublico_copy_30.readFeatures(json_PrincipalTransportePublicoprincipaltransportepublico_copy_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrincipalTransportePublicoprincipaltransportepublico_copy_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrincipalTransportePublicoprincipaltransportepublico_copy_30.addFeatures(features_PrincipalTransportePublicoprincipaltransportepublico_copy_30);
var lyr_PrincipalTransportePublicoprincipaltransportepublico_copy_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrincipalTransportePublicoprincipaltransportepublico_copy_30, 
                style: style_PrincipalTransportePublicoprincipaltransportepublico_copy_30,
                popuplayertitle: 'PrincipalTransportePublico — principaltransportepublico_copy',
                interactive: true,
    title: 'PrincipalTransportePublico — principaltransportepublico_copy<br />\
    <img src="styles/legend/PrincipalTransportePublicoprincipaltransportepublico_copy_30_0.png" /> 7,4 - 11<br />\
    <img src="styles/legend/PrincipalTransportePublicoprincipaltransportepublico_copy_30_1.png" /> 11 - 20,9<br />\
    <img src="styles/legend/PrincipalTransportePublicoprincipaltransportepublico_copy_30_2.png" /> 20,9 - 33,3<br />\
    <img src="styles/legend/PrincipalTransportePublicoprincipaltransportepublico_copy_30_3.png" /> 33,3 - 40,7<br />\
    <img src="styles/legend/PrincipalTransportePublicoprincipaltransportepublico_copy_30_4.png" /> 40,7 - 52,2<br />' });
var format_PrincipalCarroRBprincipalcarro_31 = new ol.format.GeoJSON();
var features_PrincipalCarroRBprincipalcarro_31 = format_PrincipalCarroRBprincipalcarro_31.readFeatures(json_PrincipalCarroRBprincipalcarro_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrincipalCarroRBprincipalcarro_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrincipalCarroRBprincipalcarro_31.addFeatures(features_PrincipalCarroRBprincipalcarro_31);
var lyr_PrincipalCarroRBprincipalcarro_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrincipalCarroRBprincipalcarro_31, 
                style: style_PrincipalCarroRBprincipalcarro_31,
                popuplayertitle: 'PrincipalCarroRB — principalcarro',
                interactive: true,
    title: 'PrincipalCarroRB — principalcarro<br />\
    <img src="styles/legend/PrincipalCarroRBprincipalcarro_31_0.png" /> 31,3 - 37,1<br />\
    <img src="styles/legend/PrincipalCarroRBprincipalcarro_31_1.png" /> 37,1 - 45,9<br />\
    <img src="styles/legend/PrincipalCarroRBprincipalcarro_31_2.png" /> 45,9 - 51,6<br />\
    <img src="styles/legend/PrincipalCarroRBprincipalcarro_31_3.png" /> 51,6 - 61<br />\
    <img src="styles/legend/PrincipalCarroRBprincipalcarro_31_4.png" /> 61 - 72<br />' });
var format_barreiras_estradas_rio_branco_32 = new ol.format.GeoJSON();
var features_barreiras_estradas_rio_branco_32 = format_barreiras_estradas_rio_branco_32.readFeatures(json_barreiras_estradas_rio_branco_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barreiras_estradas_rio_branco_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barreiras_estradas_rio_branco_32.addFeatures(features_barreiras_estradas_rio_branco_32);
var lyr_barreiras_estradas_rio_branco_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barreiras_estradas_rio_branco_32, 
                style: style_barreiras_estradas_rio_branco_32,
                popuplayertitle: 'barreiras_estradas_rio_branco',
                interactive: true,
    title: 'barreiras_estradas_rio_branco<br />\
    <img src="styles/legend/barreiras_estradas_rio_branco_32_0.png" /> Ponte (Conexão)<br />\
    <img src="styles/legend/barreiras_estradas_rio_branco_32_1.png" /> Rio (Barreira)<br />\
    <img src="styles/legend/barreiras_estradas_rio_branco_32_2.png" /> Via Rápida (Barreira)<br />\
    <img src="styles/legend/barreiras_estradas_rio_branco_32_3.png" /> <br />' });
var format_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33 = new ol.format.GeoJSON();
var features_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33 = format_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33.readFeatures(json_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33.addFeatures(features_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33);
var lyr_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33, 
                style: style_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33,
                popuplayertitle: 'mapa_rioBranco — ac_municipios_2024 — mapa_riobranco__ac_municipios_2024',
                interactive: true,
                title: '<img src="styles/legend/mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33.png" /> mapa_rioBranco — ac_municipios_2024 — mapa_riobranco__ac_municipios_2024'
            });
var format_paradas_onibus_RioBrancoparadas_onibus_riobranco_34 = new ol.format.GeoJSON();
var features_paradas_onibus_RioBrancoparadas_onibus_riobranco_34 = format_paradas_onibus_RioBrancoparadas_onibus_riobranco_34.readFeatures(json_paradas_onibus_RioBrancoparadas_onibus_riobranco_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paradas_onibus_RioBrancoparadas_onibus_riobranco_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paradas_onibus_RioBrancoparadas_onibus_riobranco_34.addFeatures(features_paradas_onibus_RioBrancoparadas_onibus_riobranco_34);
var lyr_paradas_onibus_RioBrancoparadas_onibus_riobranco_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_paradas_onibus_RioBrancoparadas_onibus_riobranco_34, 
                style: style_paradas_onibus_RioBrancoparadas_onibus_riobranco_34,
                popuplayertitle: 'paradas_onibus_RioBranco — paradas_onibus_riobranco',
                interactive: true,
                title: '<img src="styles/legend/paradas_onibus_RioBrancoparadas_onibus_riobranco_34.png" /> paradas_onibus_RioBranco — paradas_onibus_riobranco'
            });
var format_locais_trabalho_RioBrancolocais_trabalho_riobranco_35 = new ol.format.GeoJSON();
var features_locais_trabalho_RioBrancolocais_trabalho_riobranco_35 = format_locais_trabalho_RioBrancolocais_trabalho_riobranco_35.readFeatures(json_locais_trabalho_RioBrancolocais_trabalho_riobranco_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_locais_trabalho_RioBrancolocais_trabalho_riobranco_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_locais_trabalho_RioBrancolocais_trabalho_riobranco_35.addFeatures(features_locais_trabalho_RioBrancolocais_trabalho_riobranco_35);
var lyr_locais_trabalho_RioBrancolocais_trabalho_riobranco_35 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_locais_trabalho_RioBrancolocais_trabalho_riobranco_35, 
                radius: 10 * 2,
                gradient: ['#fcfdbf', '#fcf4b6', '#fdebac', '#fde2a3', '#fed89a', '#fecf92', '#fec68a', '#febd82', '#feb47b', '#feaa74', '#fea16e', '#fd9869', '#fc8e64', '#fb8560', '#f97b5d', '#f7725c', '#f4695c', '#f1605d', '#ec5860', '#e75263', '#e04c67', '#d9466b', '#d2426f', '#ca3e72', '#c23b75', '#ba3878', '#b2357b', '#aa337d', '#a1307e', '#992d80', '#912b81', '#892881', '#812581', '#792282', '#721f81', '#6a1c81', '#621980', '#5a167e', '#52137c', '#4a1079', '#420f75', '#390f6e', '#311165', '#29115a', '#21114e', '#1a1042', '#140e36', '#0e0b2b', '#090720', '#050416', '#02020b', '#000004'],
                blur: 15,
                shadow: 250,
                title: 'locais_trabalho_RioBranco — locais_trabalho_riobranco'
            });
var format_alcance_carro_RBalcance_carro_rb_36 = new ol.format.GeoJSON();
var features_alcance_carro_RBalcance_carro_rb_36 = format_alcance_carro_RBalcance_carro_rb_36.readFeatures(json_alcance_carro_RBalcance_carro_rb_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alcance_carro_RBalcance_carro_rb_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alcance_carro_RBalcance_carro_rb_36.addFeatures(features_alcance_carro_RBalcance_carro_rb_36);
var lyr_alcance_carro_RBalcance_carro_rb_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alcance_carro_RBalcance_carro_rb_36, 
                style: style_alcance_carro_RBalcance_carro_rb_36,
                popuplayertitle: 'alcance_carro_RB — alcance_carro_rb',
                interactive: true,
                title: '<img src="styles/legend/alcance_carro_RBalcance_carro_rb_36.png" /> alcance_carro_RB — alcance_carro_rb'
            });
var format_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37 = new ol.format.GeoJSON();
var features_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37 = format_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37.readFeatures(json_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37.addFeatures(features_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37);
var lyr_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37, 
                style: style_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37,
                popuplayertitle: 'diferencia_carro_transpublic_RB — diferenca_carro_transpublic_rb',
                interactive: true,
                title: '<img src="styles/legend/diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37.png" /> diferencia_carro_transpublic_RB — diferenca_carro_transpublic_rb'
            });
var format_alcance_transpublic_RBalcance_transpublic_rb_38 = new ol.format.GeoJSON();
var features_alcance_transpublic_RBalcance_transpublic_rb_38 = format_alcance_transpublic_RBalcance_transpublic_rb_38.readFeatures(json_alcance_transpublic_RBalcance_transpublic_rb_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alcance_transpublic_RBalcance_transpublic_rb_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alcance_transpublic_RBalcance_transpublic_rb_38.addFeatures(features_alcance_transpublic_RBalcance_transpublic_rb_38);
var lyr_alcance_transpublic_RBalcance_transpublic_rb_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alcance_transpublic_RBalcance_transpublic_rb_38, 
                style: style_alcance_transpublic_RBalcance_transpublic_rb_38,
                popuplayertitle: 'alcance_transpublic_RB — alcance_transpublic_rb',
                interactive: true,
                title: '<img src="styles/legend/alcance_transpublic_RBalcance_transpublic_rb_38.png" /> alcance_transpublic_RB — alcance_transpublic_rb'
            });
var format_locais_moradia_RioBrancolocais_moradia_riobranco__locais_moradia_riobranco_39 = new ol.format.GeoJSON();
var features_locais_moradia_RioBrancolocais_moradia_riobranco__locais_moradia_riobranco_39 = format_locais_moradia_RioBrancolocais_moradia_riobranco__locais_moradia_riobranco_39.readFeatures(json_locais_moradia_RioBrancolocais_moradia_riobranco__locais_moradia_riobranco_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_locais_moradia_RioBrancolocais_moradia_riobranco__locais_moradia_riobranco_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_locais_moradia_RioBrancolocais_moradia_riobranco__locais_moradia_riobranco_39.addFeatures(features_locais_moradia_RioBrancolocais_moradia_riobranco__locais_moradia_riobranco_39);
var lyr_locais_moradia_RioBrancolocais_moradia_riobranco__locais_moradia_riobranco_39 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_locais_moradia_RioBrancolocais_moradia_riobranco__locais_moradia_riobranco_39, 
                radius: 5 * 2,
                gradient: ['#ffea46', '#ffe843', '#ffe742', '#ffe642', '#ffe544', '#fee445', '#fde346', '#fbe248', '#fae149', '#f9e04a', '#f8df4b', '#f7de4c', '#f6dd4d', '#f4dc4e', '#f3db4f', '#f2da50', '#f1d951', '#f0d852', '#efd753', '#edd654', '#ecd555', '#ebd456', '#ead357', '#e9d358', '#e8d259', '#e6d159', '#e5d05a', '#e4cf5b', '#e3ce5c', '#e2cd5c', '#e1cc5d', '#e0cb5e', '#deca5f', '#ddc95f', '#dcc860', '#dbc761', '#dac661', '#d9c562', '#d8c563', '#d7c463', '#d6c364', '#d4c264', '#d3c165', '#d2c066', '#d1bf66', '#d0be67', '#cfbd67', '#cebc68', '#cdbc68', '#ccbb69', '#cbba69', '#c9b96a', '#c8b86a', '#c7b76b', '#c6b66b', '#c5b56c', '#c4b56c', '#c3b46d', '#c2b36d', '#c1b26d', '#c0b16e', '#bfb06e', '#beaf6f', '#bcaf6f', '#bbae6f', '#baad70', '#b9ac70', '#b8ab70', '#b7aa71', '#b6a971', '#b5a971', '#b4a872', '#b3a772', '#b2a672', '#b1a573', '#b0a473', '#afa473', '#aea374', '#ada274', '#aca174', '#aba074', '#aa9f75', '#a99f75', '#a89e75', '#a69d75', '#a59c76', '#a49b76', '#a39a76', '#a29a76', '#a19976', '#a09877', '#9f9777', '#9e9677', '#9d9677', '#9c9577', '#9b9477', '#9a9377', '#999278', '#989278', '#979178', '#969078', '#958f78', '#948e78', '#938e78', '#928d78', '#918c78', '#908b79', '#8f8a79', '#8e8a79', '#8d8979', '#8c8879', '#8b8779', '#8a8779', '#898679', '#888579', '#878479', '#868379', '#858379', '#848279', '#848179', '#838079', '#828079', '#817f79', '#807e79', '#7f7d78', '#7e7d78', '#7d7c78', '#7c7b78', '#7b7a78', '#7a7a78', '#797977', '#787877', '#787777', '#777776', '#767676', '#757575', '#747475', '#737475', '#727374', '#727274', '#717174', '#707173', '#6f7073', '#6e6f73', '#6d6e72', '#6c6e72', '#6c6d72', '#6b6c71', '#6a6c71', '#696b71', '#686a71', '#676970', '#666970', '#656870', '#646770', '#64666f', '#63666f', '#62656f', '#61646f', '#60646f', '#5f636e', '#5e626e', '#5d616e', '#5c616e', '#5b606e', '#5a5f6d', '#595f6d', '#595e6d', '#585d6d', '#575c6d', '#565c6d', '#555b6d', '#545a6c', '#53596c', '#52596c', '#51586c', '#50576c', '#4f576c', '#4e566c', '#4d556c', '#4c546c', '#4b546c', '#4a536b', '#49526b', '#48526b', '#47516b', '#46506b', '#444f6b', '#434f6b', '#424e6b', '#414d6b', '#404d6b', '#3f4c6b', '#3e4b6b', '#3d4a6b', '#3b4a6b', '#3a496b', '#39486b', '#38486b', '#36476b', '#35466b', '#34456b', '#32456b', '#31446b', '#30436c', '#2e436c', '#2d426c', '#2b416c', '#2a406c', '#28406c', '#263f6c', '#243e6c', '#233e6c', '#213d6d', '#1f3c6d', '#1d3b6d', '#1a3b6d', '#183a6d', '#15396d', '#12386d', '#0f386e', '#0b376e', '#06366e', '#01366e', '#00356e', '#00346f', '#00336f', '#00336f', '#00326f', '#00316f', '#00306f', '#00306f', '#002f6f', '#002f6f', '#002e6f', '#002e6e', '#002d6c', '#002c6a', '#002c69', '#002b67', '#002a65', '#002a63', '#002961', '#002860', '#00275e', '#00275c', '#00265a', '#002558', '#002557', '#002455', '#002353', '#002252', '#002250', '#00214e', '#00204d'],
                blur: 15,
                shadow: 250,
                title: 'locais_moradia_RioBranco — locais_moradia_riobranco__locais_moradia_riobranco'
            });
var format_Perc_Ate30minperc_ate30min_copy_copy_40 = new ol.format.GeoJSON();
var features_Perc_Ate30minperc_ate30min_copy_copy_40 = format_Perc_Ate30minperc_ate30min_copy_copy_40.readFeatures(json_Perc_Ate30minperc_ate30min_copy_copy_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perc_Ate30minperc_ate30min_copy_copy_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perc_Ate30minperc_ate30min_copy_copy_40.addFeatures(features_Perc_Ate30minperc_ate30min_copy_copy_40);
var lyr_Perc_Ate30minperc_ate30min_copy_copy_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perc_Ate30minperc_ate30min_copy_copy_40, 
                style: style_Perc_Ate30minperc_ate30min_copy_copy_40,
                popuplayertitle: 'Perc_Ate30min — perc_ate30min_copy_copy',
                interactive: true,
    title: 'Perc_Ate30min — perc_ate30min_copy_copy<br />\
    <img src="styles/legend/Perc_Ate30minperc_ate30min_copy_copy_40_0.png" /> 37,8 - 40<br />\
    <img src="styles/legend/Perc_Ate30minperc_ate30min_copy_copy_40_1.png" /> 40 - 49,9<br />\
    <img src="styles/legend/Perc_Ate30minperc_ate30min_copy_copy_40_2.png" /> 49,9 - 62<br />\
    <img src="styles/legend/Perc_Ate30minperc_ate30min_copy_copy_40_3.png" /> 62 - 72,8<br />\
    <img src="styles/legend/Perc_Ate30minperc_ate30min_copy_copy_40_4.png" /> 72,8 - 82<br />' });
var group_Mobilidade_transportePrivado = new ol.layer.Group({
                                layers: [lyr_PrincipalCarroRBprincipalcarro_31,lyr_barreiras_estradas_rio_branco_32,lyr_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33,lyr_paradas_onibus_RioBrancoparadas_onibus_riobranco_34,lyr_locais_trabalho_RioBrancolocais_trabalho_riobranco_35,lyr_alcance_carro_RBalcance_carro_rb_36,lyr_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37,lyr_alcance_transpublic_RBalcance_transpublic_rb_38,lyr_locais_moradia_RioBrancolocais_moradia_riobranco__locais_moradia_riobranco_39,lyr_Perc_Ate30minperc_ate30min_copy_copy_40,],
                                fold: 'open',
                                title: 'Mobilidade_transportePrivado'});
var group_Mobilidade_transportePublico = new ol.layer.Group({
                                layers: [lyr_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21,lyr_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22,lyr_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23,lyr_locais_trabalho_SPCapitalcentroidslocais_trabalho_spcapital__centroids_24,lyr_locais_moradia_SPlocais_moradia_capitalocais_moradia_sp__locais_moradia_capitais_25,lyr_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26,lyr_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27,lyr_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28,lyr_paradas_transp_SPparadastransportepublicoparadas_transp_sp__paradastransportepubliccapitais__infraestrutura_paradas_29,lyr_PrincipalTransportePublicoprincipaltransportepublico_copy_30,],
                                fold: 'close',
                                title: 'Mobilidade_transportePublico'});
var group_Mobilidade_transporteAtivo = new ol.layer.Group({
                                layers: [lyr_TransporteAtivotransporteativo_8,lyr_Perc_Ate30minperc_ate30min_9,lyr_mapa_ciclovia_por_toda_cidade_10,lyr_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11,lyr_mapa_PortoVelhomapa_portovelho_12,lyr_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13,lyr_locais_trabalho_PortoVelholocais_trabalho_portovelho__locais_trabalho_portovelho_14,lyr_locais_moradia_PortoVelholocais_moradia_portovelho__locais_moradia_portovelho_15,lyr_alcance_bicicleta_PValcance_bicicleta_pv_16,lyr_diferenca_bicicleta_onibus_17,lyr_alcance_caminhando_PValcance_caminhando_pv_18,lyr_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19,lyr_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20,],
                                fold: 'close',
                                title: 'Mobilidade_transporteAtivo'});
var group_Brasil = new ol.layer.Group({
                                layers: [lyr_ConcentraodePessoas_1,lyr_Tempo30MinVerde_2,lyr_Tempo30min1HoraAmarelo_3,lyr_Tempo1HoraVermelho_4,lyr_TransportePbliconibus_5,lyr_TransportePrivadoCarro_6,lyr_TransporteAtivoBicicleta_7,],
                                fold: 'close',
                                title: 'Brasil'});

lyr_Positron_0.setVisible(true);lyr_ConcentraodePessoas_1.setVisible(true);lyr_Tempo30MinVerde_2.setVisible(true);lyr_Tempo30min1HoraAmarelo_3.setVisible(true);lyr_Tempo1HoraVermelho_4.setVisible(true);lyr_TransportePbliconibus_5.setVisible(true);lyr_TransportePrivadoCarro_6.setVisible(true);lyr_TransporteAtivoBicicleta_7.setVisible(true);lyr_TransporteAtivotransporteativo_8.setVisible(true);lyr_Perc_Ate30minperc_ate30min_9.setVisible(true);lyr_mapa_ciclovia_por_toda_cidade_10.setVisible(true);lyr_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11.setVisible(true);lyr_mapa_PortoVelhomapa_portovelho_12.setVisible(true);lyr_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13.setVisible(true);lyr_locais_trabalho_PortoVelholocais_trabalho_portovelho__locais_trabalho_portovelho_14.setVisible(true);lyr_locais_moradia_PortoVelholocais_moradia_portovelho__locais_moradia_portovelho_15.setVisible(true);lyr_alcance_bicicleta_PValcance_bicicleta_pv_16.setVisible(true);lyr_diferenca_bicicleta_onibus_17.setVisible(true);lyr_alcance_caminhando_PValcance_caminhando_pv_18.setVisible(true);lyr_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19.setVisible(true);lyr_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20.setVisible(true);lyr_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21.setVisible(true);lyr_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22.setVisible(true);lyr_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23.setVisible(true);lyr_locais_trabalho_SPCapitalcentroidslocais_trabalho_spcapital__centroids_24.setVisible(true);lyr_locais_moradia_SPlocais_moradia_capitalocais_moradia_sp__locais_moradia_capitais_25.setVisible(true);lyr_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26.setVisible(true);lyr_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27.setVisible(true);lyr_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28.setVisible(true);lyr_paradas_transp_SPparadastransportepublicoparadas_transp_sp__paradastransportepubliccapitais__infraestrutura_paradas_29.setVisible(true);lyr_PrincipalTransportePublicoprincipaltransportepublico_copy_30.setVisible(true);lyr_PrincipalCarroRBprincipalcarro_31.setVisible(true);lyr_barreiras_estradas_rio_branco_32.setVisible(true);lyr_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33.setVisible(true);lyr_paradas_onibus_RioBrancoparadas_onibus_riobranco_34.setVisible(true);lyr_locais_trabalho_RioBrancolocais_trabalho_riobranco_35.setVisible(true);lyr_alcance_carro_RBalcance_carro_rb_36.setVisible(true);lyr_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37.setVisible(true);lyr_alcance_transpublic_RBalcance_transpublic_rb_38.setVisible(true);lyr_locais_moradia_RioBrancolocais_moradia_riobranco__locais_moradia_riobranco_39.setVisible(true);lyr_Perc_Ate30minperc_ate30min_copy_copy_40.setVisible(true);
var layersList = [lyr_Positron_0,group_Brasil,group_Mobilidade_transporteAtivo,group_Mobilidade_transportePublico,group_Mobilidade_transportePrivado];
lyr_ConcentraodePessoas_1.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', 'concentracao_pessoas_limpo': 'concentracao_pessoas_limpo', });
lyr_Tempo30MinVerde_2.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_Tempo30min1HoraAmarelo_3.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_Tempo1HoraVermelho_4.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_TransportePbliconibus_5.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_TransportePrivadoCarro_6.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_TransporteAtivoBicicleta_7.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_TransporteAtivotransporteativo_8.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_Perc_Ate30minperc_ate30min_9.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'osm_id': 'osm_id', 'name': 'name', 'tipo_barreira': 'tipo_barreira', });
lyr_mapa_PortoVelhomapa_portovelho_12.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_alcance_bicicleta_PValcance_bicicleta_pv_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', 'area (km)': 'area (km)', });
lyr_diferenca_bicicleta_onibus_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', 'area (km)': 'area (km)', 'area': 'area', });
lyr_alcance_caminhando_PValcance_caminhando_pv_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'categoria': 'categoria', });
lyr_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'osm_id': 'osm_id', 'name': 'name', 'tipo_barreira': 'tipo_barreira', });
lyr_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', 'area_km2_vantagem_carro': 'area_km2_vantagem_carro', 'raio_carro_km': 'raio_carro_km', 'raio_transPublic_km': 'raio_transPublic_km', });
lyr_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_PrincipalTransportePublicoprincipaltransportepublico_copy_30.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_PrincipalCarroRBprincipalcarro_31.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'Perc_pesso': 'Perc_pesso', 'Pessoas_%': 'Pessoas_%', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_barreiras_estradas_rio_branco_32.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'osm_id': 'osm_id', 'name': 'name', 'tipo_barreira': 'tipo_barreira', });
lyr_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_paradas_onibus_RioBrancoparadas_onibus_riobranco_34.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'categoria': 'categoria', });
lyr_alcance_carro_RBalcance_carro_rb_36.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', 'area': 'area', 'area (km)': 'area (km)', });
lyr_alcance_transpublic_RBalcance_transpublic_rb_38.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'prop_is_only_walking': 'prop_is_only_walking', });
lyr_Perc_Ate30minperc_ate30min_copy_copy_40.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'Tabela_10330_Processada_Municipio': 'Tabela_10330_Processada_Municipio', 'Tabela_10330_Processada_UF': 'Tabela_10330_Processada_UF', 'Tabela_10330_Processada_Municipio_Join': 'Tabela_10330_Processada_Municipio_Join', 'Tabela_10330_Processada_Total_Geral': 'Tabela_10330_Processada_Total_Geral', 'Tabela_10330_Processada_Total_Transporte_Privado': 'Tabela_10330_Processada_Total_Transporte_Privado', 'Tabela_10330_Processada_Total_Transporte_Publico': 'Tabela_10330_Processada_Total_Transporte_Publico', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'Tabela_10330_Processada_Total_Transporte_Ativo', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'Tabela_10330_Processada_Pct_Transporte_Privado', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'Tabela_10330_Processada_Pct_Transporte_Publico', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'Tabela_10330_Processada_Pct_Transporte_Ativo', 'Tabela_10330_Processada_total_Ate_30min': 'Tabela_10330_Processada_total_Ate_30min', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'Tabela_10330_Processada_Total_de_30min_A1hora', 'Tabela_10330_Processada_Total_mais_de_1hora': 'Tabela_10330_Processada_Total_mais_de_1hora', 'Tabela_10330_Processada_Pct_Ate_30min': 'Tabela_10330_Processada_Pct_Ate_30min', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'Tabela_10330_Processada_Pct_de_30min_a1hora', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'Tabela_10330_Processada_Pct_Mais_de_1hora', });
lyr_ConcentraodePessoas_1.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': 'TextEdit', 'Pessoas_%': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', 'concentracao_pessoas_limpo': 'TextEdit', });
lyr_Tempo30MinVerde_2.set('fieldImages', {'fid': '', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_Tempo30min1HoraAmarelo_3.set('fieldImages', {'fid': '', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_Tempo1HoraVermelho_4.set('fieldImages', {'fid': '', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_TransportePbliconibus_5.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': 'TextEdit', 'Pessoas_%': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_TransportePrivadoCarro_6.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': 'TextEdit', 'Pessoas_%': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_TransporteAtivoBicicleta_7.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': 'TextEdit', 'Pessoas_%': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_TransporteAtivotransporteativo_8.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': '', 'Pessoas_%': '', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_Perc_Ate30minperc_ate30min_9.set('fieldImages', {'fid': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'tipo_barreira': 'TextEdit', });
lyr_mapa_PortoVelhomapa_portovelho_12.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_alcance_bicicleta_PValcance_bicicleta_pv_16.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', 'area (km)': 'TextEdit', });
lyr_diferenca_bicicleta_onibus_17.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', 'area (km)': 'TextEdit', 'area': 'TextEdit', });
lyr_alcance_caminhando_PValcance_caminhando_pv_18.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'categoria': '', });
lyr_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21.set('fieldImages', {'fid': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'tipo_barreira': 'TextEdit', });
lyr_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', 'area_km2_vantagem_carro': 'TextEdit', 'raio_carro_km': 'TextEdit', 'raio_transPublic_km': 'TextEdit', });
lyr_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_PrincipalTransportePublicoprincipaltransportepublico_copy_30.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': '', 'Pessoas_%': '', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_PrincipalCarroRBprincipalcarro_31.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Perc_pesso': '', 'Pessoas_%': '', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_barreiras_estradas_rio_branco_32.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'tipo_barreira': 'TextEdit', });
lyr_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_paradas_onibus_RioBrancoparadas_onibus_riobranco_34.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'categoria': 'TextEdit', });
lyr_alcance_carro_RBalcance_carro_rb_36.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', 'area': 'TextEdit', 'area (km)': 'TextEdit', });
lyr_alcance_transpublic_RBalcance_transpublic_rb_38.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'prop_is_only_walking': 'TextEdit', });
lyr_Perc_Ate30minperc_ate30min_copy_copy_40.set('fieldImages', {'fid': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Tabela_10330_Processada_Municipio': 'TextEdit', 'Tabela_10330_Processada_UF': 'TextEdit', 'Tabela_10330_Processada_Municipio_Join': 'TextEdit', 'Tabela_10330_Processada_Total_Geral': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'TextEdit', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'TextEdit', 'Tabela_10330_Processada_total_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'TextEdit', 'Tabela_10330_Processada_Total_mais_de_1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Ate_30min': 'TextEdit', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'TextEdit', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'TextEdit', });
lyr_ConcentraodePessoas_1.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', 'concentracao_pessoas_limpo': 'no label', });
lyr_Tempo30MinVerde_2.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_Tempo30min1HoraAmarelo_3.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_Tempo1HoraVermelho_4.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_TransportePbliconibus_5.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_TransportePrivadoCarro_6.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_TransporteAtivoBicicleta_7.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_TransporteAtivotransporteativo_8.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_Perc_Ate30minperc_ate30min_9.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_barreiras_PortoVelhobarreiras_portovelho__barreiras_portovelho_11.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'tipo_barreira': 'no label', });
lyr_mapa_PortoVelhomapa_portovelho_12.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_alcance_carro_PValcance_carro_pv__alcance_carro_pv_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_alcance_bicicleta_PValcance_bicicleta_pv_16.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', 'area (km)': 'no label', });
lyr_diferenca_bicicleta_onibus_17.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', 'area (km)': 'no label', 'area': 'no label', });
lyr_alcance_caminhando_PValcance_caminhando_pv_18.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_alcance_transpPublic_PValcance_transppublic_pv__alcance_transppublic_pv_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_paradas_onibus_PVparadas_onibus_pv__paradas_onibus_pv_20.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'categoria': 'no label', });
lyr_TempoDesloc_Perc_MaisDe1horatempodesloc_perc_maisde1hora_21.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_barreiras_SPbarreiras_analisebarreiras_sp__barreiras_analise_22.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'tipo_barreira': 'no label', });
lyr_mapaSPsp_municipios_2024mapasp__sp_municipios_2024_23.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_alcance_carro_SPalcance_carro_sp__outputalcance_carro_sp__alcance_carro_sp__output_26.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_diferena_carro_onibus_alcanceKmdiferena_carro_onibus_alcancekm__difference_27.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', 'area_km2_vantagem_carro': 'no label', 'raio_carro_km': 'no label', 'raio_transPublic_km': 'no label', });
lyr_alcance_transportePublico_SPoutputalcance_transportepublico_sp__output_28.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_PrincipalTransportePublicoprincipaltransportepublico_copy_30.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_PrincipalCarroRBprincipalcarro_31.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', 'Perc_pesso': 'no label', 'Pessoas_%': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_barreiras_estradas_rio_branco_32.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'tipo_barreira': 'no label', });
lyr_mapa_rioBrancoac_municipios_2024mapa_riobranco__ac_municipios_2024_33.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_paradas_onibus_RioBrancoparadas_onibus_riobranco_34.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'categoria': 'no label', });
lyr_alcance_carro_RBalcance_carro_rb_36.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_diferencia_carro_transpublic_RBdiferenca_carro_transpublic_rb_37.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', 'area': 'no label', 'area (km)': 'no label', });
lyr_alcance_transpublic_RBalcance_transpublic_rb_38.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'prop_is_only_walking': 'no label', });
lyr_Perc_Ate30minperc_ate30min_copy_copy_40.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'Tabela_10330_Processada_Municipio': 'no label', 'Tabela_10330_Processada_UF': 'no label', 'Tabela_10330_Processada_Municipio_Join': 'no label', 'Tabela_10330_Processada_Total_Geral': 'no label', 'Tabela_10330_Processada_Total_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Total_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Total_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Privado': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Publico': 'no label', 'Tabela_10330_Processada_Pct_Transporte_Ativo': 'no label', 'Tabela_10330_Processada_total_Ate_30min': 'no label', 'Tabela_10330_Processada_Total_de_30min_A1hora': 'no label', 'Tabela_10330_Processada_Total_mais_de_1hora': 'no label', 'Tabela_10330_Processada_Pct_Ate_30min': 'no label', 'Tabela_10330_Processada_Pct_de_30min_a1hora': 'no label', 'Tabela_10330_Processada_Pct_Mais_de_1hora': 'no label', });
lyr_Perc_Ate30minperc_ate30min_copy_copy_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});