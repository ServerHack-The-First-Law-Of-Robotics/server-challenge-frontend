import React from 'react';

//components
import { CssBaseline, GeistProvider } from '@geist-ui/core';
import { SearchPage } from 'pages/search';

import { attachLogger } from 'effector-logger/attach';
import { root } from 'effector-root';

attachLogger(root);

export const App: React.FC = () => {
	return (
		<GeistProvider>
			<CssBaseline />
			<SearchPage />
		</GeistProvider>
	);
};
