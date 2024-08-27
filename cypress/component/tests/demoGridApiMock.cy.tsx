/* 
Example of using mock calls and component testing to validate components
This approach increases test speed significantly compared to e2e tests
*/
import { mount } from 'cypress/react18'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import gridData1 from '../../cypress/fixtures/gridData1.json'
import gridData2 from '../../cypress/fixtures/gridData2.json'
import { componentTokenString } from '../../code/helper/helper'
import Grid from '../../src/components/demoGrid'
import Grid2 from '../../src/components/demoGrid'
import { DemoGridFeature } from '../features/demoGrid'
import { Helper } from '../../code/helper/helper'
import { credentials } from '../../code/utils/credentials'
import { loginComponentUsers } from '../../code/utils/users'

const helper: Helper = new Helper()
const demoGrid: DemoGridFeature = new DemoGridFeature()

const mockCalls: any = {
  gridData1: data.grid,
  gridData2: data.grid,
}

const setupTest = (
  mockCall: string[],
  mockCall2: string[],
  componentToken: string,
  isAdmin: boolean,
) => {
  const client: any = new ApolloClient({
    uri: credentials.apolloUrl,
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: credentials.apolloUrl,
      headers: {
        authorization: `bearer ${componentToken}`,
      },
    }),
  })

  mount(
    <MemoryRouter initialEntries={[credentials.gridPath]}>
      <ApolloProvider client={client}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            <Route
              path={credentials.grid1}
              element={
                <Grid
                  gridData={mockCall}
                  isAdmin={isAdmin}
                  gridLoading={true}
                />
              }
            />
            <Route
              path={credentials.grid2}
              element={
                <ApolloProvider client={client}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid2
                      gridData={mockCall2}
                      isAdmin={isAdmin}
                      gridLoading={true}
                    />
                  </LocalizationProvider>
                </ApolloProvider>
              }
            />
          </Routes>
        </LocalizationProvider>
      </ApolloProvider>
    </MemoryRouter>,
  )
}

describe('In Preparation component tests, Build & Creatives ready', () => {
  beforeEach(() => {
    helper.mockComponentApi(
      credentials.apolloUrl,
      loginComponentUsers.admin.username,
      loginComponentUsers.admin.password,
      'gridData', // operation name of the api call
      gridData1,
    )
    helper.mockComponentApi(
      credentials.apolloUrl,
      loginComponentUsers.admin.username,
      loginComponentUsers.admin.password,
      'gridData', // operation name of the api call
      gridData2,
    )
    setupTest(
      mockCalls.gridData1,
      mockCalls.gridData2,
      componentTokenString,
      true,
    )
  })

  it('should display the grid component with data', () => {
    demoGrid.checkGridData()
  })
})
