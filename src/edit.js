/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, AlignmentToolbar, BlockControls, InspectorControls, PanelColorSettings, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

const Edit = ( props ) => {
	const blockProps = useBlockProps();

	const {
		attributes: { content, alignment },
		className
	} = props;

	const thisYear = <time>© { (new Date().getFullYear()) }</time>;

	const onChangeContent = ( newContent ) => {
		props.setAttributes( { content: newContent } );
	};

	const onChangeAlignment = ( newAlignment ) => {
		props.setAttributes( {
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		} );
	};
	return (
		<div { ...blockProps }>
			{
				<BlockControls>
					<AlignmentToolbar
						value={ alignment }
						onChange={ onChangeAlignment }
					/>
				</BlockControls>
			}
			<div className={className} style={{textAlign: alignment}}>
				{thisYear}
				<RichText
					tagName="p"
					onChange={ onChangeContent }
					value={ content }
				/>
			</div>
		</div>
	);
}

export default Edit;
