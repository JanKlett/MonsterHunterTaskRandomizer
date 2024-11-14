const IntervalManager = {
    intervals: {},
    addInterval: function (interval, usecase="") {
        if (usecase !== "") {
            if (this.intervals[usecase] !== undefined) {
                this.clearUseCase(usecase);
            }
        }
        this.intervals[interval] = interval;
    },
    clearIntervals: function () {
        Object.keys(this.intervals).forEach((usecase) => clearInterval(this.intervals[usecase]));
        this.intervals = {};
    },
    clearUseCase: function (usecase) {
        if (this.intervals[usecase] !== undefined) {
            clearInterval(this.intervals[usecase]);
            this.intervals[usecase] = undefined;
        }
    },

};
export default IntervalManager;