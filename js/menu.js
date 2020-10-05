$('#open-modal').click(function () {
    $('.navbar-collapse').collapse('hide');
});
$('#collapseLoginBt').click(function () {
    $('#collapseCadastro').collapse('hide');
    $('#collapseLogin').collapse('show');
});
$('#collapseCadastroBt').click(function () {
    $('#collapseCadastro').collapse('show');
    $('#collapseLogin').collapse('hide');
});

$(document).ready(function () {
    $('#collapseCadastroMobile').collapse('hide');
    $('#collapseLoginMobile').collapse('show');
});
$('#collapseLoginBtMobile').click(function () {
    $('#collapseCadastroMobile').collapse('hide');
    $('#collapseLoginMobile').collapse('show');
});
$('#collapseCadastroBtMobile').click(function () {
    $('#collapseLoginMobile').collapse('hide');
    $('#collapseCadastroMobile').collapse('show');
});