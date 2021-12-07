const core = require('@actions/core');
const github = require('@actions/github');

core.info('Hello world!!!');

const token = core.getInput('GITHUB_TOKEN')
const octokit = github.getOctokit(token)
octokit.log.info('Octokit initialized')