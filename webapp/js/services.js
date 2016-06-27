/**
 * Created by yacmed on 27/06/2016.
 */
(function(){
    'use strict';
    angular.module('MainApp').factory('LangProvider', function(){
        return {
            set : function(key, value){
                return localStorage.setItem(key, value);
            },
            get : function(key){
                return localStorage.getItem(key);
            }
        }
    });
    angular.module('MainApp').factory('TranslationProvider', function(){
        var languages = {
            'FR' : {
                'LANGUE' : 'LANGUE',
                'ADD_FOURNISSEUR' : 'Ajout d\'un fournisseur'
            },
            'EN' : {
                'LANGUE' : 'LANGUAGE',
                'ADD_FOURNISSEUR' : 'Add a provider'
            },
            'AR' : {
                'LANGUE' : 'اللغة',
                'ADD_FOURNISSEUR' : 'إضافة المورد'
            }
        };
        return {
            init : function(){
                for(var language in languages){
                    localStorage.setItem(language, JSON.stringify(languages[language]));
                }
            },
            getTranslation : function (language) {
                return JSON.parse(localStorage.getItem(language));
            }
        }
    });
})();