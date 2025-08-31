import { CommonActions, createNavigationContainerRef, StackActions } from "@react-navigation/native";


/**
 * Navigation ref, used to dispatch navigation actions
 */
export const navigationRef = createNavigationContainerRef()

/**
 * Navigate to a specific route
 * @param routeName Name of the route to navigate to
 * @param params Optional parameters to pass to the route
 */
export async function navigate(routeName: string, params?: object) {
    navigationRef.isReady()
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.navigate(routeName, params))
    }
}

/**
 * Replace the current route with a new one
 * @param routeName Name of the route to replace the current route with
 * @param params Optional parameters to pass to the new route
 */
export async function replace(routeName: string, params?: object) {
    navigationRef.isReady()
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.replace(routeName, params))
    }
}

/**
 * Reset the stack to a single route
 * @param routeName Name of the route to reset the stack to
 */
export async function resetAndNavigate(routeName: string) {
    navigationRef.isReady()
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.reset(
            {
                index: 0,
                routes: [{ name: routeName }]
            }
        ))
    }
}

/**
 * Go back to the previous route
 */
export async function goBack() {
    navigationRef.isReady()
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.goBack())
    }
}

/**
 * Push a new route onto the stack
 * @param routeName Name of the route to push onto the stack
 * @param params Optional parameters to pass to the new route
 */
export async function push(routeName: string, params?: object) {
    navigationRef.isReady()
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push(routeName, params))
    }
}

/**
 * Prepare the navigation by checking if the navigation ref is ready
 */
export async function prepareNavigation() {
    navigationRef.isReady()
}