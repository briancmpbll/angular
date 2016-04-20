'use strict';"use strict";
var core_1 = require('angular2/core');
var compiler_1 = require('angular2/compiler');
var parse5_adapter_1 = require('angular2/src/platform/server/parse5_adapter');
var animation_builder_1 = require('angular2/src/animate/animation_builder');
var animation_builder_mock_1 = require('angular2/src/mock/animation_builder_mock');
var directive_resolver_mock_1 = require('angular2/src/mock/directive_resolver_mock');
var view_resolver_mock_1 = require('angular2/src/mock/view_resolver_mock');
var mock_location_strategy_1 = require('angular2/src/mock/mock_location_strategy');
var location_strategy_1 = require('angular2/src/router/location/location_strategy');
var ng_zone_mock_1 = require('angular2/src/mock/ng_zone_mock');
var test_component_builder_1 = require('angular2/src/testing/test_component_builder');
var xhr_1 = require('angular2/src/compiler/xhr');
var utils_1 = require('angular2/src/testing/utils');
var compiler_2 = require('angular2/src/compiler/compiler');
var dom_tokens_1 = require('angular2/src/platform/dom/dom_tokens');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var api_1 = require('angular2/src/core/render/api');
var dom_renderer_1 = require('angular2/src/platform/dom/dom_renderer');
var shared_styles_host_1 = require('angular2/src/platform/dom/shared_styles_host');
var common_dom_1 = require('angular2/platform/common_dom');
var dom_events_1 = require('angular2/src/platform/dom/events/dom_events');
var lang_1 = require('angular2/src/facade/lang');
var utils_2 = require('angular2/src/testing/utils');
function initServerTests() {
    parse5_adapter_1.Parse5DomAdapter.makeCurrent();
    utils_1.BrowserDetection.setup();
}
/**
 * Default platform providers for testing.
 */
exports.TEST_SERVER_PLATFORM_PROVIDERS = lang_1.CONST_EXPR([
    core_1.PLATFORM_COMMON_PROVIDERS,
    new core_1.Provider(core_1.PLATFORM_INITIALIZER, { useValue: initServerTests, multi: true })
]);
function appDoc() {
    try {
        return dom_adapter_1.DOM.defaultDoc();
    }
    catch (e) {
        return null;
    }
}
/**
 * Default application providers for testing.
 */
