import queryString from 'query-string';
import { updateSessionInfo, isAuthenticated, sessionRoles } from 'services/session.jsx';
import { getViewComponent } from 'services/view-components.jsx';

/**
 * Sets the location change listener up.
 */
export function listenLocationChange() {

    history().listen(handleLocationChange);
    handleLocationChange(location());

}

function handleLocationChange(location) {

    var path = location.pathname;

    updateSessionInfo({
        callback: () => {

            if (path === '/') {
                changeLocation(isAuthenticated() ? defaultLocation() : "/login" );
            } else if (path === '/dummy' && isAuthenticated()) {
                changeLocation(defaultLocation());
            }

        }
    });

}

function defaultLocation() {

    if (sessionRoles()[0] == 'ROLE_USER') {
        return '/notes';
    } else if (sessionRoles()[0] == 'ROLE_ADMIN') {
        return '/dummy';
    }

}

/**
 * @returns {string} The current location path.
 */
export function currentLocationPath() {

    return location().pathname;

}

/**
 * Changes the current location path.
 * 
 * @param {string} path The new path.
 */
export function changeLocation(path) {

    if (path !== currentLocationPath()) {
        history().push(path);
    }

}

function history() {

    return getViewComponent('app').props.history;

}

function location() {

    return history().location;

}
