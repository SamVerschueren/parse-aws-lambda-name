import test from 'ava';
import fn from './';

test('error', t => {
	t.throws(fn, 'Expected a string');
	t.notOk(fn(''));
	t.notOk(fn('arn:aws:lambda:eu-west-1:12345678:function:foo'));
});

test('short arn', t => {
	t.same(fn('foo'), {functionName: 'foo'});
	t.same(fn('foo:bar'), {functionName: 'foo', qualifier: 'bar'});
	t.same(fn('foo:1'), {functionName: 'foo', qualifier: '1'});
	t.same(fn('123456:1'), {functionName: '123456', qualifier: '1'});
});

test('full arn', t => {
	t.same(fn('arn:aws:lambda:eu-west-1:123456789876:function:foo'), {functionName: 'arn:aws:lambda:eu-west-1:123456789876:function:foo'});
	t.same(fn('arn:aws:lambda:eu-west-1:123456789876:function:foo:bar'), {functionName: 'arn:aws:lambda:eu-west-1:123456789876:function:foo', qualifier: 'bar'});
	t.same(fn('arn:aws:lambda:eu-west-1:123456789876:function:foo:1'), {functionName: 'arn:aws:lambda:eu-west-1:123456789876:function:foo', qualifier: '1'});
});

test('account arn', t => {
	t.same(fn('123456789876:foo'), {functionName: '123456789876:foo'});
	t.same(fn('123456789876:foo:bar'), {functionName: '123456789876:foo', qualifier: 'bar'});
	t.same(fn('123456789876:foo:1'), {functionName: '123456789876:foo', qualifier: '1'});
});
