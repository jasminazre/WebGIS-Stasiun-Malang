var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_BatasAdministrasi_1 = new ol.format.GeoJSON();
var features_BatasAdministrasi_1 = format_BatasAdministrasi_1.readFeatures(json_BatasAdministrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_1.addFeatures(features_BatasAdministrasi_1);
var lyr_BatasAdministrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_1, 
                style: style_BatasAdministrasi_1,
                popuplayertitle: 'Batas Administrasi',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_1.png" /> Batas Administrasi'
            });
var format_JaringanJalan_2 = new ol.format.GeoJSON();
var features_JaringanJalan_2 = format_JaringanJalan_2.readFeatures(json_JaringanJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_2.addFeatures(features_JaringanJalan_2);
var lyr_JaringanJalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_2, 
                style: style_JaringanJalan_2,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_2.png" /> Jaringan Jalan'
            });
var format_Jangkauan1500m_3 = new ol.format.GeoJSON();
var features_Jangkauan1500m_3 = format_Jangkauan1500m_3.readFeatures(json_Jangkauan1500m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangkauan1500m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangkauan1500m_3.addFeatures(features_Jangkauan1500m_3);
var lyr_Jangkauan1500m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangkauan1500m_3, 
                style: style_Jangkauan1500m_3,
                popuplayertitle: 'Jangkauan 1500m',
                interactive: true,
                title: '<img src="styles/legend/Jangkauan1500m_3.png" /> Jangkauan 1500m'
            });
var format_Jangkauan1000m_4 = new ol.format.GeoJSON();
var features_Jangkauan1000m_4 = format_Jangkauan1000m_4.readFeatures(json_Jangkauan1000m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangkauan1000m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangkauan1000m_4.addFeatures(features_Jangkauan1000m_4);
var lyr_Jangkauan1000m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangkauan1000m_4, 
                style: style_Jangkauan1000m_4,
                popuplayertitle: 'Jangkauan 1000m',
                interactive: true,
                title: '<img src="styles/legend/Jangkauan1000m_4.png" /> Jangkauan 1000m'
            });
var format_Jangkauan500m_5 = new ol.format.GeoJSON();
var features_Jangkauan500m_5 = format_Jangkauan500m_5.readFeatures(json_Jangkauan500m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangkauan500m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangkauan500m_5.addFeatures(features_Jangkauan500m_5);
var lyr_Jangkauan500m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangkauan500m_5, 
                style: style_Jangkauan500m_5,
                popuplayertitle: 'Jangkauan 500m',
                interactive: true,
                title: '<img src="styles/legend/Jangkauan500m_5.png" /> Jangkauan 500m'
            });
var format_StasiunKeretaApi_6 = new ol.format.GeoJSON();
var features_StasiunKeretaApi_6 = format_StasiunKeretaApi_6.readFeatures(json_StasiunKeretaApi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StasiunKeretaApi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StasiunKeretaApi_6.addFeatures(features_StasiunKeretaApi_6);
var lyr_StasiunKeretaApi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StasiunKeretaApi_6, 
                style: style_StasiunKeretaApi_6,
                popuplayertitle: 'Stasiun Kereta Api',
                interactive: true,
                title: '<img src="styles/legend/StasiunKeretaApi_6.png" /> Stasiun Kereta Api'
            });

lyr_Positronretina_0.setVisible(true);lyr_BatasAdministrasi_1.setVisible(true);lyr_JaringanJalan_2.setVisible(true);lyr_Jangkauan1500m_3.setVisible(true);lyr_Jangkauan1000m_4.setVisible(true);lyr_Jangkauan500m_5.setVisible(true);lyr_StasiunKeretaApi_6.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_BatasAdministrasi_1,lyr_JaringanJalan_2,lyr_Jangkauan1500m_3,lyr_Jangkauan1000m_4,lyr_Jangkauan500m_5,lyr_StasiunKeretaApi_6];
lyr_BatasAdministrasi_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JaringanJalan_2.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Jangkauan1500m_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Jangkauan1000m_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Jangkauan500m_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_StasiunKeretaApi_6.set('fieldAliases', {'id': 'id', 'Foto': 'Foto', 'Stasiun': 'Stasiun', });
lyr_BatasAdministrasi_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JaringanJalan_2.set('fieldImages', {'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Jangkauan1500m_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Jangkauan1000m_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Jangkauan500m_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_StasiunKeretaApi_6.set('fieldImages', {'id': 'TextEdit', 'Foto': 'ExternalResource', 'Stasiun': '', });
lyr_BatasAdministrasi_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JaringanJalan_2.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jangkauan1500m_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Jangkauan1000m_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Jangkauan500m_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_StasiunKeretaApi_6.set('fieldLabels', {'id': 'no label', 'Foto': 'no label', 'Stasiun': 'no label', });
lyr_StasiunKeretaApi_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});