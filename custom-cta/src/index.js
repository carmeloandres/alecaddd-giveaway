/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
 import { registerBlockType } from '@wordpress/blocks';
 import { RichText} from  '@wordpress/block-editor';

 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * All files containing `style` keyword are bundled together. The code used
  * gets applied both to the front of your site and to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
 //import './style.scss';
 
 /**
  * Internal dependencies
  */
 //import Edit from './edit';
 //import save from './save';
 
 /**
  * Every block starts by registering a new block type definition.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
  */
 registerBlockType('alecadd/custom-cta', {

    // bilt-in attributes
    title: 'Call to Action',
    description:'Block to generate a custom Call to Action',
    icon: 'format-image',
    category:'widgets',

    // custom attributes
    attributes:{
        title:{
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        body:{
            type: 'string',
            source: 'html',
            selector: 'p',
        }
    },

    // custom functions

    // built-in functions

     /**
      * @see ./edit.js
      * edit: Edit,
      */
     // desesctruturamos attributes, y setAttributes de las propiedades del bloque para que esten 
     // disponibles en la función
     edit({attributes, setAttributes}) {
         const {
             title,
             body
         } = attributes;

         function onChangeTitle(newTitle){
             //console.log(event.target.value);
             // usamos la función setAttribute, propia de los bloques, para asignar el valor a una propiedad
             setAttributes({title: newTitle});
         }

         function onChangeBody(newBody){
            //console.log(event.target.value);
            // usamos la función setAttribute, propia de los bloques, para asignar el valor a una propiedad
            setAttributes({body: newBody});
        }

        return <>
                    <div class="cta-container">
                        <RichText 
                            key="editable"
                            tagName="h2"
                            placeholder="Your CTA Title"
                            value={ title}
                            onChange={ onChangeTitle}
                        />
                        <RichText 
                            key="editable"
                            tagName="p"
                            placeholder="Your CTA Description"
                            value={ body}
                            onChange={ onChangeBody}
                        />
                    </div>         
                 </>
     },
 
     /**
      * @see ./save.js
      * save,
      */
     save({attributes}) {
         return <p>Author Name:<i>{attributes.author}</i></p>;
     },
 });
 