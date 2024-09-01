import addContext from 'mochawesome/addContext'
import { Test, Runnable } from 'mocha'

Cypress.on('test:after:run', (test: Test, runnable: Runnable) => {
  if (test.state === 'failed') {
    const screenshotPath: string = `./screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`
    const videoPath: string = `./videos/${Cypress.spec.name}.mp4`

    addContext(
      { test },
      {
        title: 'Screenshot on failure',
        value: screenshotPath,
      },
    )

    addContext(
      { test },
      {
        title: 'Video',
        value: videoPath,
      },
    )
  }
})
