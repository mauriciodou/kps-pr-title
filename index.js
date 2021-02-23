const core = require('@actions/core');

try {
    const branchName = core.getInput('ref').split('-')[1];
    console.log(`Branch name: ${branchName}`);
    const title = branchName.charAt(0).toUpperCase() + branchName.slice(1).toLowerCase();
    core.setOutput('title', title);
} catch (error) {
    core.setFailed(error.message);
}
