/**
 * @module
 * @description
 * This module is used for handling user input, by defining and building a {@link ControlGroup} that
 * consists of
 * {@link Control} objects, and mapping them onto the DOM. {@link Control} objects can then be used
 * to read information
 * from the form DOM elements.
 *
 * This module is not included in the `angular2` module; you must import the forms module
 * explicitly.
 *
 */
export { AbstractControl, Control, ControlGroup, ControlArray } from './forms/model';
export { AbstractControlDirective } from './forms/directives/abstract_control_directive';
export { ControlContainer } from './forms/directives/control_container';
export { NgControlName } from './forms/directives/ng_control_name';
export { NgFormControl } from './forms/directives/ng_form_control';
export { NgModel } from './forms/directives/ng_model';
export { NgControl } from './forms/directives/ng_control';
export { NgControlGroup } from './forms/directives/ng_control_group';
export { NgFormModel } from './forms/directives/ng_form_model';
export { NgForm } from './forms/directives/ng_form';
export { NG_VALUE_ACCESSOR } from './forms/directives/control_value_accessor';
export { DefaultValueAccessor } from './forms/directives/default_value_accessor';
export { NgControlStatus } from './forms/directives/ng_control_status';
export { CheckboxControlValueAccessor } from './forms/directives/checkbox_value_accessor';
export { NgSelectOption, SelectControlValueAccessor } from './forms/directives/select_control_value_accessor';
export { FORM_DIRECTIVES, RadioButtonState } from './forms/directives';
export { NG_VALIDATORS, NG_ASYNC_VALIDATORS, Validators } from './forms/validators';
export { RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator } from './forms/directives/validators';
export { FormBuilder } from './forms/form_builder';
import { FormBuilder } from './forms/form_builder';
import { RadioControlRegistry } from './forms/directives/radio_control_value_accessor';
import { CONST_EXPR } from 'angular2/src/facade/lang';
/**
 * Shorthand set of providers used for building Angular forms.
 *
 * ### Example
 *
 * ```typescript
 * bootstrap(MyApp, [FORM_PROVIDERS]);
 * ```
 */
export const FORM_PROVIDERS = CONST_EXPR([FormBuilder, RadioControlRegistry]);
/**
 * See {@link FORM_PROVIDERS} instead.
 *
 * @deprecated
 */
