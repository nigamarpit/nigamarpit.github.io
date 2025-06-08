import './App.css'
import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Flashbar,
  Header,
  HelpPanel,
  Link,
  SideNavigation,
  // SplitPanel,
} from '@cloudscape-design/components';
import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.en';
import { TopNav } from './TopNav';

const LOCALE = 'en';

export const App = () => {
  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <TopNav />
      <AppLayout
        headerSelector="#h"
        breadcrumbs={
          <BreadcrumbGroup
            items={[
              { text: 'Home', href: '#' },
              { text: 'Service', href: '#' },
            ]}
          />
        }
        navigationOpen={false}
        navigation={
          <SideNavigation
            header={{
              href: '#',
              text: 'Service name',
            }}
            items={[{ type: 'link', text: `Page #1`, href: `#` }]}
          />
        }
        notifications={
          <Flashbar
            items={[
              // {
              //   type: 'info',
              //   dismissible: true,
              //   content: 'This is an info flash message.',
              //   id: 'message_1',
              // },
            ]}
          />
        }
        toolsOpen={false}
        tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
        maxContentWidth={Number.MAX_VALUE}
        content={
          <ContentLayout
            maxContentWidth={800}
            header={
              <Header variant="h1" info={<Link variant="info">Info</Link>}>
                Page Under Construction
              </Header>
            }
          >
            <Container
              header={
                <Header variant="h2" description="Working on it">
                  Coming Soon
                </Header>
              }
            >
              <div className="contentPlaceholder" />
            </Container>
          </ContentLayout>
        }
      // splitPanel={<SplitPanel header="Split panel header">Split panel content</SplitPanel>}
      />
    </I18nProvider>
  );
}
