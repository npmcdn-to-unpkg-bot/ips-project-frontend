angular.module("ipsProject").config(function($routeProvider){
        $routeProvider.when("/cadastro",{
            templateUrl:"view/cadastro.html" ,
            controller: "usuarioCtrl"                                   
        });

         $routeProvider.when("/login",{
            templateUrl:"view/login.html" ,
            controller: "usuarioCtrl"                        
        });

         $routeProvider.when("/categoria",{
            templateUrl:"view/categorias.html" ,
            controller: "categoriaCtrl"                        
        });

        $routeProvider.when("/cadastrocategoria",{
            templateUrl:"view/cadastroCategoria.html" ,
            controller: "categoriaCtrl"                        
        });

        $routeProvider.when("/ferramenta",{
            templateUrl:"view/ferramentas.html" ,
            controller: "ferramentaCtrl"                        
        });

         $routeProvider.when("/cadastroferramenta",{
            templateUrl:"view/cadastroFerramenta.html" ,
            controller: "ferramentaCtrl"                        
        });

         $routeProvider.when("/habilidade",{
            templateUrl:"view/habilidades.html" ,
            controller: "habilidadeCtrl"                        
        });

        $routeProvider.when("/cadastrohabilidade",{
            templateUrl:"view/cadastroHabilidade.html" ,
            controller: "habilidadeCtrl"                        
        });

        $routeProvider.when("/organizacao",{
            templateUrl:"view/organizacoes.html" ,
            controller: "organizacaoCtrl"                        
        });

        $routeProvider.when("/cadastroorganizacao",{
            templateUrl:"view/cadastroOrganizacao.html" ,
            controller: "organizacaoCtrl"                        
        });
        $routeProvider.otherwise({redirectTo: "/home"});      
});