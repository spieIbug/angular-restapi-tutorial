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
                'ADD_FOURNISSEUR' : 'Ajout d\'un fournisseur',
                'ACCUEIL' : 'Accueil',
                'FOURNISSEURS' : 'Fournisseurs',
                'PRODUITS':'Produits',
                'FOURNISSEURS_CHARGE': 'Liste des fournisseurs chargée',
                'FOURNISSEUR': 'Fournisseur',
                'HELLO_WORLD' : 'Bonjour le monde!',
                'PHRASE_ANGULAR_TEST' : 'Test Angular avec les expressions, devrait afficher : ',
                'RECHERCHE' : 'Recherche',
                'LISTE_FOURNISSEURS':'Liste des fournisseurs',
                'NOM':'Nom',
                'ADRESSE':'Adresse',
                'VALIDER':'Valider',
                'ANNULER':'Annuler'
            },
            'EN' : {
                'LANGUE' : 'LANGUAGE',
                'ADD_FOURNISSEUR' : 'Add a provider',
                'ACCUEIL' : 'Home',
                'FOURNISSEURS' : 'Providers',
                'PRODUITS':'PRODUCTS',
                'FOURNISSEURS_CHARGE': 'List of providers loaded',
                'FOURNISSEUR': 'Provider',
                'HELLO_WORLD' : 'Hello, world!',
                'PHRASE_ANGULAR_TEST' : 'Angular test with Expressions should display ',
                'RECHERCHE' : 'Search',
                'LISTE_FOURNISSEURS':'Providers list',
                'NOM':'Name',
                'ADRESSE':'Address',
                'VALIDER':'Validate',
                'ANNULER':'Cancel'
            },
            'AR' : {
                'LANGUE' : 'اللغة',
                'ADD_FOURNISSEUR' : 'إضافة المورد',
                'ACCUEIL' : 'ترحيب',
                'FOURNISSEURS' : 'الموردين',
                'PRODUITS':'المنتجات',
                'FOURNISSEURS_CHARGE': 'تم تحميل قائمة الموردين',
                'FOURNISSEUR': 'المورد',
                'HELLO_WORLD' : 'مرحبا بالعالم',
                'PHRASE_ANGULAR_TEST' : 'اختبار Angular مع Expressions يجب عرض ',
                'RECHERCHE' : 'بحث',
                'LISTE_FOURNISSEURS':'قائمة الموردين',
                'NOM':'لقب',
                'ADRESSE':'العنوان',
                'VALIDER':'تثبيت',
                'ANNULER':'إلغاء'
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