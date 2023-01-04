type Result1_01 = 'anne' extends string?1:2; // 1
type Result2_01 = 1 extends number?1:2; //1
type Result3_01 = true extends boolean?1:2; // 1
type Result4_01 = {name:'anne'} extends object?1:2; //1
type Result5_01 = {name:string} extends object?1:2; // 1
type Result6_01 = [] extends object?1:2; // 1


type Result7_01 = 1 extends 1|2|3?1:2; // 1
type Result8_01 = 'lin' extends "lin"|"bu"|"du"?1:2;
type Result9_01 = true extends true|false?1:2;
type Result10_01 = string extends string |number|boolean?1:2;

type Result11_01 = string extends String?1:2;
type Result12_01 = String extends {}?1:2;
type Result13_01 = {} extends object?1:2;
type Result14_01 = object extends Object?1:2;

type Result15_01 = {} extends object?1:2; // 1
type Result16_01 = object extends {}?1:2; // 1
type Result17_01 = object extends Object?1:2; // 1
type Result18_01 = Object extends object?1:2; // 1
type Result19_01 = Object extends {}?1:2; // 1

type Result20_01 = Object extends any?1:2;// 1
type Result21_01 = Object extends unknown?1:2;// 1
type Result22_01 = any extends Object?1:2;// 1|2
type Result23_01 = unknown extends Object?1:2;// 2

type Result25_01 = [number,number] extends number[]?1:2;// 1
type Result26_01 = [number,string] extends number[]?1:2;// 2
type Result27_01 = [number,string] extends (number|string)[]?1:2;// 1
type Result28_01 = [] extends number[]?1:2;// 1
type Result29_01 = [] extends unknown[]?1:2;// 1
type Result30_01 = number[] extends (number|string)[]?1:2;// 1
type Result31_01 = any[] extends number[]?1:2;// 1
type Result32_01 = unknown[] extends number[]?1:2;// 2
type Result33_01 = never[] extends unknown[]?1:2;// 1
