module.exports = function () {
    const obterDados = (path, key) => {
        return require(path)[key]
    }

    return {
        login: obterDados('./login.json', 'login'),
        busca: obterDados('./busca.json', 'busca'),
    }
}
