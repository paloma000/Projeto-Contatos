console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
let app = {

    Initialize: function() {
        console.log('Inicializar: function() {...');
        document.addEventListener('deviceready', app.DeviceReady, false);
        document.addEventListener('resume', app.ReturnScreen, false);
    },

    DeviceReady: function() {
        console.log('DeviceReady: function() {...');
        document.getElementById('select').addEventListener('click', app.SelectContact);
        document.getElementById('show').addEventListener('click', app.ShowContact);
        
    },

    ReturnScreen: function() {
        console.log('ReturnScreen: function() {...')
    },

    SelectContact: function() {
        console.log('SelectContact: function() {...');
        navigator.contacts.pickContact(
            function(c) {
                console.log('Contado Selecionado');
                console.log('c');
            }, 
            function(err){
                console.log('Contato Não Selecionado');
                console.log(err);
            }
        );
    },

}

app.Initialize();