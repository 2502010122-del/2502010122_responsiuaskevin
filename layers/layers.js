var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_KabupatenBantul_1 = new ol.format.GeoJSON();
var features_KabupatenBantul_1 = format_KabupatenBantul_1.readFeatures(json_KabupatenBantul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenBantul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenBantul_1.addFeatures(features_KabupatenBantul_1);
var lyr_KabupatenBantul_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabupatenBantul_1, 
                style: style_KabupatenBantul_1,
                popuplayertitle: 'Kabupaten Bantul',
                interactive: true,
    title: 'Kabupaten Bantul<br />\
    <img src="styles/legend/KabupatenBantul_1_0.png" /> Jumlah Penduduk Sangat Rendah<br />\
    <img src="styles/legend/KabupatenBantul_1_1.png" /> Jumlah Penduduk Rendah<br />\
    <img src="styles/legend/KabupatenBantul_1_2.png" /> Jumlah Penduduk Sedang<br />\
    <img src="styles/legend/KabupatenBantul_1_3.png" /> Jumlah Penduduk Tinggi<br />\
    <img src="styles/legend/KabupatenBantul_1_4.png" /> Jumlah Penduduk Sangatv Tinggi<br />' });
var format_Lines_2 = new ol.format.GeoJSON();
var features_Lines_2 = format_Lines_2.readFeatures(json_Lines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lines_2.addFeatures(features_Lines_2);
var lyr_Lines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lines_2, 
                style: style_Lines_2,
                popuplayertitle: 'Lines',
                interactive: true,
                title: '<img src="styles/legend/Lines_2.png" /> Lines'
            });
var format_Centroids_3 = new ol.format.GeoJSON();
var features_Centroids_3 = format_Centroids_3.readFeatures(json_Centroids_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroids_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroids_3.addFeatures(features_Centroids_3);
var lyr_Centroids_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centroids_3, 
                style: style_Centroids_3,
                popuplayertitle: 'Centroids',
                interactive: true,
                title: '<img src="styles/legend/Centroids_3.png" /> Centroids'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_KabupatenBantul_1.setVisible(true);lyr_Lines_2.setVisible(true);lyr_Centroids_3.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_KabupatenBantul_1,lyr_Lines_2,lyr_Centroids_3];
