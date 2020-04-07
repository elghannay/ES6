let team = {
    members: ['jane', 'mohamed'],
    teamName: 'team squad',
    teamSummaryOne: function () {
        return this.members.map(member => `${member} is on ${this.teamName}`);
    },
    // both lines below produces an error.
    teamSummary: () => this.members.map(member => `${member} is on ${this.teamName}`),

    teamSummaryTwo: function () {
        return this.members.map(function (member) { return `${member} is on ${this.teamName}` })
    }
}

team.teamSummaryOne();