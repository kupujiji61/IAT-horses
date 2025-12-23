define(['pipAPI','./iat10_ru.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
                name : 'Башкирский',
                title : {
                    media : { word : 'Башкирский' },
                    css   : { color:'#31940F','font-size':'1.8em' },
                    height: 4
                },
                stimulusMedia : [
                    { word: 'Башкортостан' },
                    { word: 'Сабантуй' },
                    { word: 'Бешбармак' },
                    { word: 'Урал-Батыр' },
                    { word: 'Уфа' },
                    { word: 'Агидель' },
                    { word: 'Бешмет' },
                    { word: 'Курай' }
                ],
                stimulusCss : { color:'#31940F','font-size':'2.3em' }
            },

            // Таргет 2: Русский
            category2 : {
                name : 'Русский',
                title : {
                    media : { word : 'Русский' },
                    css   : { color:'#31940F','font-size':'1.8em' },
                    height: 4
                },
                stimulusMedia : [
                    { word: 'Россия' },
                    { word: 'Масленица' },
                    { word: 'Пельмени' },
                    { word: 'Илья Муромец' },
                    { word: 'Москва' },
                    { word: 'Енисей' },
                    { word: 'Кокошник' },
                    { word: 'Балалайка' }
                ],
                stimulusCss : { color:'#31940F','font-size':'2.3em' }
            },

            // ───────── АТРИБУТЫ: ЛОШАДИ / КОРОВЫ (КАРТИНКИ) ─────────

            attribute1 : { // Лошади
                name : 'Лошади',
                title : {
                    media : { word : 'Лошади' },
                    css   : { color:'#0000FF','font-size':'1.8em' },
                    height: 4
                },
                stimulusMedia : [
                    { image: 'horse_1.jpg' },
                    { image: 'horse_2.jpg' },
                    { image: 'horse_3.jpg' },
                    { image: 'horse_4.jpg' },
                    { image: 'horse_5.jpg' },
                    { image: 'horse_6.jpg' },
                    { image: 'horse_7.jpg' },
                    { image: 'horse_8.jpg' }
                ],
                // CSS тут влияет в основном на размер рамки / подписи,
                // сами картинки по размеру задаются их файлами.
                stimulusCss : { color:'#0000FF','font-size':'2.3em' }
            },

            attribute2 : { // Коровы
                name : 'Коровы',
                title : {
                    media : { word : 'Коровы' },
                    css   : { color:'#0000FF','font-size':'1.8em' },
                    height: 4
                },
                stimulusMedia : [
                    { image: 'cow_1.jpg' },
                    { image: 'cow_2.jpg' },
                    { image: 'cow_3.jpg' },
                    { image: 'cow_4.jpg' },
                    { image: 'cow_5.jpg' },
                    { image: 'cow_6.jpg' },
                    { image: 'cow_7.jpg' },
                    { image: 'cow_8.jpg' }
                ],
                stimulusCss : { color:'#0000FF','font-size':'2.3em' }
            },
        
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch
    });
});

