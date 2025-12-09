define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
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

            // Атрибут 1: Горы (пока как слова)
            attribute1 : {
                name : 'Горы',
                title : {
                    media : { word : 'Горы' },
                    css   : { color:'#0000FF','font-size':'1.8em' },
                    height: 4
                },
                stimulusMedia : [
                    { word: 'гора 1' },
                    { word: 'гора 2' },
                    { word: 'гора 3' },
                    { word: 'гора 4' },
                    { word: 'гора 5' },
                    { word: 'гора 6' },
                    { word: 'гора 7' },
                    { word: 'гора 8' }
                ],
                stimulusCss : { color:'#0000FF','font-size':'2.3em' }
            },

            // Атрибут 2: Болота (пока как слова)
            attribute2 : {
                name : 'Болота',
                title : {
                    media : { word : 'Болота' },
                    css   : { color:'#0000FF','font-size':'1.8em' },
                    height: 4
                },
                stimulusMedia : [
                    { word: 'болото 1' },
                    { word: 'болото 2' },
                    { word: 'болото 3' },
                    { word: 'болото 4' },
                    { word: 'болото 5' },
                    { word: 'болото 6' },
                    { word: 'болото 7' },
                    { word: 'болото 8' }
                ],
                stimulusCss : { color:'#0000FF','font-size':'2.3em' }
            },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch
    });
});