exports.TEST_SERVER_APPLICATION_PROVIDERS = lang_1.CONST_EXPR([
    // TODO(julie): when angular2/platform/server is available, use that instead of making our own
    // list here.
    core_1.APPLICATION_COMMON_PROVIDERS,
    compiler_2.COMPILER_PROVIDERS,
    new core_1.Provider(dom_tokens_1.DOCUMENT, { useFactory: appDoc }),
    new core_1.Provider(dom_renderer_1.DomRootRenderer, { useClass: dom_renderer_1.DomRootRenderer_ }),
    new core_1.Provider(api_1.RootRenderer, { useExisting: dom_renderer_1.DomRootRenderer }),
    common_dom_1.EventManager,
    new core_1.Provider(common_dom_1.EVENT_MANAGER_PLUGINS, { useClass: dom_events_1.DomEventsPlugin, multi: true }),
    new core_1.Provider(xhr_1.XHR, { useClass: xhr_1.XHR }),
    new core_1.Provider(core_1.APP_ID, { useValue: 'a' }),
    new core_1.Provider(shared_styles_host_1.SharedStylesHost, { useExisting: shared_styles_host_1.DomSharedStylesHost }),
    shared_styles_host_1.DomSharedStylesHost,
    common_dom_1.ELEMENT_PROBE_PROVIDERS,
    new core_1.Provider(compiler_1.DirectiveResolver, { useClass: directive_resolver_mock_1.MockDirectiveResolver }),
    new core_1.Provider(compiler_1.ViewResolver, { useClass: view_resolver_mock_1.MockViewResolver }),
    utils_2.Log,
    test_component_builder_1.TestComponentBuilder,
    new core_1.Provider(core_1.NgZone, { useClass: ng_zone_mock_1.MockNgZone }),
    new core_1.Provider(location_strategy_1.LocationStrategy, { useClass: mock_location_strategy_1.MockLocationStrategy }),
    new core_1.Provider(animation_builder_1.AnimationBuilder, { useClass: animation_builder_mock_1.MockAnimationBuilder }),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1xOHJ3ZGxBYi50bXAvYW5ndWxhcjIvcGxhdGZvcm0vdGVzdGluZy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQVFPLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZCLHlCQUE4QyxtQkFBbUIsQ0FBQyxDQUFBO0FBRWxFLCtCQUErQiw2Q0FBNkMsQ0FBQyxDQUFBO0FBRTdFLGtDQUErQix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3hFLHVDQUFtQywwQ0FBMEMsQ0FBQyxDQUFBO0FBQzlFLHdDQUFvQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ2hGLG1DQUErQixzQ0FBc0MsQ0FBQyxDQUFBO0FBQ3RFLHVDQUFtQywwQ0FBMEMsQ0FBQyxDQUFBO0FBQzlFLGtDQUErQixnREFBZ0QsQ0FBQyxDQUFBO0FBQ2hGLDZCQUF5QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTFELHVDQUFtQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ2pGLG9CQUFrQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzlDLHNCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRTVELHlCQUFpQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2xFLDJCQUF1QixzQ0FBc0MsQ0FBQyxDQUFBO0FBQzlELDRCQUFrQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQzFELG9CQUEyQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzFELDZCQUFnRCx3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3pGLG1DQUFvRCw4Q0FBOEMsQ0FBQyxDQUFBO0FBRW5HLDJCQUlPLDhCQUE4QixDQUFDLENBQUE7QUFDdEMsMkJBQThCLDZDQUE2QyxDQUFDLENBQUE7QUFFNUUscUJBQXlCLDBCQUEwQixDQUFDLENBQUE7QUFFcEQsc0JBQWtCLDRCQUE0QixDQUFDLENBQUE7QUFFL0M7SUFDRSxpQ0FBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQix3QkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMzQixDQUFDO0FBRUQ7O0dBRUc7QUFDVSxzQ0FBOEIsR0FBMkMsaUJBQVUsQ0FBQztJQUMvRixnQ0FBeUI7SUFDekIsSUFBSSxlQUFRLENBQUMsMkJBQW9CLEVBQUUsRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztDQUM3RSxDQUFDLENBQUM7QUFFSDtJQUNFLElBQUksQ0FBQztRQUNILE1BQU0sQ0FBQyxpQkFBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUU7SUFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7QUFDSCxDQUFDO0FBRUQ7O0dBRUc7QUFDVSx5Q0FBaUMsR0FDMUMsaUJBQVUsQ0FBQztJQUNULDhGQUE4RjtJQUM5RixhQUFhO0lBQ2IsbUNBQTRCO0lBQzVCLDZCQUFrQjtJQUNsQixJQUFJLGVBQVEsQ0FBQyxxQkFBUSxFQUFFLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxDQUFDO0lBQzVDLElBQUksZUFBUSxDQUFDLDhCQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsK0JBQWdCLEVBQUMsQ0FBQztJQUMzRCxJQUFJLGVBQVEsQ0FBQyxrQkFBWSxFQUFFLEVBQUMsV0FBVyxFQUFFLDhCQUFlLEVBQUMsQ0FBQztJQUMxRCx5QkFBWTtJQUNaLElBQUksZUFBUSxDQUFDLGtDQUFxQixFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUFlLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQzdFLElBQUksZUFBUSxDQUFDLFNBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxTQUFHLEVBQUMsQ0FBQztJQUNsQyxJQUFJLGVBQVEsQ0FBQyxhQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLENBQUM7SUFDckMsSUFBSSxlQUFRLENBQUMscUNBQWdCLEVBQUUsRUFBQyxXQUFXLEVBQUUsd0NBQW1CLEVBQUMsQ0FBQztJQUNsRSx3Q0FBbUI7SUFDbkIsb0NBQXVCO0lBQ3ZCLElBQUksZUFBUSxDQUFDLDRCQUFpQixFQUFFLEVBQUMsUUFBUSxFQUFFLCtDQUFxQixFQUFDLENBQUM7SUFDbEUsSUFBSSxlQUFRLENBQUMsdUJBQVksRUFBRSxFQUFDLFFBQVEsRUFBRSxxQ0FBZ0IsRUFBQyxDQUFDO0lBQ3hELFdBQUc7SUFDSCw2Q0FBb0I7SUFDcEIsSUFBSSxlQUFRLENBQUMsYUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLHlCQUFVLEVBQUMsQ0FBQztJQUM1QyxJQUFJLGVBQVEsQ0FBQyxvQ0FBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2Q0FBb0IsRUFBQyxDQUFDO0lBQ2hFLElBQUksZUFBUSxDQUFDLG9DQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZDQUFvQixFQUFDLENBQUM7Q0FDakUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQVBQX0lELFxuICBOZ1pvbmUsXG4gIFByb3ZpZGVyLFxuICBQTEFURk9STV9DT01NT05fUFJPVklERVJTLFxuICBQTEFURk9STV9JTklUSUFMSVpFUixcbiAgQVBQTElDQVRJT05fQ09NTU9OX1BST1ZJREVSUyxcbiAgUmVuZGVyZXJcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZVJlc29sdmVyLCBWaWV3UmVzb2x2ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvbXBpbGVyJztcblxuaW1wb3J0IHtQYXJzZTVEb21BZGFwdGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vc2VydmVyL3BhcnNlNV9hZGFwdGVyJztcblxuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlcic7XG5pbXBvcnQge01vY2tBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvbW9jay9hbmltYXRpb25fYnVpbGRlcl9tb2NrJztcbmltcG9ydCB7TW9ja0RpcmVjdGl2ZVJlc29sdmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvbW9jay9kaXJlY3RpdmVfcmVzb2x2ZXJfbW9jayc7XG5pbXBvcnQge01vY2tWaWV3UmVzb2x2ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL3ZpZXdfcmVzb2x2ZXJfbW9jayc7XG5pbXBvcnQge01vY2tMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9zcmMvbW9jay9tb2NrX2xvY2F0aW9uX3N0cmF0ZWd5JztcbmltcG9ydCB7TG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9sb2NhdGlvbi9sb2NhdGlvbl9zdHJhdGVneSc7XG5pbXBvcnQge01vY2tOZ1pvbmV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL25nX3pvbmVfbW9jayc7XG5cbmltcG9ydCB7VGVzdENvbXBvbmVudEJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy90ZXN0aW5nL3Rlc3RfY29tcG9uZW50X2J1aWxkZXInO1xuaW1wb3J0IHtYSFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci94aHInO1xuaW1wb3J0IHtCcm93c2VyRGV0ZWN0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvdGVzdGluZy91dGlscyc7XG5cbmltcG9ydCB7Q09NUElMRVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvY29tcGlsZXInO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fdG9rZW5zJztcbmltcG9ydCB7RE9NfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyJztcbmltcG9ydCB7Um9vdFJlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZW5kZXIvYXBpJztcbmltcG9ydCB7RG9tUm9vdFJlbmRlcmVyLCBEb21Sb290UmVuZGVyZXJffSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9yZW5kZXJlcic7XG5pbXBvcnQge0RvbVNoYXJlZFN0eWxlc0hvc3QsIFNoYXJlZFN0eWxlc0hvc3R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vc2hhcmVkX3N0eWxlc19ob3N0JztcblxuaW1wb3J0IHtcbiAgRXZlbnRNYW5hZ2VyLFxuICBFVkVOVF9NQU5BR0VSX1BMVUdJTlMsXG4gIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTXG59IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2NvbW1vbl9kb20nO1xuaW1wb3J0IHtEb21FdmVudHNQbHVnaW59IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZXZlbnRzL2RvbV9ldmVudHMnO1xuXG5pbXBvcnQge0NPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmltcG9ydCB7TG9nfSBmcm9tICdhbmd1bGFyMi9zcmMvdGVzdGluZy91dGlscyc7XG5cbmZ1bmN0aW9uIGluaXRTZXJ2ZXJUZXN0cygpIHtcbiAgUGFyc2U1RG9tQWRhcHRlci5tYWtlQ3VycmVudCgpO1xuICBCcm93c2VyRGV0ZWN0aW9uLnNldHVwKCk7XG59XG5cbi8qKlxuICogRGVmYXVsdCBwbGF0Zm9ybSBwcm92aWRlcnMgZm9yIHRlc3RpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBURVNUX1NFUlZFUl9QTEFURk9STV9QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID0gQ09OU1RfRVhQUihbXG4gIFBMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlMsXG4gIG5ldyBQcm92aWRlcihQTEFURk9STV9JTklUSUFMSVpFUiwge3VzZVZhbHVlOiBpbml0U2VydmVyVGVzdHMsIG11bHRpOiB0cnVlfSlcbl0pO1xuXG5mdW5jdGlvbiBhcHBEb2MoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIERPTS5kZWZhdWx0RG9jKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIERlZmF1bHQgYXBwbGljYXRpb24gcHJvdmlkZXJzIGZvciB0ZXN0aW5nLlxuICovXG5leHBvcnQgY29uc3QgVEVTVF9TRVJWRVJfQVBQTElDQVRJT05fUFJPVklERVJTOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9XG4gICAgQ09OU1RfRVhQUihbXG4gICAgICAvLyBUT0RPKGp1bGllKTogd2hlbiBhbmd1bGFyMi9wbGF0Zm9ybS9zZXJ2ZXIgaXMgYXZhaWxhYmxlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIG1ha2luZyBvdXIgb3duXG4gICAgICAvLyBsaXN0IGhlcmUuXG4gICAgICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICAgICAgQ09NUElMRVJfUFJPVklERVJTLFxuICAgICAgbmV3IFByb3ZpZGVyKERPQ1VNRU5ULCB7dXNlRmFjdG9yeTogYXBwRG9jfSksXG4gICAgICBuZXcgUHJvdmlkZXIoRG9tUm9vdFJlbmRlcmVyLCB7dXNlQ2xhc3M6IERvbVJvb3RSZW5kZXJlcl99KSxcbiAgICAgIG5ldyBQcm92aWRlcihSb290UmVuZGVyZXIsIHt1c2VFeGlzdGluZzogRG9tUm9vdFJlbmRlcmVyfSksXG4gICAgICBFdmVudE1hbmFnZXIsXG4gICAgICBuZXcgUHJvdmlkZXIoRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCB7dXNlQ2xhc3M6IERvbUV2ZW50c1BsdWdpbiwgbXVsdGk6IHRydWV9KSxcbiAgICAgIG5ldyBQcm92aWRlcihYSFIsIHt1c2VDbGFzczogWEhSfSksXG4gICAgICBuZXcgUHJvdmlkZXIoQVBQX0lELCB7dXNlVmFsdWU6ICdhJ30pLFxuICAgICAgbmV3IFByb3ZpZGVyKFNoYXJlZFN0eWxlc0hvc3QsIHt1c2VFeGlzdGluZzogRG9tU2hhcmVkU3R5bGVzSG9zdH0pLFxuICAgICAgRG9tU2hhcmVkU3R5bGVzSG9zdCxcbiAgICAgIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTLFxuICAgICAgbmV3IFByb3ZpZGVyKERpcmVjdGl2ZVJlc29sdmVyLCB7dXNlQ2xhc3M6IE1vY2tEaXJlY3RpdmVSZXNvbHZlcn0pLFxuICAgICAgbmV3IFByb3ZpZGVyKFZpZXdSZXNvbHZlciwge3VzZUNsYXNzOiBNb2NrVmlld1Jlc29sdmVyfSksXG4gICAgICBMb2csXG4gICAgICBUZXN0Q29tcG9uZW50QnVpbGRlcixcbiAgICAgIG5ldyBQcm92aWRlcihOZ1pvbmUsIHt1c2VDbGFzczogTW9ja05nWm9uZX0pLFxuICAgICAgbmV3IFByb3ZpZGVyKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogTW9ja0xvY2F0aW9uU3RyYXRlZ3l9KSxcbiAgICAgIG5ldyBQcm92aWRlcihBbmltYXRpb25CdWlsZGVyLCB7dXNlQ2xhc3M6IE1vY2tBbmltYXRpb25CdWlsZGVyfSksXG4gICAgXSk7XG4iXX0=