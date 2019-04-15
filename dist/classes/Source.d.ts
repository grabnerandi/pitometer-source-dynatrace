/**
 * Copyright 2019, Dynatrace
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as pitometer from 'pitometer';
import { IDynatraceOptions } from '@dynatrace/api-client';
export declare class Source implements pitometer.ISource {
    private dynatraceApi;
    private timeStart;
    private timeEnd;
    private context;
    constructor(config: IDynatraceOptions);
    setOptions(options: pitometer.IOptions): void;
    queryTimeseries(query: any): Promise<pitometer.ISourceResult[] | boolean>;
    querySmartscape(query: any): Promise<pitometer.ISourceResult[] | boolean>;
    private getParams;
    fetch(query: any): Promise<pitometer.ISourceResult[] | boolean>;
}
