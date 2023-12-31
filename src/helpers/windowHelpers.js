export function setBodyToFixedHeight() {
    //adjust height to prevent body scroll
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
}

export function addEditorToNavigationHistoryWithBackHandler(setShowModalBoolean) {
    //add editor path to the navigation history
    const currentUrl = new URL(window.location.href);
    currentUrl.pathname += '/editor';
    currentUrl.pathname = currentUrl.pathname.replace('//', '/');
    history.pushState({ page: "editor" }, "editor", currentUrl.toString());

    //set back button to close the modal
    window.onpopstate = function (event) {
        if (confirm("You may have unsaved changes. Are you sure you want to leave?")) {
            setShowModalBoolean(false);
            //adjust height
            document.body.style.height = "auto";
            document.body.style.overflow = "auto";
        }
        else{
            const currentUrl = new URL(window.location.href);
            currentUrl.pathname += '/editor';
            currentUrl.pathname = currentUrl.pathname.replace('//', '/');
            history.pushState({ page: "editor" }, "editor", currentUrl.toString());
        }
    }
}