export const FORM_BINDINGS = FORM_PROVIDERS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWxSY0wwMWd1LnRtcC9hbmd1bGFyMi9zcmMvY29tbW9uL2Zvcm1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILFNBQVEsZUFBZSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxRQUFPLGVBQWUsQ0FBQztBQUVuRixTQUFRLHdCQUF3QixRQUFPLCtDQUErQyxDQUFDO0FBRXZGLFNBQVEsZ0JBQWdCLFFBQU8sc0NBQXNDLENBQUM7QUFDdEUsU0FBUSxhQUFhLFFBQU8sb0NBQW9DLENBQUM7QUFDakUsU0FBUSxhQUFhLFFBQU8sb0NBQW9DLENBQUM7QUFDakUsU0FBUSxPQUFPLFFBQU8sNkJBQTZCLENBQUM7QUFDcEQsU0FBUSxTQUFTLFFBQU8sK0JBQStCLENBQUM7QUFDeEQsU0FBUSxjQUFjLFFBQU8scUNBQXFDLENBQUM7QUFDbkUsU0FBUSxXQUFXLFFBQU8sa0NBQWtDLENBQUM7QUFDN0QsU0FBUSxNQUFNLFFBQU8sNEJBQTRCLENBQUM7QUFDbEQsU0FBOEIsaUJBQWlCLFFBQU8sMkNBQTJDLENBQUM7QUFDbEcsU0FBUSxvQkFBb0IsUUFBTywyQ0FBMkMsQ0FBQztBQUMvRSxTQUFRLGVBQWUsUUFBTyxzQ0FBc0MsQ0FBQztBQUNyRSxTQUFRLDRCQUE0QixRQUFPLDRDQUE0QyxDQUFDO0FBQ3hGLFNBQ0UsY0FBYyxFQUNkLDBCQUEwQixRQUNyQixrREFBa0QsQ0FBQztBQUMxRCxTQUFRLGVBQWUsRUFBRSxnQkFBZ0IsUUFBTyxvQkFBb0IsQ0FBQztBQUNyRSxTQUFRLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLFFBQU8sb0JBQW9CLENBQUM7QUFDbEYsU0FDRSxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixnQkFBZ0IsUUFFWCwrQkFBK0IsQ0FBQztBQUN2QyxTQUFRLFdBQVcsUUFBTyxzQkFBc0IsQ0FBQztPQUMxQyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQjtPQUN6QyxFQUFDLG9CQUFvQixFQUFDLE1BQU0saURBQWlEO09BQzdFLEVBQU8sVUFBVSxFQUFDLE1BQU0sMEJBQTBCO0FBRXpEOzs7Ozs7OztHQVFHO0FBQ0gsT0FBTyxNQUFNLGNBQWMsR0FBVyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0FBRXRGOzs7O0dBSUc7QUFDSCxPQUFPLE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIG1vZHVsZSBpcyB1c2VkIGZvciBoYW5kbGluZyB1c2VyIGlucHV0LCBieSBkZWZpbmluZyBhbmQgYnVpbGRpbmcgYSB7QGxpbmsgQ29udHJvbEdyb3VwfSB0aGF0XG4gKiBjb25zaXN0cyBvZlxuICoge0BsaW5rIENvbnRyb2x9IG9iamVjdHMsIGFuZCBtYXBwaW5nIHRoZW0gb250byB0aGUgRE9NLiB7QGxpbmsgQ29udHJvbH0gb2JqZWN0cyBjYW4gdGhlbiBiZSB1c2VkXG4gKiB0byByZWFkIGluZm9ybWF0aW9uXG4gKiBmcm9tIHRoZSBmb3JtIERPTSBlbGVtZW50cy5cbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGBhbmd1bGFyMmAgbW9kdWxlOyB5b3UgbXVzdCBpbXBvcnQgdGhlIGZvcm1zIG1vZHVsZVxuICogZXhwbGljaXRseS5cbiAqXG4gKi9cbmV4cG9ydCB7QWJzdHJhY3RDb250cm9sLCBDb250cm9sLCBDb250cm9sR3JvdXAsIENvbnRyb2xBcnJheX0gZnJvbSAnLi9mb3Jtcy9tb2RlbCc7XG5cbmV4cG9ydCB7QWJzdHJhY3RDb250cm9sRGlyZWN0aXZlfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvYWJzdHJhY3RfY29udHJvbF9kaXJlY3RpdmUnO1xuZXhwb3J0IHtGb3JtfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvZm9ybV9pbnRlcmZhY2UnO1xuZXhwb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvY29udHJvbF9jb250YWluZXInO1xuZXhwb3J0IHtOZ0NvbnRyb2xOYW1lfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9uYW1lJztcbmV4cG9ydCB7TmdGb3JtQ29udHJvbH0gZnJvbSAnLi9mb3Jtcy9kaXJlY3RpdmVzL25nX2Zvcm1fY29udHJvbCc7XG5leHBvcnQge05nTW9kZWx9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9uZ19tb2RlbCc7XG5leHBvcnQge05nQ29udHJvbH0gZnJvbSAnLi9mb3Jtcy9kaXJlY3RpdmVzL25nX2NvbnRyb2wnO1xuZXhwb3J0IHtOZ0NvbnRyb2xHcm91cH0gZnJvbSAnLi9mb3Jtcy9kaXJlY3RpdmVzL25nX2NvbnRyb2xfZ3JvdXAnO1xuZXhwb3J0IHtOZ0Zvcm1Nb2RlbH0gZnJvbSAnLi9mb3Jtcy9kaXJlY3RpdmVzL25nX2Zvcm1fbW9kZWwnO1xuZXhwb3J0IHtOZ0Zvcm19IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcy9uZ19mb3JtJztcbmV4cG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvZGVmYXVsdF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge05nQ29udHJvbFN0YXR1c30gZnJvbSAnLi9mb3Jtcy9kaXJlY3RpdmVzL25nX2NvbnRyb2xfc3RhdHVzJztcbmV4cG9ydCB7Q2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9mb3Jtcy9kaXJlY3RpdmVzL2NoZWNrYm94X3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7XG4gIE5nU2VsZWN0T3B0aW9uLFxuICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvclxufSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvc2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtGT1JNX0RJUkVDVElWRVMsIFJhZGlvQnV0dG9uU3RhdGV9IGZyb20gJy4vZm9ybXMvZGlyZWN0aXZlcyc7XG5leHBvcnQge05HX1ZBTElEQVRPUlMsIE5HX0FTWU5DX1ZBTElEQVRPUlMsIFZhbGlkYXRvcnN9IGZyb20gJy4vZm9ybXMvdmFsaWRhdG9ycyc7XG5leHBvcnQge1xuICBSZXF1aXJlZFZhbGlkYXRvcixcbiAgTWluTGVuZ3RoVmFsaWRhdG9yLFxuICBNYXhMZW5ndGhWYWxpZGF0b3IsXG4gIFBhdHRlcm5WYWxpZGF0b3IsXG4gIFZhbGlkYXRvclxufSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvdmFsaWRhdG9ycyc7XG5leHBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tICcuL2Zvcm1zL2Zvcm1fYnVpbGRlcic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tICcuL2Zvcm1zL2Zvcm1fYnVpbGRlcic7XG5pbXBvcnQge1JhZGlvQ29udHJvbFJlZ2lzdHJ5fSBmcm9tICcuL2Zvcm1zL2RpcmVjdGl2ZXMvcmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge1R5cGUsIENPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbi8qKlxuICogU2hvcnRoYW5kIHNldCBvZiBwcm92aWRlcnMgdXNlZCBmb3IgYnVpbGRpbmcgQW5ndWxhciBmb3Jtcy5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGJvb3RzdHJhcChNeUFwcCwgW0ZPUk1fUFJPVklERVJTXSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IEZPUk1fUFJPVklERVJTOiBUeXBlW10gPSBDT05TVF9FWFBSKFtGb3JtQnVpbGRlciwgUmFkaW9Db250cm9sUmVnaXN0cnldKTtcblxuLyoqXG4gKiBTZWUge0BsaW5rIEZPUk1fUFJPVklERVJTfSBpbnN0ZWFkLlxuICpcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBGT1JNX0JJTkRJTkdTID0gRk9STV9QUk9WSURFUlM7XG4iXX0=