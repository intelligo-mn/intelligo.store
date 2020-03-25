import 'dart:async' show Future;
import 'package:flutter/services.dart' show rootBundle;
import 'dart:convert';
import 'package:marketgeek/models/address_model.dart';

Future<String> _loadProduct() async{
  return await rootBundle.loadString('assets/address.json');
}

Future loadAddress() async{

  String jsonAddress = await _loadProduct();
  final jsonResponce = json.decode(jsonAddress);
  Address address_model = new Address.fromJson(jsonResponce);

}