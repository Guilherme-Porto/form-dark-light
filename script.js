const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => { // Ao clicar no icone moon, será alterado para o icone sun //
    const form = document.getElementById('login_form')
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark')
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark')
});