<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if (User::all()->isEmpty()) {
			$user = User::create([
                'name' => "운영자",
                'email' => "medi@nomail.com",
                'password' => Hash::make("1234"),
                'department' => "개발팀",
                'position' => "CTO",
                'hp' => "010-0000-0000"
			]);
        }
    }
}
