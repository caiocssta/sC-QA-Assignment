export const loginUrl = 'https://demoqa.com/login/';

export const loginSelectors = {
    userNameInput: '[id="userName"]',
    passwordInput: '[id="password"]',
    loginButton: '[id="login"]',
    newUserButton: '[id="newUser"]'
}

export const registerSelectors = {
    firstNameInput: '[id="firstname"]',
    lastNameInput: '[id="lastname"]',
    userNameInput: '[id="userName"]',
    passwordInput: '[id="password"]',
    backToLoginButton: '[id="gotologin"]'
}

// NOTE: Some of the selectors doesn't fetches by the ID value since the webpage has more than one element with the same id (or doesn't even has an ID) :(
export const profileSelectors = {
    searchBooksInput: '[id="searchBox"]',
    logOutButton: 'Log out',
    goToStoreButton: '[id="gotoStore"]',
    deleteAllBooksButton: 'Delete All Books',
    modalOkButton: '[id="closeSmallModal-ok"]',
    usernameLabel: '[id="userName-label"]'
}

export const bookStoreSelectors = {
    bookStore: 'Book Store',
    gitPocketBook: '[id="see-book-Git Pocket Guide"]',
    addToCollectionButton: '[id="addNewRecordButton"]'
}