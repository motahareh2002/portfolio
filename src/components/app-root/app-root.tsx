import { Component, h } from '@stencil/core';

@Component({
	tag: 'app-root',
	styleUrl: 'app-root.css',
	shadow: true,
})
export class AppRoot {
	render() {
		return (
			<div>
				<base-header></base-header>
				<main>
					<stencil-router>
						<stencil-route-switch scrollTopOffset={0}>
							<stencil-route url="/" component="page-home" exact={true} />
							<stencil-route url="/about" component="page-about" exact={true} />
						</stencil-route-switch>
					</stencil-router>
				</main>
				<base-footer></base-footer>
			</div>
		);
	}
}
