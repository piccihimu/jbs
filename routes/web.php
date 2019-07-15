<?php


//Frontend

Route::any('/','IndexController@index');
Route::any('/cat/view/{id}','IndexController@category');
Route::any('/product/view/{id}','IndexController@product');
Route::any('/single/view/{id}','IndexController@single');

Route::any('/about','IndexController@about');
Route::any('/terms','IndexController@terms');
Route::any('/tech','IndexController@tech');



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//Product Controller
Route::any('/product', 'ProductsController@index');
Route::any('/product/insert','ProductsController@AddProduct')->name('product_insert');
Route::any('/product/view','ProductsController@view');
Route::any('/product/delete/{id}','ProductsController@delete');


//Category Controller
Route::any('/category', 'CategoryController@index');
Route::any('/category/insert', 'CategoryController@CatInsert');
Route::any('/category/view', 'CategoryController@ViewCategory');
Route::any('/category/edit/{id}', 'CategoryController@Edit');
Route::any('/category/update', 'CategoryController@update');
Route::any('/category/delete/{id}', 'CategoryController@Delete')->name('Delete');


//Sub Category Controller
Route::any('/sub/category','SubcategoryController@AddSubCat');
Route::any('/sub/category/insert','SubcategoryController@index');
Route::any('/sub/category/view','SubcategoryController@SubView');
Route::any('/sub/category/update','SubcategoryController@update');
Route::any('/sub/category/delete/{id}', 'SubcategoryController@Delete')->name('Delete');


//Color Controller
Route::any('/color/add','ColorController@index');
Route::any('/color','ColorController@AddColor');
Route::any('/color/view','ColorController@ColorView')->name('ColorView');



//Technology Controller
Route::any('/technology/add','TechnologyController@index');
Route::any('/technology','TechnologyController@TechAdd');
Route::any('/technology/view','TechnologyController@TechView');

//
//Route::group(['middleware' => 'auth'], function () {
//    Route::any('/laravel-filemanager', '\UniSharp\LaravelFilemanager\Controllers\LfmController@show');
//    Route::any('/laravel-filemanager/upload', '\UniSharp\LaravelFilemanager\Controllers\UploadController@upload');
//    // list all lfm routes here...
//});