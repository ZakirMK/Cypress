import { SauceDemo } from '../../code/sauceDemo/sauceDemo'

const sauceDemo: SauceDemo = new SauceDemo()

export class SauceDemoFeature {
    public visitSauceDemoPage = () => {
        sauceDemo.visitSauceDemo()
    }

    public visitHomePage = () => {
        sauceDemo.visitHomePage()
    }
}