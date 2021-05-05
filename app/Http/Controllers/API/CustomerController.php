<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Customer;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        return Customer::get();
    }

    public function store(Request $request)
    {
        $customer = Customer::create($request->all());

        return response()->json($customer, 201);
    }

    public function destory(Request $request, $id)
    {
        $customer = Customer::findOrFail($id);
        
        if ($customer->exists()) {
            $customer->delete();
        }

        return response()->json($customer,201);
    }

    public function update(Request $request, $id)
    {
        $customer = Customer::findOrFail($id);
        $customer->fill($request->all());
        if (!$customer->isDirty()) {
            return response()->noContent();
        }
        $customer->save();

        return response()->json($customer, 201);
    }

    public function show(Request $request, $id)
    {
        return Customer::findOrFail($id);
    }

    //TO-DO : where like 검색 구현(어드민)
    public function cutomerList(Request $request, $search)
    {
        
    }
}