test:
	@node node_modules/lab/bin/lab
test-cov:
	@node node_modules/lab/bin/lab -t 100 -v
test-cov-html:
	@node node_modules/lab/bin/lab -r html -o coverage.html
test-cov-tap:
	@node node_modules/lab/bin/lab -r tap -o coverage.tap
test-cov-json:
	@node node_modules/lab/bin/lab -r json -o coverage.json

.PHONY: test test-cov test-cov-html test-cov-tap test-cov-json
