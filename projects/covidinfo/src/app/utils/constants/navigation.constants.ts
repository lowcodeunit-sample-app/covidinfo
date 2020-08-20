import { NavLinkModel } from '../../models/nav-link.model';

// @dynamic
/**
 * @dynamic is used because this class contains static properties
 *
 * Used to build the items in the navigation menu
 */

export class NavigationConstants {
    public static readonly MENU_ITEMS: Array<NavLinkModel> = [
        { Label: 'Home', RouterURL: '/home', Icon: 'home'},
        { Label: 'Insurance Forms', RouterURL: '/reactiveForm', Icon: 'vertical_split'},
        { Label: 'Time Off Forms', RouterURL: '/tutorials', Icon: 'school'}
    ]
}