var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASI_LN_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_1 = format_ADMINISTRASI_LN_25K_1.readFeatures(json_ADMINISTRASI_LN_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_1.addFeatures(features_ADMINISTRASI_LN_25K_1);
var lyr_ADMINISTRASI_LN_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASI_LN_25K_1, 
                style: style_ADMINISTRASI_LN_25K_1,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_1.png" /> ADMINISTRASI_LN_25K'
            });
var format_ADMINISTRASIDESA_AR_25K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_2 = format_ADMINISTRASIDESA_AR_25K_2.readFeatures(json_ADMINISTRASIDESA_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_2.addFeatures(features_ADMINISTRASIDESA_AR_25K_2);
var lyr_ADMINISTRASIDESA_AR_25K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_2, 
                style: style_ADMINISTRASIDESA_AR_25K_2,
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_0.png" /> Alangalang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_1.png" /> Angsana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_2.png" /> Anyar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_3.png" /> Argawana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_4.png" /> Asem<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_5.png" /> Awilega<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_6.png" /> Babakan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_7.png" /> Babakanjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_8.png" /> Bagendung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_9.png" /> Bakung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_10.png" /> Balekambang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_11.png" /> Balekencana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_12.png" /> Bandulu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_13.png" /> Bandung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_14.png" /> Banjarnegara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_15.png" /> Banjarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_16.png" /> Bantarpanjang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_17.png" /> Bantarwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_18.png" /> Bantarwaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_19.png" /> Banten<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_20.png" /> Banyuwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_21.png" /> Barengkok<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_22.png" /> Baros<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_23.png" /> Barosjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_24.png" /> Barugbug<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_25.png" /> Batukuda<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_26.png" /> Batukuwung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_27.png" /> Beberan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_28.png" /> Bendung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_29.png" /> Binangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_30.png" /> Binong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_31.png" /> Binuang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_32.png" /> Blokang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_33.png" /> Bojonegara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_34.png" /> Bojongcae<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_35.png" /> Bojongcatang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_36.png" /> Bojongmenteng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_37.png" /> Bojongnangka<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_38.png" /> Bojongpandan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_39.png" /> Bojot<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_40.png" /> Bolang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_41.png" /> Bugel<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_42.png" /> Bulakan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_43.png" /> Bumijaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_44.png" /> Bunihara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_45.png" /> Cadasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_46.png" /> Cakung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_47.png" /> Carenang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_48.png" /> Carenangudik<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_49.png" /> Cemplang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_50.png" /> Cerukcuk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_51.png" /> Ciagel<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_52.png" /> Cibodas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_53.png" /> Cibojong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_54.png" /> Cidahu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_55.png" /> Cigelam<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_56.png" /> Ciherang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_57.png" /> Cijeruk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_58.png" /> Cikande<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_59.png" /> Cikande Permai<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_60.png" /> Cikedung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_61.png" /> Cikerai<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_62.png" /> Cikeusal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_63.png" /> Cikolelet<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_64.png" /> Cikoneng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_65.png" /> Cikumbueun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_66.png" /> Cikuya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_67.png" /> Cilayang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_68.png" /> Cilayangguha<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_69.png" /> Cilowong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_70.png" /> Cimaung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_71.png" /> Cimentengjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_72.png" /> Cinangka<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_73.png" /> Cinoyong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_74.png" /> Ciomas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_75.png" /> Cipayung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_76.png" /> Cipete<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_77.png" /> Cirangkong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_78.png" /> Cireundeu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_79.png" /> Ciruas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_80.png" /> Cisaat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_81.png" /> Cisait<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_82.png" /> Cisalam<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_83.png" /> Cisangu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_84.png" /> Cisitu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_85.png" /> Citaman<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_86.png" /> Citasuk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_87.png" /> Citeras<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_88.png" /> Citerep<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_89.png" /> Ciwarna<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_90.png" /> Cokopsulanjana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_91.png" /> Curugagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_92.png" /> Curugbadak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_93.png" /> Curuggoong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_94.png" /> Curuglemo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_95.png" /> Curugsulanjana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_96.png" /> Dahu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_97.png" /> Damping<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_98.png" /> Domas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_99.png" /> Dringo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_100.png" /> Dukuh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_101.png" /> Gabus<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_102.png" /> Gandayasa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_103.png" /> Garut<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_104.png" /> Gedongdalem<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_105.png" /> Gelam<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_106.png" /> Gembor<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_107.png" /> Gemborudik<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_108.png" /> Gerem<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_109.png" /> Gosara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_110.png" /> Grogolindah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_111.png" /> Gunungkaler<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_112.png" /> Gunungsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_113.png" /> Gunungsugih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_114.png" /> Harjatani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_115.png" /> Harundang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_116.png" /> Jagabaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_117.png" /> Jawilan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_118.png" /> Jayanti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_119.png" /> Jenggot<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_120.png" /> Jeruktipis<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_121.png" /> Julang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_122.png" /> Junti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_123.png" /> Kadikaran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_124.png" /> Kaduagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_125.png" /> Kadubeureum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_126.png" /> Kaduela<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_127.png" /> Kadugenep<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_128.png" /> Kadukempong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_129.png" /> Kalitimbang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_130.png" /> Kalodran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_131.png" /> Kalumpang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_132.png" /> Kamanisan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_133.png" /> Kamaruton<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_134.png" /> Kamasan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_135.png" /> Kampungbaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_136.png" /> Kamuing<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_137.png" /> Kamurang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_138.png" /> Kandawati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_139.png" /> Karangkepuh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_140.png" /> Karangsuraga<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_141.png" /> Kareo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_142.png" /> Kasemen<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_143.png" /> Kaserangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_144.png" /> Kasunyatan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_145.png" /> Katulisan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_146.png" /> Kaungcaang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_147.png" /> Kawoyang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_148.png" /> Kebon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_149.png" /> Keboncau<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_150.png" /> Kebonratu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_151.png" /> Kebuyutan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_152.png" /> Kedaleman<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_153.png" /> Kedaung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_154.png" /> Kedung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_155.png" /> Kedungsoka<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_156.png" /> Kelapian<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_157.png" /> Kemanisan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_158.png" /> Kemuning<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_159.png" /> Kencanaharapan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_160.png" /> Kendayakan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_161.png" /> Kepandean<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_162.png" /> Kepuh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_163.png" /> Kepuren<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_164.png" /> Kertasana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_165.png" /> Ketos<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_166.png" /> Kiara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_167.png" /> Kibin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_168.png" /> Kolelet Wetan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_169.png" /> Koper<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_170.png" /> Kopo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_171.png" /> Koranji<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_172.png" /> Kosambironyok<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_173.png" /> Kragilan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_174.png" /> Kramatjati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_175.png" /> Kramatlaban<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_176.png" /> Kramatwatu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_177.png" /> Kresek<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_178.png" /> Kubangbaros<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_179.png" /> Kubangjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_180.png" /> Kubangpuji<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_181.png" /> Laban<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_182.png" /> Labangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_183.png" /> Labuan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_184.png" /> Lamaran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_185.png" /> Lebak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_186.png" /> Lebakdenok<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_187.png" /> Lebakkepuh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_188.png" /> Lebakwana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_189.png" /> Lebakwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_190.png" /> Lempuyang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_191.png" /> Leuwilimus<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_192.png" /> Linduk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_193.png" /> Lontar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_194.png" /> Luwuk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_195.png" /> Maja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_196.png" /> Majasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_197.png" /> Malabar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_198.png" /> Malanggah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_199.png" /> Mancak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_200.png" /> Mandalasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_201.png" /> Mandaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_202.png" /> Mander<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_203.png" /> Mangkunegara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_204.png" /> Mangunreja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_205.png" /> Margagiri<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_206.png" /> Margasana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_207.png" /> Margasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_208.png" /> Margatani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_209.png" /> Mekarbaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_210.png" /> Mekarjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_211.png" /> Mekarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_212.png" /> Melati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_213.png" /> Mongpok<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_214.png" /> Muncung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_215.png" /> Nagara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_216.png" /> Nagarapadang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_217.png" /> Namboilir<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_218.png" /> Namboudik<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_219.png" /> Nameng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_220.png" /> Nanggung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_221.png" /> Nyapah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_222.png" /> Nyompok<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_223.png" /> Onyam<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_224.png" /> Pabean<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_225.png" /> Pabuaran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_226.png" /> Padarincang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_227.png" /> Padasuka<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_228.png" /> Pagintungan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_229.png" /> Pakuncen<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_230.png" /> Pamarayan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_231.png" /> Pamengkang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_232.png" /> Pamong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_233.png" /> Panamping<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_234.png" /> Panancangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_235.png" /> Panaunganjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_236.png" /> Pancalaksana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_237.png" /> Pancanagara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_238.png" /> Pancaregang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_239.png" /> Panenjoan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_240.png" /> Pangawinan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_241.png" /> Panosogan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_242.png" /> Panunggulan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_243.png" /> Panyabrangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_244.png" /> Panyirapan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_245.png" /> Parakan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_246.png" /> Parigi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_247.png" /> Pasanggrahan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_248.png" /> Pasauran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_249.png" /> Pasirampo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_250.png" /> Pasirbuyut<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_251.png" /> Pasirgintung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_252.png" /> Pasirkembang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_253.png" /> Pasirlimus<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_254.png" /> Pasirwaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_255.png" /> Pasuluhan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_256.png" /> Patrasana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_257.png" /> Pedaleman<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_258.png" /> Pegadingan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_259.png" /> Pegandikan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_260.png" /> Pejaten<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_261.png" /> Pelamunan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_262.png" /> Pelawad<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_263.png" /> Pemanuk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_264.png" /> Pematang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_265.png" /> Pengampelan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_266.png" /> Pengarengan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_267.png" /> Penggalang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_268.png" /> Petir<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_269.png" /> Pondokahuru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_270.png" /> Pontang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_271.png" /> Pontanglegon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_272.png" /> Pringwulung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_273.png" /> Pudar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_274.png" /> Pulo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_275.png" /> Puloampel<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_276.png" /> Pulokencana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_277.png" /> Pulopanjang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_278.png" /> Purwadadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_279.png" /> Puser<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_280.png" /> Ragamasigit<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_281.png" /> Ramea<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_282.png" /> Rancasanggal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_283.png" /> Rancasumur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_284.png" /> Randakari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_285.png" /> Ranjeng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_286.png" /> Renged<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_287.png" /> Salira<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_288.png" /> Sambilawang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_289.png" /> Samparwadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_290.png" /> Sampir<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_291.png" /> Sanding<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_292.png" /> Sangiang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_293.png" /> Sasahan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_294.png" /> Sawahluhur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_295.png" /> Sayar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_296.png" /> Sentul<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_297.png" /> Serdang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_298.png" /> Seuat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_299.png" /> Seuatjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_300.png" /> Sidamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_301.png" /> Sigedong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_302.png" /> Siketug<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_303.png" /> Silebu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_304.png" /> Sinarmukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_305.png" /> Sindangheula<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_306.png" /> Sindangkarya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_307.png" /> Sindanglaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_308.png" /> Sindangmandi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_309.png" /> Sindangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_310.png" /> Singamerta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_311.png" /> Singarajan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_312.png" /> Siremen<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_313.png" /> Situterate<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_314.png" /> Solear<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_315.png" /> Songgomjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_316.png" /> Sujung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_317.png" /> Sukabares<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_318.png" /> Sukacai<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_319.png" /> Sukadalam<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_320.png" /> Sukadana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_321.png" /> Sukaindah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_322.png" /> Sukajadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_323.png" /> Sukajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_324.png" /> Sukalaba<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_325.png" /> Sukamaju<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_326.png" /> Sukamampir<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_327.png" /> Sukamanah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_328.png" /> Sukamenak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_329.png" /> Sukanagara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_330.png" /> Sukaraja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_331.png" /> Sukarame<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_332.png" /> Sukaratu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_333.png" /> Sukarena<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_334.png" /> Sukasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_335.png" /> Sukatani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_336.png" /> Sumuranja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_337.png" /> Suralaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_338.png" /> Susukan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_339.png" /> Talaga<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_340.png" /> Taman Baru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_341.png" /> Tamanbaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_342.png" /> Tamansari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_343.png" /> Tambak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_344.png" /> Tambangayam<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_345.png" /> Tambiluk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_346.png" /> Tamiang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_347.png" /> Tanara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_348.png" /> Tanjungmanis<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_349.png" /> Tanjungsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_350.png" /> Tapos<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_351.png" /> Tatakan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_352.png" /> Tegalbunder<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_353.png" /> Tegalmaja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_354.png" /> Tegalratu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_355.png" /> Tejamari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_356.png" /> Telagaluhur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_357.png" /> Telukterate<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_358.png" /> Tembong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_359.png" /> Tengkurak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_360.png" /> Tenjoayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_361.png" /> Teras<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_362.png" /> Terasbendung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_363.png" /> Terate<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_364.png" /> Teritih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_365.png" /> Terumbu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_366.png" /> Tinggar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_367.png" /> Tirem<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_368.png" /> Tirtayasa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_369.png" /> Tonjong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_370.png" /> Toyomerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_371.png" /> Tunjungteja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_372.png" /> Ujungtebu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_373.png" /> Ukirsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_374.png" /> Umbultanjung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_375.png" /> Umbultengah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_376.png" /> Undarandir<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_377.png" /> Walikukun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_378.png" /> Wanakerta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_379.png" /> Wanayasa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_380.png" /> Warakas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_381.png" /> Wargasara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_382.png" /> Waringin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_383.png" /> Waringinkurung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_384.png" /> Winong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_385.png" /> Wirana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_386.png" /> <br />'
        });
var format_JALAN_LN_25K_3 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_3 = format_JALAN_LN_25K_3.readFeatures(json_JALAN_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_3.addFeatures(features_JALAN_LN_25K_3);
var lyr_JALAN_LN_25K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_25K_3, 
                style: style_JALAN_LN_25K_3,
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_3.png" /> JALAN_LN_25K'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASI_LN_25K_1.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_2.setVisible(true);lyr_JALAN_LN_25K_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASI_LN_25K_1,lyr_ADMINISTRASIDESA_AR_25K_2,lyr_JALAN_LN_25K_3];
lyr_ADMINISTRASI_LN_25K_1.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_25K_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASI_LN_25K_1.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_LN_25K_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_1.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_LN_25K_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_25K_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});