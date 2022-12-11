class Frontend {
    intern1Score = 68
    intern2Score = 70
    intern3Score = 82
    intern4Score = 76
    intern5Score = 54
    intern6Score = 92
    intern7Score = 70
    intern8Score = 45
    intern9Score = 65
    intern10Score = 86

    static Mean = (68 + 70 + 82 + 76 + 54 + 92 + 68 + 45 + 65 + 86) / 10
    static Median = (70 + 70) / 2
    static Range = 92 - 45 
    static Mode = 70

    FrontendScores () {
        console.log(this)
    }

    FrontendAverage() {
        console.log("The Average Score of Frontend Interns is 70.6")
    }

}


const frontend = new Frontend()

frontend.FrontendScores()
frontend.FrontendAverage()
console.log(Frontend)


class Backend {
    intern1Score = 60
    intern2Score = 75
    intern3Score = 83
    intern4Score = 75
    intern5Score = 53
    intern6Score = 78
    intern7Score = 46
    intern8Score = 49
    intern9Score = 84
    intern10Score = 85

    static Mean = (60 + 75 + 83 + 75 + 53 + 78 + 46 + 49 + 84 + 85) / 10

    BackendAverage() {
        console.log("The Average Score of Backend Interns is 68.8")
    }

    static StandardDeviation = (-8.8 * -8.8) / (10-1) + (6.2 * 6.2) / (10-1) + (14.2 * 14.2) / (10-1) + (6.2 * 6.2) / (10-1) + (-15.8 * -15.8) / (10-1) + (9.2 * 9.2) / (10-1) + (-22.8 * -22.8) / (10-1) + (-19.8 * -19.8) / (10-1) + (15.2 * 15.2) / (10-1) + (16.2 * 16.2) / (10-1)

    StandardDeviation() {
        console.log(`The  Standard Deviation of Backend Interns is 232.8444`)
    }

    BackendScores () {
        console.log(this)
    }
}

const backend = new Backend
backend.BackendScores()
backend.BackendAverage()
backend.StandardDeviation()

console.log(Backend)

class ProductDesign {
    intern1Score = 79
    intern2Score = 90
    intern3Score = 83
    intern4Score = 86
    intern5Score = 51
    intern6Score = 72
    intern7Score = 64
    intern8Score = 93
    intern9Score = 87
    intern10Score = 90

    static Mean = (79 + 90 + 83 + 86 + 51 + 72 + 64 + 93 + 87 + 90) / 10
    static Range = 93 - 51
    static Mode = 90
    ProductDesignAverage () {
        console.log("The Average Score of ProductDessign is 79.5")
    }
    static Variance = (-28.5 * -28.5 + -15.5 * -15.5 + -7.5 * -7.5 + -0.5 * -0.5 + 3.5 * 3.5 + 6.5 * 6.5 + 7.5 * 7.5 + 10.5 * 10.5 + 10.5 * 10.5 + 13.5 * 13.5) / (10-1)

    Variance () {
        console.log("The Variance of Product Design Interns is 180.2777")
    }

    ProductDesignScores () {
        console.log(this)
    }
}
const productdesign = new ProductDesign
productdesign.ProductDesignScores()
productdesign.ProductDesignAverage()
productdesign.Variance()

console.log(ProductDesign)



class Web3 {
    intern1Score =80
    intern2Score = 55
    intern3Score = 72
    intern4Score = 70
    intern5Score = 55
    intern6Score = 90
    intern7Score = 57
    intern8Score = 75
    intern9Score = 55
    intern10Score = 76

    static Mean = (80 + 55 + 72 + 70 + 55 + 90 + 57 + 75 + 55 + 76) / 10
    static Range = 90 - 55
    static Mode = 55
    static Median = (70 + 72) / 2
    static QuartileDeviation = (76 - 55) / 2

    Web3Average () {
        console.log("The Average Score of Web3 Interns is 68.5")
    }

    QuartileDeviation () {
        console.log("The Quartile Deviation of Web3 Interns is 10.5")
    }

    Web3Scores () {
        console.log(this)
    }
}

const web3 = new Web3
web3.Web3Scores()
web3.Web3Average()
web3.QuartileDeviation()
console.log(Web3)