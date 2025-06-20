import { TopNavigation } from '@cloudscape-design/components';

const i18nStrings = {
    overflowMenuTriggerText: 'More',
    overflowMenuTitleText: 'All',
};

export const TopNav = () => {
    return <div id="h" style={{ position: 'sticky', top: 0, zIndex: 1002 }}>
        <TopNavigation
            identity={{
                href: "#",
                title: "Arpit Nigam",
                logo: {
                    src: "/vite.svg",
                    alt: "Service"
                }
            }}
            i18nStrings={i18nStrings}
            utilities={[
                {
                    type: "button",
                    text: "Link",
                    href: "https://example.com/",
                    external: true,
                    externalIconAriaLabel: " (opens in a new tab)"
                },
                {
                    type: "button",
                    iconName: "notification",
                    title: "Notifications",
                    ariaLabel: "Notifications (unread)",
                    badge: true,
                    disableUtilityCollapse: false
                },
                {
                    type: "menu-dropdown",
                    iconName: "settings",
                    ariaLabel: "Settings",
                    title: "Settings",
                    items: [
                        {
                            id: "settings-org",
                            text: "Organizational settings"
                        },
                        {
                            id: "settings-project",
                            text: "Project settings"
                        }
                    ]
                },
                {
                    type: "menu-dropdown",
                    text: "Customer Name",
                    description: "email@example.com",
                    iconName: "user-profile",
                    items: [
                        { id: "profile", text: "Profile" },
                        { id: "preferences", text: "Preferences" },
                        { id: "security", text: "Security" },
                        {
                            id: "support-group",
                            text: "Support",
                            items: [
                                {
                                    id: "documentation",
                                    text: "Documentation",
                                    href: "#",
                                    external: true,
                                    externalIconAriaLabel:
                                        " (opens in new tab)"
                                },
                                { id: "support", text: "Support" },
                                {
                                    id: "feedback",
                                    text: "Feedback",
                                    href: "#",
                                    external: true,
                                    externalIconAriaLabel:
                                        " (opens in new tab)"
                                }
                            ]
                        },
                        { id: "signout", text: "Sign out" }
                    ]
                }]}
        />
    </div>
}