lyr_KabupatenBantul_1.set('fieldAliases', {'WADMKC': 'Kecamatan', 'Join_0-4 thn (Ribu jiwa)': 'Join_0-4 thn (Ribu jiwa)', 'Join_5-9 thn (Ribu jiwa)': 'Join_5-9 thn (Ribu jiwa)', 'Join_10-14 thn (Ribu jiwa)': 'Join_10-14 thn (Ribu jiwa)', 'Join_15-19 thn (Ribu jiwa)': 'Join_15-19 thn (Ribu jiwa)', 'Join_20-24 thn (Ribu jiwa)': 'Join_20-24 thn (Ribu jiwa)', 'Join_25-29 thn (Ribu jiwa)': 'Join_25-29 thn (Ribu jiwa)', 'Join_30-34 thn (Ribu jiwa)': 'Join_30-34 thn (Ribu jiwa)', 'Join_35-39 thn (Ribu jiwa)': 'Join_35-39 thn (Ribu jiwa)', 'Join_40-44 thn (Ribu jiwa)': 'Join_40-44 thn (Ribu jiwa)', 'Join_45-49 thn (Ribu jiwa)': 'Join_45-49 thn (Ribu jiwa)', 'Join_50-54 thn (Ribu jiwa)': 'Join_50-54 thn (Ribu jiwa)', 'Join_55-59 thn (Ribu jiwa)': 'Join_55-59 thn (Ribu jiwa)', 'Join_60-64 thn (Ribu jiwa)': 'Join_60-64 thn (Ribu jiwa)', 'Join_65-69 thn (Ribu jiwa)': 'Join_65-69 thn (Ribu jiwa)', 'Join_70-75 thn (Ribu jiwa)': 'Join_70-75 thn (Ribu jiwa)', 'Join_75+ thn (Ribu jiwa)': 'Join_75+ thn (Ribu jiwa)', 'Join_Jumlah (Ribu jiwa)': 'Jumlah Penduduk', });
lyr_Lines_2.set('fieldAliases', {'WADMKC': 'WADMKC', 'Join_0-4 thn (Ribu jiwa)': 'Join_0-4 thn (Ribu jiwa)', 'Join_5-9 thn (Ribu jiwa)': 'Join_5-9 thn (Ribu jiwa)', 'Join_10-14 thn (Ribu jiwa)': 'Join_10-14 thn (Ribu jiwa)', 'Join_15-19 thn (Ribu jiwa)': 'Join_15-19 thn (Ribu jiwa)', 'Join_20-24 thn (Ribu jiwa)': 'Join_20-24 thn (Ribu jiwa)', 'Join_25-29 thn (Ribu jiwa)': 'Join_25-29 thn (Ribu jiwa)', 'Join_30-34 thn (Ribu jiwa)': 'Join_30-34 thn (Ribu jiwa)', 'Join_35-39 thn (Ribu jiwa)': 'Join_35-39 thn (Ribu jiwa)', 'Join_40-44 thn (Ribu jiwa)': 'Join_40-44 thn (Ribu jiwa)', 'Join_45-49 thn (Ribu jiwa)': 'Join_45-49 thn (Ribu jiwa)', 'Join_50-54 thn (Ribu jiwa)': 'Join_50-54 thn (Ribu jiwa)', 'Join_55-59 thn (Ribu jiwa)': 'Join_55-59 thn (Ribu jiwa)', 'Join_60-64 thn (Ribu jiwa)': 'Join_60-64 thn (Ribu jiwa)', 'Join_65-69 thn (Ribu jiwa)': 'Join_65-69 thn (Ribu jiwa)', 'Join_70-75 thn (Ribu jiwa)': 'Join_70-75 thn (Ribu jiwa)', 'Join_75+ thn (Ribu jiwa)': 'Join_75+ thn (Ribu jiwa)', 'Join_Jumlah (Ribu jiwa)': 'Join_Jumlah (Ribu jiwa)', });
lyr_Centroids_3.set('fieldAliases', {'WADMKC': 'WADMKC', 'Join_0-4 thn (Ribu jiwa)': 'Join_0-4 thn (Ribu jiwa)', 'Join_5-9 thn (Ribu jiwa)': 'Join_5-9 thn (Ribu jiwa)', 'Join_10-14 thn (Ribu jiwa)': 'Join_10-14 thn (Ribu jiwa)', 'Join_15-19 thn (Ribu jiwa)': 'Join_15-19 thn (Ribu jiwa)', 'Join_20-24 thn (Ribu jiwa)': 'Join_20-24 thn (Ribu jiwa)', 'Join_25-29 thn (Ribu jiwa)': 'Join_25-29 thn (Ribu jiwa)', 'Join_30-34 thn (Ribu jiwa)': 'Join_30-34 thn (Ribu jiwa)', 'Join_35-39 thn (Ribu jiwa)': 'Join_35-39 thn (Ribu jiwa)', 'Join_40-44 thn (Ribu jiwa)': 'Join_40-44 thn (Ribu jiwa)', 'Join_45-49 thn (Ribu jiwa)': 'Join_45-49 thn (Ribu jiwa)', 'Join_50-54 thn (Ribu jiwa)': 'Join_50-54 thn (Ribu jiwa)', 'Join_55-59 thn (Ribu jiwa)': 'Join_55-59 thn (Ribu jiwa)', 'Join_60-64 thn (Ribu jiwa)': 'Join_60-64 thn (Ribu jiwa)', 'Join_65-69 thn (Ribu jiwa)': 'Join_65-69 thn (Ribu jiwa)', 'Join_70-75 thn (Ribu jiwa)': 'Join_70-75 thn (Ribu jiwa)', 'Join_75+ thn (Ribu jiwa)': 'Join_75+ thn (Ribu jiwa)', 'Join_Jumlah (Ribu jiwa)': 'Join_Jumlah (Ribu jiwa)', });
lyr_KabupatenBantul_1.set('fieldImages', {'WADMKC': 'TextEdit', 'Join_0-4 thn (Ribu jiwa)': 'Hidden', 'Join_5-9 thn (Ribu jiwa)': 'Hidden', 'Join_10-14 thn (Ribu jiwa)': 'Hidden', 'Join_15-19 thn (Ribu jiwa)': 'Hidden', 'Join_20-24 thn (Ribu jiwa)': 'Hidden', 'Join_25-29 thn (Ribu jiwa)': 'Hidden', 'Join_30-34 thn (Ribu jiwa)': 'Hidden', 'Join_35-39 thn (Ribu jiwa)': 'Hidden', 'Join_40-44 thn (Ribu jiwa)': 'Hidden', 'Join_45-49 thn (Ribu jiwa)': 'Hidden', 'Join_50-54 thn (Ribu jiwa)': 'Hidden', 'Join_55-59 thn (Ribu jiwa)': 'Hidden', 'Join_60-64 thn (Ribu jiwa)': 'Hidden', 'Join_65-69 thn (Ribu jiwa)': 'Hidden', 'Join_70-75 thn (Ribu jiwa)': 'Hidden', 'Join_75+ thn (Ribu jiwa)': 'Hidden', 'Join_Jumlah (Ribu jiwa)': 'TextEdit', });
lyr_Lines_2.set('fieldImages', {'WADMKC': 'TextEdit', 'Join_0-4 thn (Ribu jiwa)': 'TextEdit', 'Join_5-9 thn (Ribu jiwa)': 'TextEdit', 'Join_10-14 thn (Ribu jiwa)': 'TextEdit', 'Join_15-19 thn (Ribu jiwa)': 'TextEdit', 'Join_20-24 thn (Ribu jiwa)': 'TextEdit', 'Join_25-29 thn (Ribu jiwa)': 'TextEdit', 'Join_30-34 thn (Ribu jiwa)': 'TextEdit', 'Join_35-39 thn (Ribu jiwa)': 'TextEdit', 'Join_40-44 thn (Ribu jiwa)': 'TextEdit', 'Join_45-49 thn (Ribu jiwa)': 'TextEdit', 'Join_50-54 thn (Ribu jiwa)': 'TextEdit', 'Join_55-59 thn (Ribu jiwa)': 'TextEdit', 'Join_60-64 thn (Ribu jiwa)': 'TextEdit', 'Join_65-69 thn (Ribu jiwa)': 'TextEdit', 'Join_70-75 thn (Ribu jiwa)': 'TextEdit', 'Join_75+ thn (Ribu jiwa)': 'TextEdit', 'Join_Jumlah (Ribu jiwa)': 'TextEdit', });
lyr_Centroids_3.set('fieldImages', {'WADMKC': 'TextEdit', 'Join_0-4 thn (Ribu jiwa)': 'TextEdit', 'Join_5-9 thn (Ribu jiwa)': 'TextEdit', 'Join_10-14 thn (Ribu jiwa)': 'TextEdit', 'Join_15-19 thn (Ribu jiwa)': 'TextEdit', 'Join_20-24 thn (Ribu jiwa)': 'TextEdit', 'Join_25-29 thn (Ribu jiwa)': 'TextEdit', 'Join_30-34 thn (Ribu jiwa)': 'TextEdit', 'Join_35-39 thn (Ribu jiwa)': 'TextEdit', 'Join_40-44 thn (Ribu jiwa)': 'TextEdit', 'Join_45-49 thn (Ribu jiwa)': 'TextEdit', 'Join_50-54 thn (Ribu jiwa)': 'TextEdit', 'Join_55-59 thn (Ribu jiwa)': 'TextEdit', 'Join_60-64 thn (Ribu jiwa)': 'TextEdit', 'Join_65-69 thn (Ribu jiwa)': 'TextEdit', 'Join_70-75 thn (Ribu jiwa)': 'TextEdit', 'Join_75+ thn (Ribu jiwa)': 'TextEdit', 'Join_Jumlah (Ribu jiwa)': 'TextEdit', });
lyr_KabupatenBantul_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Join_Jumlah (Ribu jiwa)': 'inline label - always visible', });
lyr_Lines_2.set('fieldLabels', {'WADMKC': 'no label', 'Join_0-4 thn (Ribu jiwa)': 'no label', 'Join_5-9 thn (Ribu jiwa)': 'no label', 'Join_10-14 thn (Ribu jiwa)': 'no label', 'Join_15-19 thn (Ribu jiwa)': 'no label', 'Join_20-24 thn (Ribu jiwa)': 'no label', 'Join_25-29 thn (Ribu jiwa)': 'no label', 'Join_30-34 thn (Ribu jiwa)': 'no label', 'Join_35-39 thn (Ribu jiwa)': 'no label', 'Join_40-44 thn (Ribu jiwa)': 'no label', 'Join_45-49 thn (Ribu jiwa)': 'no label', 'Join_50-54 thn (Ribu jiwa)': 'no label', 'Join_55-59 thn (Ribu jiwa)': 'no label', 'Join_60-64 thn (Ribu jiwa)': 'no label', 'Join_65-69 thn (Ribu jiwa)': 'no label', 'Join_70-75 thn (Ribu jiwa)': 'no label', 'Join_75+ thn (Ribu jiwa)': 'no label', 'Join_Jumlah (Ribu jiwa)': 'no label', });
lyr_Centroids_3.set('fieldLabels', {'WADMKC': 'no label', 'Join_0-4 thn (Ribu jiwa)': 'no label', 'Join_5-9 thn (Ribu jiwa)': 'no label', 'Join_10-14 thn (Ribu jiwa)': 'no label', 'Join_15-19 thn (Ribu jiwa)': 'no label', 'Join_20-24 thn (Ribu jiwa)': 'no label', 'Join_25-29 thn (Ribu jiwa)': 'no label', 'Join_30-34 thn (Ribu jiwa)': 'no label', 'Join_35-39 thn (Ribu jiwa)': 'no label', 'Join_40-44 thn (Ribu jiwa)': 'no label', 'Join_45-49 thn (Ribu jiwa)': 'no label', 'Join_50-54 thn (Ribu jiwa)': 'no label', 'Join_55-59 thn (Ribu jiwa)': 'no label', 'Join_60-64 thn (Ribu jiwa)': 'no label', 'Join_65-69 thn (Ribu jiwa)': 'no label', 'Join_70-75 thn (Ribu jiwa)': 'no label', 'Join_75+ thn (Ribu jiwa)': 'no label', 'Join_Jumlah (Ribu jiwa)': 'no label', });
lyr_Centroids_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});