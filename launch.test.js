import { test } from 'node:test';
import assert from 'node:assert/strict';
import { launchTimestamp, remainingAt, officialWebsite } from './launch-config.js';
test('Peru time',()=>assert.equal(new Date(launchTimestamp).toISOString(),'2026-11-01T15:00:00.000Z'));
test('countdown units',()=>assert.deepEqual(remainingAt(launchTimestamp-93784000),{days:1,hours:2,minutes:3,seconds:4,total:93784}));
test('exact launch',()=>assert.equal(remainingAt(launchTimestamp).total,0));
test('last millisecond',()=>assert.equal(remainingAt(launchTimestamp-1).total,1));
test('past launch',()=>assert.equal(remainingAt(launchTimestamp+1000).total,0));
test('destination',()=>assert.equal(officialWebsite,'https://wantherdev.github.io/Kusi-Qumir/'));
