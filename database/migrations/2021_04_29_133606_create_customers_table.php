<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{

    /**
     * up 메소드는 데이터베이스에 테이블, 컬럼, 인덱스를 추가하는데 사용되고, 이와 반대로 down 메소드는 up 메소드의 동작을 취소합니다.
     */

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('name');
            $table->string('department');
            $table->string('position');
            $table->string('addr1');
            $table->string('addr2');
            $table->string('telephone');
            $table->string('fax')->nullable();
            $table->string('hp');
            $table->string('email');
            $table->string('survey_category');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
